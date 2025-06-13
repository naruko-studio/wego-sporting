<script lang="ts" setup>
import { authClient } from "~/auth-client"
import type { DropdownMenuItem } from "@nuxt/ui"

const session = authClient.useSession()

const dropdownMenuItems = computed<DropdownMenuItem[][]>(() => {
  const user = session.value?.data?.user

  const items: DropdownMenuItem[][] = [
    [
      {
        label: `登入中的使用者 ${user?.name ?? "未知使用者"}`,
        type: "label",
      },
    ],
    [
      { label: "Profile", to: "/profile" },
      { label: "Settings", to: "/settings" },
    ],
  ]

  // 只有 admin 才顯示 Dashboard 項目
  if (user?.role === "admin") {
    items.push([{ label: "前往後台", to: "/dashboard" }])
  }

  items.push([
    {
      label: "Logout",
      color: "error",
      onSelect: () => {
        authClient.signOut()
      },
    },
  ])

  return items
})
</script>

<template>
  <UDropdownMenu
    :items="dropdownMenuItems"
    :content="{
      align: 'end',
    }"
  >
    <UAvatar
      :src="session?.data?.user.image ?? undefined"
      :alt="session?.data?.user.displayUsername ?? undefined"
    />
  </UDropdownMenu>
</template>
