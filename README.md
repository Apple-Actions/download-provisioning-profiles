# 🔨 NEED NEW MAINTAINER 🔨

This repository needs a new maintainer who can actively manage it. If you would like to become that maintainer then please contact me (@orj@mastodon.social).

# GitHub Action to download and install Provisioning Profiles

[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](LICENSE)
[![PRs welcome!](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## Usage:

```yaml
jobs:
  build:
    runs-on: macOS-latest
    steps:
    - name: 'Download Provisioning Profiles'
      id: provisioning
      uses: apple-actions/download-provisioning-profiles@v1
      with: 
        bundle-id: 'com.example.App'
        profile-type: 'IOS_APP_STORE'
        issuer-id: ${{ secrets.APPSTORE_ISSUER_ID }}
        api-key-id: ${{ secrets.APPSTORE_KEY_ID }}
        api-private-key: ${{ secrets.APPSTORE_PRIVATE_KEY }}
  
    - name: 'Another example step'
      run: echo ${{ steps.provisioning.outputs.profiles }}
```

## Additional Arguments

See [action.yml](action.yml) for more details.

## Outputs

The action outputs an array of JSON objects to the action output named `profiles`.  You can access and manipulate this data using [workflow expressions](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions#steps-context).

## Contributing

We welcome your interest in contributing to this project. Please read the [Contribution Guidelines](CONTRIBUTING.md) for more guidance.

## License

Any contributions made under this project will be governed by the [MIT License](LICENSE).
