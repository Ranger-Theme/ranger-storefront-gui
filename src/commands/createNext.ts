import type { Argv, ArgumentsCamelCase } from 'yargs'
import type { PromptObject } from 'prompts'

import { createTask, runTask } from '../tasks'
import { general, dependency, nextjs } from '../prompt'
import type { CommandParams } from '../typing'

export const createNext = (cli: Argv<{}>) => {
  cli.command(
    'create-next [name]',
    'create a react app base on nextjs',
    (program: any) => {
      return program.option('name', {
        type: 'sring',
        describe: 'Project name'
      })
    },
    async (argv: ArgumentsCamelCase) => {
      if (argv.name) {
        const questions: PromptObject[] = [
          ...general.slice(1, general.length - 1),
          ...nextjs,
          ...dependency
        ]
        runTask(questions).then((values: any) => {
          if (values) {
            const params: CommandParams = {
              ...values,
              platform: 'nextjs',
              name: argv.name as string
            }
            createTask(params).catch((err) => {
              console.error(err)
              process.exit(1)
            })
          }
        })
      } else {
        const questions: PromptObject[] = [...general, ...nextjs, ...dependency]
        runTask(questions).then((values: any) => {
          if (values) {
            const params: CommandParams = {
              ...values,
              platform: 'nextjs'
            }
            createTask(params).catch((err) => {
              console.error(err)
              process.exit(1)
            })
          }
        })
      }
    }
  )
}
