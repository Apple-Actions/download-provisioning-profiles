import { Data, Links, ResourceType } from '../../../data'
import {
    DocumentLinks,
    PagedDocumentLinks,
    PagingInformation,
    ResourceLinks,
} from '../../../paging'
import { App } from '../apps/types'
/**
 * The data structure that represents the resource.
 */
export interface BetaLicenseAgreement {
    attributes?: {
        /**
         * The license agreement text for your beta app that displays to users.
         */
        agreementText?: string
    }
    /**
     * The opaque resource ID that uniquely identifies the resource.
     */
    id: string
    /**
     * Navigational links that include the self-link.
     */
    links: ResourceLinks
    /**
     * Navigational links to related data and included resource types and IDs.
     */
    relationships?: {
        app: {
            data: Data<'apps'>
            links: Links
        }
    }
    /**
     * The resource type.
     */
    type: ResourceType<'betaLicenseAgreements'>
}
/**
 * A request containing a single resource.
 */
export interface BetaLicenseAgreementUpdateRequest {
    data: {
        /**
         * The resource's attributes.
         */
        attributes?: {
            /**
             * The license agreement text for your beta app that displays to users.
             */
            agreementText?: string
        }
        /**
         * The opaque resource ID that uniquely identifies the resource.
         */
        id: string
        /**
         * The resource type.
         */
        type: ResourceType<'betaLicenseAgreements'>
    }
}
/**
 * A response containing a list of resources.
 */
export interface BetaLicenseAgreementsResponse {
    /**
     * The resource data.
     */
    data: BetaLicenseAgreement[]
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
/**
 * A response containing a single resource.
 */
export interface BetaLicenseAgreementResponse {
    /**
     * The resource data.
     */
    data: BetaLicenseAgreement
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
 * A response containing the ID of the related resource.
 */
export interface BetaLicenseAgreementAppLinkageResponse {
    /**
     * A response containing the ID of the related resource.
     */
    data: Data<'apps'>
    /**
     * Navigational links including the self-link and links to the related data.
     */
    links: DocumentLinks
}
