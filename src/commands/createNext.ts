import prompts from 'prompts'
import { red } from 'kolorist'
import type { Argv } from 'yargs'

export const createNext = (cli: Argv<{}>) => {
  cli.command(
    'create [name]',
    'create a react app base on nextjs',
    (program: any) => {
      return program.option('name', {
        type: 'sring',
        alias: 'n',
        describe: 'Project name'
      })
    },
    async (argv) => {
      if (argv.name) {
      } else {
        const result: any = await prompts(
          [
            {
              type: 'text',
              name: 'name',
              message: 'Project name:'
            }
          ],
          {
            onCancel: () => {
              throw new Error(red('✖') + ' Operation cancelled')
            }
          }
        )
        console.info(result)
      }
    }
  )
}
