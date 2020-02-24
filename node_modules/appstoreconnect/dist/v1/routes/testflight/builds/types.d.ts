import { Data, Links, ResourceType } from '../../../data'
import {
    DocumentLinks,
    PagedDocumentLinks,
    PagingInformation,
    ResourceLinks,
} from '../../../paging'
import { AppEncryptionDeclaration } from '../app-encryption-declarations/types'
import { App } from '../apps/types'
import { BetaAppReviewSubmission } from '../beta-app-review-submissions/types'
import { BetaBuildLocalization } from '../beta-build-localizations/types'
import { BetaTester } from '../beta-testers/types'
import { BuildBetaDetail } from '../build-beta-details/types'
import { PrereleaseVersion } from '../prerelease-versions/types'
import { DateTime } from 'luxon'
/**
 * The data structure that represents the resource.
 */
export interface Build {
    /**
     * The resource's attributes.
     */
    attributes?: {
        /**
         * A Boolean value that indicates if the build has expired. An expired build is unavailable for testing.
         */
        expired?: boolean
        /**
         * The icon of the uploaded build.
         */
        iconAssetToken?: ImageAsset
        /**
         * The minimum operating system version needed to test a build.
         */
        minOsVersion?: string
        /**
         * The processing state of the build indicating that it is not yet available for testing.
         */
        processingState?: ProcessingState
        /**
         * The version number of the uploaded build.
         */
        version?: string
        /**
         * A Boolean value that indicates whether the build uses non-exempt encryption.
         */
        usesNonExemptEncryption?: boolean
        /**
         * The date and time the build was uploaded to App Store Connect.
         */
        uploadedDate?: DateTime
        /**
         * The date and time the build will auto-expire and no longer be available for testing.
         */
        expirationDate?: DateTime
    }
    /**
     * The opaque resource ID that uniquely identifies the resource.
     */
    id: string
    /**
     * Navigational links to related data and included resource types and IDs.
     */
    relationships?: {
        apps?: {
            data?: Data<'apps'>
            links?: Links
        }
        appEncryptionDeclaration?: {
            data?: Data<'appEncryptionDeclarations'>
            links?: Links
        }
        individualTesters?: {
            data?: Data<'betaTesters'>[]
            links?: Links
            meta?: PagingInformation
        }
        preReleaseVersion?: {
            data?: Data<'preReleaseVersions'>
            links?: Links
        }
        betaBuildLocalizations?: {
            data?: Data<'betaBuildLocalizations'>[]
            links?: Links
            meta?: PagingInformation
        }
        betaGroups?: {
            data?: Data<'betaGroups'>[]
            links?: Links
            meta?: PagingInformation
        }
        buildBetaDetail?: {
            data?: Data<'buildBetaDetails'>
            links?: Links
        }
        betaAppReviewSubmission?: {
            data?: Data<'betaAppReviewSubmissions'>
            links?: Links
        }
    }
    /**
     * The resource type.
     */
    type: ResourceType<'builds'>
    /**
     * Navigational links that include the self-link.
     */
    links?: ResourceLinks
}
export declare type ProcessingState =
    | 'PROCESSING'
    | 'FAILED'
    | 'INVALID'
    | 'VALID'
/**
 * A response containing a single resource.
 */
export interface BuildResponse {
    /**
     * The resource data.
     */
    data: Build
    /**
     * The requested relationship data.
     */
    include?: (
        | PrereleaseVersion
        | BetaTester
        | BetaBuildLocalization
        | AppEncryptionDeclaration
        | BetaAppReviewSubmission
        | App
        | BuildBetaDetail)[]
    /**
     * Navigational links that include the self-link.
     */
    links: DocumentLinks
}
/**
 * A response containing a list of resources.
 */
export interface BuildsResponse {
    /**
     * The resource data.
     */
    data: Build[]
    /**
     * The requested relationship data.
     */
    include?: (
        | PrereleaseVersion
        | BetaTester
        | BetaBuildLocalization
        | AppEncryptionDeclaration
        | BetaAppReviewSubmission
        | App
        | BuildBetaDetail)[]
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
 * A request containing a single resource.
 */
export interface BuildUpdateRequest {
    /**
     * The resource data.
     */
    data: {
        /**
         * The resource's attributes.
         */
        attributes?: {
            /**
             * A Boolean value that indicates if the build has expired. An expired build is unavailable for testing.
             */
            expires?: boolean
            /**
             * A Boolean value that indicates whether the build uses non-exempt encryption.
             */
            usesNonExemptEncryption?: boolean
        }
        /**
         * The opaque resource ID that uniquely identifies the resource.
         */
        id: string
        /**
         * Navigational links to related data and included resource types and IDs.
         */
        relationships?: {
            appEncryptionDeclaration?: {
                data?: Data<'appEncryptionDeclarations'>
            }
        }
        /**
         * The resource type.
         */
        type: ResourceType<'builds'>
    }
}
/**
 * A response containing the ID of the related resource.
 */
export interface BuildAppLinkageResponse {
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
 * A request containing the ID of the related resource.
 */
export interface BuildAppEncryptionDeclarationLinkageRequest {
    /**
     * The types and IDs of related resources.
     */
    data: Data<'appEncryptionDeclarations'>
}
/**
 * A response containing the ID of the related resource.
 */
export interface BuildPreReleaseVersionLinkageResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'preReleaseVersions'>
    /**
     * Navigational links including the self-link and links to the related data.
     */
    links: DocumentLinks
}
/**
 * A response containing the ID of the related resource.
 */
export interface BuildAppEncryptionDeclarationLinkageResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'appEncryptionDeclarations'>
    /**
     * Navigational links including the self-link and links to the related data.
     */
    links: DocumentLinks
}
/**
 * A response containing the ID of the related resource.
 */
export interface BuildBuildBetaDetailLinkageResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'buildBetaDetails'>
    /**
     * Navigational links including the self-link and links to the related data.
     */
    links: DocumentLinks
}
/**
 * A response containing a list of related resource IDs.
 */
export interface BuildBetaBuildLocalizationsLinkagesResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'betaBuildLocalizations'>[]
    /**
     * Navigational links including the self-link and links to the related data.
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
export interface BuildIndividualTestersLinkagesRequest {
    /**
     * The types and IDs of related resources.
     */
    data: Data<'betaTesters'>[]
}
/**
 * A response containing a list of related resource IDs.
 */
export interface BuildIndividualTestersLinkagesResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'betaTesters'>[]
    /**
     * Navigational links including the self-link and links to the related data.
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
export interface BuildBetaGroupsLinkagesRequest {
    /**
     * The types and IDs of related resources.
     */
    data: Data<'betaGroups'>[]
}
/**
 * An image asset, including its height, width, and template URL.
 */
export interface ImageAsset {
    templateUrl?: URL
    height?: number
    width?: number
}
