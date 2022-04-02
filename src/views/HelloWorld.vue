<script setup lang="ts">
import { useMainStore } from '@/store'
import { computed } from 'vue'

defineProps<{ msg: string }>()

const main = useMainStore()

const message = computed(() => {
  if (main.count >= 60) return "It's broken!"
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

<template>
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
    <a href="https://github.com/variantjs/vue" target="_blank">
      VariantJS Docs
    </a>
  </p>
  <NButton
    :type="variant"
    :disabled="variant === 'error'"
    class="capitalize mx-auto my-2"
    @click="main.incrementCounter(1)"
  >
    <b>{{ message }}</b>
  </NButton>
  <p>
    Edit
    <code>views/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

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
