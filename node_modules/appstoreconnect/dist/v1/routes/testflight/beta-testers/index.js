'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const api_1 = require('../../../../api')
/**
 * Create a beta tester assigned to a group, a build, or an app.
 * @param body
 */
function createBetaTester(api, body) {
    return api_1.POST(api, `/betaTesters`, { body })
}
exports.createBetaTester = createBetaTester
/**
 * Remove a beta tester's ability to test all apps.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
function deleteBetaTester(api, id) {
    return api_1.DELETE(api, `/betaTesters/${id}`)
}
exports.deleteBetaTester = deleteBetaTester
/**
 * Find and list beta testers for all apps, builds, and beta groups.
 * @param query
 */
function listBetaTesters(api, query) {
    return api_1.GET(api, `/betaTesters`, { query })
}
exports.listBetaTesters = listBetaTesters
/**
 * Get a specific beta tester.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readBetaTesterInformation(api, id, query) {
    return api_1.GET(api, `/betaTesters/${id}`, { query })
}
exports.readBetaTesterInformation = readBetaTesterInformation
/**
 * Add one or more beta testers to a specific beta group.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function addBetaTesterToBetaGroups(api, id, body) {
    return api_1.POST(api, `/betaTesters/${id}/relationships/betaGroups`, {
        body,
    })
}
exports.addBetaTesterToBetaGroups = addBetaTesterToBetaGroups
/**
 * Remove a specific beta tester from one or more beta groups, revoking their access to test builds associated with those groups.
 */
function removeBetaTesterFromBetaGroups(api, id, body) {
    return api_1.DELETE(api, `/betaTesters/${id}/relationships/betaGroups`, {
        body,
    })
}
exports.removeBetaTesterFromBetaGroups = removeBetaTesterFromBetaGroups
/**
 * Individually assign a beta tester to a build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function individuallyAssignBetaTesterToBuilds(api, id, body) {
    return api_1.POST(api, `/betaTesters/${id}/relationships/builds`, { body })
}
exports.individuallyAssignBetaTesterToBuilds = individuallyAssignBetaTesterToBuilds
/**
 * Remove an individually assigned beta tester's ability to test a build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function individuallyUnassignBetaTesterFromBuilds(api, id, body) {
    return api_1.DELETE(api, `/betaTesters/${id}/relationships/builds`, {
        body,
    })
}
exports.individuallyUnassignBetaTesterFromBuilds = individuallyUnassignBetaTesterFromBuilds
/**
 * Remove a specific beta tester's access to test any builds of one or more apps.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function removeBetaTesterAccessToApps(api, id, body) {
    return api_1.DELETE(api, `/betaTesters/${id}/relationships/apps`, { body })
}
exports.removeBetaTesterAccessToApps = removeBetaTesterAccessToApps
/**
 * Get a list of apps that a beta tester can test.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function listAllAppsForBetaTester(api, id, query) {
    return api_1.GET(api, `/betaTesters/${id}/apps`, { query })
}
exports.listAllAppsForBetaTester = listAllAppsForBetaTester
/**
 * Get a list of app resource IDs associated with a beta tester.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function getAllAppResourceIDsForBetaTester(api, id, query) {
    return api_1.GET(api, `/betaTesters/${id}/relationships/apps`, { query })
}
exports.getAllAppResourceIDsForBetaTester = getAllAppResourceIDsForBetaTester
/**
 * Get a list of builds individually assigned to a specific beta tester.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function listAllBuildsIndividuallyAssignedToBetaTester(api, id, query) {
    return api_1.GET(api, `/betaTesters/${id}/builds`, { query })
}
exports.listAllBuildsIndividuallyAssignedToBetaTester = listAllBuildsIndividuallyAssignedToBetaTester
/**
 * Get a list of build resource IDs individually assigned to a specific beta tester.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function getAllIDsForBuildsIndividuallyAssignedToBetaTester(api, id, query) {
    return api_1.GET(api, `/betaTesters/${id}/relationships/builds`, { query })
}
exports.getAllIDsForBuildsIndividuallyAssignedToBetaTester = getAllIDsForBuildsIndividuallyAssignedToBetaTester
/**
 * Get a list of beta groups that contain a specific beta tester.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function listAllBetaGroupsForBetaTester(api, id, query) {
    return api_1.GET(api, `/betaTesters/${id}/betaGroups`, { query })
}
exports.listAllBetaGroupsForBetaTester = listAllBetaGroupsForBetaTester
/**
 * Get a list of group resource IDs associated with a beta tester.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function getAllBetaGroupIDsForBetaTesterGroups(api, id, query) {
    return api_1.GET(api, `/betaTesters/${id}/relationships/betaGroups`, {
        query,
    })
}
exports.getAllBetaGroupIDsForBetaTesterGroups = getAllBetaGroupIDsForBetaTesterGroups
