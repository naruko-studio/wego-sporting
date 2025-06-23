<script lang="ts" setup>
import type { TimelineItem } from "@nuxt/ui"
import type { Game } from "~/types/game"
const route = useRoute()
const id = route.params.id

const { data } = await useFetch<Game[]>(`/api/game?id=${id}`)

const schedule = ref<TimelineItem[]>([
  {
    title: "尚未開放報名",
  },
  {
    date: data?.value.signupStart,
    title: "報名開始",
  },
  {
    date: data?.value.signupEnd,
    title: "報名截止",
  },
  {
    date: data?.value.gameStart,
    title: "賽事進行中",
  },
  {
    date: data?.value.gameEnd,
    title: "賽事已完結",
  },
])
const now = useNow()
const stage = ref(0)

watchEffect(() => {
  if (!data?.value) return

  const game = data?.value

  schedule.value = [
    { date: game.signupStart, title: "報名開始" },
    { date: game.signupEnd, title: "報名截止" },
    { date: game.gameStart, title: "賽事進行中" },
    { date: game.gameEnd, title: "賽事已完結" },
  ]

  const current = now.value
  const signupStart = new Date(game.signupStart).getTime()
  const signupEnd = new Date(game.signupEnd).getTime()
  const gameStart = new Date(game.gameStart).getTime()
  const gameEnd = new Date(game.gameEnd).getTime()

  if (current < signupStart) {
    stage.value = 0
  } else if (current < signupEnd) {
    stage.value = 1
  } else if (current < gameStart) {
    stage.value = 1
  } else if (current < gameEnd) {
    stage.value = 2
  } else {
    stage.value = 3
  }
})
</script>

<template>
  <div>{{ id }}</div>
  <div class="whitespace-pre-wrap">{{ data }}</div>
  <UTimeline
    orientation="horizontal"
    :default-value="stage"
    :items="schedule"
  />
  {{ stage }}
</template>
