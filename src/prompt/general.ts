import type { PromptObject } from 'prompts'

export const general: PromptObject[] = [
  {
    name: 'name',
    type: 'text',
    message: 'Project name:',
    validate: (value: string) => {
      if (value.length === 0) {
        return 'Please enter project name.'
      }
      return true
    }
  },
  {
    name: 'email',
    type: 'text',
    message: 'What is your email?',
    validate: (value: string) => {
      const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{l}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
      const pass: boolean = regex.test(value)
      if (!pass) {
        return 'Please enter a valid email address.'
      }
      return true
    }
  },
  {
    name: 'description',
    type: 'text',
    message: 'What is your description?'
  }
]
