/**
 * Detailed error information returned in the response body whenever an API
 * request is not successful.
 */
export interface ErrorResponse {
    /**
     * An array of one or more errors.
     */
    errors: Error[]
}
/**
 * The details about one error that is returned when an API request is not
 * successful.
 */
export interface Error {
    /**
     * A machine-readable code indicating the type of error. The code is a
     * hierarchical value with levels of specificity separated by the '.'
     * character. This value is parseable for programmatic error handling
     * in code.
     */
    code: string
    /**
     * The HTTP status code of the error. This status code usually matches
     * the response's status code; however, if the request produces multiple
     * errors, these two codes may differ.
     */
    status: string
    /**
     * The unique ID of a specific instance of an error, request, and response.
     * Use this ID when providing feedback to or debugging issues with Apple.
     */
    id?: string
    /**
     * A summary of the error. Do not use this field for programmatic error
     * handling.
     */
    title: string
    /**
     * A detailed explanation of the error. Do not use this field for
     * programmatic error handling.
     */
    detail: string
    /**
     * One of two possible types of values:
     *  * source.parameter, provided when a query parameter produced the error, or;
     *  * source.JsonPointer, provided when a problem with the entity produced
     *      the error.
     */
    source: JsonPointer | Parameter
}
/**
 * An object containing the JSON pointer that indicates the location of the
 * error.
 */
export interface JsonPointer {
    /**
     * A JSON pointer that indicates the location in the request entity
     * where the error originates.
     */
    pointer?: string
}
/**
 * An object containing the query parameter that produced the error.
 */
export interface Parameter {
    /**
     * The query parameter that produced the error.
     */
    parameter?: string
}
