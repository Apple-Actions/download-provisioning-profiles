import { BundleIdPlatform } from '../bundle-ids/types'
import { ResourceType } from '../../../data'
import {
    DocumentLinks,
    PagedDocumentLinks,
    PagingInformation,
    ResourceLinks,
} from '../../../paging'
import { DateTime } from 'luxon'
export declare enum DeviceClass {
    APPLE_WATCH = 'APPLE_WATCH',
    IPAD = 'IPAD',
    IPHONE = 'IPHONE',
    IPOD = 'IPOD',
    APPLE_TV = 'APPLE_TV',
    MAC = 'MAC',
}
export interface DeviceCreateRequest {
    /**
     * (Required) The resource data.
     */
    data: {
        attributes: {
            name: string
            platform: BundleIdPlatform
            udid: string
        }
        type: ResourceType<'devices'>
    }
}
export interface DeviceUpdateRequest {
    /**
     * The resource data.
     */
    data: {
        attributes: {
            name: string
            status: DeviceStatus
        }
        id: string
        type: ResourceType<'devices'>
    }
}
export declare enum DeviceStatus {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED',
}
export interface DeviceAttributes {
    deviceClass: DeviceClass
    model: string
    name: string
    platform: BundleIdPlatform
    status: DeviceStatus
    udid: string
    addedDate: DateTime
}
/**
 * The data structure that represents the resource.
 */
export interface Device {
    /**
     * The resource's attributes.
     */
    attributes: DeviceAttributes
    /**
     * The opaque resource ID that uniquely identifies the resource.
     */
    id: string
    /**
     * The resource type.
     */
    type: ResourceType<'devices'>
    /**
     * Navigational links that include the self-link.
     */
    links: ResourceLinks
}
/**
 * A response containing a single resource.
 */
export interface DeviceResponse {
    /**
     * The resource data.
     */
    data: Device
    /**
     * Navigational links that include the self-link.
     */
    links: DocumentLinks
}
/**
 * A response containing a list of resources.
 */
export interface DevicesResponse {
    /**
     * The resource data.
     */
    data: Device[]
    /**
     * Navigational links that include the self-link.
     */
    links: PagedDocumentLinks
    /**
     * Paging information.
     */
    meta?: PagingInformation
}
