import {
    DocumentLinks,
    PagedDocumentLinks,
    PagingInformation,
    ResourceLinks,
} from '../../../paging'
import { Data, Links, ResourceType } from '../../../data'
export declare enum CapabilityType {
    ICLOUD = 'ICLOUD',
    IN_APP_PURCHASE = 'IN_APP_PURCHASE',
    GAME_CENTER = 'GAME_CENTER',
    PUSH_NOTIFICATIONS = 'PUSH_NOTIFICATIONS',
    WALLET = 'WALLET',
    INTER_APP_AUDIO = 'INTER_APP_AUDIO',
    MAPS = 'MAPS',
    ASSOCIATED_DOMAINS = 'ASSOCIATED_DOMAINS',
    PERSONAL_VPN = 'PERSONAL_VPN',
    APP_GROUPS = 'APP_GROUPS',
    HEALTHKIT = 'HEALTHKIT',
    HOMEKIT = 'HOMEKIT',
    WIRELESS_ACCESSORY_CONFIGURATION = 'WIRELESS_ACCESSORY_CONFIGURATION',
    APPLE_PAY = 'APPLE_PAY',
    DATA_PROTECTION = 'DATA_PROTECTION',
    SIRIKIT = 'SIRIKIT',
    NETWORK_EXTENSIONS = 'NETWORK_EXTENSIONS',
    MULTIPATH = 'MULTIPATH',
    HOT_SPOT = 'HOT_SPOT',
    NFC_TAG_READING = 'NFC_TAG_READING',
    CLASSKIT = 'CLASSKIT',
    AUTOFILL_CREDENTIAL_PROVIDER = 'AUTOFILL_CREDENTIAL_PROVIDER',
    ACCESS_WIFI_INFORMATION = 'ACCESS_WIFI_INFORMATION',
}
export declare enum CapabilityAllowedInstancesType {
    ENTRY = 'ENTRY',
    SINGLE = 'SINGLE',
    MULTIPLE = 'MULTIPLE',
}
export declare enum CapabilitySettingKeyType {
    ICLOUD_VERSION = 'ICLOUD_VERSION',
    DATA_PROTECTION_PERMISSION_LEVEL = 'DATA_PROTECTION_PERMISSION_LEVEL',
}
export declare enum CapabilityOptionKeyType {
    XCODE_5 = 'XCODE_5',
    XCODE_6 = 'XCODE_6',
    COMPLETE_PROTECTION = 'COMPLETE_PROTECTION',
    PROTECTED_UNLESS_OPEN = 'PROTECTED_UNLESS_OPEN',
    PROTECTED_UNTIL_FIRST_USER_AUTH = 'PROTECTED_UNTIL_FIRST_USER_AUTH',
}
export interface CapabilityOption {
    description?: string
    enabled?: boolean
    enabledByDefault?: boolean
    key?: CapabilityOptionKeyType
    name?: string
    supportsWildcard?: boolean
}
export interface CapabilitySetting {
    allowedInstances?: CapabilityAllowedInstancesType
    description?: string
    enabledByDefault?: boolean
    key?: CapabilitySettingKeyType
    name?: string
    options?: CapabilityOption[]
    visible?: boolean
    minInstances?: number
}
export interface BundleIdCapabilityAttributes {
    capabilityType?: CapabilityType
    settings?: CapabilitySetting[]
}
/**
 * The data structure that represents the resource.
 */
export interface BundleIdCapability {
    /**
     * The resource's attributes.
     */
    attributes?: BundleIdCapabilityAttributes
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
        bundleId?: {
            data?: Data<'bundleIds'>
            links?: Links
        }
    }
    /**
     * The resource type.
     */
    type: ResourceType<'bundleIdCapabilities'>
}
/**
 * A request containing a single resource.
 */
export interface BundleIdCapabilityCreateRequest {
    /**
     * The resource data.
     */
    data: {
        attributes: {
            capabilityType: CapabilityType
            settings?: CapabilitySetting[]
        }
        relationships: {
            bundleId?: {
                data?: Data<'bundleIds'>
            }
        }
        type: ResourceType<'bundleIdCapabilities'>
    }
}
/**
 * A request containing a single resource.
 */
export interface BundleIdCapabilityUpdateRequest {
    /**
     * The resource data.
     */
    data: {
        attributes?: {
            capabilityType?: CapabilityType
            settings?: CapabilitySetting[]
        }
        id: string
        type: ResourceType<'bundleIdCapabilities'>
    }
}
/**
 * A response containing a single resource.
 */
export interface BundleIdCapabilityResponse {
    /**
     * The resource data.
     */
    data: BundleIdCapability
    /**
     * Navigational links that include the self-link.
     */
    links: DocumentLinks
}
/**
 * A response containing a list of resources.
 */
export interface BundleIdCapabilitiesResponse {
    /**
     * The resource data.
     */
    data: BundleIdCapability[]
    /**
     * Navigational links that include the self-link.
     */
    links: PagedDocumentLinks
    /**
     * Paging information.
     */
    meta?: PagingInformation
}
