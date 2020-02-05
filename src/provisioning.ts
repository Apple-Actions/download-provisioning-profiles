import {v1} from 'appstoreconnect'
import * as v1Ext from './appstoreconnect_ext'
import jwt from 'jsonwebtoken'

function isActiveProfile(
  attributes: v1Ext.ProfileAttributes,
  type?: string
): boolean {
  return (
    attributes.profileState === 'ACTIVE' &&
    (type ? attributes.profileType === type : true)
  )
}

export async function downloadActiveProvisioningProfiles(
  privateKey: jwt.Secret,
  issuerId: string,
  privateKeyId: string,
  bundleId: string,
  profileType?: string
): Promise<v1Ext.Profile[]> {
  const token = v1.token(privateKey, issuerId, privateKeyId)
  const api = v1(token)

  const bundleIds = await v1Ext.listBundleIds(api, {
    filter: {identifier: [bundleId]},
    include: ['profiles']
  })
  if (bundleIds.data.length <= 0) {
    throw new Error(`No applications found with bundle id '${bundleId}'.`)
  } else {
    const profileIds = bundleIds.data
      .filter(value => value.attributes.identifier === bundleId)
      .flatMap(bundle => bundle.relationships?.profiles.data)
      .map(data => data?.id)

    const profiles = bundleIds.included?.filter(
      i =>
        i.type === 'profiles' &&
        profileIds.includes(i.id) &&
        isActiveProfile(i.attributes, profileType)
    ) as v1Ext.Profile[] | undefined

    if (!(profiles && profiles.length > 0)) {
      throw new Error(
        `Unable to find 'ACTIVE' profiles for bundleId '${bundleId}'.`
      )
    }

    return profiles
  }
}
