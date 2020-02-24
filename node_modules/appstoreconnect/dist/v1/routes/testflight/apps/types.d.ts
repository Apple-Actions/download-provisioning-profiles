import { Data, Links, ResourceType } from '../../../data'
import {
    DocumentLinks,
    PagedDocumentLinks,
    PagingInformation,
    ResourceLinks,
} from '../../../paging'
import { BetaAppLocalization } from '../beta-app-localizations/types'
import { BetaAppReviewDetail } from '../beta-app-review-detail/types'
import { BetaGroup } from '../beta-groups/types'
import { BetaLicenseAgreement } from '../beta-license-agreements/types'
import { Build } from '../builds/types'
import { PrereleaseVersion } from '../prerelease-versions/types'
/**
 * The data structure that represents the resource.
 */
export interface App {
    /**
     * The resource's attributes.
     */
    attributes?: AppAttributes
    /**
     * The opaque resource ID that uniquely identifies the resource.
     */
    id: string
    /**
     * Navigational links to related data and included resource types and IDs.
     */
    relationships?: {
        betaLicenseAgreement: {
            data?: Data<'betaLicenseAgreements'>
            links?: Links
        }
        preReleaseVersions: {
            data?: Data<'preReleaseVersions'>[]
            links?: Links
            meta?: PagingInformation
        }
        betaAppLocalizations: {
            data?: Data<'betaAppLocalizations'>[]
            links?: Links
            meta?: PagingInformation
        }
        betaGroups: {
            data?: Data<'betaGroups'>[]
            links?: Links
            meta?: PagingInformation
        }
        betaTesters: {
            data?: Data<'betaTesters'>[]
            links?: Links
            meta?: PagingInformation
        }
        builds: {
            data?: Data<'builds'>[]
            links?: Links
            meta?: PagingInformation
        }
        betaAppReviewDetail: {
            data?: Data<'betaAppReviewDetails'>
            links?: Links
        }
    }
    /**
     * The resource type.
     */
    type: ResourceType<'apps'>
    /**
     * Navigational links that include the self-link.
     */
    links: ResourceLinks
}
/**
 * Attributes that describe a resource.
 */
interface AppAttributes {
    /**
     * The bundle ID for your app. This ID must match the one you use in Xcode. The bundle ID cannot be changed after you upload your first build.
     */
    bundleId?: string
    /**
     * The name of your app as it will appear in the App Store. The maximum length is 30 characters.
     */
    name?: string
    /**
     * The primary locale for your app. If localized app information isn’t available in an App Store territory, the information from your primary language is used instead.
     */
    primaryLocale?: string
    /**
     * A unique ID for your app that is not visible on the App Store.
     */
    sku?: string
}
/**
 * A response containing a single resource.
 */
export interface AppResponse {
    /**
     * The resource data.
     */
    data: App
    /**
     * The requested relationship data.
     */
    include?: AppIncludeType[]
    /**
     * Navigational links that include the self-link.
     */
    links: DocumentLinks
}
/**
 * A response containing a list of resources.
 */
export interface AppsResponse {
    /**
     * The resource data.
     */
    data: App[]
    /**
     * The requested relationship data.
     */
    include?: AppIncludeType[]
    /**
     * Navigational links that include the self-link.
     */
    links: PagedDocumentLinks
    /**
     * Paging information.
     */
    meta?: PagingInformation
}
declare type AppIncludeType =
    | BetaGroup
    | PrereleaseVersion
    | BetaAppLocalization
    | Build
    | BetaLicenseAgreement
    | BetaAppReviewDetail
/**
 * A response containing a list of related resource IDs.
 */
export interface AppPreReleaseVersionsLinkagesResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'preReleaseVersions'>[]
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
 * A response containing the ID of the related resource.
 */
export interface AppBetaLicenseAgreementLinkageResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'betaLicenseAgreements'>
    /**
     * Navigational links including the self-link and links to the related data.
     */
    links: DocumentLinks
}
/**
 * A request containing the IDs of related resources.
 */
export interface AppBetaTestersLinkagesRequest {
    /**
     * The types and IDs of related resources.
     */
    data: Data<'betaTesters'>[]
}
/**
 * A response containing a list of related resource IDs.
 */
export interface AppBuildsLinkagesResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'builds'>[]
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
 * A response containing a list of related resource IDs.
 */
export interface AppBetaGroupsLinkagesResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'betaGroups'>[]
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
 * Strings that represent Apple operating systems.
 */
export declare enum Platform {
    /**
     * A string that represents iOS.
     */
    IOS = 'IOS',
    /**
     * A string that represents macOS.
     */
    MAC_OS = 'MAC_OS',
    /**
     * A string that represents tvOS.
     */
    TV_OS = 'TV_OS',
    /**
     * A string that represents watchOS.
     */
    WATCH_OS = 'WATCH_OS',
}
export {}
