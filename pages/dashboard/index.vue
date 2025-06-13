<script lang="ts" setup>
const { data: userCountData } = await useFetch("/api/user/count")
const { data: gameCountData } = await useFetch("/api/game/count")
const userCount = userCountData.value?.count ?? 0
const gameCount = gameCountData.value?.count ?? 0
const cards = ref([
  {
    title: "賽事數量",
    description: `目前系統內共有 ${gameCount} 場賽事`,
    icon: "i-lucide-swords",
    to: "/dashboard/games",
  },
  {
    title: "使用者數量",
    description: `目前系統內共有 ${userCount} 位使用者`,
    icon: "i-lucide-users-round",
    to: "/dashboard/users",
  },
  {
    title: "其餘功能",
    description: "正在製作中",
    icon: "i-lucide-clock-fading",
  },
])
</script>

<template>
  <UPageHeader title="管理列表" />
  <div class="p-4">
    <UPageGrid>
      <UPageCard v-for="(card, index) in cards" :key="index" v-bind="card" />
    </UPageGrid>
  </div>
</template>
