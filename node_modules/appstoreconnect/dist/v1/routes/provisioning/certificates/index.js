'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const api_1 = require('../../../../api')
/**
 * Create a new certificate using a certificate signing request.
 */
function createCertificate(api, body) {
    return api_1.POST(api, '/certificates', { body })
}
exports.createCertificate = createCertificate
/**
 * Find and list certificates and download their data.
 */
function listAndDownloadCertificates(api, query) {
    return api_1.GET(api, '/certificates', { query })
}
exports.listAndDownloadCertificates = listAndDownloadCertificates
/**
 * Get information about a certificate and download the certificate data.
 */
function readAndDownloadCertificateInformation(api, id, query) {
    return api_1.GET(api, `/certificates/${id}`, { query })
}
exports.readAndDownloadCertificateInformation = readAndDownloadCertificateInformation
/**
 * Get information about a certificate and download the certificate data.
 */
function revokeCertificate(api, id) {
    return api_1.DELETE(api, `/certificates/${id}`)
}
exports.revokeCertificate = revokeCertificate
