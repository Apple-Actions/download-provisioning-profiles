'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
/**
 * Strings representing user roles in App Store Connect.
 */
var UserRole
;(function(UserRole) {
    /**
     * Serves as a secondary contact for teams and has many of the same
     * responsibilities as the Legal user. Admins have access to all apps.
     */
    UserRole['ADMIN'] = 'ADMIN'
    /**
     * Manages financial information, including reports and tax forms.
     * A user assigned this role can view all apps in
     * Payments and Financial Reports, Sales and Trends, and App Analytics.
     */
    UserRole['FINANCE'] = 'FINANCE'
    /**
     * The Technical role is no longer assignable to new users in
     * App Store Connect. Existing users with the Technical role can manage
     * all the aspects of an app, such as pricing, App Store information,
     * and app development and delivery. Techncial users have access to all
     * apps.
     */
    UserRole['TECHNICAL'] = 'TECHNICAL'
    /**
     * Analyzes sales, downloads, and other analytics for the app.
     */
    UserRole['SALES'] = 'SALES'
    /**
     * Manages marketing materials and promotional artwork. A user assigned
     * this role will be contacted by Apple if the app is in consideration
     * to be featured on the App Store.
     */
    UserRole['MARKETING'] = 'MARKETING'
    /**
     * Manages development and delivery of an app.
     */
    UserRole['DEVELOPER'] = 'DEVELOPER'
    /**
     * Responsible for entering into legal agreements with Apple. The person
     * who completes program enrollment is assigned the Team Agent role in
     * the Apple Developer account and the Legal role in App Store Connect.
     */
    UserRole['ACCOUNT_HOLDER'] = 'ACCOUNT_HOLDER'
    UserRole['READ_ONLY'] = 'READ_ONLY'
    /**
     * Manages all aspects of an app, such as pricing, App Store information,
     * and app development and delivery.
     */
    UserRole['APP_MANAGER'] = 'APP_MANAGER'
    /**
     * Downloads reports associated with a role. The Access To Reports role is
     * an additional permission for users with the App Manager, Developer,
     * Marketing, or Sales role. If this permission is added, the user has
     * access to all of your apps.
     */
    UserRole['ACCESS_TO_REPORTS'] = 'ACCESS_TO_REPORTS'
    /**
     * Analyzes and responds to customer reviews on the App Store. If a user
     * has only the Customer Support role, they'll go straight to the
     * Ratings and Reviews section when they click on an app in My Apps.
     */
    UserRole['CUSTOMER_SUPPORT'] = 'CUSTOMER_SUPPORT'
})((UserRole = exports.UserRole || (exports.UserRole = {})))
