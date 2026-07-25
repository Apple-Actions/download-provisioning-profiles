import {getInput, info, setOutput, setFailed} from '@actions/core'
import {mkdirP} from '@actions/io'
import {writeFileSync} from 'node:fs'
import {join} from 'node:path'
import {downloadActiveProvisioningProfiles} from './provisioning'

// appstore-connect-sdk throwOnError throws API error bodies, not Error
// instances — stringifying those as `${error}` yields `[object Object]` (#68).
function formatError(error: unknown): string {
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

async function run(): Promise<void> {
  try {
    const bundleId: string = getInput('bundle-id')
    const apiKeyId = getInput('api-key-id')
    const apiPrivateKey = getInput('api-private-key')
    const issuerId = getInput('issuer-id')
    const profileType = getInput('profile-type')

    const profiles = await downloadActiveProvisioningProfiles(
      apiPrivateKey,
      issuerId,
      apiKeyId,
      bundleId,
      profileType
    )

    if (!process.env.HOME) {
      throw new Error('Environment variable `HOME` is not defined!')
    }

    for (const profile of profiles) {
      if (!(profile.attributes.uuid && profile.attributes.profileContent)) {
        throw new Error(
          'Profile attributes `uuid` and `profileContent` must be defined!'
        )
      }

      // `platform` can be undefined or `UNIVERSAL` (e.g. Mac Catalyst), so
      // also fall back to `profileType` which covers MAC_APP_* and
      // MAC_CATALYST_APP_*. See issue #53.
      const isMacProfile =
        profile.attributes.platform === 'MAC_OS' ||
        profile.attributes.profileType?.startsWith('MAC_')
      const profileFileExtension = isMacProfile
        ? 'provisionprofile'
        : 'mobileprovision'
      const profileFilename = `${profile.attributes.uuid}.${profileFileExtension}`
      const basePath = join(
        process.env['HOME'],
        '/Library/MobileDevice/Provisioning Profiles'
      )
      await mkdirP(basePath)
      const buffer = Buffer.from(profile.attributes.profileContent, 'base64')
      const fullPath = join(basePath, profileFilename)
      writeFileSync(fullPath, buffer)
      info(
        `Wrote ${profile.attributes.profileType} profile '${profile.attributes.name}' to '${fullPath}'.`
      )
    }
    const outputProfiles = profiles.map(value => {
      return {
        name: value.attributes.name,
        udid: value.attributes.uuid,
        type: value.attributes.profileType?.toString()
      }
    })
    setOutput('profiles', JSON.stringify(outputProfiles))
  } catch (error) {
    setFailed(formatError(error))
  }
}

run()
