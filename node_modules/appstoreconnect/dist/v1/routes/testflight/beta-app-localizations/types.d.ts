import { Locale } from '../../..'
import { Data, Links, ResourceType } from '../../../data'
import {
    DocumentLinks,
    PagedDocumentLinks,
    PagingInformation,
    ResourceLinks,
} from '../../../paging'
import { App } from '../apps/types'
/**
 * A response containing a list of related resource IDs.
 */
export interface AppBetaAppLocalizationsLinkagesResponse {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'betaAppLocalizations'>[]
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
 * The data structure that represents the resource.
 */
export interface BetaAppLocalization {
    /**
     * The resource's attributes.
     */
    attributes?: {
        /**
         * A description of your app that highlights features and functionality.
         */
        description?: string
        /**
         * An email address to which beta testers can send feedback. Also appears as the reply-to address for TestFlight invitation emails.
         */
        feedbackEmail?: string
        /**
         * The specified locale. Refer to Table 1 for possible values.
         */
        locale?: Locale
        /**
         * A URL with information about your app. This URL is visible to testers in the TestFlight app.
         */
        marketingUrl?: URL
        /**
         * A URL that links to your company’s privacy policy. Privacy policies are recommended for all apps that collect user or device-related data or as otherwise required by law.
         */
        privacyPolicyUrl?: URL
        /**
         * Your company’s privacy policy. Privacy policies are recommended for all apps that collect user or device-related data, or as otherwise required by law.
         */
        tvOsPrivacyPolicy?: string
    }
    /**
     * The opaque resource ID that uniquely identifies the resource.
     */
    id: string
    /**
     * Navigational links to related data and included resource types and IDs.
     */
    relationships?: {
        app?: {
            data?: Data<'apps'>
            links?: Links
        }
    }
    /**
     * The resource type.
     */
    type: ResourceType<'betaAppLocalizations'>
    /**
     * Navigational links that include the self-link.
     */
    links: ResourceLinks
}
/**
 * A response containing the ID of the related resource.
 */
export interface BetaAppLocalizationAppLinkageResponse {
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
 * A request containing a single resource.
 */
export interface BetaAppLocalizationCreateRequest {
    /**
     * The resource data.
     */
    data: {
        /**
         * The resource's attributes.
         */
        attributes: {
            /**
             * A description of your app that highlights features and functionality.
             */
            description?: string
            /**
             * An email address to which beta testers can send feedback. Also appears as the reply-to address for TestFlight invitation emails.
             */
            feedbackEmail?: string
            /**
             * The specified locale. Refer to Table 1 for possible values.
             */
            locale: Locale
            /**
             * A URL with information about your app. This URL is visible to testers in the TestFlight app.
             */
            marketingUrl?: URL
            /**
             * A URL that links to your company’s privacy policy. Privacy policies are recommended for all apps that collect user or device-related data or as otherwise required by law.
             */
            privacyPolicyUrl?: URL
            /**
             * Your company’s privacy policy. Privacy policies are recommended for all apps that collect user or device-related data, or as otherwise required by law.
             */
            tvOsPrivacyPolicy?: string
        }
        /**
         * Navigational links to related data and included resource types and IDs.
         */
        relationships: {
            app: {
                data: Data<'apps'>
            }
        }
        /**
         * The resource type.
         */
        type: ResourceType<'betaAppLocalizations'>
    }
}
/**
 * A response containing a single resource.
 */
export interface BetaAppLocalizationResponse {
    /**
     * The resource data.
     */
    data: BetaAppLocalization
    /**
     * The requested relationship data.
     */
    include?: App[]
    /**
     * Navigational links that include the self-link.
     */
    links: DocumentLinks
}
/**
 * A request containing a single resource.
 */
export interface BetaAppLocalizationUpdateRequest {
    /**
     * The resource data.
     */
    data: {
        attributes?: {
            /**
             * A description of your app that highlights features and functionality.
             */
            description?: string
            /**
             * An email address to which beta testers can send feedback. Also appears as the reply-to address for TestFlight invitation emails.
             */
            feedbackEmail?: string
            /**
             * A URL with information about your app. This URL is visible to testers in the TestFlight app.
             */
            marketingUrl?: URL
            /**
             * A URL that links to your company’s privacy policy. Privacy policies are recommended for all apps that collect user or device-related data or as otherwise required by law.
             */
            privacyPolicyUrl?: URL
            /**
             * Your company’s privacy policy. Privacy policies are recommended for all apps that collect user or device-related data, or as otherwise required by law.
             */
            tvOsPrivacyPolicy?: string
        }
        id: string
        type: ResourceType<'betaAppLocalizations'>
    }
}
/**
 * A response containing a list of resources.
 */
export interface BetaAppLocalizationsResponse {
    /**
     * The resource data.
     */
    data: BetaAppLocalization[]
    /**
     * The requested relationship data.
     */
    include?: App[]
    /**
     * Navigational links that include the self-link.
     */
    links: PagedDocumentLinks
    /**
     * Paging information.
     */
    meta?: PagingInformation
}
