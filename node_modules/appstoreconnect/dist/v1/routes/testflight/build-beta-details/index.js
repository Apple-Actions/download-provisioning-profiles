'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const api_1 = require('../../../../api')
/**
 * Find and list build beta details for all builds.
 * @param query
 */
function listBuildBetaDetails(api, query) {
    return api_1.GET(api, `/buildBetaDetails`, { query })
}
exports.listBuildBetaDetails = listBuildBetaDetails
/**
 * Get a specific build beta details resource.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readBuildBetaDetailInformation(api, id, query) {
    return api_1.GET(api, `/buildBetaDetails/${id}`, { query })
}
exports.readBuildBetaDetailInformation = readBuildBetaDetailInformation
/**
 * Get the build information for a specific build beta details resource.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readBuildInformationForBuildBetaDetail(api, id, query) {
    return api_1.GET(api, `/buildBetaDetails/${id}/build`, { query })
}
exports.readBuildInformationForBuildBetaDetail = readBuildInformationForBuildBetaDetail
/**
 * Get the build resource ID for a specific build beta detail.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
function getBuildIDForBuildBetaDetail(api, id) {
    return api_1.GET(api, `/buildBetaDetails/${id}/relationships/build`)
}
exports.getBuildIDForBuildBetaDetail = getBuildIDForBuildBetaDetail
/**
 * Update beta test details for a specific build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function modifyBuildBetaDetail(api, id, body) {
    return api_1.PATCH(api, `/buildBetaDetails/${id}`, { body })
}
exports.modifyBuildBetaDetail = modifyBuildBetaDetail
