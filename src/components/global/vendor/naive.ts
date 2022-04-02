import { create, NButton } from 'naive-ui'
import { Plugin } from 'vue'

export default {
  install: () =>
    create({
      components: [NButton]
    })
} as Plugin
