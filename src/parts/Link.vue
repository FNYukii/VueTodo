<script setup lang="ts">
defineProps<{
  to: string
  title: string
}>()
</script>

<template>
  <RouterLink v-bind:to="to" class="outlined-button -my-2">{{
    title
  }}</RouterLink>
</template>
