<script setup lang="ts">
import Header from './parts/Header.vue'
</script>

<template>
  <div class="container max-w-[1024px] mx-auto px-4 pb-8">
    <Header />
    <RouterView />
  </div>
</template>
