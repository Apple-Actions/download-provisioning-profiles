// appstore-connect-sdk throwOnError throws API error bodies, not Error
// instances — stringifying those as `${error}` yields `[object Object]` (#68).
export function formatError(error: unknown): string {
  if (error instanceof Error) {
    return error.message
  }

  if (typeof error === 'string') {
    return error
  }

  if (error && typeof error === 'object') {
    const apiErrors = (error as {errors?: unknown}).errors
    if (Array.isArray(apiErrors) && apiErrors.length > 0) {
      const details = apiErrors
        .map(item => {
          if (!item || typeof item !== 'object') {
            return String(item)
          }
          const {status, code, title, detail} = item as {
            status?: string
            code?: string
            title?: string
            detail?: string
          }
          const parts = [code, title, detail].filter(Boolean)
          const message =
            parts.length > 0 ? parts.join(' - ') : JSON.stringify(item)
          return status ? `${message} (status: ${status})` : message
        })
        .join('; ')
      return `App Store Connect API error: ${details}`
    }

    try {
      return `Action failed with error ${JSON.stringify(error)}`
    } catch {
      // Fall through for values that cannot be stringified.
    }
  }

  return `Action failed with error ${String(error)}`
}
