import { Data, Links, ResourceType } from '../../../data'
import {
    DocumentLinks,
    PagedDocumentLinks,
    PagingInformation,
    ResourceLinks,
} from '../../../paging'
import { App } from '../apps/types'
import { BetaTester } from '../beta-testers/types'
import { Build } from '../builds/types'
import { DateTime } from 'luxon'
/**
 * The data structure that represents the resource.
 */
export interface BetaGroup {
    /**
     * The resource's attributes.
     */
    attributes?: {
        /**
         * A Boolean value that indicates whether the group is internal. Only existing users of App Store Connect may be added for internal beta testing.
         */
        isInternalGroup?: boolean
        /**
         * The name for the beta group.
         */
        name?: string
        /**
         * The URL of the public link provided to your app's beta testers.
         */
        publicLink?: string
        /**
         * A Boolean value that indicates whether a public link is enabled. Enabling a link allows you to invite anyone outside of your team to beta test your app. When you share this link, testers will be able to install the beta version of your app on their devices in TestFlight and share the link with others.
         */
        publicLinkEnabled?: boolean
        /**
         * The ID as part of the URL of the public link.
         */
        publicLinkId?: string
        /**
         * The maximum number of testers that can join this beta group using the public link. Values must be between 1 and 10,000.
         */
        publicLinkLimit?: number
        /**
         * A Boolean value that limits the number of testers who can join the beta group using the public link.
         */
        publicLinkLimitEnabled?: boolean
        /**
         * The creation date of the beta group.
         */
        createdDate?: DateTime
    }
    /**
     * The opaque resource ID that uniquely identifies the resource.
     */
    id: string
    /**
     * Navigational links to related data and included resource types and IDs.
     */
    relationships?: {
        app?: {
            data?: Data<'apps'>
            links?: Links
        }
        betaTesters?: {
            data?: Data<'betaTesters'>[]
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
    type: ResourceType<'betaGroups'>
    /**
     * Navigational links that include the self-link.
     */
    links: ResourceLinks
}
/**
 * A response containing a single resource.
 */
export interface BetaGroupResponse {
    /**
     * The resource data.
     */
    data: BetaGroup
    /**
     * Relationship data to include in the response.
     */
    include?: (App | Build | BetaTester)[]
    /**
     * Navigational links that include the self-link.
     */
    links: DocumentLinks
}
/**
 * A request containing a single resource.
 */
export interface BetaGroupCreateRequest {
    /**
     * The resource data.
     */
    data: {
        /**
         * The resource's attributes.
         */
        attributes: {
            /**
             * The name for the beta group.
             */
            name: string
            /**
             * A Boolean value that indicates whether a public link is enabled. Enabling a link allows you to invite anyone outside of your team to beta test your app. When you share this link, testers will be able to install the beta version of your app on their devices in TestFlight and share the link with others.
             */
            publicLinkEnabled?: boolean
            /**
             * The maximum number of testers that can join this beta group using the public link. Values must be between 1 and 10,000.
             */
            publicLinkLimit?: number
            /**
             * A Boolean value that limits the number of testers who can join the beta group using the public link.
             */
            publicLinkLimitEnabled?: boolean
        }
        /**
         * Navigational links to related data and included resource types and IDs.
         */
        relationships: {
            app: {
                data: Data<'apps'>
            }
            betaTesters?: {
                data: Data<'betaTesters'>[]
            }
            builds?: {
                data: Data<'builds'>[]
            }
        }
        /**
         * The resource type.
         */
        type: ResourceType<'betaGroups'>
    }
}
/**
 * A request containing a single resource.
 */
export interface BetaGroupUpdateRequest {
    /**
     * The resource data.
     */
    data: {
        /**
         * The resource's attributes.
         */
        attributes?: {
            /**
             * The name for the beta group.
             */
            name?: string
            /**
             * A Boolean value that indicates whether a public link is enabled. Enabling a link allows you to invite anyone outside of your team to beta test your app. When you share this link, testers will be able to install the beta version of your app on their devices in TestFlight and share the link with others.
             */
            publicLinkEnabled?: boolean
            /**
             * The maximum number of testers that can join this beta group using the public link. Values must be between 1 and 10,000.
             */
            publicLinkLimit?: number
            /**
             * A Boolean value that limits the number of testers who can join the beta group using the public link.
             */
            publicLinkLimitEnabled?: boolean
        }
        /**
         * The opaque resource ID that uniquely identifies the resource.
         */
        id: string
        /**
         * The resource type.
         */
        type: ResourceType<'betaGroups'>
    }
}
/**
 * A request containing the IDs of related resources.
 */
export interface BetaGroupBuildsLinkagesRequest {
    /**
     * The types and IDs of related resources.
     */
    data: Data<'builds'>[]
}
/**
 * A response containing the ID of the related resource.
 */
export interface BetaGroupAppLinkageResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'apps'>
    /**
     * Navigational links that include the self-link.
     */
    links: DocumentLinks
}
/**
 * A request containing the IDs of related resources.
 */
export interface BetaGroupBetaTestersLinkagesRequest {
    /**
     * The types and IDs of related resources.
     */
    data: Data<'betaTesters'>[]
}
/**
 * A response containing a list of related resource IDs.
 */
export interface BetaGroupBetaTestersLinkagesResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'betaTesters'>[]
    /**
     * Navigational links that include the self-link.
     */
    links: PagedDocumentLinks
    /**
     * Paging information.
     */
    meta?: PagingInformation
}
/**
 * A response containing a list of related resource IDs.
 */
export interface BetaGroupBuildsLinkagesResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'builds'>[]
    /**
     * Navigational links that include the self-link.
     */
    links: PagedDocumentLinks
    /**
     * Paging information.
     */
    meta?: PagingInformation
}
/**
 * A response containing a list of resources.
 */
export interface BetaGroupsResponse {
    /**
     * The resource data.
     */
    data: BetaGroup[]
    /**
     * Relationship data to include in the response.
     */
    include?: (App | Build | BetaTester)[]
    /**
     * Navigational links that include the self-link.
     */
    links: PagedDocumentLinks
    /**
     * Paging information.
     */
    meta?: PagingInformation
}
