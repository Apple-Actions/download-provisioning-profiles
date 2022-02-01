'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const api_1 = require('../../../api')
/**
 * Get a list of the users on your team.
 * @param query
 */
function listUsers(api, query) {
    return api_1.GET(api, '/users', { query })
}
exports.listUsers = listUsers
/**
 * Get information about a user on your team, such as name, roles, and app visibility.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readUserInformation(api, id, query) {
    return api_1.GET(api, `/users/${id}`, { query })
}
exports.readUserInformation = readUserInformation
/**
 * Change a user's role, app visibility information, or other account details.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function modifyUserAccount(api, id, body) {
    return api_1.PATCH(api, `/users/${id}`, { body })
}
exports.modifyUserAccount = modifyUserAccount
/**
 * Remove a user from your team.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
function removeUserAccount(api, id) {
    return api_1.DELETE(api, `/users/${id}`)
}
exports.removeUserAccount = removeUserAccount
/**
 * Get a list of apps that a user on your team can view.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function listAllAppsVisibleToUser(api, id, query) {
    return api_1.GET(api, `/users/${id}/visibleApps`, { query })
}
exports.listAllAppsVisibleToUser = listAllAppsVisibleToUser
/**
 * Get a list of app resource IDs to which a user on your team has access.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function getAllVisibleAppResourceIDsForUser(api, id, query) {
    return api_1.GET(api, `/users/${id}/relationships/visibleApps`, { query })
}
exports.getAllVisibleAppResourceIDsForUser = getAllVisibleAppResourceIDsForUser
/**
 * Give a user on your team access to one or more apps.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function addVisibleAppsToUser(api, id, body) {
    return api_1.POST(api, `/users/${id}/relationships/visibleApps`, { body })
}
exports.addVisibleAppsToUser = addVisibleAppsToUser
/**
 * Replace the list of apps a user on your team can see.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function replaceListOfVisibleAppsForUser(api, id, body) {
    return api_1.PATCH(api, `/users/${id}/relationships/visibleApps`, { body })
}
exports.replaceListOfVisibleAppsForUser = replaceListOfVisibleAppsForUser
/**
 * Remove a user on your team’s access to one or more apps.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
function removeVisibleAppsFromUser(api, id) {
    return api_1.DELETE(api, `/users/${id}/relationships/visibleApps`)
}
exports.removeVisibleAppsFromUser = removeVisibleAppsFromUser
