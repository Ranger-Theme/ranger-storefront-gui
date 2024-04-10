import path from 'node:path'
import fs from 'fs-extra'
import isBinaryPath from 'is-binary-path'
import ejs from 'ejs'
import { execSync } from 'node:child_process'
import { execa } from 'execa'
import { globby } from 'globby'

import type { EjsParams } from '../typing'
import { logInfo } from '../utils'

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

export const copyFiles = async (dir: string, files: any, params?: EjsParams) => {
  try {
    const streams = Object.keys(files).map(async (name: any) => {
      let newFileName: string = name.split('.ejs')[0]

      // if (params) {
      //   // Components Handlebars
      //   if (name === 'components.tsx.hbs') {
      //     const comName: string = params?.options?.componentName ?? ''
      //     const filename: string = `${comName.charAt(0).toLowerCase()}${comName.slice(1)}`
      //     newFileName = newFileName.replace(params.name, filename)
      //   }

      //   // Provider Handlebars
      //   if (name === 'provider.tsx.hbs') {
      //     const comName: string = params?.options?.providerName ?? ''
      //     const filename: string = `${comName.charAt(0).toLowerCase()}${comName.slice(1)}`
      //     newFileName = newFileName.replace(params.name, `${filename}Provider`)
      //   }
      // }

      const filePath: string = path.resolve(dir, newFileName)
      await fs.ensureDir(path.dirname(filePath))
      await fs.writeFileSync(filePath, files[name])
      await logInfo(
        `-- info: ${newFileName} (${(files[name].toString().length / 1024).toFixed(2)}kb)`
      )
    })

    return Promise.all(streams)
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
