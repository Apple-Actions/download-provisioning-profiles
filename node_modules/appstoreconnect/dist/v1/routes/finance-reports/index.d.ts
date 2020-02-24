/// <reference types="node" />
import { API } from '../../../api'
/**
 * Download finance reports filtered by your specified criteria.
 * @param query
 */
export declare function downloadFinancialReports(
    api: API,
    query: GetFinanceReportsQuery
): Promise<Buffer>
/**
 * Download sales and trends reports filtered by your specified criteria.
 * @param query
 */
export declare function downloadSalesReports(
    api: API,
    query: GetSalesReportsQuery
): Promise<Buffer>
import { DateTime } from 'luxon'
interface GetFinanceReportsQuery {
    filter?: {
        /**
         * You can download consolidated or separate financial reports per
         * territory. For a complete list of possible values, see
         * {@link https://help.apple.com/app-store-connect/?lang=en#/dev63d64d955|Financial Report Regions and Currencies}.
         */
        regionCode: string
        /**
         * The date of the report you wish to download based on the
         * Apple Fiscal Calendar. The date is specified in the YYYY-MM format.
         */
        reportDate: DateTime
        /**
         * This value is always 'FINANCIAL'.
         */
        reportType: FinanceReportType
        /**
         * You can find your vendor number in {@link https://help.apple.com/app-store-connect/#/dev3a16f3fe0|Payments and Financial Reports}.
         */
        vendorNumber: string
    }
}
interface GetSalesReportsQuery {
    filter: {
        /**
         * Frequency of the report to download.
         */
        frequency: Frequency
        /**
         * The report date to download. The date is specified in the YYYY-MM-DD
         * format for all report frequencies except DAILY, which does not require
         * a specified date.
         *
         * @see {@link https://help.apple.com/itc/appssalesandtrends/#/itc48f999955}
         */
        reportDate?: DateTime
        /**
         * The report sub type to download.
         */
        reportSubType: SalesReportSubType
        /**
         * The report to download.
         */
        reportType: SalesReportType
        /**
         * You can find your vendor number in {@link https://help.apple.com/app-store-connect/#/dev3a16f3fe0|Payments and Financial Reports}.
         */
        vendorNumber: string
        /**
         * The version of the report.
         */
        version?: string
    }
}
declare type FinanceReportType = 'FINANCIAL'
declare type Frequency = 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY'
declare type SalesReportSubType = 'SUMMARY' | 'DETAILED' | 'OPT_IN'
declare type SalesReportType =
    | 'SALES'
    | 'PRE_ORDER'
    | 'NEWSSTAND'
    | 'SUBSCRIPTION'
    | 'SUBSCRIPTION_EVENT'
    | 'SUBSCRIBER'
export {}
