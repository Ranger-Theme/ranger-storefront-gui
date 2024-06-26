import type { Argv, ArgumentsCamelCase } from 'yargs'
import type { PromptObject } from 'prompts'

import { createTask, runTask } from '../tasks'
import { general, dependency, vite } from '../prompt'
import type { CommandParams } from '../typing'

export const createVite = (cli: Argv<{}>) => {
  cli.command(
    'create-vite [name]',
    'create a react app base on vite',
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
          ...vite,
          ...dependency
        ]
        runTask(questions).then((values: any) => {
          if (values) {
            const params: CommandParams = {
              ...values,
              platform: 'vite',
              name: argv.name as string
            }
            createTask(params).catch((err) => {
              console.error(err)
              process.exit(1)
            })
          }
        })
      } else {
        const questions: PromptObject[] = [...general, ...vite, ...dependency]
        runTask(questions).then((values: any) => {
          if (values) {
            const params: CommandParams = {
              ...values,
              platform: 'vite'
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
