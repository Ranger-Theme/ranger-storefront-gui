import type { Argv } from 'yargs'

export type PkgType = {
  name: string
  description?: string
  version?: string
}

export type PlatFormType = 'nextjs' | 'vite' | 'umi' | 'webpack' | 'nestjs'

export type Options = {
  templateName: string
}

export type CommandParams = {
  name: string
  install?: boolean
  git?: boolean
  platform?: PlatFormType
  package?: string
  type?: string
  ui?: string
  styled?: string
}

export type Schematic = {
  name: string
  alias: string
  key: string
  description: string
}

export interface Templates {
  [key: string]: string
}

export interface Commands extends Templates {}

export interface CommandType {
  (cli: Argv<{}>): void
}

export type EjsParams = {
  name: string
  alias: string
  description: string
  options: {
    componentName?: string
    hookName?: string
    providerName?: string
    reducerName?: string
  }
}
