import { ErrorResponse } from '../v1/error'
export interface API {
    baseUrl: string
    token: string | null
}
export declare function makeAPI(baseUrl: string, token?: string): API
export declare class APIError extends Error {
    readonly response: ErrorResponse
    constructor(response: ErrorResponse, code?: number, message?: string)
}
export declare enum ContentType {
    JSON = 'application/json',
    GZIP = 'application/a-gzip',
}
interface APIOptions {
    query?: object
    body?: object
    contentType?: ContentType
}
export declare function HEAD<T>(
    api: API,
    path: string,
    options?: APIOptions
): Promise<T>
export declare function GET<T>(
    api: API,
    path: string,
    options?: APIOptions
): Promise<T>
export declare function POST<T>(
    api: API,
    path: string,
    options?: APIOptions
): Promise<T>
export declare function PUT<T>(
    api: API,
    path: string,
    options?: APIOptions
): Promise<T>
export declare function PATCH<T>(
    api: API,
    path: string,
    options?: APIOptions
): Promise<T>
export declare function DELETE<T>(
    api: API,
    path: string,
    options?: APIOptions
): Promise<T>
export {}
