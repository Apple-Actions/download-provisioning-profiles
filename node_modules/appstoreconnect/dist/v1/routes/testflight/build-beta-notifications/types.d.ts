import { Data, ResourceType } from '../../../data'
import { DocumentLinks, ResourceLinks } from '../../../paging'
/**
 * The data structure that represents the resource.
 */
export interface BuildBetaNotification {
    /**
     * The opaque resource ID that uniquely identifies the resource.
     */
    id: string
    /**
     * Navigational links that include the self-link.
     */
    links: ResourceLinks
    /**
     * The resource type.
     */
    type: ResourceType<'buildBetaNotifications'>
}
/**
 * A request containing a single resource.
 */
export interface BuildBetaNotificationCreateRequest {
    /**
     * The resource data.
     */
    data: {
        /**
         * The types and IDs of the related data to update.
         */
        relationships: {
            build: {
                data: Data<'builds'>
            }
        }
        /**
         * The resource type.
         */
        type: ResourceType<'buildBetaNotifications'>
    }
}
/**
 * A response containing a single resource.
 */
export interface BuildBetaNotificationResponse {
    /**
     * The resource data.
     */
    data: BuildBetaNotification
    /**
     * Navigational links that include the self-link.
     */
    links: DocumentLinks
}
