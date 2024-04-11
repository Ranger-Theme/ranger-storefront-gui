# @utopia-theme/create-utopia-app <a href="https://npmjs.com/package/@utopia-theme/create-utopia-app"><img src="https://img.shields.io/npm/v/@utopia-theme/create-utopia-app" alt="npm package"></a>

## Scaffolding Your First Project

## Repo Dir
repository
The shorthand repository string to download the repository from:

GitHub - github:owner/name or simply owner/name
GitLab - gitlab:owner/name
Bitbucket - bitbucket:owner/name
The repository parameter defaults to the master branch, but you can specify a branch or tag as a URL fragment like owner/name#my-branch. In addition to specifying the type of where to download, you can also specify a custom origin like gitlab:custom.com:owner/name. Custom origin will default to https or git@ for http and clone downloads respectively, unless protocol is specified. Feel free to submit an issue or pull request for additional origin options.

In addition to having the shorthand for supported git hosts, you can also hit a repository directly with:

Direct - direct:url
This will bypass the shorthand normalizer and pass url directly. If using direct without clone, you must pass the full url to the zip file, including paths to branches if needed. If using direct with clone, you must pass the full url to the git repo and you can specify a branch like direct:url#my-branch.

## Publish to private source
```bash
npm publish --access public
```

> **Compatibility Note:**
> @utopia-theme/create-utopia-app requires [Node.js](https://nodejs.org/en/) version 18+, 20+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

With NPM:

```bash
npm install @utopia-theme/create-utopia-app -g
```

With Yarn:

```bash
yarn install @utopia-theme/create-utopia-app -g
```

With PNPM:

```bash
pnpm add @utopia-theme/create-utopia-app -g
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Vite / Next.js project, run:

```bash
# create nextjs project
npm create @utopia-theme/utopia-appi create-next my-nextjs-app

# create vite project
yarn create @utopia-theme/utopia-app create-vite my-vite-app

# pnpm vite project
pnpm create @utopia-theme/utopia-app create-nest my-nextjs-app

```

Currently supported template presets include:

- `nextjs-antd-emotion-app`
- `nextjs-antd-emotion-pages`
- `nextjs-antd-styled-app`
- `nextjs-antd-styled-pages`
- `nextjs-mui-emotion-app`
- `nextjs-mui-emotion-pages` (supported in v0.1.0)
- `nextjs-mui-styled-app`
- `nextjs-mui-styled-pages`
- `vite-antd-emotion-http` (supported in v0.1.0)
- `vite-antd-styled-http`
- `vite-mui-emotion-http`
- `vite-mui-styled-http`

You can use `.` for the project name to scaffold in the current directory.

# Conifg Npm Privte Org

## Look up npm global config
```bash
# 查看npmrc
cat ~/.npmrc 
```

## Install @utopia-theme/create-utopia-app globally
```bash
# npm
npm install @utopia-theme/create-utopia-app -g

# yarn
yarn install @utopia-theme/create-utopia-app -g

# pnpm
pnpm add @utopia-theme/create-utopia-app -g
```

## Create project by cli
```bash
# 使用命令
utopia-cli
# or
create-utopia-app
```

```bash
Usage: create-utopia-app <command> [option]

Ocloud cli quick start program utilities

Options:
  -V, --version                            output the version number
  -l, --list                               Show all currently available templates.
  -h, --help                               display help for command

Commands:
  create-nest [options] [project-name]     Create a nestjs node project.
  create-next [options] [project-name]     Create a nextjs project.
  create [options] [project-name]          Create a frontend project.
  create-umi [options] [project-name]      Create a react project by umi.
  create-vite [options] [project-name]     Create a react project by vite.
  create-webpack [options] [project-name]  Create a react project by webpack.

Run utopia-cli <command> --help for detailed usage of given command.
      

             _                 _            _ _ 
   ___   ___| | ___  _   _  __| |       ___| (_)
  / _ \ / __| |/ _ \| | | |/ _` |_____ / __| | |
 | (_) | (__| | (_) | |_| | (_| |_____| (__| | |
  \___/ \___|_|\___/ \__,_|\__,_|      \___|_|_|
```

## Ejs
https://ejs.co/#promo
