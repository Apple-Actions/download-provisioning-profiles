import { Data, Links, ResourceType } from '../../../data'
import {
    DocumentLinks,
    PagedDocumentLinks,
    PagingInformation,
    ResourceLinks,
} from '../../../paging'
import { App } from '../apps/types'
import { BetaGroup } from '../beta-groups/types'
import { Build } from '../builds/types'
/**
 * The data structure that represents the resource.
 */
export interface BetaTester {
    /**
     * The resource's attributes.
     */
    attributes?: {
        /**
         * The beta tester's email address, used for sending beta testing invitations.
         */
        email?: string
        /**
         * The beta tester's first name.
         */
        firstName?: string
        /**
         * An invite type that indicates if a beta tester was invited by an email invite or used a TestFlight public link to join a beta test.
         */
        inviteType?: BetaInviteType
        /**
         * The beta tester's last name.
         */
        lastName?: string
    }
    /**
     * The opaque resource ID that uniquely identifies the resource.
     */
    id: string
    /**
     * Navigational links to related data and included resource types and IDs.
     */
    relationships?: {
        apps?: {
            data?: Data<'apps'>[]
            links?: Links
            meta?: PagingInformation
        }
        betaGroups?: {
            data?: Data<'betaGroups'>[]
            links?: Links
            meta?: PagingInformation
        }
        builds?: {
            data?: Data<'builds'>[]
            links?: Links
            meta?: PagingInformation
        }
    }
    /**
     * The resource type.
     */
    type: ResourceType<'betaTesters'>
    /**
     * Navigational links that include the self-link.
     */
    links: ResourceLinks
}
/**
 * A request containing the IDs of related resources.
 */
export interface BetaTesterAppsLinkagesRequest {
    /**
     * The types and IDs of related resources.
     */
    data: Data<'apps'>[]
}
/**
 * A response containing a list of related resource IDs.
 */
export interface BetaTesterAppsLinkagesResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'apps'>[]
    /**
     * Navigational links including the self-link and links to the related data.
     */
    links: PagedDocumentLinks
    /**
     * Paging information.
     */
    meta?: PagingInformation
}
/**
 * A request containing the IDs of related resources.
 */
export interface BetaTesterBetaGroupsLinkagesRequest {
    /**
     * The types and IDs of related resources.
     */
    data: Data<'betaGroups'>[]
}
/**
 * A response containing a list of related resource IDs.
 */
export interface BetaTesterBetaGroupsLinkagesResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'betaGroups'>[]
    /**
     * Navigational links including the self-link and links to the related data.
     */
    links: PagedDocumentLinks
    /**
     * Paging information.
     */
    meta?: PagingInformation
}
/**
 * A request containing the IDs of related resources.
 */
export interface BetaTesterBuildsLinkagesRequest {
    /**
     * The types and IDs of related resources.
     */
    data: Data<'builds'>[]
}
/**
 * A response containing a list of related resource IDs.
 */
export interface BetaTesterBuildsLinkagesResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'builds'>[]
    /**
     * Navigational links including the self-link and links to the related data.
     */
    links: PagedDocumentLinks
    /**
     * Paging information.
     */
    meta?: PagingInformation
}
/**
 * A request containing a single resource.
 */
export interface BetaTesterCreateRequest {
    /**
     * The resource data.
     */
    data: {
        /**
         * The resource's attributes.
         */
        attributes: {
            /**
             * The beta tester's email address, used for sending beta testing invitations.
             */
            email: string
            /**
             * The beta tester's first name.
             */
            firstName?: string
            /**
             * The beta tester's last name.
             */
            lastName?: string
        }
        /**
         * The types and IDs of the related data to update.
         */
        relationships?: {
            betaGroups?: {
                data: Data<'betaGroups'>[]
            }
            builds?: {
                data: Data<'builds'>[]
            }
        }
        /**
         * The resource type.
         */
        type: ResourceType<'betaTesters'>
    }
}
/**
 * A response containing a single resource.
 */
export interface BetaTesterResponse {
    /**
     * The resource data.
     */
    data: BetaTester
    /**
     * The requested relationship data.
     */
    include?: (App | BetaGroup | Build)[]
    /**
     * Navigational links that include the self-link.
     */
    links: DocumentLinks
}
/**
 * A response containing a list of resources.
 */
export interface BetaTestersResponse {
    /**
     * The resource data.
     */
    data: BetaTester[]
    /**
     * The requested relationship data.
     */
    include?: (App | BetaGroup | Build)[]
    /**
     * Navigational links that include the self-link.
     */
    links: PagedDocumentLinks
    /**
     * Paging information.
     */
    meta?: PagingInformation
}
export declare enum BetaInviteType {
    EMAIL = 'EMAIL',
    PUBLIC_LINK = 'PUBLIC_LINK',
}
