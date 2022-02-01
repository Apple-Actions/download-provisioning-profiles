import { API } from '../../../../api'
import {
    BuildBetaNotificationCreateRequest,
    BuildBetaNotificationResponse,
} from './types'
/**
 * Send a notification to all assigned beta testers that a build is available for testing.
 * @param body
 */
export declare function sendNotificationOfAvailableBuild(
    api: API,
    body: BuildBetaNotificationCreateRequest
): Promise<BuildBetaNotificationResponse>
