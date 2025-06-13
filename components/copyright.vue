<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    since?: number
    name?: string
    url?: string
    long?: boolean
  }>(),
  {
    since: new Date().getFullYear(),
    name: "example.com",
    url: "https://example.com",
    long: false,
  },
)
const current = new Date().getFullYear()
const year = props.since === current ? current : `${props.since} - ${current}`
</script>

<template>
  <span v-if="props.long">
    Copyright &copy; {{ year }}
    <ExternalLink :text="props.name" :url="props.url" />. All rights reserved.
  </span>
  <span v-else>
    &copy; {{ year }} <ExternalLink :text="props.name" :url="props.url"
  /></span>
</template>
