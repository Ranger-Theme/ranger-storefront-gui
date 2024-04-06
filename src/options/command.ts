import type { Argv } from 'yargs'

export const commandOption = (cli: Argv<{}>) => {
  cli.option('command', {
    type: 'boolean',
    alias: 'c',
    describe: 'Show all currently available command'
  })
}
