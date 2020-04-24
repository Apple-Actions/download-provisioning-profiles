import { Data, Links, ResourceType } from '../../../data'
import {
    DocumentLinks,
    PagedDocumentLinks,
    PagingInformation,
} from '../../../paging'
import { Profile } from '../profiles/types'
import { BundleIdCapability } from '../bundle-id-capabilities/types'
export declare enum BundleIdPlatform {
    /**
     * A string that represents iOS.
     */
    IOS = 'IOS',
    /**
     * A string that represents macOS.
     */
    MAC_OS = 'MAC_OS',
}
/**
 * A request containing a single resource.
 */
export interface BundleIdCreateRequest {
    /**
     * The resource data.
     */
    data: {
        attributes: BundleIdAttributes
        type: ResourceType<'bundleIds'>
    }
}
/**
 * A response containing a single resource.
 */
export interface BundleIdResponse {
    /**
     * The resource data.
     */
    data: BundleId
    /**
     * Navigational links that include the self-link.
     */
    links: DocumentLinks
    /**
     * The requested relationship data.
     */
    included?: (Profile | BundleIdCapability)[]
}
/**
 * A request containing a single resource.
 */
export interface BundleIdUpdateRequest {
    /**
     * The resource data.
     */
    data: {
        attributes: {
            name: string
        }
        id: string
        type: ResourceType<'bundleIds'>
    }
}
export interface BundleIdAttributes {
    identifier: string
    name: string
    platform: BundleIdPlatform
    seedId: string
}
export interface BundleId {
    /**
     * (Required) The opaque resource ID that uniquely identifies the resource.
     */
    id: string
    /**
     * The resource's attributes.
     */
    attributes: BundleIdAttributes
    /**
     * Navigational links to related data and included resource types and IDs.
     */
    relationships?: {
        profiles: {
            data?: Data<'profiles'>[]
            links?: Links
            meta?: PagingInformation
        }
        bundleIdCapabilities: {
            data?: Data<'bundleIdCapabilities'>[]
            links?: Links
            meta?: PagingInformation
        }
    }
}
export declare type BundleIncludeType = Profile | BundleIdCapability
export interface BundleIdsResponse {
    /**
     * The resource data.
     */
    data: BundleId[]
    /**
     * Navigational links that include the self-link.
     */
    links: PagedDocumentLinks
    /**
     * The requested relationship data.
     */
    included?: BundleIncludeType[]
    /**
     * Paging information.
     */
    meta?: PagingInformation
}
/**
 * A response containing a list of related resource IDs.
 */
export interface BundleIdProfilesLinkagesResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'profiles'>[]
    /**
     * Navigational links including the self-link and links to the related data.
     */
    links: PagedDocumentLinks
    /**
     * Paging information
     */
    meta?: PagingInformation
}
/**
 * A response containing a list of related resource IDs.
 */
export interface BundleIdBundleIdCapabilitiesLinkagesResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'bundleIdCapabilities'>[]
    /**
     * Navigational links including the self-link and links to the related data.
     */
    links: PagedDocumentLinks
    /**
     * Paging information.
     */
    meta?: PagingInformation
}
