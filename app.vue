<script setup lang="ts">
import type { LayoutKey } from "#build/types/layouts"

const appConfig = useAppConfig()
const route = useRoute()
const layout = computed<LayoutKey>(() => {
  const path = route.path

  switch (true) {
    case path.startsWith("/accounts"):
      return "auth"
    case path.startsWith("/dashboard"):
      return "dashboard"
    default:
      return "default"
  }
})

const currentTime = ref(Date.now())
provide("currentTime", currentTime)

onMounted(() => {
  const timer = setInterval(() => {
    currentTime.value = Date.now()
  }, 1000)

  onUnmounted(() => {
    clearInterval(timer)
  })
})
useHead({
  htmlAttrs: {
    lang: "zh-Hant-TW",
  },
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <UApp :toaster="appConfig.toaster">
      <NuxtLayout :name="layout">
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>
