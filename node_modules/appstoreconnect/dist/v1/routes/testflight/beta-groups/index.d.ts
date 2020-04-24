import { AppType, BetaGroupType, BetaTesterType, BuildType } from '../../..'
import { API } from '../../../../api'
import { AppResponse } from '../apps/types'
import { BetaTestersResponse } from '../beta-testers/types'
import { BuildsResponse } from '../builds/types'
import {
    BetaGroupAppLinkageResponse,
    BetaGroupBetaTestersLinkagesRequest,
    BetaGroupBetaTestersLinkagesResponse,
    BetaGroupBuildsLinkagesRequest,
    BetaGroupBuildsLinkagesResponse,
    BetaGroupCreateRequest,
    BetaGroupResponse,
    BetaGroupsResponse,
    BetaGroupUpdateRequest,
} from './types'
/**
 * Create a beta group associated with an app, optionally enabling TestFlight public links.
 * @param body
 */
export declare function createBetaGroup(
    api: API,
    body: BetaGroupCreateRequest
): Promise<BetaGroupResponse>
/**
 * Modify a beta group's metadata, including changing its Testflight public link status.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export declare function modifyBetaGroup(
    api: API,
    id: string,
    body: BetaGroupUpdateRequest
): Promise<BetaGroupResponse>
/**
 * Delete a beta group and remove beta tester access to associated builds.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
export declare function deleteBetaGroup(api: API, id: string): Promise<void>
/**
 * Find and list beta groups for all apps.
 * @param query
 */
export declare function listBetaGroups(
    api: API,
    query: ListBetaGroupsQuery
): Promise<BetaGroupsResponse>
/**
 * Get a specific beta group.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function readBetaGroupInformation(
    api: API,
    id: string,
    query: ReadBetaGroupInformationQuery
): Promise<BetaGroupResponse>
/**
 * Get the app information for a specific beta group.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function readAppInformationForBetaGroup(
    api: API,
    id: string,
    query: ReadAppInformationForBetaGroupQuery
): Promise<AppResponse>
/**
 * Get the app resource ID for a specific beta group.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
export declare function getAppResourceIDForBetaGroup(
    api: API,
    id: string
): Promise<BetaGroupAppLinkageResponse>
/**
 * Add a specific beta tester to one or more beta groups for beta testing.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export declare function addBetaTestersToBetaGroup(
    api: API,
    id: string,
    body: BetaGroupBetaTestersLinkagesRequest
): Promise<void>
/**
 * Remove a specific beta tester from a one or more beta groups, revoking their access to test builds associated with those groups.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export declare function removeBetaTestersFromBetaGroup(
    api: API,
    id: string,
    body: BetaGroupBetaTestersLinkagesRequest
): Promise<void>
/**
 * Associate builds with a beta group to enable the group to test the builds.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export declare function addBuildsToBetaGroup(
    api: API,
    id: string,
    body: BetaGroupBuildsLinkagesRequest
): Promise<void>
/**
 * Remove access to test one or more builds from beta testers in a specific beta group.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export declare function removeBuildsFromBetaGroup(
    api: API,
    id: string,
    body: BetaGroupBuildsLinkagesRequest
): Promise<void>
/**
 * Get a list of builds associated with a specific beta group.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function listAllBuildsForBetaGroup(
    api: API,
    id: string,
    query: ListAllBuildsForBetaGroupQuery
): Promise<BuildsResponse>
/**
 * Get a list of build resource IDs in a specific beta group.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function getAllBuildIDsForBetaGroup(
    api: API,
    id: string,
    query: GetAllBuildIDsForBetaGroupQuery
): Promise<BetaGroupBuildsLinkagesResponse>
/**
 * Get a list of beta testers contained in a specific beta group.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function listAllBetaTestersForBetaGroup(
    api: API,
    id: string,
    query: ListAllBetaTestersForBetaGroupQuery
): Promise<BetaTestersResponse>
/**
 * Get a list of the beta tester resource IDs in a specific beta group.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function getAllBetaTesterIDsForBetaGroup(
    api: API,
    id: string,
    query: GetAllBetaTesterIDsForBetaGroupQuery
): Promise<BetaGroupBetaTestersLinkagesResponse>
interface ListBetaGroupsQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        apps: AppType[]
        /**
         * Fields to return for included related types.
         */
        betaGroups: BetaGroupType[]
        /**
         * Fields to return for included related types.
         */
        betaTesters: BetaTesterType[]
        /**
         * Fields to return for included related types.
         */
        builds: BuildType[]
    }
    filter?: {
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        app?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        builds?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        id?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        isInternalGroup?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        name?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        publicLinkEnabled?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        publicLinkLimitEnabled?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        publicLink?: string[]
    }
    /**
     * Relationship data to include in the response.
     */
    include?: ('app' | 'betaTesters' | 'builds')[]
    /**
     * Number of resources to return.
     */
    limit?: {
        /**
         * Number of included related resources to return.
         */
        betaTesters?: number
        /**
         * Number of included related resources to return.
         */
        builds?: number
    }
    /**
     * Attributes by which to sort.
     */
    sort?:
        | 'createdDate, +createdDate'
        | '-createdDate'
        | 'name'
        | '+name'
        | '-name'
        | 'publicLinkEnabled'
        | '+publicLinkEnabled'
        | '-publicLinkEnabled'
        | 'publicLinkLimit'
        | '+publicLinkLimit'
        | '-publicLinkLimit'
}
interface ReadBetaGroupInformationQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        apps?: AppType[]
        /**
         * Fields to return for included related types.
         */
        betaGroups?: BetaGroupType[]
        /**
         * Fields to return for included related types.
         */
        betaTesters?: BetaTesterType[]
        /**
         * Fields to return for included related types.
         */
        builds?: BuildType[]
    }
    /**
     * Relationship data to include in the response.
     */
    include?: ('app' | 'betaTesters' | 'builds')[]
    limit?: {
        /**
         * Number of included related resources to return.
         */
        builds?: number
        /**
         * Number of included related resources to return.
         */
        betaTesters?: number
    }
}
interface ReadAppInformationForBetaGroupQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        apps?: AppType[]
    }
}
interface ListAllBuildsForBetaGroupQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        builds?: BuildType[]
    }
    /**
     * Number of resources to return.
     */
    limit?: number
}
interface GetAllBuildIDsForBetaGroupQuery {
    /**
     * Number of resources to return.
     */
    limit?: number
}
interface ListAllBetaTestersForBetaGroupQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        betaTesters?: BetaTesterType[]
    }
    /**
     * Number of resources to return.
     */
    limit?: number
}
interface GetAllBetaTesterIDsForBetaGroupQuery {
    /**
     * Number of resources to return.
     */
    limit?: number
}
export {}
