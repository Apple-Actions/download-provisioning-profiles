import { Data, Links, ResourceType } from '../../../data'
import {
    DocumentLinks,
    PagedDocumentLinks,
    PagingInformation,
    ResourceLinks,
} from '../../../paging'
import { Build } from '../builds/types'
/**
 * The data structure that represents the resource.
 */
export interface BetaAppReviewSubmission {
    /**
     * The resource's attributes.
     */
    attributes?: BetaAppReviewSubmissionAttributes
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
        build?: {
            data?: Data<'build'>
            links?: Links
        }
    }
    /**
     * The resource type.
     */
    type: ResourceType<'betaAppReviewSubmissions'>
}
/**
 * Attributes that describe a resource.
 */
interface BetaAppReviewSubmissionAttributes {
    /**
     * A state that indicates the current status of the beta app review submission.
     */
    betaReviewState: BetaReviewState
}
/**
 * A response containing the ID of the related resource.
 */
export interface BetaAppReviewSubmissionBuildLinkageResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'build'>
    /**
     * Navigational links including the self-link and links to the related data.
     */
    links: DocumentLinks
}
/**
 * A request containing a single resource.
 */
export interface BetaAppReviewSubmissionCreateRequest {
    /**
     * The resource data.
     */
    data: {
        /**
         * The types and IDs of the related data to update.
         */
        relationships: {
            build: {
                data: Data<'builds'>
            }
        }
        /**
         * The resource type.
         */
        type: ResourceType<'betaAppReviewSubmissions'>
    }
}
/**
 * A response containing a single resource.
 */
export interface BetaAppReviewSubmissionResponse {
    /**
     * The resource data.
     */
    data: BetaAppReviewSubmission
    /**
     * The requested relationship data.
     */
    include?: Build[]
    /**
     * Navigational links that include the self-link.
     */
    links: DocumentLinks
}
/**
 * A response containing a list of resources.
 */
export interface BetaAppReviewSubmissionsResponse {
    /**
     * The resource data.
     */
    data: BetaAppReviewSubmission[]
    /**
     * The requested relationship data.
     */
    include?: Build[]
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
 * A response containing the ID of the related resource.
 */
export interface BuildBetaAppReviewSubmissionLinkageResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'betaAppReviewSubmissions'>
    /**
     * Navigational links including the self-link and links to the related data.
     */
    links: DocumentLinks
}
export declare enum BetaReviewState {
    WAITING_FOR_REVIEW = 'WAITING_FOR_REVIEW',
    IN_REVIEW = 'IN_REVIEW',
    REJECTED = 'REJECTED',
    APPROVED = 'APPROVED',
}
export {}
