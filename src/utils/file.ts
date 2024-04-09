import path from 'node:path'
import fs from 'node:fs'
import util from 'node:util'
import isBinaryPath from 'is-binary-path'
import ejs from 'ejs'
import { execSync } from 'node:child_process'
import { execa } from 'execa'
import { globby } from 'globby'

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

export const renderFile = async (filePath: string, params: any): Promise<any> => {
  if (isBinaryPath(filePath)) {
    const data = await fs.readFileSync(filePath)
    return data
  }

  const content = await fs.readFileSync(filePath, 'utf-8')
  // 使用 ejs 编译模版
  if (filePath.indexOf('.ejs') > -1) {
    const template = ejs.compile(content, { delimiter: '%' })
    // 替换占位字符串参数
    const result = template(params?.options ?? {})
    return result
  } else {
    return content
  }
}

export const getFilesFormDir = async (cwd: string, params: any) => {
  const promises = []
  const files = await globby(['**/*'], { cwd, dot: true })

  for (let i = 0, len = files.length; i < len; i += 1) {
    const file = files[i]
    const targetPath = path.resolve(cwd, file)
    promises.push(renderFile(targetPath, params))
  }

  return (await Promise.all(promises)).reduce((acc, cur, i) => {
    acc[files[i]] = cur
    return acc
  }, {})
}

export const hasGit = (): boolean => {
  try {
    execSync('git --version', { stdio: 'ignore' })
    return true
  } catch (e) {
    console.error(e)
    return false
  }
}

export const runCommand = async (dir: string, command: string, ...args: any[]) =>
  execa(command, args, { cwd: dir })
