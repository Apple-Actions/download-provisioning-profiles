# GitHub Action to download and install Provisioning Profiles

[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](LICENSE)
[![PRs welcome!](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## Getting Started

Use the same App Store Connect API key as [`upload-testflight-build`](https://github.com/Apple-Actions/upload-testflight-build) and the same certificate secrets as [`import-codesign-certs`](https://github.com/Apple-Actions/import-codesign-certs).

### Canonical GitHub ENVs

| Kind | Name | Purpose |
| --- | --- | --- |
| Variable | `APPSTORE_ISSUER_ID` | App Store Connect issuer ID |
| Variable | `APPSTORE_API_KEY_ID` | App Store Connect API key ID |
| Secret | `APPSTORE_API_PRIVATE_KEY` | Contents of `AuthKey_*.p8` |
| Secret | `APPSTORE_CERTIFICATES_FILE_BASE64` | Base64-encoded signing `.p12` |
| Secret | `APPSTORE_CERTIFICATES_PASSWORD` | Password for the `.p12` |

### Where to find the API credentials

Open [App Store Connect → Users and Access → Integrations → App Store Connect API](https://appstoreconnect.apple.com/access/integrations/api) (Account Holder / Admin can create keys; [Apple’s guide](https://developer.apple.com/documentation/appstoreconnectapi/creating-api-keys-for-app-store-connect-api)).

| Value | How to get it |
| --- | --- |
| `APPSTORE_ISSUER_ID` | On that page, copy **Issuer ID** (UUID at the top). Same for every team key. |
| `APPSTORE_API_KEY_ID` | After you create a key, copy its **Key ID**. It also appears in the downloaded filename: `AuthKey_<KEY_ID>.p8`. |
| `APPSTORE_API_PRIVATE_KEY` | Download the `.p8` when the key is created — Apple only shows it once. Store the file contents as the GitHub secret (`cat AuthKey_<KEY_ID>.p8`). Create the key with at least **App Manager** access. |

Signing cert secrets (`APPSTORE_CERTIFICATES_*`) are produced by `scripts/setup.sh` / `create-signing-certificate.sh`, not the API keys page.

Local setup scripts take credentials as **CLI args** (`--issuer-id`, `--api-key-id`, `--api-private-key-path`). The `APPSTORE_*` names above are for GitHub Actions only. Scripts need `curl`, `jq`, `openssl`, and `python3`; `configure-github.sh` / `setup.sh` also need `gh` (`gh auth login`).

Profile names default to `AppStore <bundle-id>` and must match Xcode Release `PROVISIONING_PROFILE_SPECIFIER` and `ExportOptions.plist`. View profiles at [Certificates, Identifiers & Profiles → Profiles](https://developer.apple.com/account/resources/profiles/list).

### Setup script examples

Shared credential flags used below:

```bash
--issuer-id 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
--api-key-id 'XXXXXXXXXX' \
--api-private-key-path ~/Downloads/AuthKey_XXXXXXXXXX.p8
```

#### Full bootstrap (new app)

Creates/reuses bundle ID, distribution cert + `.p12`, App Store profile, `ExportOptions.plist`, and GitHub vars/secrets:

```bash
./scripts/setup.sh \
  --bundle-id com.example.App \
  --issuer-id 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
  --api-key-id 'XXXXXXXXXX' \
  --api-private-key-path ~/Downloads/AuthKey_XXXXXXXXXX.p8 \
  --p12-password 'choose-a-password' \
  --github-repo owner/name \
  --export-options ./ExportOptions.plist
```

App + app extension (multiple bundle IDs):

```bash
./scripts/setup.sh \
  --bundle-id com.example.App \
  --bundle-id com.example.App.focus \
  --issuer-id 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
  --api-key-id 'XXXXXXXXXX' \
  --api-private-key-path ~/Downloads/AuthKey_XXXXXXXXXX.p8 \
  --p12-password 'choose-a-password' \
  --github-repo owner/name \
  --export-options ./ExportOptions.plist
```

#### Create / reuse provisioning profiles only

When the App ID and distribution certificate already exist in the Apple portal:

```bash
./scripts/create-provisioning-profile.sh \
  --bundle-id com.example.App \
  --profile-type IOS_APP_STORE \
  --issuer-id 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
  --api-key-id 'XXXXXXXXXX' \
  --api-private-key-path ~/Downloads/AuthKey_XXXXXXXXXX.p8
```

Optional: `--name 'AppStore com.example.App'`, `--certificate-id <id>`, `--recreate`.

#### Create a signing certificate + `.p12`

```bash
./scripts/create-signing-certificate.sh \
  --issuer-id 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
  --api-key-id 'XXXXXXXXXX' \
  --api-private-key-path ~/Downloads/AuthKey_XXXXXXXXXX.p8 \
  --p12-password 'choose-a-password' \
  --output-dir ./signing
```

Use `--reuse` to keep an existing `./signing` cert instead of creating another.

#### Push credentials to GitHub

API vars/secret only (cert secrets already set):

```bash
./scripts/configure-github.sh \
  --github-repo owner/name \
  --issuer-id 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
  --api-key-id 'XXXXXXXXXX' \
  --api-private-key-path ~/Downloads/AuthKey_XXXXXXXXXX.p8
```

Including signing certificate secrets:

```bash
./scripts/configure-github.sh \
  --github-repo owner/name \
  --issuer-id 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
  --api-key-id 'XXXXXXXXXX' \
  --api-private-key-path ~/Downloads/AuthKey_XXXXXXXXXX.p8 \
  --p12-path ./signing/IOS_DISTRIBUTION.p12 \
  --p12-password 'choose-a-password'
```

#### Ensure bundle ID / write ExportOptions.plist

```bash
./scripts/ensure-bundle-id.sh \
  --bundle-id com.example.App \
  --issuer-id 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
  --api-key-id 'XXXXXXXXXX' \
  --api-private-key-path ~/Downloads/AuthKey_XXXXXXXXXX.p8

./scripts/generate-export-options.sh \
  --bundle-id com.example.App \
  --bundle-id com.example.App.focus \
  --team-id TEAMID1234 \
  --output ./ExportOptions.plist
```

(`ensure-bundle-id.sh` prints the team / seed ID on the last line.)

## Usage

```yaml
- name: Download Provisioning Profiles
  uses: apple-actions/download-provisioning-profiles@v6
  with:
    bundle-id: 'com.example.App'
    profile-type: 'IOS_APP_STORE'
    issuer-id: ${{ vars.APPSTORE_ISSUER_ID }}
    api-key-id: ${{ vars.APPSTORE_API_KEY_ID }}
    api-private-key: ${{ secrets.APPSTORE_API_PRIVATE_KEY }}
```

## Additional Arguments

See [action.yml](action.yml) for more details.

## Outputs

The action outputs an array of JSON objects to the action output named `profiles`. You can access and manipulate this data using [workflow expressions](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions#steps-context).

## Contributing

We welcome your interest in contributing to this project. Please read the [Contribution Guidelines](CONTRIBUTING.md) for more guidance.

## License

Any contributions made under this project will be governed by the [MIT License](LICENSE).
