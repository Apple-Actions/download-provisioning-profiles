import { API } from '../../../../api'
import {
    BundleIdBundleIdCapabilitiesLinkagesResponse,
    BundleIdCreateRequest,
    BundleIdPlatform,
    BundleIdProfilesLinkagesResponse,
    BundleIdResponse,
    BundleIdsResponse,
    BundleIdUpdateRequest,
} from './types'
import { ProfilesResponse, ProfilesType } from '../profiles/types'
import { ResourceType } from '../../../data'
import { BundleIdCapabilitiesResponse } from '../bundle-id-capabilities/types'
/**
 * Register a new bundle ID for app development.
 */
export declare function registerNewBundleId(
    api: API,
    body: BundleIdCreateRequest
): Promise<BundleIdResponse>
/**
 * Update a specific bundle ID’s name.
 */
export declare function modifyBundleId(
    api: API,
    id: string,
    body: BundleIdUpdateRequest
): Promise<BundleIdResponse>
/**
 * Delete a bundle ID that is used for app development.
 */
export declare function deleteBundleId(api: API, id: string): Promise<void>
/**
 * Find and list bundle IDs that are registered to your team.
 */
export declare function listBundleIds(
    api: API,
    query: ListBundleIdsQuery
): Promise<BundleIdsResponse>
/**
 * Get information about a specific bundle ID.
 */
export declare function readBundleIdInformation(
    api: API,
    id: string,
    query: ReadBundleIdInformationQuery
): Promise<BundleIdsResponse>
/**
 * Get the resource IDs for all profiles associated with a specific bundle ID.
 */
export declare function getAllProfileIdsForBundleId(
    api: API,
    id: string,
    query: GetAllProfileIdsForBundleIdQuery
): Promise<BundleIdProfilesLinkagesResponse>
/**
 * Get a list of all profiles for a specific bundle ID.
 */
export declare function listAllProfilesForBundleId(
    api: API,
    id: string,
    query: ListAllProfilesForBundleIdQuery
): Promise<ProfilesResponse>
/**
 * Get the resource IDs for all capabilities associated with a specific bundle ID.
 */
export declare function getAllCapabililityIdsForBundleId(
    api: API,
    id: string,
    query: GetAllCapabililityIdsForBundleIdQuery
): Promise<BundleIdBundleIdCapabilitiesLinkagesResponse>
/**
 * Get a list of all capabilities for a specific bundle ID.
 */
export declare function listAllCapabilitiesForBundleId(
    api: API,
    id: string,
    query: ListAllCapabilitiesForBundleIdQuery
): Promise<BundleIdCapabilitiesResponse>
export declare type BundleIdsType =
    | 'bundleIdCapabilities'
    | 'identifier'
    | 'name'
    | 'platform'
    | 'profiles'
    | 'seedId'
declare type BundleIdCapabilitiesType =
    | 'bundleId'
    | 'capabilityType'
    | 'settings'
declare type ListBundleIdsQuerySortOptions =
    | 'id'
    | '-id'
    | 'name'
    | '-name'
    | 'platform'
    | '-platform'
    | 'seedId'
    | '-seedId'
declare type BundleIdsInclude =
    | ResourceType<'bundleIdCapabilities'>
    | ResourceType<'profiles'>
interface BundleIdsQueryFields {
    bundleIds?: BundleIdsType[]
    profiles?: ProfilesType[]
    bundleIdCapabilities?: BundleIdCapabilitiesType[]
}
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
    include?: BundleIdsInclude[]
    /**
     * Attributes by which to sort.
     */
    sort?: ListBundleIdsQuerySortOptions[]
    fields?: BundleIdsQueryFields
}
interface ReadBundleIdInformationQuery {
    fields?: BundleIdsQueryFields
    /**
     * Relationship data to include in the response.
     */
    include?: BundleIdsInclude[]
    limit?: {
        profiles: number
    }
}
interface GetAllProfileIdsForBundleIdQuery {
    limit?: number
}
interface ListAllProfilesForBundleIdQuery {
    limit?: number
    fields?: {
        profiles?: ProfilesType[]
    }
}
interface GetAllCapabililityIdsForBundleIdQuery {
    limit?: number
}
interface ListAllCapabilitiesForBundleIdQuery {
    fields?: {
        bundleIdCapabilities?: BundleIdCapabilitiesType[]
    }
    limit?: number
}
export {}
