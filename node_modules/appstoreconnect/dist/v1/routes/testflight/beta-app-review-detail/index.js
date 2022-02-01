'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const api_1 = require('../../../../api')
/**
 * Find and list beta app review details for all apps.
 * @param query
 */
function listBetaAppReviewDetails(api, query) {
    return api_1.GET(api, '/betaAppReviewDetails', { query })
}
exports.listBetaAppReviewDetails = listBetaAppReviewDetails
/**
 * Find and list beta app review details for all apps.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readBetaAppReviewDetailInformation(api, id, query) {
    return api_1.GET(api, `/betaAppReviewDetails/${id}`, { query })
}
exports.readBetaAppReviewDetailInformation = readBetaAppReviewDetailInformation
/**
 * Get the app information for a specific beta app review details resource.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readAppInformationForBetaAppReviewDetail(api, id, query) {
    return api_1.GET(api, `/betaAppReviewDetails/${id}/app`, { query })
}
exports.readAppInformationForBetaAppReviewDetail = readAppInformationForBetaAppReviewDetail
/**
 * Get the app resource ID associated with an app review detail.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
function getAppResourceIDForBetaAppReviewDetailsResource(api, id) {
    return api_1.GET(api, `/betaAppReviewDetails/${id}/relationships/app`)
}
exports.getAppResourceIDForBetaAppReviewDetailsResource = getAppResourceIDForBetaAppReviewDetailsResource
/**
 * Update the details for a specific app's beta app review.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function modifyBetaAppReviewDetail(api, id, body) {
    return api_1.PATCH(api, `/betaAppReviewDetails/${id}`, { body })
}
exports.modifyBetaAppReviewDetail = modifyBetaAppReviewDetail
