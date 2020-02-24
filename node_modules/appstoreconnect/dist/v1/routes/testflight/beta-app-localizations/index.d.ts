import { AppType, BetaAppLocalizationType } from '../../..'
import { API } from '../../../../api'
import { ResourceType } from '../../../data'
import { AppResponse } from '../apps/types'
import {
    BetaAppLocalizationAppLinkageResponse,
    BetaAppLocalizationCreateRequest,
    BetaAppLocalizationResponse,
    BetaAppLocalizationsResponse,
    BetaAppLocalizationUpdateRequest,
} from './types'
/**
 * Find and list beta app localizations for all apps and locales.
 * @param query
 */
export declare function listBetaAppLocalizations(
    api: API,
    query: ListBetaAppLocalizationsQuery
): Promise<BetaAppLocalizationsResponse>
/**
 * Get localized beta app information for a specific app and locale.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function readBetaAppLocalizationInformation(
    api: API,
    id: string,
    query: ReadBetaAppLocalizationInformationQuery
): Promise<BetaAppLocalizationResponse>
/**
 * Get the app information associated with a specific beta app localization.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function readAppInformationForBetaAppLocalization(
    api: API,
    id: string,
    query: ReadAppInformationForBetaAppLocalizationQuery
): Promise<AppResponse>
/**
 * Get the app resource ID for a specified beta app localization.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
export declare function getAppResourceIDForBetaAppLocalization(
    api: API,
    id: string
): Promise<BetaAppLocalizationAppLinkageResponse>
/**
 * Create localized descriptive information for an app.
 * @param body
 */
export declare function createBetaAppLocalization(
    api: API,
    body: BetaAppLocalizationCreateRequest
): Promise<BetaAppLocalizationResponse>
/**
 * Update the localized What’s New text for a specific app and locale.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export declare function modifyBetaAppLocalization(
    api: API,
    id: string,
    body: BetaAppLocalizationUpdateRequest
): Promise<BetaAppLocalizationResponse>
/**
 * Delete a beta app localization associated with an app.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
export declare function deleteBetaAppLocalization(
    api: API,
    id: string
): Promise<void>
interface ListBetaAppLocalizationsQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        apps?: AppType[]
        /**
         * Fields to return for included related types.
         */
        betaAppLocalizations?: BetaAppLocalizationType[]
    }
    filter?: {
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        app?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        locale?: string[]
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
interface ReadBetaAppLocalizationInformationQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        apps?: AppType[]
        /**
         * Fields to return for included related types.
         */
        betaAppLocalizations?: BetaAppLocalizationType[]
    }
    /**
     * Relationship data to include in the response.
     */
    include?: ResourceType<'app'>[]
}
interface ReadAppInformationForBetaAppLocalizationQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        apps?: AppType[]
    }
}
export {}
