#!/usr/bin/env bash
# One-shot Apple + GitHub setup for Apple-Actions CI (cert, profiles, ExportOptions, secrets).

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=lib/asc.sh
source "$SCRIPT_DIR/lib/asc.sh"

BUNDLE_IDS=()
BUNDLE_NAMES=()
PROFILE_TYPE="IOS_APP_STORE"
OUTPUT_DIR="./signing"
P12_PASSWORD=""
GITHUB_REPO=""
EXPORT_OPTIONS="ExportOptions.plist"
SKIP_GITHUB=0
SKIP_CERTIFICATE=0
HELP=0

usage() {
  cat <<'EOF'
Set up Apple signing + GitHub Actions secrets for App Store / TestFlight CI.

Prerequisites (portal, once):
  1. Create an App Store Connect API key (App Manager) and download AuthKey_*.p8
  2. Create the App Store Connect app record for your app

Usage:
  ./scripts/setup.sh \
    --bundle-id com.example.App \
    --name 'Example App' \
    --issuer-id 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
    --api-key-id 'XXXXXXXXXX' \
    --api-private-key-path ~/Downloads/AuthKey_XXXXXXXXXX.p8 \
    --p12-password 'choose-a-password' \
    --github-repo owner/name

Options:
  --bundle-id <id>              Bundle identifier (repeatable; required)
  --name <name>                 App ID display name for each --bundle-id, in order (required; alphanumeric + spaces)
  --issuer-id <id>              App Store Connect issuer ID (required)
  --api-key-id <id>             App Store Connect API key ID (required)
  --api-private-key-path <p>    Path to AuthKey_*.p8 (required)
  --profile-type <type>         Default: IOS_APP_STORE
  --output-dir <dir>            Signing artifact dir (default: ./signing)
  --p12-password <password>     Password for exported .p12 (required unless --skip-certificate)
  --github-repo <owner/name>    Configure GitHub vars/secrets (omit with --skip-github)
  --export-options <path>       ExportOptions.plist path (default: ExportOptions.plist)
  --skip-github                 Do not call gh
  --skip-certificate            Reuse existing certs/profiles only; still writes ExportOptions
  -h, --help

Canonical GitHub ENVs set by this script:
  vars.APPSTORE_ISSUER_ID
  vars.APPSTORE_API_KEY_ID
  secrets.APPSTORE_API_PRIVATE_KEY
  secrets.APPSTORE_CERTIFICATES_FILE_BASE64
  secrets.APPSTORE_CERTIFICATES_PASSWORD
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    -h|--help) HELP=1; shift ;;
    --bundle-id) BUNDLE_IDS+=("$2"); shift 2 ;;
    --name) BUNDLE_NAMES+=("$2"); shift 2 ;;
    --profile-type) PROFILE_TYPE="$2"; shift 2 ;;
    --output-dir) OUTPUT_DIR="$2"; shift 2 ;;
    --p12-password) P12_PASSWORD="$2"; shift 2 ;;
    --github-repo) GITHUB_REPO="$2"; shift 2 ;;
    --export-options) EXPORT_OPTIONS="$2"; shift 2 ;;
    --skip-github) SKIP_GITHUB=1; shift ;;
    --skip-certificate) SKIP_CERTIFICATE=1; shift ;;
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

[[ ${#BUNDLE_IDS[@]} -gt 0 ]] || asc_die "Missing required --bundle-id"
[[ ${#BUNDLE_NAMES[@]} -eq ${#BUNDLE_IDS[@]} ]] || \
  asc_die "Pass one --name per --bundle-id (got ${#BUNDLE_IDS[@]} bundle id(s) and ${#BUNDLE_NAMES[@]} name(s))"
if [[ "$SKIP_CERTIFICATE" -eq 0 && -z "$P12_PASSWORD" ]]; then
  asc_die "Missing --p12-password (or pass --skip-certificate)"
fi
if [[ "$SKIP_GITHUB" -eq 0 && -z "$GITHUB_REPO" ]]; then
  asc_die "Missing --github-repo (or pass --skip-github)"
fi

asc_require_cmds curl jq python3 openssl
asc_load_credentials

CRED_ARGS=(
  --issuer-id "$ASC_ISSUER_ID"
  --api-key-id "$ASC_KEY_ID"
  --api-private-key-path "$ASC_PRIVATE_KEY_PATH"
)

TEAM_ID=""
echo "==> Ensuring bundle IDs"
for i in "${!BUNDLE_IDS[@]}"; do
  bundle_id="${BUNDLE_IDS[$i]}"
  bundle_name="${BUNDLE_NAMES[$i]}"
  result="$("$SCRIPT_DIR/ensure-bundle-id.sh" \
    --bundle-id "$bundle_id" \
    --name "$bundle_name" \
    "${CRED_ARGS[@]}")"
  echo "$result"
  seed="$(tail -n1 <<<"$result" | awk '{print $2}')"
  if [[ -n "$seed" && -z "$TEAM_ID" ]]; then
    TEAM_ID="$seed"
  fi
done
[[ -n "$TEAM_ID" ]] || asc_die "Could not determine Team ID (seedId) from bundle IDs."
CERT_ID=""
P12_PATH="$OUTPUT_DIR/IOS_DISTRIBUTION.p12"
META_PATH="$OUTPUT_DIR/IOS_DISTRIBUTION.json"

if [[ "$SKIP_CERTIFICATE" -eq 0 ]]; then
  echo "==> Creating / reusing signing certificate"
  cert_out="$("$SCRIPT_DIR/create-signing-certificate.sh" \
    --certificate-type IOS_DISTRIBUTION \
    --output-dir "$OUTPUT_DIR" \
    --p12-password "$P12_PASSWORD" \
    --reuse \
    "${CRED_ARGS[@]}")"
  echo "$cert_out"
  CERT_ID="$(awk -F': ' '/Certificate id for create-provisioning-profile.sh:/{print $2}' <<<"$cert_out" | tail -n1)"
  [[ -n "$CERT_ID" ]] || CERT_ID="$(jq -r '.id // empty' "$META_PATH" 2>/dev/null || true)"
  [[ -n "$CERT_ID" ]] || asc_die "Could not determine certificate id."
else
  [[ -f "$META_PATH" ]] || asc_die "--skip-certificate requires $META_PATH"
  CERT_ID="$(jq -r '.id // empty' "$META_PATH")"
  [[ -n "$CERT_ID" ]] || asc_die "Existing $META_PATH is missing certificate id."
  echo "Using existing certificate id: $CERT_ID"
fi

echo "==> Creating / reusing provisioning profiles"
for bundle_id in "${BUNDLE_IDS[@]}"; do
  "$SCRIPT_DIR/create-provisioning-profile.sh" \
    --bundle-id "$bundle_id" \
    --profile-type "$PROFILE_TYPE" \
    --certificate-id "$CERT_ID" \
    "${CRED_ARGS[@]}"
done

echo "==> Writing ExportOptions.plist"
export_args=(--team-id "$TEAM_ID" --output "$EXPORT_OPTIONS" --profile-type "$PROFILE_TYPE")
for bundle_id in "${BUNDLE_IDS[@]}"; do
  export_args+=(--bundle-id "$bundle_id")
done
"$SCRIPT_DIR/generate-export-options.sh" "${export_args[@]}"

if [[ "$SKIP_GITHUB" -eq 0 ]]; then
  echo "==> Configuring GitHub repository $GITHUB_REPO"
  gh_args=(
    --github-repo "$GITHUB_REPO"
    "${CRED_ARGS[@]}"
  )
  if [[ -f "$P12_PATH" ]]; then
    gh_args+=(--p12-path "$P12_PATH")
  fi
  if [[ -n "$P12_PASSWORD" ]]; then
    gh_args+=(--p12-password "$P12_PASSWORD")
  fi
  "$SCRIPT_DIR/configure-github.sh" "${gh_args[@]}"
fi

echo
echo "Setup complete."
echo
echo "Still required manually:"
echo "  - App Store Connect app record for the primary bundle id (if not already created)"
echo "  - Xcode Release signing: Manual, PROVISIONING_PROFILE_SPECIFIER = '$(asc_profile_name "$PROFILE_TYPE" "${BUNDLE_IDS[0]}")' (and matching names for extensions)"
echo "  - Workflow steps using the canonical ENVs printed by configure-github.sh"
echo
echo "Artifacts:"
echo "  signing dir: $OUTPUT_DIR"
echo "  export options: $EXPORT_OPTIONS"
