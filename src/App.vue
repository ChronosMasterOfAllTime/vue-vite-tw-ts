<template>
  <n-config-provider data-cy="app" :theme="theme" :class="{ dark: mode }">
    <n-layout position="absolute">
      <n-layout-header style="height: 64px; padding: 24px" bordered>
        <div class="text-right">
          <n-switch data-cy="dark-mode" v-model:value="mode">
            <template #checked> Dark </template>
            <template #unchecked> Light </template>
            <template #checked-icon>
              <n-icon>
                <moon />
              </n-icon>
            </template>
            <template #unchecked-icon>
              <n-icon>
                <sun />
              </n-icon>
            </template>
          </n-switch>
        </div>
      </n-layout-header>
      <n-layout
        class="bg-white dark:bg-gray-800 dark:text-white text-gray-800 text-center h-screen w-screen"
        has-sider
        position="absolute"
        style="top: 64px; bottom: 64px"
      >
        <n-layout-sider
          data-cy="sidebar"
          class="fixed h-full"
          collapse-mode="transform"
          :width="240"
          @mouseover="collapsed = false"
          @mouseleave="collapsed = true"
          :collapsed="collapsed"
          :native-scrollbar="false"
          bordered
        >
          <n-h2>Layout Sider</n-h2>
        </n-layout-sider>
        <n-layout-content :native-scrollbar="false">
          <router-view />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme, lightTheme } from 'naive-ui'
import { computed, ref, watchEffect } from 'vue'

const darkStore = localStorage.getItem('dark')
const prefersDark: boolean = darkStore
  ? darkStore === 'true'
  : window.matchMedia('(prefers-color-scheme: dark)').matches

const mode = ref<boolean>(prefersDark)
const theme = computed(() => (mode.value ? darkTheme : lightTheme))

watchEffect(() => {
  localStorage.setItem('dark', `${mode.value}`)
})

const collapsed = ref(true)
</script>

<style lang="sass">
#app
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
