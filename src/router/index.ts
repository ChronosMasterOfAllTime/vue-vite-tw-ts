import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/HelloWorld.vue'),
      props: {
        msg: 'Hello Vue 3 + TypeScript + Vite + Tailwind CSS/UI + Vuex + Vue Router'
      }
    }
  ]
})

export default router
