'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const api_1 = require('../../../../api')
/**
 * Find and list builds for all apps in App Store Connect.
 */
function listBuilds(api, query) {
    return api_1.GET(api, `/builds`, { query })
}
exports.listBuilds = listBuilds
/**
 * Get information about a specific build.
 */
function readBuildInformation(api, id, query) {
    return api_1.GET(api, `/builds/${id}`, { query })
}
exports.readBuildInformation = readBuildInformation
/**
 * Get the app information for a specific build.
 */
function readAppInformationForBuild(api, id, query) {
    return api_1.GET(api, `/builds/${id}/app`, { query })
}
exports.readAppInformationForBuild = readAppInformationForBuild
/**
 * Get the app resource ID associated with a specific build.
 */
function getAppResourceIDForBuild(api, id) {
    return api_1.GET(api, `/builds/${id}/relationships/app`)
}
exports.getAppResourceIDForBuild = getAppResourceIDForBuild
/**
 * Get the prerelease version for a specific build.
 */
function readPrereleaseVersionForBuild(api, id, query) {
    return api_1.GET(api, `/builds/${id}/preReleaseVersion`, { query })
}
exports.readPrereleaseVersionForBuild = readPrereleaseVersionForBuild
/**
 * Get a list of resource IDs of prerelease versions associated with a build.
 */
function getAllResourceIDsForPrereleaseVersionsForBuild(api, id) {
    return api_1.GET(api, `/builds/${id}/relationships/preReleaseVersion`)
}
exports.getAllResourceIDsForPrereleaseVersionsForBuild = getAllResourceIDsForPrereleaseVersionsForBuild
/**
 * Expire a build or change its encryption exemption setting.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function modifyBuild(api, id, body) {
    return api_1.PATCH(api, `/builds/${id}`, { body })
}
exports.modifyBuild = modifyBuild
/**
 * Assign an app encryption declaration to a build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function assignAppEncryptionDeclarationForBuild(api, id, body) {
    return api_1.PATCH(
        api,
        `/builds/${id}/relationships/appEncryptionDeclaration`,
        {
            body,
        }
    )
}
exports.assignAppEncryptionDeclarationForBuild = assignAppEncryptionDeclarationForBuild
/**
 * Add or create a beta group to a build to enable testing.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function addAccessForBetaGroupsForBuild(api, id, body) {
    return api_1.POST(api, `/builds/${id}/relationships/betaGroups`, { body })
}
exports.addAccessForBetaGroupsForBuild = addAccessForBetaGroupsForBuild
/**
 * Remove access to a specific build for all beta testers in one or more beta groups.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function removeAccessForBetaGroupsForBuild(api, id, body) {
    return api_1.DELETE(api, `/builds/${id}/relationships/betaGroups`, { body })
}
exports.removeAccessForBetaGroupsForBuild = removeAccessForBetaGroupsForBuild
/**
 * Enable a beta tester who is not a part of a beta group to test a build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function assignIndividualTestersForBuild(api, id, body) {
    return api_1.POST(api, `/builds/${id}/relationships/individualTesters`, {
        body,
    })
}
exports.assignIndividualTestersForBuild = assignIndividualTestersForBuild
/**
 * Remove access to test a specific build from one or more individually assigned testers.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function removeIndividualTestersFromBuild(api, id, body) {
    return api_1.DELETE(api, `/builds/${id}/relationships/individualTesters`, {
        body,
    })
}
exports.removeIndividualTestersFromBuild = removeIndividualTestersFromBuild
/**
 * Get a list of beta testers individually assigned to a build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function listAllIndividualTestersForBuild(api, id, query) {
    return api_1.GET(api, `/builds/${id}/individualTesters`, { query })
}
exports.listAllIndividualTestersForBuild = listAllIndividualTestersForBuild
/**
 * Get a list of resource IDs of individual testers associated with a build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function getAllResourceIDsForIndividualTestersForBuild(api, id, query) {
    return api_1.GET(api, `/builds/${id}/relationships/individualTesters`, {
        query,
    })
}
exports.getAllResourceIDsForIndividualTestersForBuild = getAllResourceIDsForIndividualTestersForBuild
/**
 * Get the beta app review submission status for a specific build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readBetaAppReviewSubmissionForBuild(api, id, query) {
    return api_1.GET(api, `/builds/${id}/betaAppReviewSubmission`, { query })
}
exports.readBetaAppReviewSubmissionForBuild = readBetaAppReviewSubmissionForBuild
/**
 * Get the beta app review submission resource ID associated with a specific build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
function getBetaAppReviewSubmissionIDForBuild(api, id) {
    return api_1.GET(api, `/builds/${id}/relationships/betaAppReviewSubmission`)
}
exports.getBetaAppReviewSubmissionIDForBuild = getBetaAppReviewSubmissionIDForBuild
/**
 * Get the beta test details for a specific build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readBuildBetaDetailsInformationForBuild(api, id, query) {
    return api_1.GET(api, `/builds/${id}/buildBetaDetail`, { query })
}
exports.readBuildBetaDetailsInformationForBuild = readBuildBetaDetailsInformationForBuild
/**
 * Get the build beta details resource ID associated with a specific build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
function getBuildBetaDetailsResourceIDForBuild(api, id) {
    return api_1.GET(api, `/builds/${id}/relationships/buildBetaDetail`)
}
exports.getBuildBetaDetailsResourceIDForBuild = getBuildBetaDetailsResourceIDForBuild
/**
 * Read an app encryption declaration associated with a specific build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readAppEncryptionDeclarationForBuild(api, id, query) {
    return api_1.GET(api, `/builds/${id}/appEncryptionDeclaration`, { query })
}
exports.readAppEncryptionDeclarationForBuild = readAppEncryptionDeclarationForBuild
/**
 * Get the beta app encryption declaration resource ID associated with a build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
function getAppEncryptionDeclarationIDForBuild(api, id) {
    return api_1.GET(
        api,
        `/builds/${id}/relationships/appEncryptionDeclaration`
    )
}
exports.getAppEncryptionDeclarationIDForBuild = getAppEncryptionDeclarationIDForBuild
/**
 * Get a list of localized beta test information for a specific build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function listAllBetaBuildLocalizationsForBuild(api, id, query) {
    return api_1.GET(api, `/builds/${id}/betaBuildLocalizations`, { query })
}
exports.listAllBetaBuildLocalizationsForBuild = listAllBetaBuildLocalizationsForBuild
/**
 * Get a list of beta build localization resource IDs associated with a build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function getAllBetaBuildLocalizationIDsForBuild(api, id, query) {
    return api_1.GET(
        api,
        `/builds/${id}/relationships/betaBuildLocalizations`,
        {
            query,
        }
    )
}
exports.getAllBetaBuildLocalizationIDsForBuild = getAllBetaBuildLocalizationIDsForBuild
