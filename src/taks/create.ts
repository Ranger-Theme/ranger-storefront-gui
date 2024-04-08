import ora from 'ora'

import type { CommandParams } from '../typing'
import { remoteRepo } from '../config'
import { makeDir, removeDir } from '../utils'
import { dowloadTask } from './download'

export const createTask = async (params: CommandParams) => {
  try {
    const projectDir = await makeDir(params.name)

    const spinner = ora('Downloading template...').start()
    dowloadTask({
      dir: params.name,
      repo: remoteRepo,
      dest: projectDir,
      fn: (error: any) => {
        if (error) {
          console.log(error)
          spinner.fail('Template download failed')
          removeDir(projectDir)
        } else {
          spinner.succeed('Template download completed')
          return Promise.resolve()
        }
      }
    })
  } catch (error) {
    return Promise.reject(error)
  }
}
