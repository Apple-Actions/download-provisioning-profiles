'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const api_1 = require('../../../../api')
/**
 * Submit an app for beta app review to allow external testing.
 * @param body
 */
function submitAppForBetaReview(api, body) {
    return api_1.POST(api, `/betaAppReviewSubmissions`, { body })
}
exports.submitAppForBetaReview = submitAppForBetaReview
/**
 * Find and list beta app review submissions for all builds.
 * @param query
 */
function listBetaAppReviewSubmissions(api, query) {
    return api_1.GET(api, `/betaAppReviewSubmissions`, { query })
}
exports.listBetaAppReviewSubmissions = listBetaAppReviewSubmissions
/**
 * Get a specific beta app review submission.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readBetaAppReviewSubmissionInformation(api, id, query) {
    return api_1.GET(api, `/betaAppReviewSubmissions/${id}`, { query })
}
exports.readBetaAppReviewSubmissionInformation = readBetaAppReviewSubmissionInformation
/**
 * Get the build information for a specific beta app review submission.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readBuildInformationForBetaAppReviewSubmission(api, id, query) {
    return api_1.GET(api, `/betaAppReviewSubmissions/${id}/build`, { query })
}
exports.readBuildInformationForBetaAppReviewSubmission = readBuildInformationForBetaAppReviewSubmission
/**
 * Get the build resource ID associated with a specific beta app review submission.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
function getBuildIDForBetaAppReviewSubmission(api, id) {
    return api_1.GET(api, `/betaAppReviewSubmissions/${id}/relationships/build`)
}
exports.getBuildIDForBetaAppReviewSubmission = getBuildIDForBetaAppReviewSubmission
