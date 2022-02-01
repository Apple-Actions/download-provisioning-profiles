'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const api_1 = require('../../../../api')
/**
 * Find and list beta app localizations for all apps and locales.
 * @param query
 */
function listBetaAppLocalizations(api, query) {
    return api_1.GET(api, `/betaAppLocalizations`, { query })
}
exports.listBetaAppLocalizations = listBetaAppLocalizations
/**
 * Get localized beta app information for a specific app and locale.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readBetaAppLocalizationInformation(api, id, query) {
    return api_1.GET(api, `/betaAppLocalizations/${id}`, { query })
}
exports.readBetaAppLocalizationInformation = readBetaAppLocalizationInformation
/**
 * Get the app information associated with a specific beta app localization.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readAppInformationForBetaAppLocalization(api, id, query) {
    return api_1.GET(api, `/betaAppLocalizations/${id}/app`, { query })
}
exports.readAppInformationForBetaAppLocalization = readAppInformationForBetaAppLocalization
/**
 * Get the app resource ID for a specified beta app localization.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
function getAppResourceIDForBetaAppLocalization(api, id) {
    return api_1.GET(api, `/betaAppLocalizations/${id}/relationships/app`)
}
exports.getAppResourceIDForBetaAppLocalization = getAppResourceIDForBetaAppLocalization
/**
 * Create localized descriptive information for an app.
 * @param body
 */
function createBetaAppLocalization(api, body) {
    return api_1.POST(api, `/betaAppLocalizations`, { body })
}
exports.createBetaAppLocalization = createBetaAppLocalization
/**
 * Update the localized What’s New text for a specific app and locale.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function modifyBetaAppLocalization(api, id, body) {
    return api_1.PATCH(api, `/betaAppLocalizations/${id}`, { body })
}
exports.modifyBetaAppLocalization = modifyBetaAppLocalization
/**
 * Delete a beta app localization associated with an app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
function deleteBetaAppLocalization(api, id) {
    return api_1.DELETE(api, `/betaAppLocalizations/${id}`)
}
exports.deleteBetaAppLocalization = deleteBetaAppLocalization
