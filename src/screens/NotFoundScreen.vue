<script setup lang="ts">
document.title = 'Not found - Vue Todo'
</script>

<template>
  <main>
    <div class="mt-8">
      <h1 class="text-2xl font-bold">Page not found</h1>
    </div>

    <p class="mt-8 text-secondary">ページが見つかりませんでした</p>

    <div class="mt-8 flex justify-between">
      <RouterLink to="/" class="outlined-button">戻る</RouterLink>
    </div>
  </main>
</template>
