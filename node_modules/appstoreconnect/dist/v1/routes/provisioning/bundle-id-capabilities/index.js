'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const api_1 = require('../../../../api')
/**
 * Enable a capability for a bundle ID.
 */
function enableCapability(api, body) {
    return api_1.POST(api, '/bundleIdCapabilities', { body })
}
exports.enableCapability = enableCapability
/**
 * Disable a capability for a bundle ID.
 */
function disableCapability(api, id) {
    return api_1.DELETE(api, `/bundleIdCapabilities/${id}`)
}
exports.disableCapability = disableCapability
/**
 * Update the configuration of a specific capability.
 */
function modifyCapabilityConfiguration(api, id, body) {
    return api_1.PATCH(api, `/bundleIdCapabilities/${id}`, { body })
}
exports.modifyCapabilityConfiguration = modifyCapabilityConfiguration
