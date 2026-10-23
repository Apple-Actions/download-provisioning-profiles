import {describe, expect, it} from 'vitest'
import {isMacProfile, profileFilename} from '../src/profile-filename'

const uuid = '11111111-2222-3333-4444-555555555555'

describe('isMacProfile', () => {
  it('is true when platform is MAC_OS', () => {
    expect(isMacProfile({platform: 'MAC_OS'})).toBe(true)
  })

  it('is true when profileType starts with MAC_', () => {
    expect(
      isMacProfile({profileType: 'MAC_APP_DEVELOPMENT', platform: 'UNIVERSAL'})
    ).toBe(true)
    expect(isMacProfile({profileType: 'MAC_CATALYST_APP_DEVELOPMENT'})).toBe(
      true
    )
  })

  it('is false for iOS profiles', () => {
    expect(isMacProfile({platform: 'IOS', profileType: 'IOS_APP_STORE'})).toBe(
      false
    )
  })
})

describe('profileFilename', () => {
  it('uses .provisionprofile for MAC_OS', () => {
    expect(profileFilename(uuid, {platform: 'MAC_OS'})).toBe(
      `${uuid}.provisionprofile`
    )
  })

  it('uses .provisionprofile for MAC_APP_DEVELOPMENT', () => {
    expect(
      profileFilename(uuid, {
        profileType: 'MAC_APP_DEVELOPMENT',
        platform: 'UNIVERSAL'
      })
    ).toBe(`${uuid}.provisionprofile`)
  })

  it('uses .provisionprofile for MAC_CATALYST_APP_*', () => {
    expect(profileFilename(uuid, {profileType: 'MAC_CATALYST_APP_STORE'})).toBe(
      `${uuid}.provisionprofile`
    )
  })

  it('uses .mobileprovision for iOS', () => {
    expect(
      profileFilename(uuid, {
        platform: 'IOS',
        profileType: 'IOS_APP_STORE'
      })
    ).toBe(`${uuid}.mobileprovision`)
  })
})
