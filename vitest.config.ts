import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'

const plugins = [vue(), tsconfigPaths({ root: 'test/unit' })]

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  test: {
    environment: 'happy-dom',
    globals: true,
    coverage: {
      all: true,
      exclude: ['*.config.{ts,js}', '**/*.d.ts', 'src/main.ts', 'dist', 'test']
    }
  }
})
