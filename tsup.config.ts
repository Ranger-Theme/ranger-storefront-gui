import { defineConfig } from 'tsup'
import type { Options } from 'tsup'

export default defineConfig((options: Options) => {
  return {
    entry: ['./src/index.ts'],
    outDir: 'dist',
    clean: true,
    dts: {
      resolve: true,
      entry: ['./src/typing/index.ts']
    },
    splitting: false,
    watch: options.watch,
    sourcemap: !!options.watch,
    minify: !options.watch,
    shims: true,
    format: ['esm', 'cjs'],
    external: []
  }
})
