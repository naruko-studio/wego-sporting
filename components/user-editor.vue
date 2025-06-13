<script lang="ts" setup>
const props = defineProps<{
  id: string
}>()
const id = props.id
console.log(id)
</script>

<template>
  <UModal>
    <slot />
  </UModal>
</template>
