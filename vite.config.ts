import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'

const plugins = [vue(), tsconfigPaths()]

// https://vitejs.dev/config/
export default defineConfig({
  plugins
})
