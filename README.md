# GitHub Action to import Apple Code-signing Certificates and Keys

[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](LICENSE)
[![PRs welcome!](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## Usage:

```yaml
uses: apple-actions/download-provisioning-profiles@v1
with: 
  bundle-id: 'com.example.App'
  issuer-id: ${{ secrets.APPSTORE_ISSUER_ID }}
  api-key-id: ${{ secrets.APPSTORE_KEY_ID }}
  api-private-key: ${{ secrets.APPSTORE_PRIVATE_KEY }}
```

## Additional Arguments

See [action.yml](action.yml) for more details.

## Contributing

We welcome your interest in contributing to this project. Please read the [Contribution Guidelines](CONTRIBUTING.md) for more guidance.

## License

Any contributions made under this project will be governed by the [MIT License](LICENSE).