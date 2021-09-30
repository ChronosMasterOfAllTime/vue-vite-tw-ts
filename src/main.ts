import { createApp } from 'vue'
import App from '@/App.vue'
import '@/styles/index.sass'
import store, { key } from '@/store'
import router from '@/router'
import { variantJS, VariantJSConfiguration } from '@variantjs/vue'

const app = createApp(App)

app.use(store, key)
app.use(router)

const config: VariantJSConfiguration = {}

app.use(variantJS, config)

app.mount('#app')
