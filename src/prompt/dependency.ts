import type { PromptObject } from 'prompts'

export const dependency: PromptObject[] = [
  {
    name: 'styled',
    type: 'select',
    message: 'Please choose the CSS-in-JS library of your project?',
    choices: [
      {
        title: 'Using Emotion',
        value: 'emotion',
        description:
          'Emotion is a performant and flexible CSS-in-JS library, it allows you to style apps quickly with string or object styles.'
      },
      {
        title: 'Using Styled Components',
        value: 'styled',
        description:
          'Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress'
      }
    ]
  },
  {
    name: 'linter',
    type: 'multiselect',
    message: 'Check the rules linter needed for your project:',
    choices: [
      {
        title: 'Eslint',
        value: 'eslint'
      },
      {
        title: 'Stylelint',
        value: 'stylelint'
      },
      {
        title: 'Commitlint',
        value: 'commitlint'
      },
      {
        title: 'Prettier',
        value: 'prettierrc'
      },
      {
        title: 'Lint Stage + Husky',
        value: 'pwa'
      }
    ]
  },
  {
    name: 'package',
    type: 'select',
    message: 'Select a package manager',
    choices: [
      {
        title: 'npm',
        value: 'npm',
        description: 'npm is the most popular package manager'
      },
      {
        title: 'yarn',
        value: 'yarn',
        description: 'yarn is an awesome package manager'
      },
      {
        title: 'cnpm',
        value: 'cnpm',
        description: 'cnpm is quick install speed manager'
      },
      {
        title: 'pnpm',
        value: 'pnpm',
        description: 'pnpm is most used package manager'
      }
    ]
  },
  {
    name: 'git',
    type: 'confirm',
    message: 'Do you want to git init for this folder?'
  },
  {
    name: 'install',
    type: 'confirm',
    message: 'Do you want to install dependencies now?'
  }
]
