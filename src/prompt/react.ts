import type { PromptObject } from 'prompts'

// 中划线命名法(kebab-case) /^[a-z]{1}[a-z-]+[a-z]$
// 大驼峰命名法(CamelCase) /^[A-Z]{1}[a-zA-Z]*?[a-z]$/
// 小驼峰命名法(lowerCamelCase) /^[a-z]{1}[a-zA-Z]*?[a-z]$/
export const react: {
  [key: string]: PromptObject
} = {
  components: {
    name: 'components',
    type: 'text',
    message: 'What is component name?',
    validate: (value: string) => {
      const reg = /^[A-Z]{1}[a-zA-Z]*?[a-z]$/
      if (value.length === 0) {
        return 'Please enter components name.'
      }

      if (!reg.test(value)) {
        return 'Please enter a valid components name.'
      }
      return true
    }
  },
  hooks: {
    name: 'hooks',
    type: 'text',
    message: 'What is hooks name?',
    validate: (value: string) => {
      const reg = /^[A-Z]{1}[a-zA-Z]*?[a-z]$/
      if (value.length === 0) {
        return 'Please enter hooks name.'
      }

      if (!reg.test(value)) {
        return 'Please enter a valid hooks name.'
      }
      return true
    }
  },
  provider: {
    name: 'provider',
    type: 'text',
    message: 'What is provider name?',
    validate: (value: string) => {
      const reg = /^[A-Z]{1}[a-zA-Z]*?[a-z]$/
      if (value.length === 0) {
        return 'Please enter provider name.'
      }

      if (!reg.test(value)) {
        return 'Please enter a valid provider name.'
      }
      return true
    }
  },
  reducer: {
    name: 'reducer',
    type: 'text',
    message: 'What is reducer name?',
    validate: (value: string) => {
      const reg = /^[A-Z]{1}[a-zA-Z]*?[a-z]$/
      if (value.length === 0) {
        return 'Please enter reducer name.'
      }

      if (!reg.test(value)) {
        return 'Please enter a valid reducer name.'
      }
      return true
    }
  }
}
