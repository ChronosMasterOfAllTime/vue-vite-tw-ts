<template>
  <img
    class="pt-10 mx-auto mb-4"
    alt="Chronos logo"
    data-cy="chronos-logo"
    src="@/assets/chronos.jpg"
  />
  <h1>{{ msg }}</h1>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    |
    <a href="https://pinia.vuejs.org/introduction.html" target="_blank">
      Pinia Docs
    </a>
    |
    <a href="https://next.router.vuejs.org/guide/" target="_blank">
      Vue Router Next Docs
    </a>
    |
    <a href="https://tailwindui.com" target="_blank">Tailwind UI Docs</a>
    |
    <a href="https://tailwindcss.com/docs" target="_blank">Tailwind CSS Docs</a>
    |
    <a
      href="https://www.naiveui.com/en-US/dark/docs/introduction"
      target="_blank"
    >
      Naive UI Docs
    </a>
  </p>
  <NButton
    data-cy="click-me"
    :type="variant"
    :disabled="variant === 'error'"
    class="capitalize mx-auto my-2"
    @click="incrementCounter(1)"
  >
    <b>{{ message }}</b>
  </NButton>
  <p>
    Edit
    <code>views/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store'
import { computed } from 'vue'

defineProps<{ msg: string }>()

const main = useMainStore()

const { incrementCounter } = main

const message = computed(() => {
  if (main.count >= 60) return "It's Broken!"
  if (main.count > 50) return 'Uh-oh'
  if (main.count > 30) return 'Slow Down..'
  if (main.count > 10) return 'Great Job!'
  return 'Click Me'
})

const variant = computed(() => {
  if (main.count >= 60) return 'error'
  if (main.count > 10) return 'success'
  return 'default'
})
</script>

<style lang="sass" scoped>
a
  color: #42b983

label
  margin: 0 0.5em
  font-weight: bold

code
  background-color: #eee
  padding: 2px 4px
  border-radius: 4px
  color: #304455
</style>
