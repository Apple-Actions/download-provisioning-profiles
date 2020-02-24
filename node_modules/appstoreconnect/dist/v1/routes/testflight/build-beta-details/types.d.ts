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
export interface BuildBetaDetail {
    /**
     * The resource's attributes.
     */
    attributes?: BuildBetaDetailAttributes
    /**
     * The opaque resource ID that uniquely identifies the resource.
     */
    id: string
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
    type: ResourceType<'buildBetaDetails'>
    /**
     * Navigational links that include the self-link.
     */
    links: ResourceLinks
}
/**
 * Attributes that describe a resource.
 */
interface BuildBetaDetailAttributes {
    /**
     * A Boolean value that enables you to send test invitations to users automatically when the build is available to external groups.
     */
    autoNotifyEnabled: boolean
    /**
     *     A state that indicates if the build is available for external testing.
     */
    externalBuildState: ExternalBetaState
    /**
     *     A state that indicates if the build is available for internal testing.
     */
    internalBuildState: InternalBetaState
}
/**
 * A request containing a single resource
 */
export interface BuildBetaDetailUpdateRequest {
    /**
     * The resource data.
     */
    data: {
        /**
         * The resource's attributes.
         */
        attributes?: {
            /**
             * A Boolean value that enables you to send test invitations to users automatically when the build is available to external groups.
             */
            autoNotifyEnabled?: boolean
        }
        /**
         * The opaque resource ID that uniquely identifies the resource.
         */
        id: string
        /**
         * The resource type.
         */
        type: ResourceType<'buildBetaDetails'>
    }
}
/**
 * A response containing the ID of the related resource.
 */
export interface BuildBetaDetailBuildLinkageResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'builds'>
    /**
     * Navigational links including the self-link and links to the related data.
     */
    links: DocumentLinks
}
/**
 * A response containing a single resource.
 */
export interface BuildBetaDetailResponse {
    /**
     * The resource data.
     */
    data: BuildBetaDetail
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
export interface BuildBetaDetailsResponse {
    /**
     * The resource data.
     */
    data: BuildBetaDetail[]
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
 * String that represents a build's availability for external testing.
 */
export declare enum ExternalBetaState {
    PROCESSING = 'PROCESSING',
    PROCESSING_EXCEPTION = 'PROCESSING_EXCEPTION',
    MISSING_EXPORT_COMPLIANCE = 'MISSING_EXPORT_COMPLIANCE',
    READY_FOR_BETA_TESTING = 'READY_FOR_BETA_TESTING',
    IN_BETA_TESTING = 'IN_BETA_TESTING',
    EXPIRED = 'EXPIRED',
    READY_FOR_BETA_SUBMISSION = 'READY_FOR_BETA_SUBMISSION',
    IN_EXPORT_COMPLIANCE_REVIEW = 'IN_EXPORT_COMPLIANCE_REVIEW',
    WAITING_FOR_BETA_REVIEW = 'WAITING_FOR_BETA_REVIEW',
    IN_BETA_REVIEW = 'IN_BETA_REVIEW',
    BETA_REJECTED = 'BETA_REJECTED',
    BETA_APPROVED = 'BETA_APPROVED',
}
/**
 * String that represents a build's availability for internal testing.
 */
export declare enum InternalBetaState {
    PROCESSING = 'PROCESSING',
    PROCESSING_EXCEPTION = 'PROCESSING_EXCEPTION',
    MISSING_EXPORT_COMPLIANCE = 'MISSING_EXPORT_COMPLIANCE',
    READY_FOR_BETA_TESTING = 'READY_FOR_BETA_TESTING',
    IN_BETA_TESTING = 'IN_BETA_TESTING',
    EXPIRED = 'EXPIRED',
    IN_EXPORT_COMPLIANCE_REVIEW = 'IN_EXPORT_COMPLIANCE_REVIEW',
}
export {}
