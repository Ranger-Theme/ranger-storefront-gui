# @ranger-theme/create-ranger-app <a href="https://npmjs.com/package/@ranger-theme/create-ranger-app"><img src="https://img.shields.io/npm/v/@ranger-theme/create-ranger-app" alt="npm package"></a>

## Scaffolding Your First Project

## Publish to private source
```bash
npm publish --access public
```

> **Compatibility Note:**
> @ranger-theme/create-ranger-app requires [Node.js](https://nodejs.org/en/) version 18+, 20+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

With NPM:

```bash
npm install @ranger-theme/create-ranger-app -g
```

With Yarn:

```bash
yarn install @ranger-theme/create-ranger-app -g
```

With PNPM:

```bash
pnpm add @ranger-theme/create-ranger-app -g
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Vite / Next.js project, run:

```bash
# create nextjs project
npm create @ranger-theme/ranger-appi create-next my-nextjs-app

# create vite project
yarn create @ranger-theme/ranger-app create-vite my-vite-app

# pnpm vite project
pnpm create @ranger-theme/ranger-app create-nest my-nextjs-app

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

## Install @ranger-theme/create-ranger-app globally
```bash
# npm
npm install @ranger-theme/create-ranger-app -g

# yarn
yarn install @ranger-theme/create-ranger-app -g

# pnpm
pnpm add @ranger-theme/create-ranger-app -g
```

## Create project by cli
```bash
# 使用命令
ranger-cli
# or
create-ranger-app
```

```bash
Usage: create-ranger-app <command> [option]

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

Run ranger-cli <command> --help for detailed usage of given command.
      

             _                 _            _ _ 
   ___   ___| | ___  _   _  __| |       ___| (_)
  / _ \ / __| |/ _ \| | | |/ _` |_____ / __| | |
 | (_) | (__| | (_) | |_| | (_| |_____| (__| | |
  \___/ \___|_|\___/ \__,_|\__,_|      \___|_|_|
```
