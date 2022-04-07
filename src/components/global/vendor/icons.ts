import { Moon, Sun } from '@vicons/fa'
import { App, Component } from 'vue'

const icons: Record<string, Component> = {
  Moon,
  Sun
}

export default {
  install(app: App) {
    for (const [name, component] of Object.entries(icons))
      app.component(name, component)
  }
}
