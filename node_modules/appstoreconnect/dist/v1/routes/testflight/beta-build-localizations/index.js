'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const api_1 = require('../../../../api')
/**
 * Find and list beta build localizations currently associated with apps.
 * @param query
 */
function listBetaBuildLocalizations(api, query) {
    return api_1.GET(api, `/betaBuildLocalizations`, { query })
}
exports.listBetaBuildLocalizations = listBetaBuildLocalizations
/**
 * Get a specific beta build localization resource.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readBetaBuildLocalizationInformation(api, id, query) {
    return api_1.GET(api, `/betaBuildLocalizations/${id}`, { query })
}
exports.readBetaBuildLocalizationInformation = readBetaBuildLocalizationInformation
/**
 * Get the build information for a specific beta build localization.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readBuildInformationForBetaBuildLocalization(api, id, query) {
    return api_1.GET(api, `/betaBuildLocalizations/${id}/build`, { query })
}
exports.readBuildInformationForBetaBuildLocalization = readBuildInformationForBetaBuildLocalization
/**
 * Get a build resource ID for a specific beta build localization.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
function getBuildIDForBetaBuildLocalization(api, id) {
    return api_1.GET(api, `/betaBuildLocalizations/${id}/relationships/build`)
}
exports.getBuildIDForBetaBuildLocalization = getBuildIDForBetaBuildLocalization
/**
 * Create localized What’s New text for a build.
 * @param body
 */
function createBetaBuildLocalization(api, body) {
    return api_1.POST(api, `/betaBuildLocalizations`, { body })
}
exports.createBetaBuildLocalization = createBetaBuildLocalization
/**
 * Update the localized What’s New text for a specific beta build and locale.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function modifyBetaBuildLocalization(api, id, body) {
    return api_1.PATCH(api, `/betaBuildLocalizations/${id}`, { body })
}
exports.modifyBetaBuildLocalization = modifyBetaBuildLocalization
/**
 * Delete a specific beta build localization associated with a build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
function deleteBetaBuildLocalization(api, id) {
    return api_1.DELETE(api, `/betaBuildLocalizations/${id}`)
}
exports.deleteBetaBuildLocalization = deleteBetaBuildLocalization
