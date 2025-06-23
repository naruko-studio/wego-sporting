<script lang="ts" setup>
import { authClient } from "~/auth-client"
const session = authClient.useSession()
definePageMeta({
  alias: ["/tst"],
})
// import type { TimelineItem } from "@nuxt/ui"

// const items = ref<TimelineItem[]>([
//   {
//     date: "Mar 15, 2025",
//     title: "Project Kickoff",
//     description: "Kicked off the project with team alignment.",
//     icon: "i-lucide-rocket",
//   },
//   {
//     date: "Mar 22 2025",
//     title: "Design Phase",
//     description: "User research and design workshops.",
//     icon: "i-lucide-palette",
//   },
//   {
//     date: "Mar 29 2025",
//     title: "Development Sprint",
//     description: "Frontend and backend development.",
//     icon: "i-lucide-code",
//   },
//   {
//     date: "Apr 5 2025",
//     title: "Testing & Deployment",
//     description: "QA testing and performance optimization.",
//     icon: "i-lucide-check-circle",
//   },
// ])
</script>

<template>
  <NuxtTime :datetime="Date.now()" />
  <pre class="text-signup-end p-4 whitespace-pre-wrap">{{ session.data }}</pre>
  <!-- 
  <UTimeline
    orientation="horizontal"
    :default-value="2"
    :items="items"
    class="w-full"
  />
  -->
</template>
