<script setup lang="ts">
import { useMainStore } from '@/store'
import { TButton } from '@variantjs/vue'

defineProps<{ msg: string }>()

const main = useMainStore()

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
  <TButton class="capitalize mx-auto my-2" @click="main.incrementCounter(1)">
    <b>Click me</b>
  </TButton>
  <div class="mb-2">
    <b class="capitalize">click count is: {{ main.count }}</b>
  </div>
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
