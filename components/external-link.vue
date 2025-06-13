<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    text?: string
    url?: string
    alternate?: boolean
    author?: boolean
    bookmark?: boolean
    external?: boolean
    help?: boolean
    license?: boolean
    next?: boolean
    nofollow?: boolean
    noopener?: boolean
    noreferrer?: boolean
    prev?: boolean
    search?: boolean
    tag?: boolean
  }>(),
  {
    text: "External Link",
    url: "https://example.com",
  },
)

const relList = [
  "noopener",
  "noreferrer",
  props.alternate && "alternate",
  props.author && "author",
  props.bookmark && "bookmark",
  props.external && "external",
  props.help && "help",
  props.license && "license",
  props.next && "next",
  props.nofollow && "nofollow",
  props.prev && "prev",
  props.search && "search",
  props.tag && "tag",
].filter(Boolean)

const rel = relList.join(" ")
</script>

<template>
  <a :href="props.url" target="_blank" :rel="rel">
    {{ props.text }}
  </a>
</template>
