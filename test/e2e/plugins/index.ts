// in cypress/support/index.ts
// load type definitions that come with Cypress module

import path from 'path'
import { devServer } from '@cypress/vite-dev-server'
import coverage from '@cypress/code-coverage/task'
import browserify from '@cypress/browserify-preprocessor'
// need to use require for now as importing default throws a type error at runtime
const cucumber = require('cypress-cucumber-preprocessor').default

const rootDir = path.resolve(__dirname, '..', '..', '..')

const plugin = (on, config) => {
  const cucumberOptions = {
    ...browserify.defaultOptions,
    typescript: path.join(rootDir, 'node_modules/typescript')
  }

  coverage(on, config)
  on('file:preprocessor', cucumber(cucumberOptions))
  on('dev-server:start', (options: Cypress.DevServerConfig) => {
    return devServer({
      ...options,
      viteConfig: {
        configFile: path.resolve(rootDir, 'vite.config.ts'),
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

export default plugin
