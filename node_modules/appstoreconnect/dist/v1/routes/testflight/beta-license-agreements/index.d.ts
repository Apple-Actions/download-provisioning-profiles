import { AppType, BetaLicenseAgreementType } from '../../..'
import { API } from '../../../../api'
import { ResourceType } from '../../../data'
import { AppResponse } from '../apps/types'
import {
    BetaLicenseAgreementAppLinkageResponse,
    BetaLicenseAgreementResponse,
    BetaLicenseAgreementsResponse,
    BetaLicenseAgreementUpdateRequest,
} from './types'
/**
 * Find and list beta license agreements for all apps.
 * @param query
 */
export declare function listBetaLicenseAgreements(
    api: API,
    query: ListBetaLicenseAgreementsQuery
): Promise<BetaLicenseAgreementsResponse>
/**
 * Get a specific beta license agreement.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function readBetaLicenseAgreementInformation(
    api: API,
    id: string,
    query: ReadBetaLicenseAgreementInformationQuery
): Promise<BetaLicenseAgreementResponse>
/**
 * Get the app information for a specific beta license agreement.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function readAppInformationForBetaLicenseAgreement(
    api: API,
    id: string,
    query: ReadAppInformationForBetaLicenseAgreementQuery
): Promise<AppResponse>
/**
 * Get the app resource ID for a specific beta license agreement.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
export declare function getAppResourceIDForBetaLicenseAgreement(
    api: API,
    id: string
): Promise<BetaLicenseAgreementAppLinkageResponse>
/**
 * Update the text for your beta license agreement.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export declare function modifyBetaLicenseAgreement(
    api: API,
    id: string,
    body: BetaLicenseAgreementUpdateRequest
): Promise<BetaLicenseAgreementResponse>
interface ListBetaLicenseAgreementsQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        apps?: AppType[]
        /**
         * Fields to return for included related types.
         */
        betaLicenseAgreements?: BetaLicenseAgreementType[]
    }
    filter?: {
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
interface ReadBetaLicenseAgreementInformationQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        apps?: AppType[]
        /**
         * Fields to return for included related types.
         */
        betaLicenseAgreements?: BetaLicenseAgreementType[]
    }
    /**
     * Relationship data to include in the response.
     */
    include?: ResourceType<'app'>[]
}
interface ReadAppInformationForBetaLicenseAgreementQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        apps?: AppType[]
    }
}
export {}
