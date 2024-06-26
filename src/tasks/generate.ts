import path from 'node:path'

import type { EjsParams, Schematic } from '../typing'
import { getFilesFormDir, copyFiles, logSuccess, uppercaseFirst } from '../utils'

export const generateTask = async (match: Schematic, name: string) => {
  const cwd: string = path.resolve(__dirname, '../ejs', match.name)
  const params: EjsParams = {
    ...match,
    options: {
      [match.key]: name
    }
  }

  let targetDir: string = path.resolve(process.cwd(), name)

  if (match.name === 'components') {
    targetDir = path.resolve(process.cwd(), `${uppercaseFirst(name)}`)
  }

  if (match.name === 'provider' && name.indexOf('Provider') < 0) {
    targetDir = path.resolve(process.cwd(), `${uppercaseFirst(name)}Provider`)
  }

  if (match.name === 'reducer' && name.indexOf('Reducer') < 0) {
    targetDir = path.resolve(process.cwd(), `${uppercaseFirst(name)}Reducer`)
  }

  const files = await getFilesFormDir(cwd, params)
  await copyFiles(targetDir, files, params)
  await logSuccess(`-- 🎉 ${match.name}: created ${name} success.`)
}
