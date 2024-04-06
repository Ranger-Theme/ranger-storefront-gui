import type { Argv, ArgumentsCamelCase } from 'yargs'
import type { PromptObject } from 'prompts'

import { createTask, runTask } from '../taks'

export const createNext = (cli: Argv<{}>) => {
  cli.command(
    'create-next [name]',
    'create a react app base on nextjs',
    (program: any) => {
      return program.option('name', {
        type: 'sring',
        alias: 'n',
        describe: 'Project name'
      })
    },
    async (argv: ArgumentsCamelCase) => {
      if (argv.name) {
      } else {
        const questions: PromptObject[] = [
          {
            type: 'text',
            name: 'name',
            message: 'Project name:'
          }
        ]
        runTask(questions).then((params: any) => {
          if (params) {
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
