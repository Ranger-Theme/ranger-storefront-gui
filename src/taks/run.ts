import prompts from 'prompts'
import { red } from 'kolorist'
import type { PromptObject } from 'prompts'

export const runTask = async (questions: PromptObject[]): Promise<any> => {
  const data: any = await prompts(questions, {
    onCancel: () => {
      throw new Error(red('✖') + ' Operation cancelled')
    }
  })

  return new Promise((resolve) => {
    resolve(data)
  })
}
