import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import IstanbulPlugin from 'vite-plugin-istanbul'

const plugins: Array<Plugin> = [vue(), tsconfigPaths()]

plugins.push(
  IstanbulPlugin({
    cypress: true,
    checkProd: true,
    exclude: ['dist', '.nyc_output', 'node_modules', 'coverage', 'test'],
    include: ['src/*']
  })
)

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  build: {
    sourcemap: process.env.NODE_ENV === 'production' ? false : 'inline'
  }
})
