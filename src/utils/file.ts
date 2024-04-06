import path from 'node:path'
import fs from 'node:fs'
import util from 'node:util'

const readdir = util.promisify(fs.readdir)
const stat = util.promisify(fs.stat)
const copyFile = util.promisify(fs.copyFile)
const mkdir = util.promisify(fs.mkdir)

export const makeDir = (name: string) => {
  const filePath: string = path.join(process.cwd(), name)

  if (fs.existsSync(filePath)) {
    return filePath
  }

  try {
    fs.mkdirSync(filePath, { recursive: true })
    return filePath
  } catch (err: any) {
    console.error(`Error creating directory: ${err.message}`)
    return filePath
  }
}

export const removeDir = (dir: string) => {
  fs.rm(dir, { recursive: true, force: true }, (err) => {
    if (err) {
      console.error(err)
    } else {
      console.error('Directory and all its contents have been deleted.')
    }
  })
}

export const copyFiles = async (dir: string, target: string) => {
  try {
    await mkdir(target, { recursive: true })

    const files = await readdir(dir)

    for (const file of files) {
      const srcFilePath = path.join(dir, file)
      const destFilePath = path.join(target, file)

      const fileStat = await stat(srcFilePath)

      if (fileStat.isDirectory()) {
        await copyFiles(srcFilePath, destFilePath)
      } else {
        await copyFile(srcFilePath, destFilePath)
      }
    }
  } catch (err) {
    console.warn('Error copying files:', err)
  }
}
