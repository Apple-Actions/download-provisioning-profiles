import { BuildBetaDetailType, BuildType } from '../../..'
import { API } from '../../../../api'
import { ResourceType } from '../../../data'
import { BuildResponse } from '../builds/types'
import {
    BuildBetaDetailBuildLinkageResponse,
    BuildBetaDetailResponse,
    BuildBetaDetailsResponse,
    BuildBetaDetailUpdateRequest,
} from './types'
/**
 * Find and list build beta details for all builds.
 * @param query
 */
export declare function listBuildBetaDetails(
    api: API,
    query: ListBuildBetaDetailsQuery
): Promise<BuildBetaDetailsResponse>
/**
 * Get a specific build beta details resource.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function readBuildBetaDetailInformation(
    api: API,
    id: string,
    query: ReadBuildBetaDetailInformationQuery
): Promise<BuildBetaDetailResponse>
/**
 * Get the build information for a specific build beta details resource.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function readBuildInformationForBuildBetaDetail(
    api: API,
    id: string,
    query: ReadBuildInformationForBuildBetaDetailQuery
): Promise<BuildResponse>
/**
 * Get the build resource ID for a specific build beta detail.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
export declare function getBuildIDForBuildBetaDetail(
    api: API,
    id: string
): Promise<BuildBetaDetailBuildLinkageResponse>
/**
 * Update beta test details for a specific build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export declare function modifyBuildBetaDetail(
    api: API,
    id: string,
    body: BuildBetaDetailUpdateRequest
): Promise<BuildBetaDetailResponse>
interface ListBuildBetaDetailsQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        buildBetaDetails?: BuildBetaDetailType[]
        /**
         * Fields to return for included related types.
         */
        builds?: BuildType[]
    }
    filter?: {
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        build?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        id?: string[]
    }
    /**
     * Relationship data to include in the response.
     */
    include?: ResourceType<'build'>[]
    /**
     * Number of resources to return.
     */
    limit?: number
}
interface ReadBuildBetaDetailInformationQuery {}
interface ReadBuildInformationForBuildBetaDetailQuery {}
export {}
