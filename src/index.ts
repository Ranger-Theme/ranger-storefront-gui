#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import dedent from 'dedent'
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'

const readPkg = (): PkgType => {
  const pkgPath: string = path.join(__dirname, '../package.json')
  const pkg: PkgType = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
  return pkg
}

const bootstrap = async () => {
  const pkg: PkgType = await readPkg()
  // const pkgName: string = pkg.name as string
  const pkgVersion: string = pkg?.version ?? '0.1.0'
  // const pkgDescription: string = pkg?.description ?? ''
  
  const arg = hideBin(process.argv)
  const cli = yargs(arg)

  cli
    .version(pkgVersion)
    .usage('Usage: $0 <command> [options]')
    // .demandCommand(1, 'A command is required. Pass --help to see all available commands and options.')
    .recommendCommands()
    .strict()
    .alias('h', 'help')
    .alias('v', 'version')
    .wrap(cli.terminalWidth()).epilogue(dedent`
      When a command fails, all logs are written to lerna-debug.log in the current working directory.
      For more information, check out the docs at https://lerna.js.org/docs/introduction
    `)
    .options({
      debug: {
        type: 'boolean',
        alias: 'd',
        describe: 'Boostrap debug mode'
      }
    })
    .group(['debug'], 'Dev Options')
    .fail((msg, err: any) => {
      // certain yargs validations throw strings :P
      const actual = err || new Error(msg);

      // ValidationErrors are already logged, as are package errors
      if (actual.name !== "ValidationError" && !actual.pkg) {
        // the recommendCommands() message is too terse
        if (/Did you mean/.test(actual.message)) {
          // @ts-ignore
          console.error("lerna", `Unknown command "${cli.parsed.argv._[0]}"`);
        }

        console.error("lerna", actual.message);
      }

      // exit non-zero so the CLI can be usefully chained
      cli.exit(actual.exitCode > 0 ? actual.exitCode : 1, actual);
    })
   
  cli.command({
    command: 'greet',
    describe: '向用户发送问候',
    builder: {
      name: {
        describe: '要问候的人的姓名',
        demandOption: true,
        type: 'string'
      }
    },
    handler(argv) {
      console.log(`你好，${argv.name}！`);
    }
  })

  cli.argv
  cli.parse()
}

bootstrap()
