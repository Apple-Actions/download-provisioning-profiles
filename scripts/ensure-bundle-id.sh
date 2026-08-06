#!/usr/bin/env bash
# Ensure an App ID / bundle identifier exists in App Store Connect.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=lib/asc.sh
source "$SCRIPT_DIR/lib/asc.sh"

BUNDLE_ID=""
BUNDLE_NAME=""
PLATFORM="IOS"
HELP=0

usage() {
  cat <<'EOF'
Ensure an App Store Connect bundle ID (App ID) exists.

Usage:
  ./scripts/ensure-bundle-id.sh \
    --bundle-id com.example.App \
    --name 'Example App' \
    --issuer-id 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
    --api-key-id 'XXXXXXXXXX' \
    --api-private-key-path ~/Downloads/AuthKey_XXXXXXXXXX.p8

Options:
  --bundle-id <id>              Bundle identifier (required)
  --name <name>                 Display name — alphanumeric and spaces only (required)
  --platform <platform>         IOS | MAC_OS | UNIVERSAL (default: IOS)
  --issuer-id <id>              App Store Connect issuer ID (required)
  --api-key-id <id>             App Store Connect API key ID (required)
  --api-private-key-path <p>    Path to AuthKey_*.p8 (required)
  -h, --help                    Show this help

Prints: <resource-id> <seedId/team-id> on success.
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    -h|--help) HELP=1; shift ;;
    --bundle-id) BUNDLE_ID="$2"; shift 2 ;;
    --name) BUNDLE_NAME="$2"; shift 2 ;;
    --platform) PLATFORM="$2"; shift 2 ;;
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

[[ -n "$BUNDLE_ID" ]] || asc_die "Missing required --bundle-id"
[[ -n "$BUNDLE_NAME" ]] || asc_die "Missing required --name (alphanumeric and spaces only; not the reverse-DNS bundle id)"

asc_require_cmds curl jq python3 openssl
asc_load_credentials

ENCODED_BUNDLE_ID="$(asc_urlencode "$BUNDLE_ID")"
asc_api_get "/v1/bundleIds?filter[identifier]=${ENCODED_BUNDLE_ID}&limit=200"

EXISTING_ID="$(
  printf '%s' "$ASC_API_BODY" | jq -r \
    --arg bundleId "$BUNDLE_ID" \
    '.data[] | select(.attributes.identifier == $bundleId) | .id' | head -n1
)"
EXISTING_SEED="$(
  printf '%s' "$ASC_API_BODY" | jq -r \
    --arg bundleId "$BUNDLE_ID" \
    '.data[] | select(.attributes.identifier == $bundleId) | .attributes.seedId // empty' | head -n1
)"

if [[ -n "$EXISTING_ID" && "$EXISTING_ID" != "null" ]]; then
  echo "Using existing bundle id '$BUNDLE_ID' (id: $EXISTING_ID, team: ${EXISTING_SEED:-unknown})."
  printf '%s %s\n' "$EXISTING_ID" "${EXISTING_SEED:-}"
  exit 0
fi

BODY="$(
  jq -n \
    --arg identifier "$BUNDLE_ID" \
    --arg name "$BUNDLE_NAME" \
    --arg platform "$PLATFORM" \
    '{
      data: {
        type: "bundleIds",
        attributes: {
          identifier: $identifier,
          name: $name,
          platform: $platform
        }
      }
    }'
)"

echo "Creating bundle id '$BUNDLE_ID'..."
asc_api_post "/v1/bundleIds" "$BODY"
CREATED_ID="$(asc_json_get '.data.id')"
CREATED_SEED="$(asc_json_get '.data.attributes.seedId // empty')"
echo "Created bundle id '$BUNDLE_ID' (id: $CREATED_ID, team: ${CREATED_SEED:-unknown})."
printf '%s %s\n' "$CREATED_ID" "${CREATED_SEED:-}"
