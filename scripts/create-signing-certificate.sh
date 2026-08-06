#!/usr/bin/env bash
# Generate a signing private key + CSR, create an Apple certificate via the
# App Store Connect API, and optionally export a .p12 for import-codesign-certs.
#
# Note: App Store Connect API auth keys (AuthKey_*.p8) cannot be created via API.
# Create those once in the App Store Connect portal, then use them here.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=lib/asc.sh
source "$SCRIPT_DIR/lib/asc.sh"

CERTIFICATE_TYPE="IOS_DISTRIBUTION"
OUTPUT_DIR="./signing"
COMMON_NAME=""
P12_PASSWORD=""
HAS_P12_PASSWORD=0
HAS_NO_P12=0
REUSE=0
HELP=0

usage() {
  cat <<'EOF'
Generate a code-signing private key and create an Apple certificate.

Usage:
  ./scripts/create-signing-certificate.sh \
    --issuer-id 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
    --api-key-id 'XXXXXXXXXX' \
    --api-private-key-path ~/Downloads/AuthKey_XXXXXXXXXX.p8 \
    --p12-password '...'

  # Or skip .p12 export:
  ./scripts/create-signing-certificate.sh ... --no-p12

Options:
  --issuer-id <id>           App Store Connect issuer ID (required)
  --api-key-id <id>          App Store Connect API key ID (required)
  --api-private-key-path <p> Path to AuthKey_*.p8 (required)
  --p12-password <password>  Export a .p12 with this password (required unless --no-p12)
  --no-p12                   Do not export a .p12
  --certificate-type <type>  Default: IOS_DISTRIBUTION
  --output-dir <dir>         Where to write key/csr/cer/p12 (default: ./signing)
  --common-name <name>       CSR common name (default: based on certificate type)
  --reuse                    Reuse existing key/cert in --output-dir if present
  -h, --help                 Show this help

Exactly one of --p12-password or --no-p12 is required.

Common certificate types:
  IOS_DISTRIBUTION, IOS_DEVELOPMENT, DISTRIBUTION, DEVELOPMENT,
  MAC_APP_DISTRIBUTION, MAC_APP_DEVELOPMENT, DEVELOPER_ID_APPLICATION

This creates Apple signing certificates, not the App Store Connect API .p8 key.
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    -h|--help) HELP=1; shift ;;
    --certificate-type) CERTIFICATE_TYPE="$2"; shift 2 ;;
    --output-dir) OUTPUT_DIR="$2"; shift 2 ;;
    --common-name) COMMON_NAME="$2"; shift 2 ;;
    --p12-password) P12_PASSWORD="$2"; HAS_P12_PASSWORD=1; shift 2 ;;
    --no-p12) HAS_NO_P12=1; shift ;;
    --reuse) REUSE=1; shift ;;
    --issuer-id) ASC_ISSUER_ID="$2"; shift 2 ;;
    --api-key-id) ASC_KEY_ID="$2"; shift 2 ;;
    --api-private-key-path) ASC_PRIVATE_KEY_PATH="$2"; shift 2 ;;
    *) asc_die "Unknown argument: $1" ;;
  esac
done

if [[ "$HELP" -eq 1 ]]; then
  usage
  exit 0
fi

if [[ "$HAS_P12_PASSWORD" -eq 1 && "$HAS_NO_P12" -eq 1 ]]; then
  asc_die "Pass either --p12-password or --no-p12, not both"
fi
if [[ "$HAS_P12_PASSWORD" -eq 0 && "$HAS_NO_P12" -eq 0 ]]; then
  asc_die "Specify --p12-password <password> or --no-p12"
fi
if [[ "$HAS_P12_PASSWORD" -eq 1 && -z "$P12_PASSWORD" ]]; then
  asc_die "--p12-password must not be empty"
fi
WANT_P12=$HAS_P12_PASSWORD

asc_require_cmds curl jq openssl python3
asc_load_credentials

if [[ -z "$COMMON_NAME" ]]; then
  COMMON_NAME="$CERTIFICATE_TYPE"
fi

mkdir -p "$OUTPUT_DIR"
KEY_PATH="$OUTPUT_DIR/${CERTIFICATE_TYPE}.key"
CSR_PATH="$OUTPUT_DIR/${CERTIFICATE_TYPE}.csr"
CER_PATH="$OUTPUT_DIR/${CERTIFICATE_TYPE}.cer"
PEM_PATH="$OUTPUT_DIR/${CERTIFICATE_TYPE}.pem"
P12_PATH="$OUTPUT_DIR/${CERTIFICATE_TYPE}.p12"
META_PATH="$OUTPUT_DIR/${CERTIFICATE_TYPE}.json"

export_p12_if_requested() {
  if [[ "$WANT_P12" -ne 1 ]]; then
    echo "Skipping .p12 export (--no-p12)."
    return
  fi
  [[ -f "$KEY_PATH" && -f "$PEM_PATH" ]] || asc_die "Missing key/pem required to export p12."
  openssl pkcs12 -export \
    -inkey "$KEY_PATH" \
    -in "$PEM_PATH" \
    -out "$P12_PATH" \
    -passout "pass:${P12_PASSWORD}"
  P12_BASE64="$(base64 <"$P12_PATH" | tr -d '\n')"
  echo "  p12: $P12_PATH"
  echo
  echo "GitHub secret APPSTORE_CERTIFICATES_FILE_BASE64:"
  echo "$P12_BASE64"
  echo
  echo "GitHub secret APPSTORE_CERTIFICATES_PASSWORD: (the --p12-password you supplied)"
}

if [[ -f "$KEY_PATH" || -f "$META_PATH" ]]; then
  if [[ "$REUSE" -eq 1 && -f "$META_PATH" && -f "$KEY_PATH" && -f "$PEM_PATH" ]]; then
    CERT_ID="$(jq -r '.id // empty' "$META_PATH")"
    CERT_NAME="$(jq -r '.name // empty' "$META_PATH")"
    [[ -n "$CERT_ID" ]] || asc_die "Existing $META_PATH is missing certificate id."
    echo "Reusing certificate '$CERT_NAME' (id: $CERT_ID) from $OUTPUT_DIR"
    export_p12_if_requested
    echo "Certificate id for create-provisioning-profile.sh: $CERT_ID"
    exit 0
  fi
  asc_die "Refusing to overwrite existing key/cert in $OUTPUT_DIR (pass --reuse)."
fi

echo "Generating RSA private key and CSR..."
openssl req -new -newkey rsa:2048 -nodes \
  -keyout "$KEY_PATH" \
  -out "$CSR_PATH" \
  -subj "/CN=${COMMON_NAME}/O=Apple Actions/C=US"

CSR_CONTENT="$(cat "$CSR_PATH")"
BODY="$(
  jq -n \
    --arg certificateType "$CERTIFICATE_TYPE" \
    --arg csrContent "$CSR_CONTENT" \
    '{
      data: {
        type: "certificates",
        attributes: {
          certificateType: $certificateType,
          csrContent: $csrContent
        }
      }
    }'
)"

echo "Creating $CERTIFICATE_TYPE certificate via App Store Connect API..."
asc_api_post "/v1/certificates" "$BODY"

CERT_ID="$(asc_json_get '.data.id')"
CERT_NAME="$(asc_json_get '.data.attributes.name // empty')"
CERT_CONTENT="$(asc_json_get '.data.attributes.certificateContent // empty')"
[[ -n "$CERT_CONTENT" ]] || asc_die "API response did not include certificateContent."

printf '%s' "$CERT_CONTENT" | base64 -d >"$CER_PATH"
openssl x509 -inform DER -in "$CER_PATH" -out "$PEM_PATH"

jq -n \
  --arg id "$CERT_ID" \
  --arg name "$CERT_NAME" \
  --arg type "$CERTIFICATE_TYPE" \
  --arg key "$KEY_PATH" \
  --arg cer "$CER_PATH" \
  '{id: $id, name: $name, certificateType: $type, keyPath: $key, cerPath: $cer}' \
  >"$META_PATH"

echo "Created certificate '$CERT_NAME' (id: $CERT_ID)"
echo "  key: $KEY_PATH"
echo "  cer: $CER_PATH"
echo "  pem: $PEM_PATH"

export_p12_if_requested

echo
echo "Keep ${KEY_PATH} private. You will need it (or the .p12) to sign builds."
echo "Certificate id for create-provisioning-profile.sh: $CERT_ID"
