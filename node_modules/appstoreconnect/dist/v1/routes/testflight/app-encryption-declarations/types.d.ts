import { Data, Links, ResourceType } from '../../../data'
import {
    DocumentLinks,
    PagedDocumentLinks,
    PagingInformation,
    ResourceLinks,
} from '../../../paging'
import { App, Platform } from '../apps/types'
import { DateTime } from 'luxon'
/**
 * The data structure that represents the resource.
 */
export interface AppEncryptionDeclaration {
    /**
     * The resource's attributes.
     */
    attributes?: {
        /**
         * A Boolean value that indicates the intent to distribute your app on the French App Store.
         */
        availableOnFrenchStore?: boolean
        /**
         * A unique identifier that can be added to your app to associate it with a given declaration.
         */
        codeValue?: string
        /**
         * A Boolean value that indicates your app implements any proprietary encryption algorithms.
         */
        containsProprietaryCryptography?: boolean
        /**
         * A Boolean value that indicates your app implements any standard encryption algorithms instead of, or in addition to, using or accessing the encryption in Apple’s operating systems.
         */
        containsThirdPartyCryptography?: boolean
        /**
         * The document name of your submitted export compliance documentation.
         */
        documentName?: string
        /**
         * The file type of your submitted export compliance documentation.
         */
        documentType?: string
        /**
         * The URL to the file of your submitted export compliance documentation.
         */
        documentUrl?: URL
        /**
         * A Boolean value that indicates your app is exempt based on your use of encryption and the app's availability.
         */
        exempt?: boolean
        /**
         * The platform of the declaration.
         */
        platform?: Platform
        /**
         * A Boolean value that indicates whether your app uses, contains, or incorporates cryptography.
         */
        usesEncryption?: boolean
        /**
         * The approval state of your export compliance documentation.
         */
        appEncryptionDeclarationState?: AppEncryptionDeclarationState
        /**
         * The date and time you submitted your declaration.
         */
        uploadedDate?: DateTime
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
        builds?: {
            data?: Data<'builds'>[]
            links?: Links
            meta?: PagingInformation
        }
    }
    /**
     * The resource type.
     */
    type: ResourceType<'appEncryptionDeclarations'>
    /**
     * Navigational links that include the self-link.
     */
    links: ResourceLinks
}
/**
 * A response containing the ID of the related resource.
 */
export interface AppEncryptionDeclarationAppLinkageResponse {
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
 * A response containing a list of related resource IDs.
 */
export interface AppEncryptionDeclarationBuildsLinkagesRequest {
    /**
     * The object types and IDs of the related resources.
     */
    data: Data<'builds'>[]
}
/**
 * A response containing a single resource.
 */
export interface AppEncryptionDeclarationResponse {
    /**
     * The resource data.
     */
    data: AppEncryptionDeclaration
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
 * A response containing a list of resources.
 */
export interface AppEncryptionDeclarationsResponse {
    /**
     * The resource data.
     */
    data: AppEncryptionDeclaration[]
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
 * Strings representing the review or acceptance status of an app encryption declaration submitted to Apple.
 */
export declare enum AppEncryptionDeclarationState {
    APPROVED = 'APPROVED',
    INVALID = 'INVALID',
    EXPIRED = 'EXPIRED',
    IN_REVIEW = 'IN_REVIEW',
    REJECTED = 'REJECTED',
}
