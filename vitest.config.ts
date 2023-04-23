import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import config from './vite.config'

const plugins = [vue(), tsconfigPaths()]

// https://vitejs.dev/config/
export default mergeConfig(
  config,
  defineConfig({
    plugins,
    test: {
      deps: {
        inline: ['date-fns']
      },
      environment: 'happy-dom',
      globals: true,
      coverage: {
        all: true,
        exclude: [
          '*.config.{ts,js}',
          '**/*.d.ts',
          'src/main.ts',
          'dist',
          'test'
        ],
        functions: 80,
        branches: 80,
        statements: 80
      }
    }
  })
)
