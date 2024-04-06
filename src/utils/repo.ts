export const addProtocol = (origin: string, clone: boolean) => {
  if (!/^(f|ht)tps?:\/\//i.test(origin)) {
    if (clone) {
      origin = 'git@' + origin
    } else {
      origin = 'https://' + origin
    }
  }

  return origin
}

export const getUrl = (repo: any, clone: boolean) => {
  let url: string = ''
  // Get origin with protocol and add trailing slash or colon (for ssh)
  let origin: string = addProtocol(repo.origin, clone)

  if (/^git@/i.test(origin)) {
    origin = origin + ':'
  } else {
    origin = origin + '/'
  }

  // Build url
  if (clone) {
    url = origin + repo.owner + '/' + repo.name + '.git'
  } else {
    if (repo.type === 'github') {
      url = origin + repo.owner + '/' + repo.name + '/archive/' + repo.checkout + '.zip'
    } else if (repo.type === 'gitlab') {
      url = origin + repo.owner + '/' + repo.name + '/repository/archive.zip?ref=' + repo.checkout
    } else if (repo.type === 'bitbucket') {
      url = origin + repo.owner + '/' + repo.name + '/get/' + repo.checkout + '.zip'
    }
  }

  return url
}

export const normalize = (repo: string) => {
  const regex: RegExp = /^(?:(direct):([^#]+)(?:#(.+))?)$/
  const match: any = regex.exec(repo)

  if (match) {
    const url = match[2]
    const directCheckout = match[3] || 'master'

    return {
      type: 'direct',
      url: url,
      checkout: directCheckout
    }
  } else {
    const repoRegex: RegExp =
      /^(?:(github|gitlab|bitbucket):)?(?:(.+):)?([^/]+)\/([^#]+)(?:#(.+))?$/

    const repoMatch: any = repoRegex.exec(repo)
    const type = repoMatch[1] || 'github'
    let origin = repoMatch[2] || null
    const owner = repoMatch[3]
    const name = repoMatch[4]
    const checkout = repoMatch[5] || 'master'

    if (origin == null) {
      if (type === 'github') {
        origin = 'github.com'
      } else if (type === 'gitlab') {
        origin = 'gitlab.com'
      } else if (type === 'bitbucket') {
        origin = 'bitbucket.org'
      }
    }

    return {
      type: type,
      origin: origin,
      owner: owner,
      name: name,
      checkout: checkout
    }
  }
}
