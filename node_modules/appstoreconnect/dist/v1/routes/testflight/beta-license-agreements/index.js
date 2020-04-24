'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const api_1 = require('../../../../api')
/**
 * Find and list beta license agreements for all apps.
 * @param query
 */
function listBetaLicenseAgreements(api, query) {
    return api_1.GET(api, `/betaLicenseAgreements`, { query })
}
exports.listBetaLicenseAgreements = listBetaLicenseAgreements
/**
 * Get a specific beta license agreement.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readBetaLicenseAgreementInformation(api, id, query) {
    return api_1.GET(api, `/betaLicenseAgreements/${id}`, { query })
}
exports.readBetaLicenseAgreementInformation = readBetaLicenseAgreementInformation
/**
 * Get the app information for a specific beta license agreement.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readAppInformationForBetaLicenseAgreement(api, id, query) {
    return api_1.GET(api, `/betaLicenseAgreements/${id}/app`, { query })
}
exports.readAppInformationForBetaLicenseAgreement = readAppInformationForBetaLicenseAgreement
/**
 * Get the app resource ID for a specific beta license agreement.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
function getAppResourceIDForBetaLicenseAgreement(api, id) {
    return api_1.GET(api, `/betaLicenseAgreements/${id}/relationships/app`)
}
exports.getAppResourceIDForBetaLicenseAgreement = getAppResourceIDForBetaLicenseAgreement
/**
 * Update the text for your beta license agreement.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function modifyBetaLicenseAgreement(api, id, body) {
    return api_1.PATCH(api, `/betaLicenseAgreements/${id}`, { body })
}
exports.modifyBetaLicenseAgreement = modifyBetaLicenseAgreement
