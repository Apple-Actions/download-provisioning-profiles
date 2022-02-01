import { Data, Links, ResourceType } from '../../../data'
import {
    DocumentLinks,
    PagedDocumentLinks,
    PagingInformation,
    ResourceLinks,
} from '../../../paging'
import { App, Platform } from '../apps/types'
import { Build } from '../builds/types'
/**
 * The data structure that represents the resource.
 */
export interface PrereleaseVersion {
    /**
     * The resource's attributes.
     */
    attributes?: {
        /**
         * The platform of the prerelease version of your app.
         */
        platform?: Platform
        /**
         * The version number of the prerelease version of your app.
         */
        version?: string
    }
    /**
     * The opaque resource ID that uniquely identifies the resource.
     */
    id: string
    /**
     * Navigational links that include the self-link.
     */
    links: ResourceLinks
    /**
     * Navigational links to related data and included resource types and IDs.
     */
    relationships?: {
        app?: {
            data?: Data<'apps'>
            links?: Links
        }
        builds?: {
            data?: Data<'builds'>[]
            links?: Links
            meta?: PagingInformation
        }
    }
    /**
     * The resource type.
     */
    type: ResourceType<'preReleaseVersions'>
}
/**
 * A response containing the ID of the related resource.
 */
export interface PrereleaseVersionAppLinkageResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'builds'>
    /**
     * Navigational links that include the self-link.
     */
    links: DocumentLinks
}
/**
 * A response containing a list of related resource IDs.
 */
export interface PrereleaseVersionBuildsLinkagesResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'builds'>[]
    /**
     * Navigational links that include the self-link.
     */
    links: PagedDocumentLinks
    /**
     * Paging information.
     */
    meta?: PagingInformation
}
/**
 * A response containing a single resource.
 */
export interface PrereleaseVersionResponse {
    /**
     * The resource data.
     */
    data: PrereleaseVersion
    /**
     * The requested relationship data.
     */
    include?: (Build | App)[]
    /**
     * Navigational links that include the self-link.
     */
    links: DocumentLinks
}
/**
 * A response containing a list of resources.
 */
export interface PreReleaseVersionsResponse {
    /**
     * The resource data.
     */
    data: PrereleaseVersion[]
    /**
     * The requested relationship data.
     */
    include?: (Build | App)[]
    /**
     * Navigational links that include the self-link.
     */
    links: PagedDocumentLinks
    /**
     * Paging information.
     */
    meta?: PagingInformation
}
