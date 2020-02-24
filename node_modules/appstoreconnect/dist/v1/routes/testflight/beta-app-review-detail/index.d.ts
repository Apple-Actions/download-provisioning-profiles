import { AppType, BetaAppReviewDetailType } from '../../..'
import { API } from '../../../../api'
import { ResourceType } from '../../../data'
import { AppResponse } from '../apps/types'
import {
    BetaAppReviewDetailAppLinkageResponse,
    BetaAppReviewDetailResponse,
    BetaAppReviewDetailsResponse,
    BetaAppReviewDetailUpdateRequest,
} from './types'
/**
 * Find and list beta app review details for all apps.
 * @param query
 */
export declare function listBetaAppReviewDetails(
    api: API,
    query: ListBetaAppReviewDetailsQuery
): Promise<BetaAppReviewDetailsResponse>
/**
 * Find and list beta app review details for all apps.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function readBetaAppReviewDetailInformation(
    api: API,
    id: string,
    query: ReadBetaAppReviewDetailInformationQuery
): Promise<BetaAppReviewDetailResponse>
/**
 * Get the app information for a specific beta app review details resource.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function readAppInformationForBetaAppReviewDetail(
    api: API,
    id: string,
    query: ReadAppInformationForBetaAppReviewDetailQuery
): Promise<AppResponse>
/**
 * Get the app resource ID associated with an app review detail.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
export declare function getAppResourceIDForBetaAppReviewDetailsResource(
    api: API,
    id: string
): Promise<BetaAppReviewDetailAppLinkageResponse>
/**
 * Update the details for a specific app's beta app review.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export declare function modifyBetaAppReviewDetail(
    api: API,
    id: string,
    body: BetaAppReviewDetailUpdateRequest
): Promise<BetaAppReviewDetailResponse>
interface ListBetaAppReviewDetailsQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        apps?: AppType[]
        /**
         * Fields to return for included related types.
         */
        betaAppReviewDetails?: BetaAppReviewDetailType[]
    }
    filter: {
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        app: string[]
    }
    /**
     * Relationship data to include in the response.
     */
    include?: ResourceType<'app'>[]
    /**
     * Number of resources to return.
     */
    limit?: number
}
interface ReadBetaAppReviewDetailInformationQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        apps?: AppType[]
        /**
         * Fields to return for included related types.
         */
        betaAppReviewDetails?: BetaAppReviewDetailType[]
    }
    /**
     * Relationship data to include in the response.
     */
    include?: ResourceType<'app'>[]
}
interface ReadAppInformationForBetaAppReviewDetailQuery {
    fields?: {
        apps?: AppType[]
    }
}
export {}
