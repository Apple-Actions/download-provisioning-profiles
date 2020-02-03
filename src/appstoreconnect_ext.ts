import {
  DocumentLinks,
  PagedDocumentLinks,
  PagingInformation,
  ResourceLinks
} from 'appstoreconnect/dist/v1/paging'
import {Data, Links, ResourceType} from 'appstoreconnect/dist/v1/data'
import {DateTime} from 'luxon'
import * as v1 from 'appstoreconnect/dist/api'

export declare enum BundleIdPlatform {
  /**
   * A string that represents iOS.
   */
  IOS = 'IOS',
  /**
   * A string that represents macOS.
   */
  MAC_OS = 'MAC_OS'
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

export declare enum ProfileState {
  ACTIVE = 'ACTIVE',
  INVALID = 'INVALID'
}

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
  TVOS_APP_INHOUSE = 'TVOS_APP_INHOUSE'
}

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
  ACCESS_WIFI_INFORMATION = 'ACCESS_WIFI_INFORMATION'
}

export declare enum CapabilityOptionKeyType {
  XCODE_5 = 'XCODE_5',
  XCODE_6 = 'XCODE_6',
  COMPLETE_PROTECTION = 'COMPLETE_PROTECTION',
  PROTECTED_UNLESS_OPEN = 'PROTECTED_UNLESS_OPEN',
  PROTECTED_UNTIL_FIRST_USER_AUTH = 'PROTECTED_UNTIL_FIRST_USER_AUTH'
}

export interface CapabilityOption {
  description?: string
  enabled?: boolean
  enabledByDefault?: boolean
  key?: CapabilityOptionKeyType
  name?: string
  supportsWildcard?: boolean
}

export declare enum CapabilitySettingKeyType {
  ICLOUD_VERSION = 'ICLOUD_VERSION',
  DATA_PROTECTION_PERMISSION_LEVEL = 'DATA_PROTECTION_PERMISSION_LEVEL'
}

export declare enum CapabilityAllowedInstancesType {
  ENTRY = 'ENTRY',
  SINGLE = 'SINGLE',
  MULTIPLE = 'MULTIPLE'
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

export interface BundleIdCapability {
  /**
   * (Required) The opaque resource ID that uniquely identifies the resource.
   */
  id: string
  /**
   * (Required) The resource type.
   */
  type: ResourceType<'bundleIdCapabilities'>
  /**
   * (Required) Navigational links that include the self-link.
   */
  links: ResourceLinks
  /**
   * The resource's attributes.
   */
  attributes: BundleIdCapabilityAttributes
  /**
   * Navigational links to related data and included resource types and IDs.
   */
  relationships?: {
    bundleId?: {
      data?: Data<'bundleIds'>
      links?: Links
    }
  }
}

declare type BundleIncludeType = Profile | BundleIdCapability

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

export declare type BundleIdsType =
  | 'bundleIdCapabilities'
  | 'identifier'
  | 'name'
  | 'platform'
  | 'profiles'
  | 'seedId'
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
export declare type BundleIdCapabilitiesType =
  | 'bundleId'
  | 'capabilityType'
  | 'settings'

interface ListBundleIdsQuery {
  filter?: {
    id?: string[]
    identifier?: string[]
    name?: string[]
    platform?: BundleIdPlatform[]
    seedId?: string[]
  }
  /**
   * Relationship data to include in the response.
   */
  include?: ('bundleIdCapabilities' | 'profiles')[]
  /**
   * Attributes by which to sort.
   */
  sort?: (
    | 'id'
    | '-id'
    | 'name'
    | '-name'
    | 'platform'
    | '-platform'
    | 'seedId'
    | '-seedId'
  )[]
  fields?: {
    bundleIds?: BundleIdsType[]
    profiles?: ProfilesType[]
    bundleIdCapabilities?: BundleIdCapabilitiesType[]
  }
}

export async function listBundleIds(
  api: v1.API,
  query: ListBundleIdsQuery
): Promise<BundleIdsResponse> {
  return v1.GET(api, '/bundleIds', {query})
}

export interface ReadBundleIdInformationQuery {
  fields?: {
    bundleIds?: BundleIdsType[]
    profiles?: ProfilesType[]
    bundleIdCapabilities?: BundleIdCapabilitiesType[]
  }
  /**
   * Relationship data to include in the response.
   */
  include?: ('bundleIdCapabilities' | 'profiles')[]
  limit?: {
    profiles?: number
  }
}

export interface BundleIdResponse {
  data: BundleId
  links: DocumentLinks
  included?: BundleIncludeType
}

export async function readBundleIdInformation(
  api: v1.API,
  id: string,
  query: ReadBundleIdInformationQuery
): Promise<BundleIdResponse> {
  return v1.GET(api, `/bundleIds/${id}`, {query})
}

export declare enum DeviceClass {
  APPLE_WATCH = 'APPLE_WATCH',
  IPAD = 'IPAD',
  IPHONE = 'IPHONE',
  IPOD = 'IPOD',
  APPLE_TV = 'APPLE_TV',
  MAC = 'MAC'
}

export interface DeviceAttributes {
  deviceClass?: DeviceClass
  model?: string
  name?: string
  platform?: BundleIdPlatform
  status?: 'ENABLED' | 'DISABLED'
  udid?: string
  addedDate?: DateTime
}

/**
 * The data structure that represents the resource.
 */
export interface Device {
  /**
   * The resource's attributes.
   */
  attributes?: DeviceAttributes
  /**
   * (Required) The opaque resource ID that uniquely identifies the resource.
   */
  id: string
  /**
   * (Required) The resource type.
   */
  type: ResourceType<'devices'>
  /**
   * (Required) Navigational links that include the self-link.
   */
  links: ResourceLinks
}

export declare enum CertificateType {
  IOS_DEVELOPMENT = 'IOS_DEVELOPMENT',
  IOS_DISTRIBUTION = 'IOS_DISTRIBUTION',
  MAC_APP_DISTRIBUTION = 'MAC_APP_DISTRIBUTION',
  MAC_INSTALLER_DISTRIBUTION = 'MAC_INSTALLER_DISTRIBUTION',
  MAC_APP_DEVELOPMENT = 'MAC_APP_DEVELOPMENT',
  DEVELOPER_ID_KEXT = 'DEVELOPER_ID_KEXT',
  DEVELOPER_ID_APPLICATION = 'DEVELOPER_ID_APPLICATION'
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

export interface Certificate {
  /**
   * The resource's attributes.
   */
  attributes?: CertificateAttributes
  /**
   * (Required) The opaque resource ID that uniquely identifies the resource.
   */
  id: string
  /**
   * (Required) The resource type.
   */
  type: ResourceType<'certificates'>
  /**
   * (Required) Navigational links that include the self-link.
   */
  links: ResourceLinks
}

declare type ProfilesIncludeType = BundleId | Device | Certificate

/**
 * A response containing a list of resources.
 */
export interface ProfilesResponse {
  /**
   * (Required) The resource data.
   */
  data: Profile[]
  /**
   * (Required) Navigational links that include the self-link.
   */
  links: PagedDocumentLinks

  /**
   * Paging information.
   */
  meta?: PagingInformation

  included?: ProfilesIncludeType[]
}

export declare type CertificatesType =
  | 'certificateContent'
  | 'certificateType'
  | 'csrContent'
  | 'displayName'
  | 'expirationDate'
  | 'name'
  | 'platform'
  | 'serialNumber'

export declare type DevicesType =
  | 'addedDate'
  | 'deviceClass'
  | 'model'
  | 'name'
  | 'platform'
  | 'status'
  | 'udid'

export interface ListAndDownloadProfilesQuery {
  fields?: {
    certificates?: CertificatesType[]
    devices?: DevicesType[]
    profiles?: ProfilesType[]
  }
  filter?: {
    id?: string[]
    name?: string[]
    profileState?: ProfileState[]
    profileType?: ProfileType[]
  }
  limit?: number
  include?: ('bundleId' | 'certificates' | 'devices')[]
  sort?: (
    | 'id'
    | '-id'
    | 'name'
    | '-name'
    | 'profileState'
    | '-profileState'
    | 'profileType'
    | '-profileType'
  )[]
}

/**
 * Find and list provisioning profiles and download their data.
 */
export async function listAndDownloadProfiles(
  api: v1.API,
  query: ListAndDownloadProfilesQuery
): Promise<ProfilesResponse> {
  return v1.GET(api, `/profiles`, {query})
}

export interface ProfileResponse {
  /**
   * (Required) The resource data.
   */
  data: Profile
  /**
   * (Required) Navigational links that include the self-link.
   */
  links: DocumentLinks
  included?: ProfilesIncludeType[]
}

export interface ReadAndDownloadProfileInformationQuery {
  fields?: {
    certificates?: CertificatesType[]
    devices?: DevicesType[]
    profiles?: ProfilesType[]
    bundleIds?: BundleIdsType[]
  }
  include?: ('bundleId' | 'certificates' | 'devices')[]
  limit?: {
    devices?: number
    certificates?: number
  }
}

/**
 * Get information for a specific provisioning profile and download its data.
 */
export async function readAndDownloadProfileInformation(
  api: v1.API,
  id: string,
  query: ReadAndDownloadProfileInformationQuery
): Promise<ProfileResponse> {
  return v1.GET(api, `/profiles/${id}`, {query})
}
