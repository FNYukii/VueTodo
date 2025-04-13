<script setup>
import Header from './parts/Header.vue'
import TopScreen from './screens/TopScreen.vue'
</script>

<template>
  <div class="container max-w-[1024px] mx-auto px-4">
    <Header />
    <RouterView />
  </div>
</template>
