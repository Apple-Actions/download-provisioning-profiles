'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const api_1 = require('../../../../api')
/**
 * Create a beta group associated with an app, optionally enabling TestFlight public links.
 * @param body
 */
function createBetaGroup(api, body) {
    return api_1.POST(api, `/betaGroups`, { body })
}
exports.createBetaGroup = createBetaGroup
/**
 * Modify a beta group's metadata, including changing its Testflight public link status.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function modifyBetaGroup(api, id, body) {
    return api_1.PATCH(api, `/betaGroups/${id}`, { body })
}
exports.modifyBetaGroup = modifyBetaGroup
/**
 * Delete a beta group and remove beta tester access to associated builds.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
function deleteBetaGroup(api, id) {
    return api_1.DELETE(api, `/betaGroups/${id}`)
}
exports.deleteBetaGroup = deleteBetaGroup
/**
 * Find and list beta groups for all apps.
 * @param query
 */
function listBetaGroups(api, query) {
    return api_1.GET(api, `/betaGroups`, { query })
}
exports.listBetaGroups = listBetaGroups
/**
 * Get a specific beta group.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readBetaGroupInformation(api, id, query) {
    return api_1.GET(api, `/betaGroups/${id}`, { query })
}
exports.readBetaGroupInformation = readBetaGroupInformation
/**
 * Get the app information for a specific beta group.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readAppInformationForBetaGroup(api, id, query) {
    return api_1.GET(api, `/betaGroups/${id}/app`, { query })
}
exports.readAppInformationForBetaGroup = readAppInformationForBetaGroup
/**
 * Get the app resource ID for a specific beta group.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
function getAppResourceIDForBetaGroup(api, id) {
    return api_1.GET(api, `/betaGroups/${id}/relationships/app`)
}
exports.getAppResourceIDForBetaGroup = getAppResourceIDForBetaGroup
/**
 * Add a specific beta tester to one or more beta groups for beta testing.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function addBetaTestersToBetaGroup(api, id, body) {
    return api_1.POST(api, `/betaGroups/${id}/relationships/betaTesters`, {
        body,
    })
}
exports.addBetaTestersToBetaGroup = addBetaTestersToBetaGroup
/**
 * Remove a specific beta tester from a one or more beta groups, revoking their access to test builds associated with those groups.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function removeBetaTestersFromBetaGroup(api, id, body) {
    return api_1.DELETE(api, `/betaGroups/${id}/relationships/betaTesters`, {
        body,
    })
}
exports.removeBetaTestersFromBetaGroup = removeBetaTestersFromBetaGroup
/**
 * Associate builds with a beta group to enable the group to test the builds.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function addBuildsToBetaGroup(api, id, body) {
    return api_1.POST(api, `/betaGroups/${id}/relationships/builds`, { body })
}
exports.addBuildsToBetaGroup = addBuildsToBetaGroup
/**
 * Remove access to test one or more builds from beta testers in a specific beta group.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function removeBuildsFromBetaGroup(api, id, body) {
    return api_1.DELETE(api, `/betaGroups/${id}/relationships/builds`, { body })
}
exports.removeBuildsFromBetaGroup = removeBuildsFromBetaGroup
/**
 * Get a list of builds associated with a specific beta group.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function listAllBuildsForBetaGroup(api, id, query) {
    return api_1.GET(api, `/betaGroups/${id}/builds`, { query })
}
exports.listAllBuildsForBetaGroup = listAllBuildsForBetaGroup
/**
 * Get a list of build resource IDs in a specific beta group.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function getAllBuildIDsForBetaGroup(api, id, query) {
    return api_1.GET(api, `/betaGroups/${id}/relationships/builds`, { query })
}
exports.getAllBuildIDsForBetaGroup = getAllBuildIDsForBetaGroup
/**
 * Get a list of beta testers contained in a specific beta group.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function listAllBetaTestersForBetaGroup(api, id, query) {
    return api_1.GET(api, `/betaGroups/${id}/betaTesters`, { query })
}
exports.listAllBetaTestersForBetaGroup = listAllBetaTestersForBetaGroup
/**
 * Get a list of the beta tester resource IDs in a specific beta group.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function getAllBetaTesterIDsForBetaGroup(api, id, query) {
    return api_1.GET(api, `/betaGroups/${id}/relationships/betaTesters`, {
        query,
    })
}
exports.getAllBetaTesterIDsForBetaGroup = getAllBetaTesterIDsForBetaGroup
