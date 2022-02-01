import { Data, Links, ResourceType } from '../../data'
import {
    DocumentLinks,
    PagedDocumentLinks,
    PagingInformation,
    ResourceLinks,
} from '../../paging'
import { App } from '../testflight/apps/types'
import { UserRole } from '../users/types'
import { DateTime } from 'luxon'
/**
 * The data structure that represents the resource.
 */
interface UserInvitation {
    /**
     * The resource's attributes.
     */
    attributes?: UserInvitationAttributes
    /**
     * The opaque resource ID that uniquely identifies the resource.
     */
    id: string
    /**
     * Navigational links to related data and included resource types and IDs.
     */
    relationships?: {
        visibleApps?: {
            data?: Data<'apps'>[]
            links?: Links
            meta?: PagingInformation
        }
    }
    /**
     * The resource type.
     */
    type: ResourceType<'userInvitations'>
    /**
     * Navigational links that include the self-link.
     */
    links: ResourceLinks
}
/**
 * Attributes that describe a resource.
 */
interface UserInvitationAttributes {
    /**
     * The email address of a pending user invitation. The email address must
     * be valid to activate the account. It can be any email address, not
     * necessarily one associated with an Apple ID.
     */
    email?: string
    /**
     * The first name of the user with the pending user invitation.
     */
    firstName?: string
    /**
     * The last name of the user with the pending user invitation.
     */
    lastName?: string
    /**
     * Assigned user roles that determine the user's access to sections of
     * App Store Connect and tasks they can perform.
     */
    roles?: UserRole[]
    /**
     * The expiration date of the pending invitation.
     */
    expirationDate?: DateTime
    /**
     * A Boolean value that indicates the user's specified role allows access
     * to the provisioning functionality on the Apple Developer website.
     */
    provisioningAllowed?: boolean
    /**
     * A Boolean value that indicates whether a user has access to all apps
     * available to the team.
     */
    allAppsVisible?: boolean
}
/**
 * A request containing a single resource.
 */
export interface UserInvitationCreateRequest {
    /**
     * The resource data.
     */
    data: {
        /**
         * The resource's attributes.
         */
        attributes: UserInvitationCreateRequestDataAttributes
        /**
         * The types and IDs of the related data to update.
         */
        relationships?: {
            visibleApps?: {
                data?: Data<'apps'>[]
            }
        }
        /**
         * The resource type.
         */
        type: ResourceType<'userInvitations'>
    }
}
/**
 * Attributes that describe a resource.
 */
interface UserInvitationCreateRequestDataAttributes {
    /**
     * A Boolean value that indicates whether a user has access to all apps
     * available to the team.
     */
    allAppsVisible?: boolean
    /**
     * The email address of a pending user invitation. The email address must
     * be valid to activate the account. It can be any email address, not
     * necessarily one associated with an Apple ID.
     */
    email: string
    /**
     * The user invitation recipient's first name.
     */
    firstName: string
    /**
     * The user invitation recipient's last name.
     */
    lastName: string
    /**
     * A Boolean value that indicates the user's specified role allows access
     * to the provisioning functionality on the Apple Developer website.
     */
    provisioningAllowed?: boolean
    /**
     * Assigned user roles that determine the user's access to sections of
     * App Store Connect and tasks they can perform.
     */
    roles: UserRole[]
}
/**
 * A response containing a single resource.
 */
export interface UserInvitationResponse {
    /**
     * The resource data.
     */
    data: UserInvitation
    /**
     * The requested relationship data.
     */
    include?: App[]
    /**
     * Navigational links that include the self-link.
     */
    links: DocumentLinks
}
/**
 * A response containing a list of resources.
 */
export interface UserInvitationsResponse {
    /**
     * The resource data.
     */
    data: UserInvitation[]
    /**
     * The requested relationship data.
     */
    include?: App[]
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
export interface UserInvitationVisibleAppsLinkagesResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'apps'>[]
    /**
     * Navigational links including the self-link and links to the related
     * data.
     */
    links: PagedDocumentLinks
    /**
     * Paging information.
     */
    meta?: PagingInformation
}
export {}
