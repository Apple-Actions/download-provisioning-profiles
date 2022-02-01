import { API } from '../../../../api'
import {
    CertificateCreateRequest,
    CertificateResponse,
    CertificatesResponse,
    CertificateType,
} from './types'
/**
 * Create a new certificate using a certificate signing request.
 */
export declare function createCertificate(
    api: API,
    body: CertificateCreateRequest
): Promise<CertificateResponse>
/**
 * Find and list certificates and download their data.
 */
export declare function listAndDownloadCertificates(
    api: API,
    query: ListAndDownloadCertificatesQuery
): Promise<CertificatesResponse>
/**
 * Get information about a certificate and download the certificate data.
 */
export declare function readAndDownloadCertificateInformation(
    api: API,
    id: string,
    query: ReadAndDownloadCertificateInformationQuery
): Promise<CertificateResponse>
/**
 * Get information about a certificate and download the certificate data.
 */
export declare function revokeCertificate(api: API, id: string): Promise<void>
export declare type CertificatesType =
    | 'certificateContent'
    | 'certificateType'
    | 'csrContent'
    | 'displayName'
    | 'expirationDate'
    | 'name'
    | 'platform'
    | 'serialNumber'
export declare type ListAndDownloadCertificatesSortOption =
    | 'certificateType'
    | '-certificateType'
    | 'displayName'
    | '-displayName'
    | 'id'
    | '-id'
    | 'serialNumber'
    | '-serialNumber'
export interface ListAndDownloadCertificatesQuery {
    fields?: {
        certificates?: CertificatesType[]
    }
    filter?: {
        id?: string[]
        serialNumber?: string[]
        certificateType?: CertificateType[]
        displayName?: string[]
    }
    limit?: number
    sort?: ListAndDownloadCertificatesSortOption[]
}
export interface ReadAndDownloadCertificateInformationQuery {
    fields?: {
        certificates?: CertificatesType[]
    }
}
