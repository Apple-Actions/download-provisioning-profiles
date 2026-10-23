import {describe, expect, it} from 'vitest'
import {formatError} from '../src/errors'

describe('formatError', () => {
  it('returns Error.message', () => {
    expect(formatError(new Error('boom'))).toBe('boom')
  })

  it('returns a string unchanged', () => {
    expect(formatError('plain failure')).toBe('plain failure')
  })

  it('formats App Store Connect API error bodies', () => {
    const message = formatError({
      errors: [
        {
          status: '403',
          code: 'FORBIDDEN',
          title: 'Forbidden',
          detail: 'Not allowed'
        }
      ]
    })
    expect(message).toContain('App Store Connect API error:')
    expect(message).toContain('FORBIDDEN')
    expect(message).toContain('Forbidden')
    expect(message).toContain('Not allowed')
    expect(message).toContain('(status: 403)')
    expect(message).not.toBe('[object Object]')
    expect(message).not.toContain('[object Object]')
  })

  it('stringifies objects without errors', () => {
    expect(formatError({reason: 'nope'})).toBe(
      'Action failed with error {"reason":"nope"}'
    )
  })

  it('falls back when JSON.stringify fails', () => {
    const circular: {self?: unknown} = {}
    circular.self = circular
    expect(formatError(circular)).toBe(
      `Action failed with error ${String(circular)}`
    )
  })
})
