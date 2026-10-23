import {getInput, info, setOutput, setFailed} from '@actions/core'
import {mkdirP} from '@actions/io'
import {writeFileSync} from 'node:fs'
import {join} from 'node:path'
import {formatError} from './errors'
import {profileFilename} from './profile-filename'
import {downloadActiveProvisioningProfiles} from './provisioning'

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

    const profilesDir = join(
      process.env['HOME'],
      'Library/Developer/Xcode/UserData/Provisioning Profiles'
    )
    await mkdirP(profilesDir)

    for (const profile of profiles) {
      if (!(profile.attributes.uuid && profile.attributes.profileContent)) {
        throw new Error(
          'Profile attributes `uuid` and `profileContent` must be defined!'
        )
      }

      const filename = profileFilename(
        profile.attributes.uuid,
        profile.attributes
      )
      const buffer = Buffer.from(profile.attributes.profileContent, 'base64')
      const fullPath = join(profilesDir, filename)
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
