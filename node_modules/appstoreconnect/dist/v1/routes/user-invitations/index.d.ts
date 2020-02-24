import { AppType, UserType } from '../..'
import { API } from '../../../api'
import { AppsResponse } from '../testflight/apps/types'
import {
    UserInvitationCreateRequest,
    UserInvitationResponse,
    UserInvitationsResponse,
    UserInvitationVisibleAppsLinkagesResponse,
} from './types'
/**
 * Get a list of pending invitations to join your team.
 * @param query
 */
export declare function listInvitedUsers(
    api: API,
    query: ListInvitedUsersQuery
): Promise<UserInvitationsResponse>
/**
 * Get information about a pending invitation to join your team.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function readUserInvitationInformation(
    api: API,
    id: string,
    query: ReadUserInvitationInformationQuery
): Promise<UserInvitationResponse>
/**
 * Invite a user with assigned user roles to join your team.
 * @param body
 */
export declare function inviteUser(
    api: API,
    body: UserInvitationCreateRequest
): Promise<UserInvitationResponse>
/**
 * Cancel a pending invitation for a user to join your team.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
export declare function cancelUserInvitation(
    api: API,
    id: string
): Promise<void>
/**
 * Get a list of apps that will be visible to a user with a pending invitation.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function listAllAppsVisibleToInvitedUser(
    api: API,
    id: string,
    query: ListAllAppsVisibleToInvitedUserQuery
): Promise<AppsResponse>
/**
 * Get a list of apps that will be visible to a user with a pending invitation.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function getAllAppResourceIDsVisibleToInvitedUser(
    api: API,
    id: string,
    query: GetAllAppResourceIDsVisibleToInvitedUserQuery
): Promise<UserInvitationVisibleAppsLinkagesResponse>
interface ListInvitedUsersQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        apps?: AppType[]
        /**
         * Fields to return for included related types.
         */
        userInvitations?: UserType[]
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
    sort?: ListInvitedUsersQuerySortOption[]
    filter?: {
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        roles?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        email?: string[]
        /**
         * Number of included related resources to return.
         */
        visibleApps?: string[]
    }
    limit?: {
        /**
         * Number of included related resources to return.
         */
        visibleApps?: number
    }
}
declare type ListInvitedUsersQuerySortOption =
    | 'email'
    | '+email'
    | '-email'
    | 'lastName'
    | '+lastName'
    | '-lastName'
interface ReadUserInvitationInformationQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        apps?: AppType[]
        /**
         * Fields to return for included related types.
         */
        userInvitations?: UserType[]
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
interface ListAllAppsVisibleToInvitedUserQuery {
    /**
     * Number of resources to return.
     */
    limit?: number
    fields?: {
        /**
         * Fields to return for included related types.
         */
        apps?: AppType[]
    }
}
interface GetAllAppResourceIDsVisibleToInvitedUserQuery {
    /**
     * Number of resources to return.
     */
    limit?: number
}
export {}
