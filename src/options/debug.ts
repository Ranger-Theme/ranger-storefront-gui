import type { Argv } from 'yargs'

export const debugOption = (cli: Argv<{}>) => {
  cli.option('debug', {
    type: 'boolean',
    alias: 'd',
    describe: 'Boostrap debug mode'
  })
}
