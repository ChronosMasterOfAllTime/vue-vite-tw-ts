import { defineConfig } from 'cypress'
import { devServer } from '@cypress/vite-dev-server'
import { ViteDevServerConfig } from '@cypress/vite-dev-server/dist/devServer'
import plugin from './test/e2e/plugins'

export default defineConfig({
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  fileServerFolder: '.',
  fixturesFolder: 'test/e2e/fixtures',
  experimentalFetchPolyfill: true,
  trashAssetsBeforeRuns: true,
  viewportWidth: 1440,
  viewportHeight: 990,
  env: {
    CYPRESS_COVERAGE: 'true',
    TAGS: 'not @ignore',
    BASE_URL: 'localhost:3000'
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return plugin(on, config)
    },
    specPattern: 'test/e2e/specs/**/*.{feature,features}',
    supportFile: 'test/e2e/support/index.ts',
    excludeSpecPattern: ['*.{ts,tsx,js,jsx}']
  },
  component: {
    devServer(config: ViteDevServerConfig) {
      return devServer({
        ...config,
        framework: 'vue',
        viteConfig: './vite.config.ts'
      })
    },
    specPattern: 'test/**/*.{feature,features}',
    excludeSpecPattern: ['*.{ts,tsx,js,jsx}']
  }
})
