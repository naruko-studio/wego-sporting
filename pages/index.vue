<script setup lang="ts">
import type { Game } from "~/types/game"

const { data, pending } = await useFetch<Game[]>("/api/game", {
  default: () => [],
})

const now = useNow()
const { getStatus, getCountdownText } = useGameStatus(now)
</script>

<template>
  <UPageGrid>
    <template v-if="pending">
      <USkeleton v-for="n in 6" :key="n" class="h-48 w-full rounded-lg" />
    </template>

    <template v-else-if="data.length === 0">
      <p>近期無賽事</p>
    </template>

    <template v-else>
      <UPageCard
        v-for="game in data"
        :key="game.id"
        :description="'@' + game.venue + '\n' + game.address"
        :to="`/info/${game.id}`"
        variant="soft"
        highlight
        :highlight-color="getStatus(game)"
        spotlight
        :spotlight-color="getStatus(game)"
        reverse
        :ui="{ description: 'text-[15px] whitespace-pre-wrap' }"
      >
        <template #title>{{ game.name }}</template>

        <template #description>
          @{{ game.venue + "\n地址：" + game.address }}
        </template>

        <template #footer>
          <p>{{ getCountdownText(game) }}</p>
          <p>
            賽事時間：
            {{
              new Date(game.gameStart).toLocaleDateString() ===
              new Date(game.gameEnd).toLocaleDateString()
                ? new Date(game.gameStart).toLocaleDateString("zh-TW", {
                    hour12: false,
                  }) +
                  " " +
                  new Date(game.gameStart).toLocaleTimeString("zh-TW", {
                    hour12: false,
                  }) +
                  " ~ " +
                  new Date(game.gameEnd).toLocaleTimeString("zh-TW", {
                    hour12: false,
                  })
                : new Date(game.gameStart).toLocaleString("zh-TW", {
                    hour12: false,
                  }) +
                  " ~ " +
                  new Date(game.gameEnd).toLocaleString("zh-TW", {
                    hour12: false,
                  })
            }}
          </p>
        </template>

        <template #default>
          <div class="flex w-full justify-center">
            <NuxtImg
              :src="
                game.image ||
                'https://api.iconify.design/lucide:code-xml.svg?color=%2338bdf8'
              "
              width="200"
              height="200"
              alt="測試圖片"
              class="block rounded-lg dark:hidden"
              loading="lazy"
            />
            <NuxtImg
              :src="
                game.image ||
                'https://api.iconify.design/lucide:code-xml.svg?color=%230ea5e9'
              "
              width="200"
              height="200"
              alt="測試圖片"
              class="hidden rounded-lg dark:block"
              loading="lazy"
            />
          </div>
        </template>
      </UPageCard>
    </template>
  </UPageGrid>
</template>
