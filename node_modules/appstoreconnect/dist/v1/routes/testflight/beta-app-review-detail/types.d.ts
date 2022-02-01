import { Data, Links, ResourceType } from '../../../data'
import {
    DocumentLinks,
    PagedDocumentLinks,
    PagingInformation,
    ResourceLinks,
} from '../../../paging'
import { App } from '../apps/types'
/**
 * The data structure that represents the resource.
 */
export interface BetaAppReviewDetail {
    /**
     * The resource's attributes.
     */
    attributes?: BetaAppReviewDetailAttributes
    /**
     * The opaque resource ID that uniquely identifies the resource.
     */
    id: string
    /**
     * Navigational links that include the self-link.
     */
    links: ResourceLinks
    /**
     * Navigational links to related data and included resource types and IDs.
     */
    relationships?: {
        app?: {
            data?: Data<'apps'>
            links?: Links
        }
    }
    /**
     * The resource type.
     */
    type: ResourceType<'betaAppReviewDetails'>
}
/**
 * Attributes that describe a resource.
 */
interface BetaAppReviewDetailAttributes {
    /**
     * Email address of contact in case communication is needed with the beta app review.
     */
    contactEmail?: string
    /**
     * First name of contact in case communication is needed with the beta app review.
     */
    contactFirstName?: string
    /**
     * Last name of contact in case communication is needed with the beta app review.
     */
    contactLastName?: string
    /**
     * Phone number of contact in case communication is needed with the beta app review.
     */
    contactPhone?: string
    /**
     * The user name to sign in to your app to review its features.
     */
    demoAccountName?: string
    /**
     * The password to sign in to your app to review its features.
     */
    demoAccountPassword?: string
    /**
     * A Boolean value that indicates if sign-in information is required to review all the features of your app. If users sign in using social media, provide information for an account for review. Credentials must be valid and active for duration of review.
     */
    demoAccountRequired?: boolean
    /**
     * Additional information about your app that can help during the review process. Do not include demo account details. Review notes have a maximum of 4,000 characters.
     */
    notes?: string
}
/**
 * A request containing a single resource.
 */
export interface BetaAppReviewDetailUpdateRequest {
    /**
     * The resource data.
     */
    data: Data<'betaAppReviewDetails'> & {
        attributes?: BetaAppReviewDetailAttributes
    }
}
/**
 * A response containing the ID of the related resource.
 */
export interface BetaAppReviewDetailAppLinkageResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'apps'>
    /**
     * Navigational links including the self-link and links to the related data.
     */
    links: DocumentLinks
}
/**
 * A response containing a single resource.
 */
export interface BetaAppReviewDetailResponse {
    /**
     * The resource data.
     */
    data: BetaAppReviewDetail
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
 * A response containing a single resource.
 */
export interface BetaAppReviewDetailsResponse {
    /**
     * The resource data.
     */
    data: BetaAppReviewDetail[]
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
export interface AppBetaTestersLinkagesRequest {
    /**
     * The types and IDs of related resources.
     */
    data: Data<'betaTesters'>[]
}
/**
 * A response containing the ID of the related resource.
 */
export interface AppBetaAppReviewDetailLinkageResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'betaAppReviewDetails'>
    /**
     * Navigational links including the self-link and links to the related data.
     */
    links: DocumentLinks
}
export {}
