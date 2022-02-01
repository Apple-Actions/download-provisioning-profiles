# appstoreconnect

> Unofficial REST API client for Apple's App Store Connect API

[![@latest](https://img.shields.io/npm/v/appstoreconnect.svg)](https://www.npmjs.com/package/appstoreconnect)
[![Build Status](https://travis-ci.org/aaronsky/appstoreconnect.svg?branch=master)](https://travis-ci.org/aaronsky/appstoreconnect)
[![install size](https://packagephobia.now.sh/badge?p=appstoreconnect)](https://packagephobia.now.sh/result?p=appstoreconnect)

## Installation

`appstoreconnect` has been tested to work on Node.js 8.0+. Use with any prior version is unsupported.

```
npm install appstoreconnect
```

## Usage

```js
// Import the API version from the package, which mirror Apple's API versioning
import { v1 } from 'appstoreconnect'

// Read .p8 private key from disk or from environment, and supply the issuer ID and key identifier as outlined here:
// https://developer.apple.com/documentation/appstoreconnectapi/generating_tokens_for_api_requests
const privateKey = '' // replace with the contents of your private key
const issuerId = '' // replace with your issuer ID
const keyId = '' // replace with your key ID

const token = v1.token(privateKey, issuerId, keyId)

// Initialize the service. Passing the token up-front is optional, but should be done before any API calls are made.
const api = v1(token)

// Compare to https://developer.apple.com/documentation/appstoreconnectapi/list_builds
v1
  .testflight
  .listBuilds(api, {})
  .then(builds => console.log(builds))
  .catch(err => console.error(err))
```

All asynchronous functionality in `appstoreconnect` is driven using native Promises. 

### Authentication

The App Store Connect API requires a JSON Web Token (JWT) for all API requests. `appstoreconnect` presents both synchronous and asynchronous interfaces for processing the token. You should feel free to use the one that fits best into your project. Both interfaces can surface errors, so use a try-catch where appropriate.

```js
const token = v1.token(privateKey, issuerId, keyId)
```

```js
async function myFunc() {
  try {
    const token = await v1.token(privateKey, issuerId, keyId)
  } catch (error) {
    throw error
  }
}
```

For more information on how JWT works with the App Store Connect API, check out Apple's authentication guides:

* [Creating API Keys for App Store Connect API](https://developer.apple.com/documentation/appstoreconnectapi/creating_api_keys_for_app_store_connect_api)
* [Generating Tokens for API Requests](https://developer.apple.com/documentation/appstoreconnectapi/generating_tokens_for_api_requests)
* [Revoking API Keys](https://developer.apple.com/documentation/appstoreconnectapi/revoking_api_keys)

### Examples

This is an ongoing work-in-progress so I don't have many examples yet. If you have an idea for an example, please feel free to [file an issue](https://github.com/aaronsky/appstoreconnect/issues/new) or a [pull request](https://github.com/aaronsky/appstoreconnect/pulls/new)!

1. [Getting Started](./examples/getting-started.js)

### API Reference

A proper API reference for `appstoreconnect` is coming soon, but in the meantime, much of the documentation is lifted from Apple's reference notes on the App Store Connect API [here](https://developer.apple.com/documentation/appstoreconnectapi/).

## License

This code is licensed under the [MIT License](./LICENSE). 

---

## TODO

- [ ] Fully stub App Store Connect API
  - [x] Confirm basic functionality
  - [ ] Confirm complex edge cases (complex queries, mutating calls, non-JSON responses, etc.)
  - [ ] Determine work involved in stubbing a v2 API and compatibility between different components
- [ ] Testing
  - [ ] Write end-to-end tests to confirm interface and design
  - [ ] Write unit tests for individual, internal components
  - [ ] Run tests on CI
- [ ] Improve documentation
  - [ ] Add more examples
  - [ ] Improve code comments around API surface
  - [ ] Update README
  - [ ] Produce API reference site when new tags are pushed
