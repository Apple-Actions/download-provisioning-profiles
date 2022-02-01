import { API } from '../../../../api'
import {
    ProfileBundleIdLinkageResponse,
    ProfileCertificatesLinkagesResponse,
    ProfileCreateRequest,
    ProfileDevicesLinkagesResponse,
    ProfileResponse,
    ProfilesResponse,
    ProfileState,
    ProfilesType,
    ProfileType,
} from './types'
import { BundleIdResponse } from '../bundle-ids/types'
import { CertificatesResponse } from '../certificates/types'
import { DevicesResponse } from '../devices/types'
import { CertificatesType } from '../certificates'
import { DevicesType } from '../devices'
import { BundleIdsType } from '../bundle-ids'
/**
 * Create a new provisioning profile.
 */
export declare function createProfile(
    api: API,
    body: ProfileCreateRequest
): Promise<ProfileResponse>
/**
 * Delete a provisioning profile that is used for app development or distribution.
 */
export declare function deleteProfile(api: API, id: string): Promise<void>
/**
 * Find and list provisioning profiles and download their data.
 */
export declare function listAndDownloadProfiles(
    api: API,
    query: ListAndDownloadProfilesQuery
): Promise<ProfilesResponse>
/**
 * Find and list provisioning profiles and download their data.
 */
export declare function readAndDownloadProfileInformation(
    api: API,
    id: string,
    query: ReadAndDownloadProfileInformationQuery
): Promise<ProfileResponse>
/**
 * Get the bundle ID information for a specific provisioning profile.
 */
export declare function readBundleIdForProfile(
    api: API,
    id: string,
    query: ReadBundleIdForProfileQuery
): Promise<BundleIdResponse>
/**
 * Get the resource ID of a bundle associated with a specific provisioning profile.
 */
export declare function getBundleResourceIdForProfile(
    api: API,
    id: string
): Promise<ProfileBundleIdLinkageResponse>
/**
 * Get a list of all certificates and their data for a specific provisioning profile.
 */
export declare function listAllCertificatesForProfile(
    api: API,
    id: string,
    query: ListAllCertificatesForProfileQuery
): Promise<CertificatesResponse>
/**
 * Get the resource IDs of all certificates associated with a specific provisioning profile.
 */
export declare function getAllCertificateIdsForProfile(
    api: API,
    id: string,
    query: GetAllCertificateIdsForProfileQuery
): Promise<ProfileCertificatesLinkagesResponse>
/**
 * Get a list of all devices for a specific provisioning profile.
 */
export declare function listAllDevicesForProfile(
    api: API,
    id: string,
    query: ListAllDevicesForProfileQuery
): Promise<DevicesResponse>
/**
 * Get the resource IDs of all devices associated with a specific provisioning profile.
 */
export declare function getAllDeviceResourceIdsForProfile(
    api: API,
    id: string,
    query: GetAllDeviceResourceIdsForProfileQuery
): Promise<ProfileDevicesLinkagesResponse>
declare type ListAndDownloadProfilesQuerySortOptions =
    | 'id'
    | '-id'
    | 'name'
    | '-name'
    | 'profileState'
    | '-profileState'
    | 'profileType'
    | '-profileType'
interface ListAndDownloadProfilesQuery {
    fields?: {
        certificates?: CertificatesType[]
        devices?: DevicesType[]
        profiles?: ProfilesType[]
        bundleIds?: BundleIdsType[]
    }
    filter?: {
        id?: string[]
        name?: string[]
        profileState?: ProfileState[]
        profileType?: ProfileType[]
    }
    limit?: number
    sort?: ListAndDownloadProfilesQuerySortOptions[]
}
interface ReadAndDownloadProfileInformationQuery {
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
interface ReadBundleIdForProfileQuery {
    fields?: {
        bundleIds?: BundleIdsType[]
    }
}
interface ListAllCertificatesForProfileQuery {
    limit?: number
    fields?: {
        certificates?: CertificatesType[]
    }
}
interface GetAllCertificateIdsForProfileQuery {
    limit?: number
}
interface ListAllDevicesForProfileQuery {
    limit?: number
    fields?: {
        devices?: DevicesType[]
    }
}
interface GetAllDeviceResourceIdsForProfileQuery {
    limit?: number
}
export {}
