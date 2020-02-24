import { BetaAppReviewSubmissionType, BuildType } from '../../..'
import { API } from '../../../../api'
import { ResourceType } from '../../../data'
import { BuildResponse } from '../builds/types'
import {
    BetaAppReviewSubmissionBuildLinkageResponse,
    BetaAppReviewSubmissionCreateRequest,
    BetaAppReviewSubmissionResponse,
    BetaAppReviewSubmissionsResponse,
} from './types'
/**
 * Submit an app for beta app review to allow external testing.
 * @param body
 */
export declare function submitAppForBetaReview(
    api: API,
    body: BetaAppReviewSubmissionCreateRequest
): Promise<BetaAppReviewSubmissionResponse>
/**
 * Find and list beta app review submissions for all builds.
 * @param query
 */
export declare function listBetaAppReviewSubmissions(
    api: API,
    query: ListBetaAppReviewSubmissionsQuery
): Promise<BetaAppReviewSubmissionsResponse>
/**
 * Get a specific beta app review submission.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function readBetaAppReviewSubmissionInformation(
    api: API,
    id: string,
    query: ReadBetaAppReviewSubmissionInformationQuery
): Promise<BetaAppReviewSubmissionResponse>
/**
 * Get the build information for a specific beta app review submission.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function readBuildInformationForBetaAppReviewSubmission(
    api: API,
    id: string,
    query: ReadBuildInformationForBetaAppReviewSubmissionQuery
): Promise<BuildResponse>
/**
 * Get the build resource ID associated with a specific beta app review submission.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
export declare function getBuildIDForBetaAppReviewSubmission(
    api: API,
    id: string
): Promise<BetaAppReviewSubmissionBuildLinkageResponse>
interface ListBetaAppReviewSubmissionsQuery {
    fields?: {
        betaAppReviewSubmissions?: BetaAppReviewSubmissionType[]
        builds?: BuildType[]
    }
    filter?: {
        betaReviewState?: string[]
        build?: string[]
    }
    include?: ResourceType<'build'>
    limit?: number
}
interface ReadBetaAppReviewSubmissionInformationQuery {
    fields?: {
        betaAppReviewSubmissions?: BetaAppReviewSubmissionType[]
        builds?: BuildType[]
    }
    include?: ResourceType<'build'>
}
interface ReadBuildInformationForBetaAppReviewSubmissionQuery {
    fields?: {
        builds?: BuildType[]
    }
}
export {}
