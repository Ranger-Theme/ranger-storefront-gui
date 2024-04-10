import type { Argv, ArgumentsCamelCase } from 'yargs'

import type { Schematic } from '../typing'
import { schematics } from '../config'
import { react } from '../prompt'
import { generateTask, runTask } from '../tasks'
import { logError, logListAsTable } from '../utils'

const buildDescription = async (collection: any[]): Promise<string> => {
  return (
    'Generate a React element.\n' +
    `  Schematics available on collection:\n` +
    logListAsTable(collection)
  )
}

export const generate = (cli: Argv<{}>) => {
  cli.command(
    'generate <schematic> [name]',
    'generate some react resource',
    (program: any) => {
      return program
        .option('schematic', {
          type: 'sring',
          describe: 'the schema to be generated',
          alias: 's',
          require: true
        })
        .option('name', {
          type: 'sring',
          describe: 'the name of the generated component',
          alias: 'n'
        })
    },
    async (argv: ArgumentsCamelCase) => {
      const schematic = argv.schematic as string
      const name = (argv?.name ?? '') as string

      const match: Schematic | undefined = schematics.find((item: Schematic) =>
        [item.alias, item.name].includes(schematic)
      )
      if (match) {
        if (name) {
          generateTask(match, name)
        } else {
          const question: any[] = [react[match.name]]
          await runTask(question).then((values: any) => {
            const value = Object.values(values)?.[0] as string
            generateTask(match, value)
          })
        }
      } else {
        console.info(await buildDescription(schematics))
        logError(`无效的命令: ${JSON.stringify(argv._)}`)
        logError('使用 utopia-cli g --help 查看可用命令。\n')
      }
    }
  )
}
