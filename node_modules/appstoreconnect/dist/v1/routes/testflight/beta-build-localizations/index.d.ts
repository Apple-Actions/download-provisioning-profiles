import { BetaBuildLocalizationType, BuildType, Locale } from '../../..'
import { API } from '../../../../api'
import { ResourceType } from '../../../data'
import { BuildResponse } from '../builds/types'
import {
    BetaBuildLocalizationBuildLinkageResponse,
    BetaBuildLocalizationCreateRequest,
    BetaBuildLocalizationResponse,
    BetaBuildLocalizationsResponse,
    BetaBuildLocalizationUpdateRequest,
} from './types'
/**
 * Find and list beta build localizations currently associated with apps.
 * @param query
 */
export declare function listBetaBuildLocalizations(
    api: API,
    query: ListBetaBuildLocalizationsQuery
): Promise<BetaBuildLocalizationsResponse>
/**
 * Get a specific beta build localization resource.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function readBetaBuildLocalizationInformation(
    api: API,
    id: string,
    query: ReadBetaBuildLocalizationInformationQuery
): Promise<BetaBuildLocalizationResponse>
/**
 * Get the build information for a specific beta build localization.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function readBuildInformationForBetaBuildLocalization(
    api: API,
    id: string,
    query: ReadBuildInformationForBetaBuildLocalizationQuery
): Promise<BuildResponse>
/**
 * Get a build resource ID for a specific beta build localization.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
export declare function getBuildIDForBetaBuildLocalization(
    api: API,
    id: string
): Promise<BetaBuildLocalizationBuildLinkageResponse>
/**
 * Create localized What’s New text for a build.
 * @param body
 */
export declare function createBetaBuildLocalization(
    api: API,
    body: BetaBuildLocalizationCreateRequest
): Promise<BetaBuildLocalizationResponse>
/**
 * Update the localized What’s New text for a specific beta build and locale.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export declare function modifyBetaBuildLocalization(
    api: API,
    id: string,
    body: BetaBuildLocalizationUpdateRequest
): Promise<BetaBuildLocalizationResponse>
/**
 * Delete a specific beta build localization associated with a build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
export declare function deleteBetaBuildLocalization(
    api: API,
    id: string
): Promise<void>
interface ListBetaBuildLocalizationsQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        betaBuildLocalizations?: BetaBuildLocalizationType[]
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
        locale: Locale[]
    }
    /**
     */
    include?: ResourceType<'build'>[]
    /**
     * Number of resources to return.
     */
    limit?: number
}
interface ReadBetaBuildLocalizationInformationQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        betaBuildLocalizations?: BetaBuildLocalizationType[]
        /**
         * Fields to return for included related types.
         */
        builds?: BuildType[]
    }
    /**
     * Relationship data to include in the response.
     */
    include?: ResourceType<'builds'>[]
}
interface ReadBuildInformationForBetaBuildLocalizationQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        builds?: BuildType[]
    }
}
export {}
