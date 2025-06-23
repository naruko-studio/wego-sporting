<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui"
import { authClient } from "~/auth-client"

const session = authClient.useSession()
const navigationMenuItems = ref<NavigationMenuItem[]>([
  { label: "近期賽事", to: "/" },
  {
    label: "區域賽事",
    to: "/country",
    children: [
      {
        label: "基隆市",
        description: "在基隆市舉辦的賽事",
        to: "/country",
      },
      {
        label: "新北市",
        description: "在新北市舉辦的賽事",
        to: "/country",
      },
      {
        label: "臺北市",
        description: "在臺北市舉辦的賽事",
        to: "/country",
      },
      {
        label: "桃園市",
        description: "在桃園市舉辦的賽事",
        to: "/country",
      },
      {
        label: "新竹縣",
        description: "在新竹縣舉辦的賽事",
        to: "/country",
      },
      {
        label: "新竹市",
        description: "在新竹市舉辦的賽事",
        to: "/country",
      },
      {
        label: "苗栗市",
        description: "在苗栗市舉辦的賽事",
        to: "/country",
      },
      {
        label: "苗栗縣",
        description: "在苗栗縣舉辦的賽事",
        to: "/country",
      },
      {
        label: "臺中市",
        description: "在臺中市舉辦的賽事",
        to: "/country",
      },
      {
        label: "彰化縣",
        description: "在彰化縣舉辦的賽事",
        to: "/country",
      },
      {
        label: "彰化市",
        description: "在彰化市舉辦的賽事",
        to: "/country",
      },
      {
        label: "南投市",
        description: "在南投市舉辦的賽事",
        to: "/country",
      },
      {
        label: "南投縣",
        description: "在南投縣舉辦的賽事",
        to: "/country",
      },
      {
        label: "雲林縣",
        description: "在雲林縣舉辦的賽事",
        to: "/country",
      },
      {
        label: "嘉義縣",
        description: "在嘉義縣舉辦的賽事",
        to: "/country",
      },
      {
        label: "嘉義市",
        description: "在嘉義市舉辦的賽事",
        to: "/country",
      },
      {
        label: "臺南市",
        description: "在臺南市舉辦的賽事",
        to: "/country",
      },
      {
        label: "高雄市",
        description: "在高雄市舉辦的賽事",
        to: "/country",
      },
      {
        label: "屏東縣",
        description: "在屏東縣舉辦的賽事",
        to: "/country",
      },
      {
        label: "屏東市",
        description: "在屏東市舉辦的賽事",
        to: "/country",
      },
      {
        label: "宜蘭縣",
        description: "在宜蘭縣舉辦的賽事",
        to: "/country",
      },
      {
        label: "宜蘭市",
        description: "在宜蘭市舉辦的賽事",
        to: "/country",
      },
      {
        label: "花蓮縣",
        description: "在花蓮縣舉辦的賽事",
        to: "/country",
      },
      {
        label: "花蓮市",
        description: "在花蓮市舉辦的賽事",
        to: "/country",
      },
      {
        label: "臺東市",
        description: "在臺東市舉辦的賽事",
        to: "/country",
      },
      {
        label: "臺東縣",
        description: "在臺東縣舉辦的賽事",
        to: "/country",
      },
      {
        label: "澎湖縣",
        description: "在澎湖縣舉辦的賽事",
        to: "/country",
      },
      {
        label: "綠島",
        description: "在綠島舉辦的賽事",
        to: "/country",
      },
      {
        label: "蘭嶼",
        description: "在蘭嶼舉辦的賽事",
        to: "/country",
      },
      {
        label: "金門縣",
        description: "在金門縣舉辦的賽事",
        to: "/country",
      },
      {
        label: "馬祖",
        description: "在馬祖舉辦的賽事",
        to: "/country",
      },
      {
        label: "連江縣",
        description: "在連江縣舉辦的賽事",
        to: "/country",
      },
    ],
  },
  { label: "過往賽事", to: "/end-games" },
])
const now = useNow()
const formattedNow = computed(() =>
  new Date(now.value).toLocaleString("zh-TW", { hour12: false }),
)
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <UHeader mode="slideover" :container="false">
      <template #title>test</template>
      <template #default>
        <UNavigationMenu :items="navigationMenuItems" />
      </template>
      <template #right>
        <UColorModeButton />
        <UserMenu v-if="session?.data" />
        <UButton v-else label="登入/註冊" to="/accounts/login" />
      </template>
      <template #body>
        <UNavigationMenu orientation="vertical" :items="navigationMenuItems" />
      </template>
    </UHeader>
    <UMain>
      <UPage>
        <UBanner :title="'現在系統時間：' + formattedNow" class="z-10" />
        <UPageBody>
          <UContainer>
            <div class="py-4 sm:py-6 lg:py-8">
              <slot />
            </div>
          </UContainer>
          <template #right>
            <UPageAside>
              <slot name="toc" />
            </UPageAside>
          </template>
        </UPageBody>
        <slot name="footer" />
      </UPage>
    </UMain>
    <UFooter>
      <template #left>
        <Copyright />
      </template>
      <template #default>my ads</template>
      <template #right>social</template>
      <template #top>
        <div class="items-center text-center">ads</div>
      </template>
    </UFooter>
  </div>
</template>
