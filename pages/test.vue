<script lang="ts" setup>
import { authClient } from "~/auth-client"
const session = authClient.useSession()
</script>

<template>
  <pre class="p-4 whitespace-pre-wrap">{{ session.data }}</pre>
</template>
