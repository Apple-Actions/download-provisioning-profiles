'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
/**
 * String that represents a build's availability for external testing.
 */
var ExternalBetaState
;(function(ExternalBetaState) {
    ExternalBetaState['PROCESSING'] = 'PROCESSING'
    ExternalBetaState['PROCESSING_EXCEPTION'] = 'PROCESSING_EXCEPTION'
    ExternalBetaState['MISSING_EXPORT_COMPLIANCE'] = 'MISSING_EXPORT_COMPLIANCE'
    ExternalBetaState['READY_FOR_BETA_TESTING'] = 'READY_FOR_BETA_TESTING'
    ExternalBetaState['IN_BETA_TESTING'] = 'IN_BETA_TESTING'
    ExternalBetaState['EXPIRED'] = 'EXPIRED'
    ExternalBetaState['READY_FOR_BETA_SUBMISSION'] = 'READY_FOR_BETA_SUBMISSION'
    ExternalBetaState['IN_EXPORT_COMPLIANCE_REVIEW'] =
        'IN_EXPORT_COMPLIANCE_REVIEW'
    ExternalBetaState['WAITING_FOR_BETA_REVIEW'] = 'WAITING_FOR_BETA_REVIEW'
    ExternalBetaState['IN_BETA_REVIEW'] = 'IN_BETA_REVIEW'
    ExternalBetaState['BETA_REJECTED'] = 'BETA_REJECTED'
    ExternalBetaState['BETA_APPROVED'] = 'BETA_APPROVED'
})(
    (ExternalBetaState =
        exports.ExternalBetaState || (exports.ExternalBetaState = {}))
)
/**
 * String that represents a build's availability for internal testing.
 */
var InternalBetaState
;(function(InternalBetaState) {
    InternalBetaState['PROCESSING'] = 'PROCESSING'
    InternalBetaState['PROCESSING_EXCEPTION'] = 'PROCESSING_EXCEPTION'
    InternalBetaState['MISSING_EXPORT_COMPLIANCE'] = 'MISSING_EXPORT_COMPLIANCE'
    InternalBetaState['READY_FOR_BETA_TESTING'] = 'READY_FOR_BETA_TESTING'
    InternalBetaState['IN_BETA_TESTING'] = 'IN_BETA_TESTING'
    InternalBetaState['EXPIRED'] = 'EXPIRED'
    InternalBetaState['IN_EXPORT_COMPLIANCE_REVIEW'] =
        'IN_EXPORT_COMPLIANCE_REVIEW'
})(
    (InternalBetaState =
        exports.InternalBetaState || (exports.InternalBetaState = {}))
)
