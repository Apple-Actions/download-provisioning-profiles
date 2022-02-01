import { API } from '../../../../api'
import {
    DeviceCreateRequest,
    DeviceResponse,
    DevicesResponse,
    DeviceStatus,
    DeviceUpdateRequest,
} from './types'
/**
 * Register a new device for app development.
 */
export declare function registerNewDevice(
    api: API,
    body: DeviceCreateRequest
): Promise<DeviceResponse>
/**
 * Find and list devices registered to your team.
 */
export declare function listDevices(
    api: API,
    query: ListDevicesQuery
): Promise<DevicesResponse>
/**
 * Get information for a specific device registered to your team.
 */
export declare function readDeviceInformation(
    api: API,
    id: string,
    query: ReadDeviceInformationQuery
): Promise<DeviceResponse>
/**
 * Update the name or status of a specific device.
 */
export declare function modifyRegisteredDevice(
    api: API,
    id: string,
    body: DeviceUpdateRequest
): Promise<DeviceResponse>
export declare type ListDevicesSortOption =
    | 'id'
    | '-id'
    | 'name'
    | '-name'
    | 'platform'
    | '-platform'
    | 'status'
    | '-status'
    | 'udid'
    | '-udid'
export declare type DevicesType =
    | 'addedDate'
    | 'deviceClass'
    | 'model'
    | 'name'
    | 'platform'
    | 'status'
    | 'udid'
export interface ListDevicesQuery {
    fields?: {
        devices?: DevicesType[]
    }
    filter?: {
        id?: string[]
        name?: string[]
        platform?: ('IOS' | 'MAC_OS')[]
        status?: DeviceStatus[]
        udid?: string[]
    }
    limit?: number
    sort?: ListDevicesSortOption[]
}
export interface ReadDeviceInformationQuery {
    fields?: {
        devices?: DevicesType[]
    }
}
