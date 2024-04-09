import type { PromptObject } from 'prompts'

export const vite: PromptObject[] = [
  {
    name: 'type',
    type: 'select',
    message: 'Please choose the query api of your project?',
    choices: [
      {
        title: 'Using Axios',
        value: 'axios'
      },
      {
        title: 'Using Fetch',
        value: 'fetch'
      },
      {
        title: 'Using Use Http',
        value: 'http'
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
    name: 'hooks',
    type: 'select',
    message: 'Please choose the common hooks api of your project?',
    choices: [
      {
        title: 'Using Ahooks',
        value: 'ahooks'
      },
      {
        title: 'Using React Use',
        value: 'use'
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
        title: 'React Router',
        value: 'router'
      },
      {
        title: 'Redux Toolkit',
        value: 'reduxjs'
      },
      {
        title: 'Vite Http Proxy',
        value: 'proxy'
      },
      {
        title: 'Vite Visualizer',
        value: 'visualizer'
      },
      {
        title: 'Sentry Recording Support',
        value: 'sentry'
      }
    ]
  }
]
