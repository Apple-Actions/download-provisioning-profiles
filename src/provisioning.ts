import {
  bundleIdsGetCollection,
  createClient,
  type Profile
} from 'appstore-connect-sdk'

type ProfileAttributes = NonNullable<Profile['attributes']>

export type ActiveProfile = Profile & {attributes: ProfileAttributes}

function isActiveProfile(
  attributes: ProfileAttributes,
  type?: string
): boolean {
  return (
    attributes.profileState === 'ACTIVE' &&
    (type ? attributes.profileType === type : true)
  )
}

export async function downloadActiveProvisioningProfiles(
  privateKey: string,
  issuerId: string,
  privateKeyId: string,
  bundleId: string,
  profileType?: string
): Promise<ActiveProfile[]> {
  const client = createClient({privateKey, issuerId, privateKeyId})

  const {data: bundleIds} = await bundleIdsGetCollection({
    client,
    throwOnError: true,
    query: {
      'filter[identifier]': [bundleId],
      include: ['profiles']
    }
  })

  if (bundleIds.data.length <= 0) {
    throw new Error(`No applications found with bundle id '${bundleId}'.`)
  }

  const profileIds = bundleIds.data
    .filter(value => value.attributes?.identifier === bundleId)
    .flatMap(bundle => bundle.relationships?.profiles?.data ?? [])
    .map(data => data.id)

  const profiles = bundleIds.included?.filter(
    (i): i is ActiveProfile =>
      i.type === 'profiles' &&
      profileIds.includes(i.id) &&
      i.attributes !== undefined &&
      isActiveProfile(i.attributes, profileType)
  )

  if (!(profiles && profiles.length > 0)) {
    throw new Error(
      `Unable to find 'ACTIVE' profiles for bundleId '${bundleId}'.`
    )
  }

  return profiles
}
