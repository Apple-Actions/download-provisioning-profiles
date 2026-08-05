#!/usr/bin/env bash
# Generate an ExportOptions.plist for manual App Store Connect export.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=lib/asc.sh
source "$SCRIPT_DIR/lib/asc.sh"

BUNDLE_IDS=()
TEAM_ID=""
OUTPUT="ExportOptions.plist"
PROFILE_TYPE="IOS_APP_STORE"
METHOD="app-store-connect"
HELP=0

usage() {
  cat <<'EOF'
Generate ExportOptions.plist for manual signing / App Store export.

Usage:
  ./scripts/generate-export-options.sh --bundle-id com.example.App --team-id TEAMID [options]

Options:
  --bundle-id <id>       Bundle identifier (repeatable; required at least once)
  --team-id <id>         Apple Developer Team ID (required)
  --output <path>        Output path (default: ExportOptions.plist)
  --profile-type <type>  Used to derive profile names (default: IOS_APP_STORE)
  --method <method>      Export method (default: app-store-connect)
  -h, --help             Show this help

Profile names default to "AppStore <bundle-id>" for IOS_APP_STORE (same as
create-provisioning-profile.sh). Those names must match Xcode Release settings.
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    -h|--help) HELP=1; shift ;;
    --bundle-id) BUNDLE_IDS+=("$2"); shift 2 ;;
    --team-id) TEAM_ID="$2"; shift 2 ;;
    --output) OUTPUT="$2"; shift 2 ;;
    --profile-type) PROFILE_TYPE="$2"; shift 2 ;;
    --method) METHOD="$2"; shift 2 ;;
    *) asc_die "Unknown argument: $1" ;;
  esac
done

if [[ "$HELP" -eq 1 ]]; then
  usage
  exit 0
fi

[[ ${#BUNDLE_IDS[@]} -gt 0 ]] || asc_die "Missing required --bundle-id"
[[ -n "$TEAM_ID" ]] || asc_die "Missing required --team-id"

PROFILES_XML=""
for bundle_id in "${BUNDLE_IDS[@]}"; do
  profile_name="$(asc_profile_name "$PROFILE_TYPE" "$bundle_id")"
  PROFILES_XML+="		<key>${bundle_id}</key>
		<string>${profile_name}</string>
"
done

cat >"$OUTPUT" <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>method</key>
	<string>${METHOD}</string>
	<key>provisioningProfiles</key>
	<dict>
${PROFILES_XML}	</dict>
	<key>signingStyle</key>
	<string>manual</string>
	<key>teamID</key>
	<string>${TEAM_ID}</string>
</dict>
</plist>
EOF

echo "Wrote $OUTPUT"
echo "Ensure Xcode Release PROVISIONING_PROFILE_SPECIFIER matches the profile names above."
