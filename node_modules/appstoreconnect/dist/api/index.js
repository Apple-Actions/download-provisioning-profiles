'use strict'
var __rest =
    (this && this.__rest) ||
    function(s, e) {
        var t = {}
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p]
        if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (
                var i = 0, p = Object.getOwnPropertySymbols(s);
                i < p.length;
                i++
            )
                if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]]
        return t
    }
var __importDefault =
    (this && this.__importDefault) ||
    function(mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
const got_1 = __importDefault(require('got'))
const luxon_1 = require('luxon')
const qs_1 = __importDefault(require('qs'))
const url_1 = require('url')
function makeAPI(baseUrl, token) {
    return { baseUrl, token: token || null }
}
exports.makeAPI = makeAPI
class APIError extends Error {
    constructor(response, code, message) {
        super(`${code} ${message}`)
        this.response = response
    }
}
exports.APIError = APIError
var ContentType
;(function(ContentType) {
    ContentType['JSON'] = 'application/json'
    ContentType['GZIP'] = 'application/a-gzip'
})((ContentType = exports.ContentType || (exports.ContentType = {})))
function HEAD(api, path, options = {}) {
    return call(api, path, 'HEAD', options)
}
exports.HEAD = HEAD
function GET(api, path, options = {}) {
    return call(api, path, 'GET', options)
}
exports.GET = GET
function POST(api, path, options = {}) {
    return call(api, path, 'POST', options)
}
exports.POST = POST
function PUT(api, path, options = {}) {
    return call(api, path, 'PUT', options)
}
exports.PUT = PUT
function PATCH(api, path, options = {}) {
    return call(api, path, 'PATCH', options)
}
exports.PATCH = PATCH
function DELETE(api, path, options = {}) {
    return call(api, path, 'DELETE', options)
}
exports.DELETE = DELETE
async function call(api, path, method, options = {}) {
    let rawResponse
    try {
        rawResponse = await got_1.default(path, {
            baseUrl: api.baseUrl,
            method,
            headers: headers(api.token, options.contentType),
            query: query(options.query),
            body: body(options.body),
        })
    } catch (error) {
        throw new Error(error.response.body)
    }
    const { body: responseBody } = rawResponse,
        response = __rest(rawResponse, ['body'])
    if (!body) {
        return undefined
    } else if (options.contentType === ContentType.GZIP) {
        return body
    } else {
        return json(responseBody, response)
    }
}
function headers(token, contentType = ContentType.JSON) {
    const defaultHeaders = {
        'content-type': contentType,
    }
    let headers = defaultHeaders
    if (token) {
        headers = Object.assign({}, headers, {
            authorization: `Bearer ${token}`,
        })
    }
    return headers
}
function json(body, response) {
    let json
    try {
        json = JSON.parse(body, jsonParser)
    } catch (jsonError) {
        throw jsonError
    }
    if (json.errors && Array.isArray(json.errors)) {
        throw new APIError(json, response.statusCode, response.statusMessage)
    }
    return json
}
function jsonParser(_key, value) {
    if (typeof value === 'string') {
        const url = urlStringToURL(value)
        if (url) {
            return url
        }
        const date = dateStringToDate(value)
        if (date) {
            return date
        }
    }
    return value
}
function urlStringToURL(value) {
    try {
        const url = new url_1.URL(value)
        if (url) {
            return url
        }
    } catch (_a) {}
}
function dateStringToDate(value) {
    const date = luxon_1.DateTime.fromISO(value)
    if (date.isValid) {
        return date
    }
}
const isObject = value => typeof value === 'object' && value !== null
const isDateTime = value => (value && value.isLuxonDateTime) || false
const isURL = value =>
    (value && value.href && typeof value.href === 'string') || false
function query(object) {
    if (object === undefined) {
        return
    }
    return qs_1.default.stringify(sanitize(object), {
        arrayFormat: 'repeat',
        encodeValuesOnly: true,
    })
}
function sanitize(object) {
    if (isObject(object)) {
        if (Array.isArray(object)) {
            object = object.map(sanitize)
        } else if (isDateTime(object)) {
            object = object.toISO()
        } else if (isURL(object)) {
            object = object.href
        } else {
            object = Object.entries(object).reduce(
                (acc, [key, value]) =>
                    Object.assign({}, acc, { [key]: sanitize(value) }),
                {}
            )
        }
    }
    return object
}
function body(object) {
    if (object === undefined) {
        return
    }
    const json = JSON.stringify(object)
    console.log(json)
    return json
}
