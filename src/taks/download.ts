import download from 'download'
import gitclone from 'git-clone'
import * as rm from 'rimraf'
import type { DownloadOptions } from 'download'

import { getUrl, normalize } from '../utils'

interface DowloadOpt extends DownloadOptions {
  clone?: boolean
}

export interface DowloadTask {
  repo: string
  dest: string
  opts?: DowloadOpt
  fn?: (error?: any) => void
}

export const dowloadTask = ({ repo, dest, opts = {}, fn = () => {} }: DowloadTask) => {
  const target = normalize(repo)
  const clone: boolean = opts?.clone || false
  const url: string = target.url || getUrl(target, clone)

  if (clone) {
    const cloneOptions = {
      checkout: target.checkout,
      shallow: target.checkout === 'master'
    }
    gitclone(url, dest, cloneOptions, function (err) {
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
    download(url, dest, downloadOptions)
      .then(function (data) {
        console.log(data)
        fn()
      })
      .catch(function (err) {
        fn(err)
      })
  }
}
