'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const api_1 = require('../../../../api')
/**
 * Find and list all available app encryption declarations.
 * @param query
 */
function listAppEncryptionDeclarations(api, query) {
    return api_1.GET(api, `/appEncryptionDeclarations`, { query })
}
exports.listAppEncryptionDeclarations = listAppEncryptionDeclarations
/**
 * Get information about a specific app encryption declaration.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readAppEncryptionDeclarationInformation(api, id, query) {
    return api_1.GET(api, `/appEncryptionDeclarations/${id}`, { query })
}
exports.readAppEncryptionDeclarationInformation = readAppEncryptionDeclarationInformation
/**
 * Get the app information from a specific app encryption declaration.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
function readAppInformationForAppEncryptionDeclaration(api, id, query) {
    return api_1.GET(api, `/appEncryptionDeclarations/${id}/app`, { query })
}
exports.readAppInformationForAppEncryptionDeclaration = readAppInformationForAppEncryptionDeclaration
/**
 * Get the app resource ID associated with a specific app encryption declaration.
 * @param id An opaque resource ID that uniquely identifies the resource.

 */
function getAppResourceIDForAppEncryptionDeclaration(api, id) {
    return api_1.GET(api, `/appEncryptionDeclarations/${id}/relationships/app`)
}
exports.getAppResourceIDForAppEncryptionDeclaration = getAppResourceIDForAppEncryptionDeclaration
/**
 * Assign one or more builds to an app encryption declaration.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
function assignBuildsToAppEncryptionDeclaration(api, id, body) {
    return api_1.POST(
        api,
        `/appEncryptionDeclarations/${id}/relationships/builds`,
        {
            body,
        }
    )
}
exports.assignBuildsToAppEncryptionDeclaration = assignBuildsToAppEncryptionDeclaration
