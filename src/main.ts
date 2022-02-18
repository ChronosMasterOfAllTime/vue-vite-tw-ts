import { createApp } from 'vue'
import App from '@/App.vue'
import '@/styles/index.sass'
import router from '@/router'
import { variantJS, VariantJSConfiguration } from '@variantjs/vue'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.use(createPinia())

const config: VariantJSConfiguration = {}

app.use(variantJS, config)

app.mount('#app')
