#!/usr/bin/env bash
# Set the canonical App Store GitHub Actions variables and secrets for a repo.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=lib/asc.sh
source "$SCRIPT_DIR/lib/asc.sh"

GITHUB_REPO=""
P12_PATH=""
P12_PASSWORD=""
HELP=0

usage() {
  cat <<'EOF'
Configure GitHub Actions variables/secrets used by Apple-Actions.

Sets:
  vars.APPSTORE_ISSUER_ID
  vars.APPSTORE_API_KEY_ID
  secrets.APPSTORE_API_PRIVATE_KEY
  secrets.APPSTORE_CERTIFICATES_FILE_BASE64   (if --p12-path given)
  secrets.APPSTORE_CERTIFICATES_PASSWORD     (if --p12-password given)

Usage:
  ./scripts/configure-github.sh \
    --github-repo owner/name \
    --issuer-id 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
    --api-key-id 'XXXXXXXXXX' \
    --api-private-key-path ~/Downloads/AuthKey_XXXXXXXXXX.p8 \
    [--p12-path path/to/cert.p12 --p12-password '...']

Options:
  --github-repo <owner/name>    Target GitHub repository (required)
  --issuer-id <id>              App Store Connect issuer ID (required)
  --api-key-id <id>             App Store Connect API key ID (required)
  --api-private-key-path <p>    Path to AuthKey_*.p8 (required)
  --p12-path <path>             Path to signing .p12
  --p12-password <password>     Password for the .p12
  -h, --help                    Show this help
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    -h|--help) HELP=1; shift ;;
    --github-repo) GITHUB_REPO="$2"; shift 2 ;;
    --p12-path) P12_PATH="$2"; shift 2 ;;
    --p12-password) P12_PASSWORD="$2"; shift 2 ;;
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

[[ -n "$GITHUB_REPO" ]] || asc_die "Missing required --github-repo"
asc_require_cmds gh
asc_load_credentials

echo "Setting GitHub variables on $GITHUB_REPO..."
gh variable set APPSTORE_ISSUER_ID --repo "$GITHUB_REPO" --body "$ASC_ISSUER_ID"
gh variable set APPSTORE_API_KEY_ID --repo "$GITHUB_REPO" --body "$ASC_KEY_ID"

echo "Setting APPSTORE_API_PRIVATE_KEY secret..."
gh secret set APPSTORE_API_PRIVATE_KEY --repo "$GITHUB_REPO" --body "$ASC_PRIVATE_KEY_CONTENT"

if [[ -n "$P12_PATH" ]]; then
  [[ -f "$P12_PATH" ]] || asc_die "p12 file not found: $P12_PATH"
  P12_BASE64="$(base64 <"$P12_PATH" | tr -d '\n')"
  echo "Setting APPSTORE_CERTIFICATES_FILE_BASE64 secret..."
  gh secret set APPSTORE_CERTIFICATES_FILE_BASE64 --repo "$GITHUB_REPO" --body "$P12_BASE64"
fi

if [[ -n "$P12_PASSWORD" ]]; then
  echo "Setting APPSTORE_CERTIFICATES_PASSWORD secret..."
  gh secret set APPSTORE_CERTIFICATES_PASSWORD --repo "$GITHUB_REPO" --body "$P12_PASSWORD"
fi

echo "GitHub configuration complete for $GITHUB_REPO."
echo "Workflow wiring:"
cat <<'EOF'
  issuer-id: ${{ vars.APPSTORE_ISSUER_ID }}
  api-key-id: ${{ vars.APPSTORE_API_KEY_ID }}
  api-private-key: ${{ secrets.APPSTORE_API_PRIVATE_KEY }}
  p12-file-base64: ${{ secrets.APPSTORE_CERTIFICATES_FILE_BASE64 }}
  p12-password: ${{ secrets.APPSTORE_CERTIFICATES_PASSWORD }}
EOF
