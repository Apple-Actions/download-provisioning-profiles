import { AppType, UserType } from '../..'
import { API } from '../../../api'
import { AppsResponse } from '../testflight/apps/types'
import {
    UserResponse,
    UsersResponse,
    UserUpdateRequest,
    UserVisibleAppsLinkagesRequest,
    UserVisibleAppsLinkagesResponse,
} from './types'
/**
 * Get a list of the users on your team.
 * @param query
 */
export declare function listUsers(
    api: API,
    query: ListUsersQuery
): Promise<UsersResponse>
/**
 * Get information about a user on your team, such as name, roles, and app visibility.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function readUserInformation(
    api: API,
    id: string,
    query: ReadUserInformationQuery
): Promise<UserResponse>
/**
 * Change a user's role, app visibility information, or other account details.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export declare function modifyUserAccount(
    api: API,
    id: string,
    body: UserUpdateRequest
): Promise<UserResponse>
/**
 * Remove a user from your team.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
export declare function removeUserAccount(api: API, id: string): Promise<void>
/**
 * Get a list of apps that a user on your team can view.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function listAllAppsVisibleToUser(
    api: API,
    id: string,
    query: ListAllAppsVisibleToUserQuery
): Promise<AppsResponse>
/**
 * Get a list of app resource IDs to which a user on your team has access.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function getAllVisibleAppResourceIDsForUser(
    api: API,
    id: string,
    query: GetAllVisibleAppResourceIDsForUserQuery
): Promise<UserVisibleAppsLinkagesResponse>
/**
 * Give a user on your team access to one or more apps.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export declare function addVisibleAppsToUser(
    api: API,
    id: string,
    body: UserVisibleAppsLinkagesRequest
): Promise<void>
/**
 * Replace the list of apps a user on your team can see.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export declare function replaceListOfVisibleAppsForUser(
    api: API,
    id: string,
    body: UserVisibleAppsLinkagesRequest
): Promise<void>
/**
 * Remove a user on your team’s access to one or more apps.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
export declare function removeVisibleAppsFromUser(
    api: API,
    id: string
): Promise<void>
interface ListUsersQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        apps?: AppType[]
        /**
         * Fields to return for included related types.
         */
        users?: UserType[]
    }
    /**
     * Relationship data to include in the response.
     */
    include?: string
    /**
     * Number of resources to return.
     */
    /**
     * Attributes by which to sort.
     */
    sort?: ListUsersQuerySortOption[]
    filter?: {
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        roles?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        visibleApps?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        username?: string[]
    }
    limit?: {
        /**
         * Number of included related resources to return.
         */
        visibleApps?: number
    }
}
declare type ListUsersQuerySortOption =
    | 'lastName'
    | '+lastName'
    | '-lastName'
    | 'username'
    | '+username'
    | '-username'
interface ReadUserInformationQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        apps?: AppType[]
        /**
         * Fields to return for included related types.
         */
        users?: UserType[]
    }
    /**
     * Relationship data to include in the response.
     */
    include?: string
    limit?: {
        /**
         * Number of included related resources to return.
         */
        visibleApps?: number
    }
}
interface ListAllAppsVisibleToUserQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        apps: AppType[]
    }
    /**
     * Number of resources to return.
     */
    limit?: number
}
interface GetAllVisibleAppResourceIDsForUserQuery {
    /**
     * Number of resources to return.
     */
    limit?: number
}
export {}
