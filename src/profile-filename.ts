export function isMacProfile(attributes: {
  platform?: string | null
  profileType?: string | null
}): boolean {
  // `platform` can be undefined or `UNIVERSAL` (e.g. Mac Catalyst), so
  // also fall back to `profileType` which covers MAC_APP_* and
  // MAC_CATALYST_APP_*. See issue #53.
  return (
    attributes.platform === 'MAC_OS' ||
    (attributes.profileType?.startsWith('MAC_') ?? false)
  )
}

export function profileFilename(
  uuid: string,
  attributes: {platform?: string | null; profileType?: string | null}
): string {
  const extension = isMacProfile(attributes)
    ? 'provisionprofile'
    : 'mobileprovision'
  return `${uuid}.${extension}`
}
