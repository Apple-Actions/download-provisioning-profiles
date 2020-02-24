'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const api_1 = require('../../../../api')
/**
 * Create a new provisioning profile.
 */
function createProfile(api, body) {
    return api_1.POST(api, `/profiles`, { body })
}
exports.createProfile = createProfile
/**
 * Delete a provisioning profile that is used for app development or distribution.
 */
function deleteProfile(api, id) {
    return api_1.DELETE(api, `/profiles/${id}`)
}
exports.deleteProfile = deleteProfile
/**
 * Find and list provisioning profiles and download their data.
 */
function listAndDownloadProfiles(api, query) {
    return api_1.GET(api, '/profiles/', { query })
}
exports.listAndDownloadProfiles = listAndDownloadProfiles
/**
 * Find and list provisioning profiles and download their data.
 */
function readAndDownloadProfileInformation(api, id, query) {
    return api_1.GET(api, `/profiles/${id}`, { query })
}
exports.readAndDownloadProfileInformation = readAndDownloadProfileInformation
/**
 * Get the bundle ID information for a specific provisioning profile.
 */
function readBundleIdForProfile(api, id, query) {
    return api_1.GET(api, `/profiles/${id}/bundleId`, { query })
}
exports.readBundleIdForProfile = readBundleIdForProfile
/**
 * Get the resource ID of a bundle associated with a specific provisioning profile.
 */
function getBundleResourceIdForProfile(api, id) {
    return api_1.GET(api, `/profiles/${id}/relationships/bundleId`)
}
exports.getBundleResourceIdForProfile = getBundleResourceIdForProfile
/**
 * Get a list of all certificates and their data for a specific provisioning profile.
 */
function listAllCertificatesForProfile(api, id, query) {
    return api_1.GET(api, `/profiles/${id}/certificates`, { query })
}
exports.listAllCertificatesForProfile = listAllCertificatesForProfile
/**
 * Get the resource IDs of all certificates associated with a specific provisioning profile.
 */
function getAllCertificateIdsForProfile(api, id, query) {
    return api_1.GET(api, `/profiles/${id}/relationships/certificates`, {
        query,
    })
}
exports.getAllCertificateIdsForProfile = getAllCertificateIdsForProfile
/**
 * Get a list of all devices for a specific provisioning profile.
 */
function listAllDevicesForProfile(api, id, query) {
    return api_1.GET(api, `/profiles/${id}/devices`, { query })
}
exports.listAllDevicesForProfile = listAllDevicesForProfile
/**
 * Get the resource IDs of all devices associated with a specific provisioning profile.
 */
function getAllDeviceResourceIdsForProfile(api, id, query) {
    return api_1.GET(api, `/profiles/${id}/relationships/devices`, { query })
}
exports.getAllDeviceResourceIdsForProfile = getAllDeviceResourceIdsForProfile
