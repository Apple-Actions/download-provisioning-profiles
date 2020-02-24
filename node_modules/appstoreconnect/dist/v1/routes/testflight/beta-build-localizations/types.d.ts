import { Locale } from '../../..'
import { Data, Links, ResourceType } from '../../../data'
import {
    DocumentLinks,
    PagedDocumentLinks,
    PagingInformation,
    ResourceLinks,
} from '../../../paging'
import { Build } from '../builds/types'
/**
 * The data structure that represents the resource.
 */
export interface BetaBuildLocalization {
    /**
     * The resource's attributes.
     */
    attributes?: BetaBuildLocalizationAttributes
    /**
     * The opaque resource ID that uniquely identifies the resource.
     */
    id: string
    /**
     * Navigational links to related data and included resource types and IDs.
     */
    relationships?: {
        build?: {
            data?: Data<'build'>
            links?: Links
        }
    }
    /**
     * The resource type.
     */
    type: ResourceType<'betaBuildLocalizations'>
    /**
     * Navigational links that include the self-link.
     */
    links: ResourceLinks
}
/**
 * Attributes that describe a resource.
 */
interface BetaBuildLocalizationAttributes {
    /**
     * The specified locale.
     */
    locale: Locale
    /**
     * A field that describes changes and additions to a build and indicates features you would like your users to test.
     */
    whatsNew: string
}
/**
 * A response containing a single resource.
 */
export interface BetaBuildLocalizationResponse {
    /**
     * The resource data.
     */
    data: BetaBuildLocalization
    /**
     * The requested relationship data.
     */
    include?: Build[]
    /**
     * Navigational links that include the self-link.
     */
    links: ResourceLinks
}
/**
 * A request containing a single resource.
 */
export interface BetaBuildLocalizationCreateRequest {
    /**
     * The resource data.
     */
    data: {
        /**
         * The resource's attributes.
         */
        attributes: BetaBuildLocalizationAttributes
        /**
         * Navigational links to related data and included resource types and IDs.
         */
        relationships: {
            build: {
                data: Data<'build'>
            }
        }
        /**
         * The resource type.
         */
        type: ResourceType<'betaBuildLocalizations'>
    }
}
/**
 * A request containing a single resource.
 */
export interface BetaBuildLocalizationUpdateRequest {
    /**
     * The resource data.
     */
    data: {
        /**
         * The resource's attributes.
         */
        attributes?: {
            /**
             * A field that describes changes and additions to a build and indicates features you would like your users to test.
             */
            whatsNew?: string
        }
        /**
         * The opaque resource ID that uniquely identifies the resource.
         */
        id: string
        /**
         * The resource type.
         */
        type: ResourceType<'betaBuildLocalizations'>
    }
}
/**
 * A response containing a list of resources.
 */
export interface BetaBuildLocalizationsResponse {
    /**
     * The resource data.
     */
    data: BetaBuildLocalization[]
    /**
     * The requested relationship data.
     */
    include?: Build[]
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
 * A response containing a single resource.
 */
export interface BetaBuildLocalizationBuildLinkageResponse {
    /**
     * The resource data.
     */
    data: Data<'builds'>
    /**
     * Navigational links that include the self-link.
     */
    links: DocumentLinks
}
export {}
