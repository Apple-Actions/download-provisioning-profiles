'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const api_1 = require('../../../../api')
/**
 * Send a notification to all assigned beta testers that a build is available for testing.
 * @param body
 */
function sendNotificationOfAvailableBuild(api, body) {
    return api_1.POST(api, '/buildBetaNotifications', { body })
}
exports.sendNotificationOfAvailableBuild = sendNotificationOfAvailableBuild
