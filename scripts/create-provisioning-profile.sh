#!/usr/bin/env bash
# Create (or reuse) an App Store Connect provisioning profile and print a
# workflow step for apple-actions/download-provisioning-profiles.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=lib/asc.sh
source "$SCRIPT_DIR/lib/asc.sh"

BUNDLE_ID=""
PROFILE_TYPE="IOS_APP_STORE"
PROFILE_NAME=""
CERTIFICATE_IDS=()
RECREATE=0
WRITE_WORKFLOW=""
HELP=0

usage() {
  cat <<'EOF'
Create an App Store Connect provisioning profile for use with
apple-actions/download-provisioning-profiles.

Usage:
  ./scripts/create-provisioning-profile.sh \
    --bundle-id com.example.App \
    --issuer-id 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
    --api-key-id 'XXXXXXXXXX' \
    --api-private-key-path ~/Downloads/AuthKey_XXXXXXXXXX.p8 \
    [--profile-type IOS_APP_STORE]

Options:
  --bundle-id <id>              Bundle identifier (required)
  --issuer-id <id>              App Store Connect issuer ID (required)
  --api-key-id <id>             App Store Connect API key ID (required)
  --api-private-key-path <p>    Path to AuthKey_*.p8 (required)
  --profile-type <type>         Default: IOS_APP_STORE
  --name <name>                 Profile name (default: "<TypePrefix> <bundle-id>")
  --certificate-id <id>         Limit to certificate ID (repeatable)
  --recreate                    Delete matching profiles and create a new one
  --write-workflow <path>       Write the workflow YAML snippet to a file
  -h, --help                    Show this help

Supported profile types:
  IOS_APP_DEVELOPMENT, IOS_APP_STORE, IOS_APP_ADHOC, IOS_APP_INHOUSE,
  MAC_APP_DEVELOPMENT, MAC_APP_STORE, MAC_APP_DIRECT,
  TVOS_APP_DEVELOPMENT, TVOS_APP_STORE, TVOS_APP_ADHOC, TVOS_APP_INHOUSE,
  MAC_CATALYST_APP_DEVELOPMENT, MAC_CATALYST_APP_STORE, MAC_CATALYST_APP_DIRECT
EOF
}

profile_name_prefix() {
  case "$1" in
    IOS_APP_DEVELOPMENT) echo "Development" ;;
    IOS_APP_STORE) echo "AppStore" ;;
    IOS_APP_ADHOC) echo "AdHoc" ;;
    IOS_APP_INHOUSE) echo "InHouse" ;;
    MAC_APP_DEVELOPMENT) echo "MacDevelopment" ;;
    MAC_APP_STORE) echo "MacAppStore" ;;
    MAC_APP_DIRECT) echo "MacDirect" ;;
    TVOS_APP_DEVELOPMENT) echo "TVOSDevelopment" ;;
    TVOS_APP_STORE) echo "TVOSAppStore" ;;
    TVOS_APP_ADHOC) echo "TVOSAdHoc" ;;
    TVOS_APP_INHOUSE) echo "TVOSInHouse" ;;
    MAC_CATALYST_APP_DEVELOPMENT) echo "CatalystDevelopment" ;;
    MAC_CATALYST_APP_STORE) echo "CatalystAppStore" ;;
    MAC_CATALYST_APP_DIRECT) echo "CatalystDirect" ;;
    *) echo "$1" ;;
  esac
}

certificate_types_for_profile() {
  case "$1" in
    IOS_APP_DEVELOPMENT|TVOS_APP_DEVELOPMENT) echo "IOS_DEVELOPMENT,DEVELOPMENT" ;;
    IOS_APP_STORE|IOS_APP_ADHOC|IOS_APP_INHOUSE|TVOS_APP_STORE|TVOS_APP_ADHOC|TVOS_APP_INHOUSE)
      echo "IOS_DISTRIBUTION,DISTRIBUTION"
      ;;
    MAC_APP_DEVELOPMENT|MAC_CATALYST_APP_DEVELOPMENT) echo "MAC_APP_DEVELOPMENT,DEVELOPMENT" ;;
    MAC_APP_STORE|MAC_CATALYST_APP_STORE) echo "MAC_APP_DISTRIBUTION,DISTRIBUTION" ;;
    MAC_APP_DIRECT|MAC_CATALYST_APP_DIRECT)
      echo "DEVELOPER_ID_APPLICATION,DEVELOPER_ID_APPLICATION_G2"
      ;;
    *) asc_die "Unsupported profile type: $1" ;;
  esac
}

requires_devices() {
  [[ "$1" == *DEVELOPMENT* || "$1" == *ADHOC* ]]
}

device_platform_for_profile() {
  case "$1" in
    MAC_APP_* ) echo "MAC_OS" ;;
    IOS_*|TVOS_*|MAC_CATALYST_* ) echo "IOS" ;;
    *) echo "" ;;
  esac
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    -h|--help) HELP=1; shift ;;
    --bundle-id) BUNDLE_ID="$2"; shift 2 ;;
    --profile-type) PROFILE_TYPE="$2"; shift 2 ;;
    --name) PROFILE_NAME="$2"; shift 2 ;;
    --certificate-id) CERTIFICATE_IDS+=("$2"); shift 2 ;;
    --recreate) RECREATE=1; shift ;;
    --write-workflow) WRITE_WORKFLOW="$2"; shift 2 ;;
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
asc_require_cmds curl jq python3 openssl
asc_load_credentials

if [[ -z "$PROFILE_NAME" ]]; then
  PROFILE_NAME="$(profile_name_prefix "$PROFILE_TYPE") $BUNDLE_ID"
fi

echo "Looking up bundle id '$BUNDLE_ID'..."
ENCODED_BUNDLE_ID="$(
  python3 -c 'import urllib.parse,sys; print(urllib.parse.quote(sys.argv[1]))' "$BUNDLE_ID"
)"
asc_api_get "/v1/bundleIds?filter[identifier]=${ENCODED_BUNDLE_ID}&limit=200"
BUNDLE_RESOURCE_ID="$(
  printf '%s' "$ASC_API_BODY" | jq -r \
    --arg bundleId "$BUNDLE_ID" \
    '.data[] | select(.attributes.identifier == $bundleId) | .id' | head -n1
)"
[[ -n "$BUNDLE_RESOURCE_ID" && "$BUNDLE_RESOURCE_ID" != "null" ]] || \
  asc_die "No App ID / bundle id '$BUNDLE_ID' on this team. Create it with ./scripts/ensure-bundle-id.sh --bundle-id ... --name '...' (or in Certificates, Identifiers & Profiles → Identifiers)."

echo "Checking for existing profile '$PROFILE_NAME'..."
ENCODED_NAME="$(
  python3 -c 'import urllib.parse,sys; print(urllib.parse.quote(sys.argv[1]))' "$PROFILE_NAME"
)"
asc_api_get "/v1/profiles?filter[name]=${ENCODED_NAME}&filter[profileType]=${PROFILE_TYPE}&limit=200"

ACTIVE_ID="$(
  printf '%s' "$ASC_API_BODY" | jq -r \
    --arg name "$PROFILE_NAME" \
    --arg type "$PROFILE_TYPE" \
    '.data[]
     | select(.attributes.name == $name and .attributes.profileType == $type and .attributes.profileState == "ACTIVE")
     | .id' | head -n1
)"
MATCHING_IDS="$(
  printf '%s' "$ASC_API_BODY" | jq -r \
    --arg name "$PROFILE_NAME" \
    --arg type "$PROFILE_TYPE" \
    '.data[]
     | select(.attributes.name == $name and .attributes.profileType == $type)
     | .id'
)"

if [[ -n "$ACTIVE_ID" && "$RECREATE" -eq 0 ]]; then
  ACTIVE_UUID="$(
    printf '%s' "$ASC_API_BODY" | jq -r \
      --arg id "$ACTIVE_ID" \
      '.data[] | select(.id == $id) | .attributes.uuid // empty'
  )"
  echo "Using existing ACTIVE $PROFILE_TYPE profile '$PROFILE_NAME' (id: $ACTIVE_ID${ACTIVE_UUID:+, uuid: $ACTIVE_UUID})."
else
  if [[ -n "$MATCHING_IDS" ]]; then
    while IFS= read -r profile_id; do
      [[ -n "$profile_id" ]] || continue
      echo "Deleting existing profile $profile_id..."
      asc_api_delete "/v1/profiles/${profile_id}"
    done <<<"$MATCHING_IDS"
  fi

  CERT_TYPES="$(certificate_types_for_profile "$PROFILE_TYPE")"
  CERT_FILTER="$(
    python3 -c 'import urllib.parse,sys; print(urllib.parse.quote(sys.argv[1]))' "$CERT_TYPES"
  )"
  echo "Finding certificates ($CERT_TYPES)..."
  asc_api_get "/v1/certificates?filter[certificateType]=${CERT_FILTER}&limit=200"

  if [[ ${#CERTIFICATE_IDS[@]} -eq 0 ]]; then
    CERT_JSON="$(
      printf '%s' "$ASC_API_BODY" | jq -c \
        '[.data[] | select((.attributes.activated // true) == true)]'
    )"
  else
    CERT_JSON="$(
      printf '%s' "$ASC_API_BODY" | jq -c \
        --argjson allow "$(printf '%s\n' "${CERTIFICATE_IDS[@]}" | jq -R . | jq -s -c .)" \
        '[.data[]
          | select((.attributes.activated // true) == true)
          | select(.id as $id | $allow | index($id))]'
    )"
  fi
  CERT_COUNT="$(jq 'length' <<<"$CERT_JSON")"
  [[ "$CERT_COUNT" -gt 0 ]] || \
    asc_die "No active certificates found for profile type '$PROFILE_TYPE' (expected one of: ${CERT_TYPES//,/, })."

  DEVICE_RELATIONSHIP='{}'
  if requires_devices "$PROFILE_TYPE"; then
    PLATFORM="$(device_platform_for_profile "$PROFILE_TYPE")"
    DEVICE_QUERY="/v1/devices?filter[status]=ENABLED&limit=200"
    if [[ -n "$PLATFORM" ]]; then
      DEVICE_QUERY="${DEVICE_QUERY}&filter[platform]=${PLATFORM}"
    fi
    echo "Finding enabled devices..."
    asc_api_get "$DEVICE_QUERY"
    DEVICE_JSON="$(printf '%s' "$ASC_API_BODY" | jq -c '[.data[] | {type: "devices", id: .id}]')"
    DEVICE_COUNT="$(jq 'length' <<<"$DEVICE_JSON")"
    [[ "$DEVICE_COUNT" -gt 0 ]] || \
      asc_die "Profile type '$PROFILE_TYPE' requires devices, but none are enabled${PLATFORM:+ for platform '$PLATFORM'}."
    DEVICE_RELATIONSHIP="$(jq -n --argjson data "$DEVICE_JSON" '{devices: {data: $data}}')"
  fi

  BODY="$(
    jq -n \
      --arg name "$PROFILE_NAME" \
      --arg profileType "$PROFILE_TYPE" \
      --arg bundleId "$BUNDLE_RESOURCE_ID" \
      --argjson certificates "$(jq '[.[] | {type: "certificates", id: .id}]' <<<"$CERT_JSON")" \
      --argjson deviceRel "$DEVICE_RELATIONSHIP" \
      '{
        data: {
          type: "profiles",
          attributes: {
            name: $name,
            profileType: $profileType
          },
          relationships: ({
            bundleId: {data: {type: "bundleIds", id: $bundleId}},
            certificates: {data: $certificates}
          } + $deviceRel)
        }
      }'
  )"

  echo "Creating $PROFILE_TYPE profile '$PROFILE_NAME'..."
  asc_api_post "/v1/profiles" "$BODY"
  ACTIVE_ID="$(asc_json_get '.data.id')"
  ACTIVE_UUID="$(asc_json_get '.data.attributes.uuid // empty')"
  echo "Created $PROFILE_TYPE profile '$PROFILE_NAME' (id: $ACTIVE_ID${ACTIVE_UUID:+, uuid: $ACTIVE_UUID})."
fi

SNIPPET="$(cat <<EOF
- name: Download Provisioning Profiles
  uses: apple-actions/download-provisioning-profiles@v6
  with:
    bundle-id: '${BUNDLE_ID}'
    profile-type: '${PROFILE_TYPE}'
    issuer-id: \${{ vars.APPSTORE_ISSUER_ID }}
    api-key-id: \${{ vars.APPSTORE_API_KEY_ID }}
    api-private-key: \${{ secrets.APPSTORE_API_PRIVATE_KEY }}
EOF
)"

echo
echo "Workflow step:"
echo
echo "$SNIPPET"

if [[ -n "$WRITE_WORKFLOW" ]]; then
  printf '%s\n' "$SNIPPET" >"$WRITE_WORKFLOW"
  echo
  echo "Wrote workflow snippet to $WRITE_WORKFLOW"
fi
