import type { Argv } from 'yargs'

import type { CommandType } from '../typing'
import { createNext } from './createNext'
import { createVite } from './createVite'
import { generate } from './generate'

export const createCommands = (cli: Argv<{}>) => {
  const commands: Array<CommandType> = [createNext, createVite, generate]

  commands.forEach((command) => {
    command(cli)
  })
}
