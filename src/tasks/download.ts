import download from 'download'
import gitclone from 'git-clone'
import * as rm from 'rimraf'
import type { DownloadOptions } from 'download'

import { getUrl, normalize, logInfo } from '../utils'

interface DowloadOpt extends DownloadOptions {
  clone?: boolean
}

export interface DowloadTask {
  dir: string
  repo: string
  dest: string
  opts?: DowloadOpt
  fn?: (error?: any) => void
}

export const dowloadTask = async ({ dir, repo, dest, opts = {}, fn = () => {} }: DowloadTask) => {
  const target = normalize(repo)
  const clone: boolean = opts?.clone || false
  const url: string = target.url || getUrl(target, clone)

  if (clone) {
    const cloneOptions = {
      checkout: target.checkout,
      shallow: target.checkout === 'master'
    }
    await gitclone(url, dest, cloneOptions, function (err) {
      if (err === undefined) {
        rm.sync(dest + '/.git')
        fn()
      } else {
        fn(err)
      }
    })
  } else {
    const downloadOptions = {
      extract: true,
      strip: 1,
      mode: '666',
      ...opts,
      headers: {
        accept: 'application/zip',
        ...(opts.headers || {})
      }
    }

    await download(url, dest, downloadOptions)
      .then((files: any) => {
        for (const file of files) {
          if (file.data.toString().length > 0) {
            logInfo(
              `-- 🔥: ${dir}/${file.path} (${(file.data.toString().length / 1024).toFixed(2)}kb)`
            )
          } else {
            logInfo(`-- 🔥: ${dir}/${file.path}`)
          }
        }
        fn()
      })
      .catch((err: any) => {
        fn(err)
      })
  }
}
