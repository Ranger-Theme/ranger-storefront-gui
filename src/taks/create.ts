import ora from 'ora'

import { dowloadTask } from './download'
import { makeDir, removeDir } from '../utils'

export const createTask = async (params: CommandParams) => {
  try {
    const projectDir = await makeDir(params.name)

    const spinner = ora('Downloading template...').start()
    dowloadTask({
      dir: params.name,
      repo: 'github:AsuraLuo/Magento-Vite4-Seo-Ecommerce',
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
