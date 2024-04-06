import type { Argv } from 'yargs'

import { commandOption } from './command'
import { debugOption } from './debug'
import { listOption } from './list'
import { registryOption } from './registry'

export const createOptions = (cli: Argv<{}>) => {
  const optionList: Array<CommandType> = [commandOption, debugOption, listOption, registryOption]

  optionList.forEach((option) => {
    option(cli)
  })
}
