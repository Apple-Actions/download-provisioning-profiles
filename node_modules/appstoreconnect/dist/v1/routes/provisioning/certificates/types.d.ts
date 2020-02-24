import { ResourceType } from '../../../data'
import {
    DocumentLinks,
    PagedDocumentLinks,
    PagingInformation,
    ResourceLinks,
} from '../../../paging'
import { DateTime } from 'luxon'
import { BundleIdPlatform } from '../bundle-ids/types'
export declare enum CertificateType {
    IOS_DEVELOPMENT = 'IOS_DEVELOPMENT',
    IOS_DISTRIBUTION = 'IOS_DISTRIBUTION',
    MAC_APP_DISTRIBUTION = 'MAC_APP_DISTRIBUTION',
    MAC_INSTALLER_DISTRIBUTION = 'MAC_INSTALLER_DISTRIBUTION',
    MAC_APP_DEVELOPMENT = 'MAC_APP_DEVELOPMENT',
    DEVELOPER_ID_KEXT = 'DEVELOPER_ID_KEXT',
    DEVELOPER_ID_APPLICATION = 'DEVELOPER_ID_APPLICATION',
}
export interface CertificateAttributes {
    certificateContent?: string
    displayName?: string
    expirationDate?: DateTime
    name?: string
    platform?: BundleIdPlatform
    serialNumber?: string
    certificateType?: CertificateType
}
/**
 * The data structure that represents the resource.
 */
export interface Certificate {
    /**
     * The resource's attributes.
     */
    attributes?: CertificateAttributes
    /**
     * The opaque resource ID that uniquely identifies the resource.
     */
    id: string
    /**
     * The resource type.
     */
    type: ResourceType<'certificates'>
    /**
     * Navigational links that include the self-link.
     */
    links: ResourceLinks
}
/**
 * A request containing a single resource.
 */
export interface CertificateCreateRequest {
    /**
     * The resource data.
     */
    data: {
        attributes: {
            certificateType: CertificateType
            csrContent: string
        }
        type: ResourceType<'certificates'>
    }
}
/**
 * A response containing a single resource.
 */
export interface CertificateResponse {
    /**
     * The resource data.
     */
    data: Certificate
    /**
     * Navigational links that include the self-link.
     */
    links: DocumentLinks
}
/**
 * A response containing a list of resources.
 */
export interface CertificatesResponse {
    /**
     * The resource data.
     */
    data: Certificate[]
    /**
     * Navigational links that include the self-link.
     */
    links: PagedDocumentLinks
    /**
     * Paging information
     */
    meta?: PagingInformation
}
