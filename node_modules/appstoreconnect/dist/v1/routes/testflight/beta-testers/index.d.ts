import { AppType, BetaGroupType, BetaTesterType, BuildType } from '../../..'
import { API } from '../../../../api'
import { AppsResponse } from '../apps/types'
import { BetaGroupsResponse } from '../beta-groups/types'
import { BuildsResponse } from '../builds/types'
import {
    BetaTesterAppsLinkagesRequest,
    BetaTesterAppsLinkagesResponse,
    BetaTesterBetaGroupsLinkagesRequest,
    BetaTesterBetaGroupsLinkagesResponse,
    BetaTesterBuildsLinkagesRequest,
    BetaTesterBuildsLinkagesResponse,
    BetaTesterCreateRequest,
    BetaTesterResponse,
    BetaTestersResponse,
} from './types'
/**
 * Create a beta tester assigned to a group, a build, or an app.
 * @param body
 */
export declare function createBetaTester(
    api: API,
    body: BetaTesterCreateRequest
): Promise<BetaTesterResponse>
/**
 * Remove a beta tester's ability to test all apps.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
export declare function deleteBetaTester(api: API, id: string): Promise<void>
/**
 * Find and list beta testers for all apps, builds, and beta groups.
 * @param query
 */
export declare function listBetaTesters(
    api: API,
    query: ListBetaTestersQuery
): Promise<BetaTestersResponse>
/**
 * Get a specific beta tester.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function readBetaTesterInformation(
    api: API,
    id: string,
    query: ReadBetaTesterInformationQuery
): Promise<BetaTesterResponse>
/**
 * Add one or more beta testers to a specific beta group.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export declare function addBetaTesterToBetaGroups(
    api: API,
    id: string,
    body: BetaTesterBetaGroupsLinkagesRequest
): Promise<void>
/**
 * Remove a specific beta tester from one or more beta groups, revoking their access to test builds associated with those groups.
 */
export declare function removeBetaTesterFromBetaGroups(
    api: API,
    id: string,
    body: BetaTesterBetaGroupsLinkagesRequest
): Promise<void>
/**
 * Individually assign a beta tester to a build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export declare function individuallyAssignBetaTesterToBuilds(
    api: API,
    id: string,
    body: BetaTesterBuildsLinkagesRequest
): Promise<void>
/**
 * Remove an individually assigned beta tester's ability to test a build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export declare function individuallyUnassignBetaTesterFromBuilds(
    api: API,
    id: string,
    body: BetaTesterBuildsLinkagesRequest
): Promise<void>
/**
 * Remove a specific beta tester's access to test any builds of one or more apps.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export declare function removeBetaTesterAccessToApps(
    api: API,
    id: string,
    body: BetaTesterAppsLinkagesRequest
): Promise<void>
/**
 * Get a list of apps that a beta tester can test.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function listAllAppsForBetaTester(
    api: API,
    id: string,
    query: ListAllAppsForBetaTesterQuery
): Promise<AppsResponse>
/**
 * Get a list of app resource IDs associated with a beta tester.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function getAllAppResourceIDsForBetaTester(
    api: API,
    id: string,
    query: GetAllAppResourceIDsForBetaTesterQuery
): Promise<BetaTesterAppsLinkagesResponse>
/**
 * Get a list of builds individually assigned to a specific beta tester.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function listAllBuildsIndividuallyAssignedToBetaTester(
    api: API,
    id: string,
    query: ListAllBuildsIndividuallyAssignedToBetaTesterQuery
): Promise<BuildsResponse>
/**
 * Get a list of build resource IDs individually assigned to a specific beta tester.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function getAllIDsForBuildsIndividuallyAssignedToBetaTester(
    api: API,
    id: string,
    query: GetAllIDsForBuildsIndividuallyAssignedToBetaTesterQuery
): Promise<BetaTesterBuildsLinkagesResponse>
/**
 * Get a list of beta groups that contain a specific beta tester.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function listAllBetaGroupsForBetaTester(
    api: API,
    id: string,
    query: ListAllBetaGroupsForBetaTesterQuery
): Promise<BetaGroupsResponse>
/**
 * Get a list of group resource IDs associated with a beta tester.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function getAllBetaGroupIDsForBetaTesterGroups(
    api: API,
    id: string,
    query: GetAllBetaGroupIDsForBetaTesterGroupsQuery
): Promise<BetaTesterBetaGroupsLinkagesResponse>
interface ListBetaTestersQuery {
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
    filter?: {
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        apps?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        betaGroups?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        builds?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        email?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        firstName?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        inviteType?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        lastName?: string[]
    }
    /**
     * Relationship data to include in the response.
     */
    include?: ('apps' | 'betaGroups' | 'builds')[]
    /**
     * Number of resources to return.
     */
    limit?: {
        /**
         * Number of included related resources to return.
         */
        apps?: number
        /**
         * Number of included related resources to return.
         */
        betaGroups?: number
        /**
         * Number of included related resources to return.
         */
        builds?: number
    }
    sort?: (
        | 'email'
        | '+email'
        | '-email'
        | 'firstName'
        | '+firstName'
        | '-firstName'
        | 'inviteType'
        | '+inviteType'
        | '-inviteType'
        | 'lastName'
        | '+lastName'
        | '-lastName')[]
}
interface ReadBetaTesterInformationQuery {
    fields?: {
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        apps?: AppType[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        betaGroups?: BetaGroupType[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        betaTesters?: BetaTesterType[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        builds?: BuildType[]
    }
    /**
     * Relationship data to include in the response.
     */
    include?: ('apps' | 'betaGroups' | 'builds')[]
    limit?: {
        /**
         * Number of included related resources to return.
         */
        builds?: number
        /**
         * Number of included related resources to return.
         */
        betaGroups?: number
        /**
         * Number of included related resources to return.
         */
        apps?: number
    }
}
interface ListAllAppsForBetaTesterQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        apps?: AppType[]
    }
    /**
     * Number of resources to return.
     */
    limit?: number
}
interface GetAllAppResourceIDsForBetaTesterQuery {
    /**
     * Number of resources to return.
     */
    limit?: number
}
interface ListAllBuildsIndividuallyAssignedToBetaTesterQuery {
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
interface GetAllIDsForBuildsIndividuallyAssignedToBetaTesterQuery {
    /**
     * Number of resources to return.
     */
    limit?: number
}
interface ListAllBetaGroupsForBetaTesterQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        betaGroups?: BetaGroupType[]
    }
    /**
     * Number of resources to return.
     */
    limit?: number
}
interface GetAllBetaGroupIDsForBetaTesterGroupsQuery {
    /**
     * Number of resources to return.
     */
    limit?: number
}
export {}
