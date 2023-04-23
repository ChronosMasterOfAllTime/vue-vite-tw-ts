// in cypress/support/index.ts
// load type definitions that come with Cypress module
import path from 'path'
const rootDir = path.resolve(__dirname, '..', '..', '..')

import { devServer } from '@cypress/vite-dev-server'
import coverage from '@cypress/code-coverage/task'
import browserify from '@cypress/browserify-preprocessor'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'

const { default: viteConfig } = require(path.resolve(rootDir, 'vite.config.ts'))
// need to use require for now as importing default throws a type error at runtime

export const setupNodeEvents = async (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
) => {
  const cucumberOptions = {
    ...browserify.defaultOptions,
    typescript: path.join(rootDir, 'node_modules/typescript')
  }

  coverage(on, config)
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, { ...config, ...cucumberOptions })

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin(config)]
    })
  )

  on('dev-server:start', (options: Cypress.DevServerConfig) => {
    return devServer({
      ...options,
      viteConfig: {
        ...viteConfig,
        // configFile: path.resolve(rootDir, 'vite.config.ts'),
        define: {
          'process.env': process.env
        },
        optimizeDeps: {
          include: ['tailwind-merge'] // we need to include the tailwind-merge dependency otherwise the first run of the tests will fail
        }
      }
    })
  })

  return config
}
