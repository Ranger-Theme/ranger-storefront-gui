#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import chalk from 'chalk'
import dedent from 'dedent'
import figlet from 'figlet'
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'

import type { PkgType } from './typing'
import { createCommands } from './commands'
import { createOptions } from './options'
import { logInfo } from './utils'

const readPkg = (): PkgType => {
  const pkgPath: string = path.join(__dirname, '../package.json')
  const pkg: PkgType = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
  return pkg
}

const bootstrap = async () => {
  const pkg: PkgType = await readPkg()
  const pkgName: string = pkg.name as string
  const pkgVersion: string = pkg?.version ?? '0.1.0'

  const arg = hideBin(process.argv)
  const cli = yargs(arg)

  cli
    .version(pkgVersion)
    .usage('Usage: $0 <command> [options]')
    .recommendCommands()
    .strict()
    .alias('h', 'help')
    .alias('v', 'version')
    .wrap(cli.terminalWidth())
    .epilogue(
      figlet.textSync('utopia-cli', {
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 100,
        whitespaceBreak: true
      }) + '\r\n\r\n'
    )
    .epilogue(
      dedent`Run ${chalk.cyan(
        '⚡ utopia-cli <command> --help'
      )} for detailed usage of given command.
      `
    )
    .group(['debug'], 'Dev Options:')
    .group(['command', 'registry', 'list'], 'Extra Options:')
    .fail((msg, err: any) => {
      // certain yargs validations throw strings :P
      const actual = err || new Error(msg)

      // ValidationErrors are already logged, as are package errors
      if (actual.name !== 'ValidationError' && !actual.pkg) {
        // the recommendCommands() message is too terse
        if (/Did you mean/.test(actual.message)) {
          // @ts-ignore
          console.error(`${pkgName}:`, `Unknown command "${cli.parsed.argv._[0]}"`)
        }

        console.error(`${pkgName}:`, actual.message)
      }
      console.info(
        figlet.textSync('utopia-cli', {
          horizontalLayout: 'default',
          verticalLayout: 'default',
          width: 100,
          whitespaceBreak: true
        }) + '\r\n\r\n'
      )
      logInfo(dedent`Run ${chalk.cyan(
        '⚡ utopia-cli <command> --help'
      )} for detailed usage of given command.
      `)
      cli.exit(actual.exitCode > 0 ? actual.exitCode : 1, actual)
    })

  createCommands(cli)
  createOptions(cli)

  await cli.parseAsync()

  if (!process.argv.slice(2).length) {
    cli.showHelp()
    process.exit()
  }
}

bootstrap()
