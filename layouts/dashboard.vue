<script setup lang="ts">
import type { DropdownMenuItem, NavigationMenuItem } from "@nuxt/ui"
import { authClient } from "~/auth-client"

const session = await authClient.getSession()

const collapsed = ref(false)

const { data: userCountData } = await useFetch("/api/user/count")
const { data: gameCountData } = await useFetch("/api/game/count")
const userCount = userCountData.value?.count ?? 0
const gameCount = gameCountData.value?.count ?? 0

const navigationMenuItems: NavigationMenuItem[][] = [
  [
    {
      label: "後台首頁",
      icon: "i-lucide-house",
      to: "/dashboard",
    },
    {
      label: "賽事管理",
      icon: "i-lucide-swords",
      badge: {
        color: "primary",
        label: gameCount,
      },
      to: "/dashboard/games",
    },
    {
      label: "使用者管理",
      icon: "i-lucide-users-round",
      badge: {
        color: "primary",
        label: userCount,
      },
      to: "/dashboard/users",
    },
  ],
  [
    {
      label: "聯絡作者",
      icon: "i-lucide-message-circle-plus",
      to: "mailto:naruko@naruko.studio",
      target: "_blank",
    },
  ],
]

const dropdownMenuItems: DropdownMenuItem[][] = [
  [],
  [
    {
      label: "個人資料",
      icon: "i-lucide-user",
      to: "/dashboard/profile",
    },
    {
      label: "修改密碼",
      icon: "i-lucide-lock",
      to: "/dashboard/password",
    },
  ],
  [{ label: "返回前台", icon: "i-lucide-home", to: "/" }],
  [
    {
      label: "登出",
      icon: "i-lucide-log-out",
      color: "error",
    },
  ],
]
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <UDashboardSidebar
      v-model:collapsed="collapsed"
      collapsible
      mode="slideover"
      :default-size="18"
      class="shrink-0"
    >
      <div class="flex">
        <UDashboardSidebarCollapse />
        <p v-if="!collapsed" class="text-sm">
          競賽報名系統後台<br />by
          <ULink
            href="https://naruko.studio"
            target="_blank"
            inactive-class="text-secondary"
          >
            星月なるこ
          </ULink>
        </p>
      </div>

      <UNavigationMenu
        :collapsed="collapsed"
        :items="navigationMenuItems[0]"
        orientation="vertical"
      />
      <UNavigationMenu
        :collapsed="collapsed"
        :items="navigationMenuItems[1]"
        orientation="vertical"
        class="mt-auto"
      />

      <template #footer>
        <UDropdownMenu :items="dropdownMenuItems" :content="{ side: 'bottom' }">
          <UButton
            :avatar="{ src: session?.data?.user.image ?? '' }"
            :label="collapsed ? undefined : (session?.data?.user.name ?? '')"
            color="neutral"
            variant="ghost"
            class="w-full"
            :block="collapsed"
            trailing-icon="i-lucide-chevron-up"
          />
        </UDropdownMenu>
      </template>
    </UDashboardSidebar>

    <div class="flex-1 overflow-y-auto">
      <UContainer class="px-4 py-6">
        <slot />
      </UContainer>
    </div>
  </div>
</template>
