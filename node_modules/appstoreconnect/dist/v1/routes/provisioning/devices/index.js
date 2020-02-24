'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const api_1 = require('../../../../api')
/**
 * Register a new device for app development.
 */
function registerNewDevice(api, body) {
    return api_1.POST(api, `/devices`, { body })
}
exports.registerNewDevice = registerNewDevice
/**
 * Find and list devices registered to your team.
 */
function listDevices(api, query) {
    return api_1.GET(api, `/devices`, { query })
}
exports.listDevices = listDevices
/**
 * Get information for a specific device registered to your team.
 */
function readDeviceInformation(api, id, query) {
    return api_1.GET(api, `/devices/${id}`, { query })
}
exports.readDeviceInformation = readDeviceInformation
/**
 * Update the name or status of a specific device.
 */
function modifyRegisteredDevice(api, id, body) {
    return api_1.PATCH(api, `/devices/${id}`, { body })
}
exports.modifyRegisteredDevice = modifyRegisteredDevice
