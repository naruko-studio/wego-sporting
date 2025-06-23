<script lang="ts" setup>
import { h, resolveComponent } from "vue"
import type { TableColumn } from "@nuxt/ui"
import type { Game } from "~/types/game"
const toast = useToast()
const UButton = resolveComponent("UButton")
const GameEditor = resolveComponent("GameEditor")

const { data, status } = useFetch<Game[]>("/api/game", {
  transform: (data) => data || [],
})

const columns: TableColumn<Game>[] = [
  { accessorKey: "name", header: "賽事名稱" },
  { accessorKey: "country", header: "縣市" },
  { accessorKey: "venue", header: "地點" },
  {
    accessorKey: "signupStart",
    header: "報名開始日",
    cell: ({ row }) => {
      const date = new Date(row.original.signupStart)
      return date.toLocaleString("zh-TW", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    },
  },
  {
    accessorKey: "signupEnd",
    header: "報名結束日",
    cell: ({ row }) => {
      const date = new Date(row.original.signupEnd)
      return date.toLocaleString("zh-TW", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    },
  },
  {
    accessorKey: "gameStart",
    header: "競賽開始日",
    cell: ({ row }) => {
      const date = new Date(row.original.gameStart)
      return date.toLocaleString("zh-TW", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    },
  },
  {
    accessorKey: "gameEnd",
    header: "競賽結束日",
    cell: ({ row }) => {
      const date = new Date(row.original.gameEnd)
      return date.toLocaleString("zh-TW", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    },
  },
  {
    id: "actions",
    header: "操作",
    cell: ({ row }) => {
      return h("div", { class: "flex items-center gap-1" }, [
        h(UButton, {
          variant: "ghost",
          size: "sm",
          icon: "i-lucide-edit",
          onClick: () => modal.open({ id: row.original.id }),
        }),
        h(UButton, {
          variant: "ghost",
          size: "sm",
          icon: "i-lucide-trash",
          onClick: () => {
            toast.add({
              title: `刪除賽事 ${row.original.id}?`,
              color: "error",
              duration: 0,
              actions: [
                {
                  icon: "i-lucide-check",
                  label: "確認",
                  color: "error",
                  onClick: () => {
                    toast.add({
                      title: `賽事 ${row.original.id} 已刪除`,
                      color: "success",
                    })
                  },
                },
                { icon: "i-lucide-x", label: "取消", color: "success" },
              ],
            })
          },
          color: "error",
        }),
      ])
    },
  },
]
const overlay = useOverlay()
const modal = overlay.create(GameEditor)
</script>

<template>
  <UPageHeader title="賽事清單">
    <template #links>
      <UButton
        label="新增賽事"
        icon="i-lucide-plus"
        @click="modal.open({ id: null })"
      />
    </template>
  </UPageHeader>
  <div class="p-4">
    <UTable
      sticky
      :data="data ?? []"
      :columns="columns"
      :loading="status === 'pending'"
    />
  </div>
</template>
