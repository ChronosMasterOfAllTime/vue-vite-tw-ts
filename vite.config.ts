import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import IstanbulPlugin from 'vite-plugin-istanbul'

const plugins: Array<Plugin> = [vue(), tsconfigPaths()]

console.log('instrumenting for E2E coverage')
plugins.push(
  IstanbulPlugin({
    requireEnv: true,
    cypress: true,
    checkProd: true,
    exclude: ['dist', '.nyc_output', 'node_modules', 'coverage', 'test'],
    include: ['src/*']
  })
)

// https://vitejs.dev/config/
export default defineConfig({
  plugins
})
