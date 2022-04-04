<script setup lang="ts">
import { darkTheme, lightTheme } from 'naive-ui'
import { computed, ref } from 'vue'

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

const mode = ref<'dark' | 'light'>(prefersDark ? 'dark' : 'light')
const theme = computed(() => (mode.value === 'dark' ? darkTheme : lightTheme))
</script>

<template>
  <n-config-provider :theme="theme">
    <n-layout position="absolute">
      <n-layout-header style="height: 64px; padding: 24px" bordered>
        Layout Header
      </n-layout-header>
      <n-layout
        class="bg-white dark:bg-gray-800 dark:text-white text-gray-800 text-center h-screen w-screen"
        has-sider
        position="absolute"
        style="top: 64px; bottom: 64px"
      >
        <n-layout-sider
          collapse-mode="transform"
          :width="240"
          show-trigger="arrow-circle"
          bordered
        >
          <n-h2>Layout Sider</n-h2>
        </n-layout-sider>
        <n-layout-content>
          <router-view />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<style lang="sass">
#app
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
