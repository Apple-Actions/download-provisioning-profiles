import {
    AppEncryptionDeclarationType,
    AppType,
    BetaAppReviewSubmissionType,
    BetaBuildLocalizationType,
    BetaTesterType,
    BuildBetaDetailType,
    BuildType,
    PreReleaseVersionType,
} from '../../..'
import { API } from '../../../../api'
import { AppEncryptionDeclarationResponse } from '../app-encryption-declarations/types'
import { AppResponse } from '../apps/types'
import {
    BetaAppReviewSubmissionResponse,
    BuildBetaAppReviewSubmissionLinkageResponse,
} from '../beta-app-review-submissions/types'
import { BetaBuildLocalizationsResponse } from '../beta-build-localizations/types'
import { BetaTestersResponse } from '../beta-testers/types'
import { BuildBetaDetailResponse } from '../build-beta-details/types'
import { PrereleaseVersionResponse } from '../prerelease-versions/types'
import {
    BuildAppEncryptionDeclarationLinkageRequest,
    BuildAppEncryptionDeclarationLinkageResponse,
    BuildAppLinkageResponse,
    BuildBetaBuildLocalizationsLinkagesResponse,
    BuildBetaGroupsLinkagesRequest,
    BuildBuildBetaDetailLinkageResponse,
    BuildIndividualTestersLinkagesRequest,
    BuildIndividualTestersLinkagesResponse,
    BuildPreReleaseVersionLinkageResponse,
    BuildResponse,
    BuildsResponse,
    BuildUpdateRequest,
    ProcessingState,
} from './types'
/**
 * Find and list builds for all apps in App Store Connect.
 */
export declare function listBuilds(
    api: API,
    query: ListBuildsQuery
): Promise<BuildsResponse>
/**
 * Get information about a specific build.
 */
export declare function readBuildInformation(
    api: API,
    id: string,
    query: ReadBuildInformationQuery
): Promise<BuildResponse>
/**
 * Get the app information for a specific build.
 */
export declare function readAppInformationForBuild(
    api: API,
    id: string,
    query: ReadAppInformationQuery
): Promise<AppResponse>
/**
 * Get the app resource ID associated with a specific build.
 */
export declare function getAppResourceIDForBuild(
    api: API,
    id: string
): Promise<BuildAppLinkageResponse>
/**
 * Get the prerelease version for a specific build.
 */
export declare function readPrereleaseVersionForBuild(
    api: API,
    id: string,
    query: ReadPrereleaseVersionForBuildQuery
): Promise<PrereleaseVersionResponse>
/**
 * Get a list of resource IDs of prerelease versions associated with a build.
 */
export declare function getAllResourceIDsForPrereleaseVersionsForBuild(
    api: API,
    id: string
): Promise<BuildPreReleaseVersionLinkageResponse>
/**
 * Expire a build or change its encryption exemption setting.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export declare function modifyBuild(
    api: API,
    id: string,
    body: BuildUpdateRequest
): Promise<BuildResponse>
/**
 * Assign an app encryption declaration to a build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export declare function assignAppEncryptionDeclarationForBuild(
    api: API,
    id: string,
    body: BuildAppEncryptionDeclarationLinkageRequest
): Promise<void>
/**
 * Add or create a beta group to a build to enable testing.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export declare function addAccessForBetaGroupsForBuild(
    api: API,
    id: string,
    body: BuildBetaGroupsLinkagesRequest
): Promise<void>
/**
 * Remove access to a specific build for all beta testers in one or more beta groups.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export declare function removeAccessForBetaGroupsForBuild(
    api: API,
    id: string,
    body: BuildBetaGroupsLinkagesRequest
): Promise<void>
/**
 * Enable a beta tester who is not a part of a beta group to test a build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export declare function assignIndividualTestersForBuild(
    api: API,
    id: string,
    body: BuildIndividualTestersLinkagesRequest
): Promise<void>
/**
 * Remove access to test a specific build from one or more individually assigned testers.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param body
 */
export declare function removeIndividualTestersFromBuild(
    api: API,
    id: string,
    body: BuildIndividualTestersLinkagesRequest
): Promise<void>
/**
 * Get a list of beta testers individually assigned to a build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function listAllIndividualTestersForBuild(
    api: API,
    id: string,
    query: ListAllIndividualTestersForBuildQuery
): Promise<BetaTestersResponse>
/**
 * Get a list of resource IDs of individual testers associated with a build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function getAllResourceIDsForIndividualTestersForBuild(
    api: API,
    id: string,
    query: GetAllResourceIDsForIndividualTestersForBuildQuery
): Promise<BuildIndividualTestersLinkagesResponse>
/**
 * Get the beta app review submission status for a specific build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function readBetaAppReviewSubmissionForBuild(
    api: API,
    id: string,
    query: ReadBetaAppReviewSubmissionForBuildQuery
): Promise<BetaAppReviewSubmissionResponse>
/**
 * Get the beta app review submission resource ID associated with a specific build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
export declare function getBetaAppReviewSubmissionIDForBuild(
    api: API,
    id: string
): Promise<BuildBetaAppReviewSubmissionLinkageResponse>
/**
 * Get the beta test details for a specific build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function readBuildBetaDetailsInformationForBuild(
    api: API,
    id: string,
    query: ReadBuildBetaDetailsInformationForBuildQuery
): Promise<BuildBetaDetailResponse>
/**
 * Get the build beta details resource ID associated with a specific build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
export declare function getBuildBetaDetailsResourceIDForBuild(
    api: API,
    id: string
): Promise<BuildBuildBetaDetailLinkageResponse>
/**
 * Read an app encryption declaration associated with a specific build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function readAppEncryptionDeclarationForBuild(
    api: API,
    id: string,
    query: ReadAppEncryptionDeclarationForBuildQuery
): Promise<AppEncryptionDeclarationResponse>
/**
 * Get the beta app encryption declaration resource ID associated with a build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 */
export declare function getAppEncryptionDeclarationIDForBuild(
    api: API,
    id: string
): Promise<BuildAppEncryptionDeclarationLinkageResponse>
/**
 * Get a list of localized beta test information for a specific build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function listAllBetaBuildLocalizationsForBuild(
    api: API,
    id: string,
    query: ListAllBetaBuildLocalizationsForBuildQuery
): Promise<BetaBuildLocalizationsResponse>
/**
 * Get a list of beta build localization resource IDs associated with a build.
 * @param id An opaque resource ID that uniquely identifies the resource.
 * @param query
 */
export declare function getAllBetaBuildLocalizationIDsForBuild(
    api: API,
    id: string,
    query: GetAllBetaBuildLocalizationIDsForBuildQuery
): Promise<BuildBetaBuildLocalizationsLinkagesResponse>
interface ListBuildsQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        appEncryptionDeclarations?: AppEncryptionDeclarationType[]
        /**
         * Fields to return for included related types.
         */
        apps?: AppType[]
        /**
         * Fields to return for included related types.
         */
        betaTesters?: BetaTesterType[]
        /**
         * Fields to return for included related types.
         */
        builds?: BuildType[]
        /**
         * Fields to return for included related types.
         */
        preReleaseVersions?: PreReleaseVersionType[]
        /**
         * Fields to return for included related types.
         */
        buildBetaDetails?: BuildBetaDetailType[]
        /**
         * Fields to return for included related types.
         */
        betaAppReviewSubmissions?: BetaAppReviewSubmissionType[]
        /**
         * Fields to return for included related types.
         */
        betaBuildLocalizations?: BetaBuildLocalizationType[]
    }
    filter?: {
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        app?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        expired?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        id?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        preReleaseVersion?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        processingState?: ProcessingState[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        version?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        usesNonExemptEncryption?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        'preReleaseVersion.version'?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        betaGroups?: string[]
        /**
         * Attributes, relationships, and IDs by which to filter.
         */
        'betaAppReviewSubmission.betaReviewState'?: string[]
    }
    /**
     * Relationship data to include in the response.
     */
    include?: (
        | 'app'
        | 'appEncryptionDeclaration'
        | 'betaAppReviewSubmission'
        | 'betaBuildLocalizations'
        | 'buildBetaDetail'
        | 'individualTesters'
        | 'preReleaseVersion')[]
    /**
     * Number of resources to return.
     */
    /**
     * Attributes by which to sort.
     */
    sort?: (
        | '+preReleaseVersion'
        | '-preReleaseVersion'
        | 'uploadedDate'
        | '+uploadedDate'
        | '-uploadedDate'
        | 'version'
        | '+version'
        | '-version')[]
    limit?: {
        /**
         * Number of included related resources to return.
         */
        individualTesters?: number
        /**
         * Number of included related resources to return.
         */
        betaBuildLocalizations?: number
    }
}
interface ReadBuildInformationQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        appEncryptionDeclarations?: AppEncryptionDeclarationType[]
        /**
         * Fields to return for included related types.
         */
        apps?: AppType[]
        /**
         * Fields to return for included related types.
         */
        betaTesters?: BetaTesterType[]
        /**
         * Fields to return for included related types.
         */
        builds?: BuildType[]
        /**
         * Fields to return for included related types.
         */
        preReleaseVersions: PreReleaseVersionType[]
        /**
         * Fields to return for included related types.
         */
        buildBetaDetails?: BuildBetaDetailType[]
        /**
         * Fields to return for included related types.
         */
        betaAppReviewSubmissions?: BetaAppReviewSubmissionType[]
        /**
         * Fields to return for included related types.
         */
        betaBuildLocalizations?: BetaBuildLocalizationType[]
    }
    /**
     * Relationship data to include in the response.
     */
    include?: (
        | 'app'
        | 'appEncryptionDeclaration'
        | 'betaAppReviewSubmission'
        | 'betaBuildLocalizations'
        | 'buildBetaDetail'
        | 'individualTesters'
        | 'preReleaseVersion')[]
    limit?: {
        /**
         * Fields to return for included related types.
         */
        individualTesters?: number
        /**
         * Fields to return for included related types.
         */
        betaBuildLocalizations?: number
    }
}
interface ReadAppInformationQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        apps?: AppType[]
    }
}
interface ReadPrereleaseVersionForBuildQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        preReleaseVersions: PreReleaseVersionType[]
    }
}
interface ListAllIndividualTestersForBuildQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        betaTesters?: BetaTesterType[]
    }
    /**
     * Number of resources to return.
     */
    limit?: number
}
interface GetAllResourceIDsForIndividualTestersForBuildQuery {
    /**
     * Number of resources to return.
     */
    limit?: number
}
interface ReadBetaAppReviewSubmissionForBuildQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        betaAppReviewSubmissions?: BetaAppReviewSubmissionType[]
    }
}
interface ReadBuildBetaDetailsInformationForBuildQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        buildBetaDetails?: BuildBetaDetailType[]
    }
}
interface ReadAppEncryptionDeclarationForBuildQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        appEncryptionDeclarations?: AppEncryptionDeclarationType[]
    }
}
interface ListAllBetaBuildLocalizationsForBuildQuery {
    fields?: {
        /**
         * Fields to return for included related types.
         */
        betaBuildLocalizations?: BetaBuildLocalizationType[]
    }
    /**
     * Number of resources to return.
     */
    limit?: number
}
interface GetAllBetaBuildLocalizationIDsForBuildQuery {
    /**
     * Number of resources to return.
     */
    limit?: number
}
export {}
