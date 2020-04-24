'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const api_1 = require('../../../../api')
/**
 * Find and list apps added in App Store Connect.
 * @param query
 */
function listApps(api, query) {
    return api_1.GET(api, '/apps', { query })
}
exports.listApps = listApps
/**
 * Get information about a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readAppInformation(api, id, query) {
    return api_1.GET(api, `/apps/${id}`, { query })
}
exports.readAppInformation = readAppInformation
/**
 * Remove one or more beta testers' access to test any builds of a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function removeBetaTestersFromAllGroupsAndAppBuilds(api, id, body) {
    return api_1.DELETE(api, `/apps/${id}/relationships/betaTesters`, { body })
}
exports.removeBetaTestersFromAllGroupsAndAppBuilds = removeBetaTestersFromAllGroupsAndAppBuilds
/**
 * Get a list of beta groups associated with a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function listAllBetaGroupsForApp(api, id, query) {
    return api_1.GET(api, `/apps/${id}/betaGroups`, { query })
}
exports.listAllBetaGroupsForApp = listAllBetaGroupsForApp
/**
 * Get a list of the beta group resource IDs associated with a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function getAllBetaGroupIDsForApp(api, id, query) {
    return api_1.GET(api, `/apps/${id}/relationships/betaGroups`, { query })
}
exports.getAllBetaGroupIDsForApp = getAllBetaGroupIDsForApp
/**
 * Get a list of builds associated with a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function listAllBuildsForApp(api, id, query) {
    return api_1.GET(api, `/apps/${id}/builds`, { query })
}
exports.listAllBuildsForApp = listAllBuildsForApp
/**
 * Get a list of build resource IDs associated with a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function getAllBuildIDsForApp(api, id, query) {
    return api_1.GET(api, `/apps/${id}/relationships/builds`, { query })
}
exports.getAllBuildIDsForApp = getAllBuildIDsForApp
/**
 * Get a list of prerelease versions associated with a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function listAllPrereleaseVersionsForApp(api, id, query) {
    return api_1.GET(api, `/apps/${id}/preReleaseVersions`, { query })
}
exports.listAllPrereleaseVersionsForApp = listAllPrereleaseVersionsForApp
/**
 * Get a list of prerelease version IDs for a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function getAllPrereleaseVersionIDsForApp(api, id, query) {
    return api_1.GET(api, `/apps/${id}/relationships/preReleaseVersions`, {
        query,
    })
}
exports.getAllPrereleaseVersionIDsForApp = getAllPrereleaseVersionIDsForApp
/**
 * Get the beta app review details for a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readBetaAppReviewDetailsResourceForApp(api, id, query) {
    return api_1.GET(api, `/apps/${id}/betaAppReviewDetail`, { query })
}
exports.readBetaAppReviewDetailsResourceForApp = readBetaAppReviewDetailsResourceForApp
/**
 * Get the beta app review details resource ID associated with a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
function getBetaAppReviewDetailsResourceIDForApp(api, id) {
    return api_1.GET(api, `/apps/${id}/relationships/betaAppReviewDetail`)
}
exports.getBetaAppReviewDetailsResourceIDForApp = getBetaAppReviewDetailsResourceIDForApp
/**
 * Get the beta license agreement for a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readBetaLicenseAgreementForApp(api, id, query) {
    return api_1.GET(api, `/apps/${id}/betaLicenseAgreement`, { query })
}
exports.readBetaLicenseAgreementForApp = readBetaLicenseAgreementForApp
/**
 * Get the beta app review details resource ID associated with a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
function getBetaLicenseAgreementIDForApp(api, id) {
    return api_1.GET(api, `/apps/${id}/relationships/betaLicenseAgreement`)
}
exports.getBetaLicenseAgreementIDForApp = getBetaLicenseAgreementIDForApp
/**
 * Get a list of localized beta test information for a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function listAllBetaAppLocalizationsForApp(api, id, query) {
    return api_1.GET(api, `/apps/${id}/betaAppLocalizations`, { query })
}
exports.listAllBetaAppLocalizationsForApp = listAllBetaAppLocalizationsForApp
/**
 * Get a list of beta app localization resource IDs associated with a specific app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function getAllBetaAppLocalizationIDsForApp(api, id, query) {
    return api_1.GET(api, `/apps/${id}/relationships/betaAppLocalizations`, {
        query,
    })
}
exports.getAllBetaAppLocalizationIDsForApp = getAllBetaAppLocalizationIDsForApp
