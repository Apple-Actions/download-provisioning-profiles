import {beforeEach, describe, expect, it, vi} from 'vitest'
import {bundleIdsGetCollection, createClient} from 'appstore-connect-sdk'
import {downloadActiveProvisioningProfiles} from '../src/provisioning'

vi.mock('appstore-connect-sdk', () => ({
  createClient: vi.fn(() => ({})),
  bundleIdsGetCollection: vi.fn()
}))

const getCollection = vi.mocked(bundleIdsGetCollection)
const makeClient = vi.mocked(createClient)

const bundleId = 'com.example.app'

function profile(
  id: string,
  attributes: {
    profileState?: string
    profileType?: string
    platform?: string
    name?: string
    uuid?: string
  }
) {
  return {
    type: 'profiles' as const,
    id,
    attributes: {
      profileState: 'ACTIVE',
      profileType: 'IOS_APP_STORE',
      name: `Profile ${id}`,
      uuid: `uuid-${id}`,
      ...attributes
    }
  }
}

function response(options: {
  data?: Array<{
    attributes?: {identifier?: string}
    relationships?: {profiles?: {data: Array<{id: string}>}}
  }>
  included?: Array<ReturnType<typeof profile>>
}) {
  return {
    data: {
      data: options.data ?? [],
      included: options.included
    }
  }
}

beforeEach(() => {
  getCollection.mockReset()
  makeClient.mockClear()
})

describe('downloadActiveProvisioningProfiles', () => {
  it('throws when no applications are found', async () => {
    getCollection.mockResolvedValue(response({data: []}) as never)
    await expect(
      downloadActiveProvisioningProfiles('key', 'issuer', 'keyId', bundleId)
    ).rejects.toThrow(`No applications found with bundle id '${bundleId}'.`)
  })

  it('throws when identifier filter leaves no usable profiles', async () => {
    getCollection.mockResolvedValue(
      response({
        data: [
          {
            attributes: {identifier: 'com.other.app'},
            relationships: {profiles: {data: [{id: 'p1'}]}}
          }
        ],
        included: [profile('p1', {})]
      }) as never
    )
    await expect(
      downloadActiveProvisioningProfiles('key', 'issuer', 'keyId', bundleId)
    ).rejects.toThrow(
      `Unable to find 'ACTIVE' profiles for bundleId '${bundleId}'.`
    )
  })

  it('filters out INACTIVE profiles', async () => {
    getCollection.mockResolvedValue(
      response({
        data: [
          {
            attributes: {identifier: bundleId},
            relationships: {
              profiles: {data: [{id: 'active'}, {id: 'inactive'}]}
            }
          }
        ],
        included: [
          profile('active', {profileState: 'ACTIVE'}),
          profile('inactive', {profileState: 'INACTIVE'})
        ]
      }) as never
    )
    const profiles = await downloadActiveProvisioningProfiles(
      'key',
      'issuer',
      'keyId',
      bundleId
    )
    expect(profiles.map(p => p.id)).toEqual(['active'])
  })

  it('keeps only matching profileType when provided', async () => {
    getCollection.mockResolvedValue(
      response({
        data: [
          {
            attributes: {identifier: bundleId},
            relationships: {
              profiles: {data: [{id: 'dev'}, {id: 'store'}]}
            }
          }
        ],
        included: [
          profile('dev', {profileType: 'IOS_APP_DEVELOPMENT'}),
          profile('store', {profileType: 'IOS_APP_STORE'})
        ]
      }) as never
    )
    const profiles = await downloadActiveProvisioningProfiles(
      'key',
      'issuer',
      'keyId',
      bundleId,
      'IOS_APP_DEVELOPMENT'
    )
    expect(profiles.map(p => p.id)).toEqual(['dev'])
  })

  it('throws when profileType matches nothing / all inactive', async () => {
    getCollection.mockResolvedValue(
      response({
        data: [
          {
            attributes: {identifier: bundleId},
            relationships: {profiles: {data: [{id: 'store'}]}}
          }
        ],
        included: [profile('store', {profileType: 'IOS_APP_STORE'})]
      }) as never
    )
    await expect(
      downloadActiveProvisioningProfiles(
        'key',
        'issuer',
        'keyId',
        bundleId,
        'IOS_APP_DEVELOPMENT'
      )
    ).rejects.toThrow(
      `Unable to find 'ACTIVE' profiles for bundleId '${bundleId}'.`
    )
  })

  it('returns ACTIVE profiles linked on the bundle id', async () => {
    getCollection.mockResolvedValue(
      response({
        data: [
          {
            attributes: {identifier: bundleId},
            relationships: {
              profiles: {data: [{id: 'p1'}, {id: 'p2'}]}
            }
          }
        ],
        included: [
          profile('p1', {profileState: 'ACTIVE'}),
          profile('p2', {profileState: 'ACTIVE'})
        ]
      }) as never
    )
    const profiles = await downloadActiveProvisioningProfiles(
      'key',
      'issuer',
      'keyId',
      bundleId
    )
    expect(profiles.map(p => p.id)).toEqual(['p1', 'p2'])
    expect(createClient).toHaveBeenCalledWith({
      privateKey: 'key',
      issuerId: 'issuer',
      privateKeyId: 'keyId'
    })
  })

  it('excludes included profiles not in relationship ids', async () => {
    getCollection.mockResolvedValue(
      response({
        data: [
          {
            attributes: {identifier: bundleId},
            relationships: {profiles: {data: [{id: 'linked'}]}}
          }
        ],
        included: [profile('linked', {}), profile('orphan', {name: 'Orphan'})]
      }) as never
    )
    const profiles = await downloadActiveProvisioningProfiles(
      'key',
      'issuer',
      'keyId',
      bundleId
    )
    expect(profiles.map(p => p.id)).toEqual(['linked'])
  })
})
