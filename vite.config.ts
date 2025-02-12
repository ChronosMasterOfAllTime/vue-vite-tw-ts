/// <reference types="vitest" />

import { defineConfig, Plugin } from 'vite'
import IstanbulPlugin from 'vite-plugin-istanbul'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import vue from '@vitejs/plugin-vue'

const plugins: Array<Plugin> = [vue(), tsconfigPaths(), tailwindcss()]

if (process.env.CYPRESS_TEST === 'true') {
  console.info('instrumenting code coverage for e2e tests...')
  plugins.push(
    IstanbulPlugin({
      cypress: true,
      checkProd: true,
      exclude: ['dist', '.nyc_output', 'node_modules', 'coverage', 'test'],
      include: ['src/*']
    })
  )
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins,
  test: {
    server: {
      deps: {
        inline: ['date-fns']
      }
    },
    environment: 'happy-dom',
    globals: true,
    coverage: {
      all: true,
      exclude: ['*.config.{ts,js}', '**/*.d.ts', 'src/main.ts', 'dist', 'test'],
      functions: 80,
      branches: 80,
      statements: 80
    }
  },
  build: {
    sourcemap: mode === 'production' ? false : 'inline'
  },
  server: {
    port: 3000
  }
}))
