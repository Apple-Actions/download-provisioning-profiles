import { Data, Links, ResourceType } from '../../data'
import {
    DocumentLinks,
    PagedDocumentLinks,
    PagingInformation,
    ResourceLinks,
} from '../../paging'
import { App } from '../testflight/apps/types'
/**
 * The data structure that represents the resource.
 */
export interface User {
    /**
     * The resource's attributes.
     */
    attributes?: UserAttributes
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
    type: ResourceType<'users'>
    /**
     * Navigational links that include the self-link.
     */
    links: ResourceLinks
}
/**
 * Attributes that describe a resource.
 */
interface UserAttributes {
    /**
     * The user's first name.
     */
    firstName?: string
    /**
     * The user's last name.
     */
    lastName?: string
    /**
     * Assigned user roles that determine the user's access to sections of
     * App Store Connect and tasks they can perform.
     */
    roles?: UserRole[]
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
    /**
     * The user's Apple ID.
     */
    username?: string
}
/**
 * A response containing a single resource.
 */
export interface UserResponse {
    /**
     * The resource data.
     */
    data: User
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
export interface UsersResponse {
    /**
     * The resource data.
     */
    data: User[]
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
 * A request containing the IDs of related resources.
 */
export interface UserVisibleAppsLinkagesRequest {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'apps'>[]
}
/**
 * A response containing a list of related resource IDs.
 */
export interface UserVisibleAppsLinkagesResponse {
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
/**
 * A request containing a single resource.
 */
export interface UserUpdateRequest {
    /**
     * The resource data.
     */
    data: UserUpdateRequestData
}
interface UserUpdateRequestData {
    /**
     * The resource's attributes.
     */
    attributes?: UserUpdateRequestDataAttributes
    /**
     * The opaque resource ID that uniquely identifies the resource.
     */
    id: string
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
    type: ResourceType<'users'>
}
/**
 * Attributes that describe a resource.
 */
interface UserUpdateRequestDataAttributes {
    /**
     * Assigned user roles that determine the user's access to sections of
     * App Store Connect and tasks they can perform.
     */
    allAppsVisible?: boolean
    /**
     * A Boolean value that indicates the user's specified role allows access
     * to the provisioning functionality on the Apple Developer website.
     */
    provisioningAllowed?: boolean
    /**
     * Assigned user roles that determine the user's access to sections of
     * App Store Connect and tasks they can perform.
     */
    roles?: UserRole[]
}
/**
 * Strings representing user roles in App Store Connect.
 */
export declare enum UserRole {
    /**
     * Serves as a secondary contact for teams and has many of the same
     * responsibilities as the Legal user. Admins have access to all apps.
     */
    ADMIN = 'ADMIN',
    /**
     * Manages financial information, including reports and tax forms.
     * A user assigned this role can view all apps in
     * Payments and Financial Reports, Sales and Trends, and App Analytics.
     */
    FINANCE = 'FINANCE',
    /**
     * The Technical role is no longer assignable to new users in
     * App Store Connect. Existing users with the Technical role can manage
     * all the aspects of an app, such as pricing, App Store information,
     * and app development and delivery. Techncial users have access to all
     * apps.
     */
    TECHNICAL = 'TECHNICAL',
    /**
     * Analyzes sales, downloads, and other analytics for the app.
     */
    SALES = 'SALES',
    /**
     * Manages marketing materials and promotional artwork. A user assigned
     * this role will be contacted by Apple if the app is in consideration
     * to be featured on the App Store.
     */
    MARKETING = 'MARKETING',
    /**
     * Manages development and delivery of an app.
     */
    DEVELOPER = 'DEVELOPER',
    /**
     * Responsible for entering into legal agreements with Apple. The person
     * who completes program enrollment is assigned the Team Agent role in
     * the Apple Developer account and the Legal role in App Store Connect.
     */
    ACCOUNT_HOLDER = 'ACCOUNT_HOLDER',
    READ_ONLY = 'READ_ONLY',
    /**
     * Manages all aspects of an app, such as pricing, App Store information,
     * and app development and delivery.
     */
    APP_MANAGER = 'APP_MANAGER',
    /**
     * Downloads reports associated with a role. The Access To Reports role is
     * an additional permission for users with the App Manager, Developer,
     * Marketing, or Sales role. If this permission is added, the user has
     * access to all of your apps.
     */
    ACCESS_TO_REPORTS = 'ACCESS_TO_REPORTS',
    /**
     * Analyzes and responds to customer reviews on the App Store. If a user
     * has only the Customer Support role, they'll go straight to the
     * Ratings and Reviews section when they click on an app in My Apps.
     */
    CUSTOMER_SUPPORT = 'CUSTOMER_SUPPORT',
}
export {}
