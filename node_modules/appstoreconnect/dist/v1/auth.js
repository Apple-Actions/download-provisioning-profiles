'use strict'
var __importDefault =
    (this && this.__importDefault) ||
    function(mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
const jsonwebtoken_1 = __importDefault(require('jsonwebtoken'))
const jwtOptions = (iss, kid) => ({
    algorithm: 'ES256',
    keyid: kid,
    audience: 'appstoreconnect-v1',
    expiresIn: 1200,
    issuer: iss,
})
function token(privateKey, issuerId, keyId) {
    return jsonwebtoken_1.default.sign(
        {},
        privateKey,
        jwtOptions(issuerId, keyId)
    )
}
exports.token = token
function tokenAsync(privateKey, issuerId, keyId) {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.sign(
            {},
            privateKey,
            jwtOptions(issuerId, keyId),
            (err, token) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(token)
            }
        )
    })
}
exports.tokenAsync = tokenAsync
