import vendorPlugins from './vendor'
import { App, Plugin } from 'vue'

const globalPlugins = [...vendorPlugins]

export const globalComponents = {
  install(app: App) {
    for (const { install } of globalPlugins) {
      install?.(app)
    }
  }
} as Plugin
