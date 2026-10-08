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
  --name 'Example App' \
  --issuer-id 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
  --api-key-id 'XXXXXXXXXX' \
  --api-private-key-path ~/Downloads/AuthKey_XXXXXXXXXX.p8 \
  --p12-password 'choose-a-password' \
  --github-repo owner/name \
  --export-options ./ExportOptions.plist
```

App + app extension (one `--name` per `--bundle-id`, in order):

```bash
./scripts/setup.sh \
  --bundle-id com.example.App \
  --name 'Example App' \
  --bundle-id com.example.App.focus \
  --name 'Example App Focus' \
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

Exactly one of `--p12-password` or `--no-p12` is required:

```bash
./scripts/create-signing-certificate.sh \
  --issuer-id 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
  --api-key-id 'XXXXXXXXXX' \
  --api-private-key-path ~/Downloads/AuthKey_XXXXXXXXXX.p8 \
  --p12-password 'choose-a-password' \
  --output-dir ./signing
```

```bash
./scripts/create-signing-certificate.sh \
  --issuer-id 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
  --api-key-id 'XXXXXXXXXX' \
  --api-private-key-path ~/Downloads/AuthKey_XXXXXXXXXX.p8 \
  --no-p12 \
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
  --name 'Example App' \
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
  uses: apple-actions/download-provisioning-profiles@v7
  with:
    bundle-id: 'com.example.App'
    profile-type: 'IOS_APP_STORE'
    issuer-id: ${{ vars.APPSTORE_ISSUER_ID }}
    api-key-id: ${{ vars.APPSTORE_API_KEY_ID }}
    api-private-key: ${{ secrets.APPSTORE_API_PRIVATE_KEY }}
```

`profile-type` is optional. When omitted, every ACTIVE profile for the bundle ID is downloaded.

## macOS: App Store and Developer ID

A macOS app that ships to TestFlight / the Mac App Store and as a notarized Developer ID DMG needs a `MAC_APP_STORE` and a `MAC_APP_DIRECT` profile. Omit `profile-type` to get both in one step:

```yaml
- name: Download Provisioning Profiles
  id: profiles
  uses: apple-actions/download-provisioning-profiles@v7
  with:
    bundle-id: 'com.example.app'
    issuer-id: ${{ vars.APPSTORE_ISSUER_ID }}
    api-key-id: ${{ vars.APPSTORE_API_KEY_ID }}
    api-private-key: ${{ secrets.APPSTORE_API_PRIVATE_KEY }}
```

Check the `profiles` output so a missing profile fails here rather than later at export:

```yaml
- name: Check provisioning profiles
  env:
    PROFILES: ${{ steps.profiles.outputs.profiles }}
  run: |
    for name in "AppStore com.example.app" "DeveloperID com.example.app"; do
      jq -e --arg name "$name" 'any(.[]; .name == $name)' <<<"$PROFILES" >/dev/null \
        || { echo "::error::No ACTIVE provisioning profile \"$name\""; exit 1; }
    done
```

Prerequisites:

* This action only downloads profiles. The `MAC_APP_DIRECT` profile must already exist.
* That profile needs a Developer ID Application certificate, and Apple lets only the Account Holder create one. For any other key, the App Store Connect API returns 403 `FORBIDDEN_ERROR` ("This operation can only be performed by the Account Holder"). Once the certificate exists, an Admin API key can create the profile.
* A profile turns INVALID when its certificate is revoked, and this action skips non-ACTIVE profiles. Recreate the profiles after certificate changes.

Export the archive with both profiles using [`xcodebuild`](https://github.com/Apple-Actions/xcodebuild#macos-mac-app-store-and-developer-id-from-one-archive), and import all signing identities from one `.p12` with [`import-codesign-certs`](https://github.com/Apple-Actions/import-codesign-certs). See [`Apple-Actions/Example-macOS`](https://github.com/Apple-Actions/Example-macOS) for the full workflow, including [`upload-testflight-build`](https://github.com/Apple-Actions/upload-testflight-build) and [`notarize`](https://github.com/Apple-Actions/notarize).

## Install location

Profiles are written to `~/Library/Developer/Xcode/UserData/Provisioning Profiles` as `<uuid>.mobileprovision` (iOS, tvOS) or `<uuid>.provisionprofile` (macOS). This is the folder Xcode 16 and later use, so Xcode 16 or later is required.

### Upgrading from v6

v6 wrote profiles to `~/Library/MobileDevice/Provisioning Profiles`. If you build with Xcode 15 or earlier, or have scripts or tools that read that path, either stay on `@v6` or update them to the new folder.

## Additional Arguments

See [action.yml](action.yml) for more details.

## Outputs

The action outputs an array of JSON objects, each with the profile's `name` and `type` among other fields, to the action output named `profiles`. You can access and manipulate this data using [workflow expressions](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions#steps-context).

## Contributing

We welcome your interest in contributing to this project. Please read the [Contribution Guidelines](CONTRIBUTING.md) for more guidance.

## License

Any contributions made under this project will be governed by the [MIT License](LICENSE).
