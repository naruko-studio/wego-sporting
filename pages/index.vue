<script lang="ts" setup>
import { authClient } from "~/auth-client"

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

const session = authClient.useSession()
const toast = useToast()
</script>

<template>
  <div class="flex gap-4">
    <UButton
      label="test"
      @click="
        () => {
          toast.add({ title: 'test' })
        }
      "
    />
    <UButton
      v-if="session.data"
      label="logout"
      @click="
        () => {
          authClient.signOut()
        }
      "
    />
    <UButton v-else label="login" to="/accounts/login" />
    <!--
      <UTimeline
      orientation="horizontal"
      :default-value="2"
      :items="items"
      class="w-full"
      />
      -->
  </div>
  <pre v-if="session.data">{{ session.data.user.role }}</pre>
  <pre>Lorem.</pre>
  <pre>Ut!</pre>
  <pre>Hic!</pre>
  <pre>Cumque.</pre>
  <pre>Ratione!</pre>
  <pre>Aperiam?</pre>
  <pre>Labore!</pre>
  <pre>Enim.</pre>
  <pre>Possimus?</pre>
  <pre>Fugit.</pre>
  <pre>Fugiat?</pre>
  <pre>Odit.</pre>
  <pre>Illum!</pre>
  <pre>Non.</pre>
  <pre>Maxime.</pre>
  <pre>Exercitationem.</pre>
  <pre>Atque?</pre>
  <pre>Molestiae.</pre>
  <pre>Eos!</pre>
  <pre>Quae.</pre>
  <pre>Iure!</pre>
  <pre>Ad?</pre>
  <pre>Reprehenderit.</pre>
  <pre>Porro.</pre>
  <pre>Et.</pre>
  <pre>Excepturi?</pre>
  <pre>Qui?</pre>
  <pre>Nesciunt?</pre>
  <pre>Corrupti!</pre>
  <pre>Laborum.</pre>
  <pre>Natus?</pre>
  <pre>Magni?</pre>
  <pre>Voluptatem!</pre>
  <pre>Ducimus.</pre>
  <pre>Consequuntur!</pre>
  <pre>Atque.</pre>
  <pre>Quos.</pre>
  <pre>Totam?</pre>
  <pre>Eligendi.</pre>
  <pre>Nihil.</pre>
  <pre>Repellendus?</pre>
  <pre>Animi?</pre>
  <pre>Facilis?</pre>
  <pre>Natus.</pre>
  <pre>Tenetur.</pre>
  <pre>Voluptate!</pre>
  <pre>Corporis!</pre>
  <pre>Dicta!</pre>
  <pre>Perferendis!</pre>
  <pre>Eligendi.</pre>
  <pre>Dignissimos.</pre>
  <pre>Nobis.</pre>
  <pre>Sit?</pre>
  <pre>Beatae?</pre>
  <pre>Minima!</pre>
  <pre>Eligendi?</pre>
  <pre>Quasi!</pre>
  <pre>Est.</pre>
  <pre>At.</pre>
  <pre>Velit.</pre>
  <pre>Incidunt.</pre>
  <pre>Sapiente.</pre>
  <pre>Temporibus.</pre>
  <pre>Harum.</pre>
  <pre>Facere.</pre>
  <pre>Quaerat!</pre>
  <pre>Delectus.</pre>
  <pre>Provident?</pre>
  <pre>Dicta.</pre>
  <pre>Consequatur?</pre>
  <pre>Enim.</pre>
  <pre>Perferendis!</pre>
  <pre>Fuga.</pre>
  <pre>Laborum.</pre>
  <pre>Sit!</pre>
  <pre>Veritatis!</pre>
  <pre>Sapiente!</pre>
  <pre>Illum?</pre>
  <pre>Saepe.</pre>
  <pre>Dolorem.</pre>
  <pre>Velit?</pre>
  <pre>Saepe.</pre>
  <pre>Ea.</pre>
  <pre>Minima!</pre>
  <pre>Sed!</pre>
  <pre>Quaerat!</pre>
  <pre>Eos.</pre>
  <pre>Nisi?</pre>
  <pre>Accusantium.</pre>
  <pre>Nisi.</pre>
  <pre>Iure!</pre>
  <pre>Nesciunt.</pre>
  <pre>Odit!</pre>
  <pre>Voluptatibus?</pre>
  <pre>Nesciunt.</pre>
  <pre>Exercitationem?</pre>
  <pre>Similique!</pre>
  <pre>Mollitia!</pre>
  <pre>Odit!</pre>
  <pre>Molestiae.</pre>
</template>
