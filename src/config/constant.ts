export const schematics: Schematic[] = [
  {
    name: 'components',
    alias: 'co',
    key: 'componentName',
    description: 'Generate a react component'
  },
  {
    name: 'hooks',
    alias: 'ho',
    key: 'hookName',
    description: 'Generate a hooks declaration'
  },
  {
    name: 'provider',
    alias: 'pr',
    key: 'providerName',
    description: 'Generate a provider declaration'
  },
  {
    name: 'reducer',
    alias: 're',
    key: 'reducerName',
    description: 'Generate a mini reducer declaration'
  }
]

export const nestSchematics: Schematic[] = [
  {
    name: 'application',
    alias: 'application',
    key: '',
    description: 'Generate a new application workspace'
  },
  {
    name: 'angular-app',
    alias: 'ng-app',
    key: '',
    description: ''
  },
  {
    name: 'class',
    alias: 'cl',
    key: '',
    description: 'Generate a new class'
  },
  {
    name: 'configuration',
    alias: 'config',
    key: '',
    description: 'Generate a CLI configuration file'
  },
  {
    name: 'controller',
    alias: 'co',
    key: '',
    description: 'Generate a controller declaration'
  },
  {
    name: 'decorator',
    alias: 'd',
    key: '',
    description: 'Generate a custom decorator'
  },
  {
    name: 'filter',
    alias: 'f',
    key: '',
    description: 'Generate a filter declaration'
  },
  {
    name: 'gateway',
    alias: 'ga',
    key: '',
    description: 'Generate a gateway declaration'
  },
  {
    name: 'guard',
    alias: 'gu',
    key: '',
    description: 'Generate a guard declaration'
  },
  {
    name: 'interceptor',
    alias: 'itc',
    key: '',
    description: 'Generate an interceptor declaration'
  },
  {
    name: 'interface',
    alias: 'itf',
    key: '',
    description: 'Generate an interface'
  },
  {
    name: 'library',
    alias: 'lib',
    key: '',
    description: 'Generate a new library within a monorepo'
  },
  {
    name: 'middleware',
    alias: 'mi',
    key: '',
    description: 'Generate a middleware declaration'
  },
  {
    name: 'module',
    alias: 'mo',
    key: '',
    description: 'Generate a module declaration'
  },
  {
    name: 'pipe',
    alias: 'pi',
    key: '',
    description: 'Generate a pipe declaration'
  },
  {
    name: 'provider',
    alias: 'pr',
    key: '',
    description: 'Generate a provider declaration'
  },
  {
    name: 'resolver',
    alias: 'r',
    key: '',
    description: 'Generate a GraphQL resolver declaration'
  },
  {
    name: 'resource',
    alias: 'res',
    key: '',
    description: 'Generate a new CRUD resource'
  },
  {
    name: 'service',
    alias: 's',
    key: '',
    description: 'Generate a service declaration'
  },
  {
    name: 'sub-app',
    alias: 'app',
    key: '',
    description: 'Generate a new application within a monorepo'
  }
]

export const COMMANDS: Commands = {
  'create-electron': 'Create a new electron project.',
  'create-nest': 'Create a new nestjs node project.',
  'create-next': 'Create a new nextjs ssr project.',
  'create-rn': 'Create a new react native app.',
  'create-taro': 'Create a new taro mini project.',
  'create-template': 'Create a new template project.',
  'create-umi': 'Create a new react umi project.',
  'create-vite': 'Create a new react vite project.',
  'create-webpack': 'Create a new create-react-app project.'
}

export const TEMPLATES: Templates = {
  'next-app-router': 'A Next.js project using App Router.',
  'next-page-router': 'A Next.js project using page router.',
  'vite-react': 'A React project using vite.'
}
