'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const api_1 = require('../../../../api')
/**
 * Send or resend an invitation to a beta tester to test a specified app.
 * @param body
 */
function sendInvitationToBetaTester(api, body) {
    return api_1.POST(api, `/betaTesterInvitations`, { body })
}
exports.sendInvitationToBetaTester = sendInvitationToBetaTester
