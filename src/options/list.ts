import type { Argv } from 'yargs'

export const listOption = (cli: Argv<{}>) => {
  cli.option('list', {
    type: 'boolean',
    alias: 'l',
    describe: 'Show all currently available template'
  })
}
