<script setup lang="ts">
import type { NuxtError } from "#app"

const props = defineProps<{
  error: NuxtError
}>()

let statusMessage
switch (props.error.statusCode) {
  case 400:
    statusMessage = "錯誤的請求"
    break
  case 401:
    statusMessage = "未經授權"
    break
  case 403:
    statusMessage = "沒有權限"
    break
  case 404:
    statusMessage = "找不到頁面"
    break
  case 405:
    statusMessage = "不允許的方法"
    break
  case 408:
    statusMessage = "請求逾時"
    break
  case 429:
    statusMessage = "請求過於頻繁"
    break
  default:
    statusMessage = "伺服器內部錯誤"
    break
}

const customError = {
  statusCode: props.error.statusCode,
  statusMessage: statusMessage,
  message: "請回報此錯誤給我們，謝謝！",
}
const appConfig = useAppConfig()

const toast = useToast()

toast.add({
  title: "請將此畫面截圖並回報給我們",
  actions: [
    {
      label: "回報",
      icon: "i-lucide-message-square-plus",
      to: "mailto:naruko@naruko.studio",
    },
  ],
  color: "warning",
  duration: 0,
})
</script>

<template>
  <UApp :toaster="appConfig.toaster">
    <UError
      :error="customError"
      :clear="{
        label: '回首頁',
        size: 'xl',
        icon: 'i-lucide-arrow-left',
        color: 'warning',
      }"
      color="warning"
    />
  </UApp>
</template>
