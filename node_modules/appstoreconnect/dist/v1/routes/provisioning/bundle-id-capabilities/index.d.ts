import { API } from '../../../../api'
import {
    BundleIdCapabilityCreateRequest,
    BundleIdCapabilityResponse,
    BundleIdCapabilityUpdateRequest,
} from './types'
/**
 * Enable a capability for a bundle ID.
 */
export declare function enableCapability(
    api: API,
    body: BundleIdCapabilityCreateRequest
): Promise<BundleIdCapabilityResponse>
/**
 * Disable a capability for a bundle ID.
 */
export declare function disableCapability(api: API, id: string): Promise<void>
/**
 * Update the configuration of a specific capability.
 */
export declare function modifyCapabilityConfiguration(
    api: API,
    id: string,
    body: BundleIdCapabilityUpdateRequest
): Promise<BundleIdCapabilityResponse>
