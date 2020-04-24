import { Data, Links, ResourceType } from '../../../data'
import {
    DocumentLinks,
    PagedDocumentLinks,
    PagingInformation,
    ResourceLinks,
} from '../../../paging'
import { BundleId, BundleIdPlatform } from '../bundle-ids/types'
import { Device } from '../devices/types'
import { DateTime } from 'luxon'
import { Certificate } from '../certificates/types'
export declare enum ProfileType {
    IOS_APP_DEVELOPMENT = 'IOS_APP_DEVELOPMENT',
    IOS_APP_STORE = 'IOS_APP_STORE',
    IOS_APP_ADHOC = 'IOS_APP_ADHOC',
    IOS_APP_INHOUSE = 'IOS_APP_INHOUSE',
    MAC_APP_DEVELOPMENT = 'MAC_APP_DEVELOPMENT',
    MAC_APP_STORE = 'MAC_APP_STORE',
    MAC_APP_DIRECT = 'MAC_APP_DIRECT',
    TVOS_APP_DEVELOPMENT = 'TVOS_APP_DEVELOPMENT',
    TVOS_APP_STORE = 'TVOS_APP_STORE',
    TVOS_APP_ADHOC = 'TVOS_APP_ADHOC',
    TVOS_APP_INHOUSE = 'TVOS_APP_INHOUSE',
}
export interface ProfileCreateRequest {
    /**
     * (Required) The resource data.
     */
    data: {
        /**
         * The resource's attributes.
         */
        attributes: {
            name: string
            profileType: ProfileType
        }
        /**
         * Navigational links to related data and included resource types and IDs.
         */
        relationships: {
            bundleId: Data<'bundleIds'>
            certificates: Data<'certificates'>[]
            devices?: Data<'devices'>[]
        }
        /**
         * The resource type.
         */
        type: ResourceType<'profiles'>
    }
}
export declare enum ProfileState {
    ACTIVE = 'ACTIVE',
    INVALID = 'INVALID',
}
export declare type ProfilesType =
    | 'bundleId'
    | 'certificates'
    | 'createdDate'
    | 'devices'
    | 'expirationDate'
    | 'name'
    | 'platform'
    | 'profileContent'
    | 'profileState'
    | 'profileType'
    | 'uuid'
export interface ProfileAttributes {
    name?: string
    platform?: BundleIdPlatform
    profileContent?: string
    uuid?: string
    createdDate?: DateTime
    profileState?: ProfileState
    profileType?: ProfileType
    expirationDate: DateTime
}
export interface Profile {
    /**
     * (Required) The opaque resource ID that uniquely identifies the resource
     */
    id: string
    /**
     * (Required) The resource type.
     */
    type: ResourceType<'profiles'>
    /**
     * (Required) Navigational links that include the self-link.
     */
    links: ResourceLinks
    /**
     * The resource's attributes.
     */
    attributes: ProfileAttributes
    /**
     * Navigational links to related data and included resource types and IDs.
     */
    relationships?: {
        certificates?: {
            data?: Data<'certificates'>[]
            links?: Links
            meta?: PagingInformation
        }
        devices?: {
            data?: Data<'devices'>[]
            links?: Links
            meta?: PagingInformation
        }
        bundleId?: {
            data?: Data<'bundleIds'>[]
            links?: Links
        }
    }
}
export declare type ProfileResponseIncluded = BundleId | Device | Certificate
/**
 * A response containing a single resource.
 */
export interface ProfileResponse {
    data: Profile
    links: DocumentLinks
    included?: ProfileResponseIncluded[]
}
/**
 * A response containing a list of resources.
 */
export interface ProfilesResponse {
    /**
     * The resource data.
     */
    data: Profile[]
    /**
     * Navigational links that include the self-link.
     */
    links: PagedDocumentLinks
    /**
     * Paging information.
     */
    meta?: PagingInformation
    included?: ProfileResponseIncluded[]
}
/**
 * A response containing the ID of the related resource.
 */
export interface ProfileBundleIdLinkageResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'bundleIds'>
    /**
     * Navigational links including the self-link and links to the related data.
     */
    links: DocumentLinks
}
/**
 * A response containing a list of related resource IDs.
 */
export interface ProfileCertificatesLinkagesResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'certificates'>[]
    /**
     * Navigational links including the self-link and links to the related data.
     */
    links: PagedDocumentLinks
    /**
     * Paging information.
     */
    meta?: PagingInformation
}
export interface ProfileDevicesLinkagesResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'devices'>[]
    /**
     * Navigational links including the self-link and links to the related data.
     */
    links: PagedDocumentLinks
    /**
     * Paging information.
     */
    meta?: PagingInformation
}
