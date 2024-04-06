import type { Argv } from 'yargs'

export const registryOption = (cli: Argv<{}>) => {
  cli.option('registry', {
    type: 'boolean',
    alias: 'r',
    describe: 'Define global registry'
  })
}
