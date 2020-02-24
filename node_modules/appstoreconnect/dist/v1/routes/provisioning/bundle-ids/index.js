'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const api_1 = require('../../../../api')
/**
 * Register a new bundle ID for app development.
 */
function registerNewBundleId(api, body) {
    return api_1.POST(api, '/bundleIds', { body })
}
exports.registerNewBundleId = registerNewBundleId
/**
 * Update a specific bundle ID’s name.
 */
function modifyBundleId(api, id, body) {
    return api_1.PATCH(api, `/bundleIds/${id}`, { body })
}
exports.modifyBundleId = modifyBundleId
/**
 * Delete a bundle ID that is used for app development.
 */
function deleteBundleId(api, id) {
    return api_1.DELETE(api, `/bundleIds/${id}`)
}
exports.deleteBundleId = deleteBundleId
/**
 * Find and list bundle IDs that are registered to your team.
 */
function listBundleIds(api, query) {
    return api_1.GET(api, '/bundleIds', { query })
}
exports.listBundleIds = listBundleIds
/**
 * Get information about a specific bundle ID.
 */
function readBundleIdInformation(api, id, query) {
    return api_1.GET(api, `/bundleIds/${id}`, { query })
}
exports.readBundleIdInformation = readBundleIdInformation
/**
 * Get the resource IDs for all profiles associated with a specific bundle ID.
 */
function getAllProfileIdsForBundleId(api, id, query) {
    return api_1.GET(api, `/bundleIds/${id}/relationships/profiles`, { query })
}
exports.getAllProfileIdsForBundleId = getAllProfileIdsForBundleId
/**
 * Get a list of all profiles for a specific bundle ID.
 */
function listAllProfilesForBundleId(api, id, query) {
    return api_1.GET(api, `/bundleIds/${id}/profiles`, { query })
}
exports.listAllProfilesForBundleId = listAllProfilesForBundleId
/**
 * Get the resource IDs for all capabilities associated with a specific bundle ID.
 */
function getAllCapabililityIdsForBundleId(api, id, query) {
    return api_1.GET(
        api,
        `/bundleIds/${id}/relationships/bundleIdCapabilities`,
        {
            query,
        }
    )
}
exports.getAllCapabililityIdsForBundleId = getAllCapabililityIdsForBundleId
/**
 * Get a list of all capabilities for a specific bundle ID.
 */
function listAllCapabilitiesForBundleId(api, id, query) {
    return api_1.GET(api, `/bundleIds/${id}/bundleIdCapabilities`, { query })
}
exports.listAllCapabilitiesForBundleId = listAllCapabilitiesForBundleId
