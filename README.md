# GitHub Action to download and install Provisioning Profiles

[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](LICENSE)
[![PRs welcome!](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## Getting Started (can be the same key as the [upload testflight action](https://github.com/Apple-Actions/upload-testflight-build/blob/master/README.md#getting-started))

* Create an `App Store Connect` profile following [these instructions](https://developer.apple.com/help/account/provisioning-profiles/create-a-development-provisioning-profile/)
* Create an `App Store Connect API Key` ([these instructions](https://developer.apple.com/documentation/appstoreconnectapi/creating-api-keys-for-app-store-connect-api) with the role `App Manager`)
* Download the certificate (must be done upon creation and will be called `ios_distribution.cer`)
* Copy the `.p8` ( `cat AuthKey_<key_id>.p8 | pbcopy` )
* Add it as a secret called `APPSTORE_API_PRIVATE_KEY` and add `Key ID` as a variable called `APPSTORE_API_KEY_ID`
* Add `Issuer ID` as a variable called `APPSTORE_ISSUER_ID` ([found here](https://appstoreconnect.apple.com/access/integrations/api))

## Usage

```yaml
- name: 'Download Provisioning Profiles'
  uses: apple-actions/download-provisioning-profiles@v4
  with:
    bundle-id: 'com.example.App'
    profile-type: 'IOS_APP_STORE'
    issuer-id: ${{ vars.APPSTORE_ISSUER_ID }}
    api-key-id: ${{ vars.APPSTORE_KEY_ID }}
    api-private-key: ${{ secrets.APPSTORE_PRIVATE_KEY }}
```

## Additional Arguments

See [action.yml](action.yml) for more details.

## Outputs

The action outputs an array of JSON objects to the action output named `profiles`.  You can access and manipulate this data using [workflow expressions](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions#steps-context).

## Contributing

We welcome your interest in contributing to this project. Please read the [Contribution Guidelines](CONTRIBUTING.md) for more guidance.

## License

Any contributions made under this project will be governed by the [MIT License](LICENSE).
