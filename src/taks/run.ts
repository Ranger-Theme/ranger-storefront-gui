import prompts from 'prompts'
import type { PromptObject } from 'prompts'

import { logError } from '../utils'

export const runTask = async (questions: PromptObject[]): Promise<any> => {
  const data: any = await prompts(questions, {
    onCancel: () => {
      logError('✖ Operation cancelled')
    }
  })
  const result: any = JSON.stringify(data) === '{}' ? null : data

  return new Promise((resolve) => {
    resolve(result)
  })
}
