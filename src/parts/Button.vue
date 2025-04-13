<script setup lang="ts">
defineProps<{
  title: string
  variant: 'filled' | 'outlined'
  disabled?: boolean
  onClick: () => void
}>()
</script>

<template>
  <button
    @click="onClick"
    v-bind:disabled="disabled"
    v-bind:class="variant === 'filled' ? 'filled-button' : 'outlined-button'"
  >
    {{ title }}
  </button>
</template>
