'use strict'
var __importStar =
    (this && this.__importStar) ||
    function(mod) {
        if (mod && mod.__esModule) return mod
        var result = {}
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k]
        result['default'] = mod
        return result
    }
Object.defineProperty(exports, '__esModule', { value: true })
const api = __importStar(require('../api'))
const auth = __importStar(require('./auth'))
const routes = __importStar(require('./routes'))
const V1_BASEURL = 'https://api.appstoreconnect.apple.com/v1'
function v1(token) {
    return api.makeAPI(V1_BASEURL, token)
}
exports.v1 = v1
;(function(v1) {
    v1.provisioning = routes.provisioning
    v1.testflight = routes.testflight
    v1.users = routes.users
    v1.userInvitations = routes.userInvitations
    v1.financeReports = routes.financeReports
    v1.token = auth.token
    v1.tokenAsync = auth.tokenAsync
})((v1 = exports.v1 || (exports.v1 = {})))
