/**
 * Links related to the response document, including paging links.
 *
 * All the response data constitutes a document.
 */
export interface PagedDocumentLinks {
    /**
     * The link to the first page of documents.
     */
    first?: URL
    /**
     * The link to the next page of documents.
     */
    next?: URL
    /**
     * The link that produced the current document.
     */
    self?: URL
}
/**
 * Paging information for data responses.
 */
export interface PagingInformation {
    /**
     * The paging information details.
     */
    paging: Paging
}
/**
 * Paging details such as the total number of resources and the per-page limit.
 *
 * Adjust the number of resources returned per page by using the limit query
 * parameter in your request. For example, the following request returns the
 * first 10 testers:
 * @example
 * GET /v1/betaTesters?limit=10
 */
export interface Paging {
    /**
     * The total number of resources matching your request.
     */
    total: number
    /**
     * The maximum number of resources to return per page, from 0 to 200.
     */
    limit: number
}
/**
 * Self-links to requested resources.
 */
export interface ResourceLinks {
    /**
     * The link to the resource.
     */
    self: URL
}
/**
 * Self-links to documents that can contain information for one or more
 * resources.
 *
 * All the response data constitutes a document.
 */
export interface DocumentLinks {
    /**
     * The link that produced the current document.
     */
    self: URL
}
