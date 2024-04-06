import ora from 'ora'

import { dowloadTask } from './download'
import { makeDir, removeDir } from '../utils'

export const createTask = async (params: CommandParams) => {
  try {
    const projectDir = await makeDir(params.name)

    const spinner = ora('Downloading repository...').start()
    dowloadTask({
      repo: 'github:yyd1142/vite-react-template',
      dest: projectDir,
      fn: (error: any) => {
        if (error) {
          console.log(error)
          spinner.fail('Download failed')
          removeDir(projectDir)
        } else {
          spinner.succeed('Download completed')
          return Promise.resolve()
        }
      }
    })
  } catch (error) {
    return Promise.reject(error)
  }
}
