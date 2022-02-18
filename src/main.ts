import * as core from '@actions/core'
import * as io from '@actions/io'
import * as fs from 'fs'
import * as path from 'path'
import * as provisioning from './provisioning'

async function run(): Promise<void> {
  try {
    const bundleId: string = core.getInput('bundle-id')
    const apiKeyId = core.getInput('api-key-id')
    const apiPrivateKey = core.getInput('api-private-key')
    const issuerId = core.getInput('issuer-id')
    const profileType = core.getInput('profile-type')

    const profiles = await provisioning.downloadActiveProvisioningProfiles(
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

      const profileFileExtension =
        profile.attributes.platform === 'MAC_OS'
          ? 'provisionprofile'
          : 'mobileprovision'
      const profileFilename = `${profile.attributes.uuid}.${profileFileExtension}`
      const basePath = path.join(
        process.env['HOME'],
        '/Library/MobileDevice/Provisioning Profiles'
      )
      await io.mkdirP(basePath)
      const buffer = Buffer.from(profile.attributes.profileContent, 'base64')
      const fullPath = path.join(basePath, profileFilename)
      fs.writeFileSync(fullPath, buffer)
      core.info(
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
    core.setOutput('profiles', JSON.stringify(outputProfiles))
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
