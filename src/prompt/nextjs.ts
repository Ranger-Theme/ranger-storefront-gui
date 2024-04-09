import type { PromptObject } from 'prompts'

export const nextjs: PromptObject[] = [
  {
    name: 'type',
    type: 'select',
    message: 'Please choose the type of your project?',
    choices: [
      {
        title: 'Using App Router',
        value: 'app',
        description: 'Features available in /app'
      },
      {
        title: 'Using Pages Router',
        value: 'pages',
        description: 'Features available in /pages'
      }
    ]
  },
  {
    name: 'ui',
    type: 'select',
    message: 'Please choose the UI framework of your project?',
    choices: [
      {
        title: 'Using Material UI',
        value: 'mui',
        description:
          "Material UI is an open-source React component library that implements Google's Material Design."
      },
      {
        title: 'Using Ant Design',
        value: 'antd',
        description:
          'Following the Ant Design specification, we developed a React UI library antd that contains a set of high quality components and demos for building rich, interactive user interfaces.'
      }
    ]
  },
  {
    name: 'features',
    type: 'multiselect',
    message: 'Check the features needed for your project:',
    choices: [
      {
        title: 'TypeScript',
        value: 'typescript',
        selected: true
      },
      {
        title: 'Nextjs Middleware',
        value: 'middeware'
      },
      {
        title: 'Nextjs Api Http Proxy',
        value: 'proxy'
      },
      {
        title: 'Sentry Recording Support',
        value: 'sentry'
      },
      {
        title: 'Progressive Web App (PWA) Support',
        value: 'pwa'
      }
    ]
  }
]
