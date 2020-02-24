import { Data, ResourceType } from '../../../data'
import { DocumentLinks, ResourceLinks } from '../../../paging'
/**
 * The data structure that represents the resource.
 */
export interface BetaTesterInvitation {
    /**
     * The opaque resource ID that uniquely identifies the resource.
     */
    id: string
    /**
     * The resource type.
     */
    type: ResourceType<'betaTesterInvitations'>
    /**
     * Navigational links that include the self-link.
     */
    links: ResourceLinks
}
/**
 * A request containing a single resource.
 */
export interface BetaTesterInvitationCreateRequest {
    data: {
        /**
         * The types and IDs of the related data to update.
         */
        relationships: {
            app: {
                data: Data<'apps'>
            }
            betaTester: {
                data: Data<'betaTesters'>
            }
        }
        /**
         * The resource type.
         */
        type: ResourceType<'betaTesterInvitations'>
    }
}
/**
 * A response containing a single resource.
 */
export interface BetaTesterInvitationResponse {
    data: BetaTesterInvitation
    links: DocumentLinks
}
