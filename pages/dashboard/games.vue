<script lang="ts" setup>
import { h, resolveComponent } from "vue"
import type { TableColumn } from "@nuxt/ui"

const toast = useToast()
const UButton = resolveComponent("UButton")

type Game = {
  id: string
}

const { data, status } = await useFetch<Game[]>("/api/game", {
  key: "id",
  transform: (data) => data || [],
  lazy: true,
})
const columns: TableColumn<Game>[] = [
  {
    accessorKey: "name",
    header: "賽事名稱",
  },
  {
    id: "actions",
    header: "操作",
    cell: ({ row }) => {
      return h("div", { class: "flex items-center gap-1" }, [
        h(
          UButton,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => {
              toast.info(`編輯賽事 ${row.original.id}`)
            },
          },
          "編輯",
        ),
        h(
          UButton,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => {
              toast.info(`刪除賽事 ${row.original.id}`)
            },
          },
          "刪除",
        ),
      ])
    },
  },
]
</script>

<template>
  <UPageHeader title="賽事清單">
    <template #links>
      <UButton label="新增賽事" icon="i-lucide-plus" />
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
  <!-- <div class="relative p-4">
    <UButton
      label="新增賽事"
      icon="i-lucide-plus"
      class="absolute top-4 right-4"
    />
    <UTable
      class="mt-12"
      sticky
      :data="data ?? []"
      :columns="columns"
      :loading="status === 'pending'"
    />
  </div> -->
</template>
