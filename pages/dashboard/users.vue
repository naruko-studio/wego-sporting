<script lang="ts" setup>
import { h, resolveComponent } from "vue"
import type { TableColumn } from "@nuxt/ui"

const UAvatar = resolveComponent("UAvatar")
const toast = useToast()
const UButton = resolveComponent("UButton")

type User = {
  id: string
  name: string
  email: string
  emailVerified: boolean
  image: string
  createdAt: Date
  updatedAt: Date
  role: string
  banned: boolean
  banReason: string
  banExpires: Date
  username: string
  displayUsername: string
}
const { data, status } = await useFetch<User[]>("/api/user", {
  key: "id",
  transform: (data) => data || [],
  lazy: true,
})
const columns: TableColumn<User>[] = [
  {
    accessorKey: "image",
    header: "",
    cell: ({ row }) => {
      const avatar = { src: row.original.image, alt: row.original.name }
      return h(UAvatar, avatar)
    },
  },
  {
    accessorKey: "name",
    header: "使用者名稱",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "createdAt",
    header: "註冊時間",
    cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString(),
  },
  { accessorKey: "role", header: "權限" },
  {
    id: "actions",
    header: "操作",
    cell: ({ row }) => {
      return h("div", { class: "flex items-center gap-1" }, [
        h(UButton, {
          variant: "ghost",
          size: "sm",
          onClick: () => {
            toast.add({
              title: "正在編輯使用者",
              description: `編輯使用者 ${row.original.id} 的資訊`,
            })
          },
          icon: "i-lucide-pencil",
        }),
        h(UButton, {
          variant: "ghost",
          size: "sm",
          color: "error",
          onClick: () => {
            toast.add({
              title: "已停用使用者",
              description: `使用者 ${row.original.id} 已停用`,
              color: "error",
            })
          },
          icon: "i-lucide-archive",
        }),
      ])
    },
  },
]
</script>

<template>
  <UPageHeader title="使用者列表" />
  <div class="p-4">
    <UTable
      sticky
      :data="data ?? []"
      :columns="columns"
      :loading="status === 'pending'"
    />
  </div>
</template>
