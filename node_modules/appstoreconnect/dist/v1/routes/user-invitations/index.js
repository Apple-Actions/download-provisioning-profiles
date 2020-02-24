'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const api_1 = require('../../../api')
/**
 * Get a list of pending invitations to join your team.
 * @param query
 */
function listInvitedUsers(api, query) {
    return api_1.GET(api, '/userInvitations', { query })
}
exports.listInvitedUsers = listInvitedUsers
/**
 * Get information about a pending invitation to join your team.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readUserInvitationInformation(api, id, query) {
    return api_1.GET(api, `/userInvitations/${id}`, { query })
}
exports.readUserInvitationInformation = readUserInvitationInformation
/**
 * Invite a user with assigned user roles to join your team.
 * @param body
 */
function inviteUser(api, body) {
    return api_1.POST(api, `/userInvitations`, { body })
}
exports.inviteUser = inviteUser
/**
 * Cancel a pending invitation for a user to join your team.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
function cancelUserInvitation(api, id) {
    return api_1.DELETE(api, `/userInvitations/${id}`)
}
exports.cancelUserInvitation = cancelUserInvitation
/**
 * Get a list of apps that will be visible to a user with a pending invitation.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function listAllAppsVisibleToInvitedUser(api, id, query) {
    return api_1.GET(api, `/userInvitations/${id}/visibleApps`, { query })
}
exports.listAllAppsVisibleToInvitedUser = listAllAppsVisibleToInvitedUser
/**
 * Get a list of apps that will be visible to a user with a pending invitation.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function getAllAppResourceIDsVisibleToInvitedUser(api, id, query) {
    return api_1.GET(api, `/userInvitations/${id}/relationships/visibleApps`, {
        query,
    })
}
exports.getAllAppResourceIDsVisibleToInvitedUser = getAllAppResourceIDsVisibleToInvitedUser
