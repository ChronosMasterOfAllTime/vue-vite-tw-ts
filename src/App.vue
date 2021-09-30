<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div
    class="
      bg-white
      dark:bg-gray-800 dark:text-white
      text-gray-800 text-center
      h-screen
      w-screen
    "
  >
    <img
      class="pt-10 mx-auto mb-4"
      alt="Chronos logo"
      src="./assets/chronos.jpg"
    />
    <router-view />
  </div>
</template>

<style lang="sass">
#app
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
