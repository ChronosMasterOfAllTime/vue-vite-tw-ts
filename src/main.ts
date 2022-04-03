import { createApp } from 'vue'
import App from '@/App.vue'
import '@/styles/index.sass'
import router from '@/router'
import { createPinia } from 'pinia'
import { globalComponents } from '@/components'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(globalComponents)

app.mount('#app')
