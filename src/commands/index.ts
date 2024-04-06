import type { Argv } from 'yargs'

import { createNext } from './createNext'
import { createVite } from './createVite'

export const createCommands = (cli: Argv<{}>) => {
  const commands: Array<CommandType> = [createNext, createVite]

  commands.forEach((command) => {
    command(cli)
  })
}
