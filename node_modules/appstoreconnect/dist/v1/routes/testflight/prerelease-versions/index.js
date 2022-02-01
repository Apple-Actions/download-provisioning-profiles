'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const api_1 = require('../../../../api')
/**
 * Get a list of prerelease versions for all apps.
 * @param query
 */
function listPrereleaseVersions(api, query) {
    return api_1.GET(api, `/preReleaseVersions`, { query })
}
exports.listPrereleaseVersions = listPrereleaseVersions
/**
 * Get information about a specific prerelease version.
 * @param id
 * @param query
 */
function readPrereleaseVersionInformation(api, id, query) {
    return api_1.GET(api, `/preReleaseVersions/${id}`, { query })
}
exports.readPrereleaseVersionInformation = readPrereleaseVersionInformation
/**
 * Get the app information for a specific prerelease version.
 * @param id
 * @param query
 */
function readAppInformationForPrereleaseVersion(api, id, query) {
    return api_1.GET(api, `/preReleaseVersions/${id}/app`, { query })
}
exports.readAppInformationForPrereleaseVersion = readAppInformationForPrereleaseVersion
/**
 * Get the app resource ID associated with a specific prerelease version.
 * @param id
 */
function getAppResourceIDForPrereleaseVersion(api, id) {
    return api_1.GET(api, `/preReleaseVersions/${id}/relationships/app`)
}
exports.getAppResourceIDForPrereleaseVersion = getAppResourceIDForPrereleaseVersion
/**
 * Get a list of builds of a specific prerelease version.
 * @param id
 * @param query
 */
function listAllBuildsForPrereleaseVersion(api, id, query) {
    return api_1.GET(api, `/preReleaseVersions/${id}/builds`, { query })
}
exports.listAllBuildsForPrereleaseVersion = listAllBuildsForPrereleaseVersion
/**
 * Get a list of build resource IDs associated with a provided prerelease version.
 * @param id
 * @param query
 */
function getAllBuildIDsForPrereleaseVersion(api, id, query) {
    return api_1.GET(api, `/preReleaseVersions/${id}/relationships/builds`, {
        query,
    })
}
exports.getAllBuildIDsForPrereleaseVersion = getAllBuildIDsForPrereleaseVersion
