<script setup>
import Link from '../parts/Link.vue'
</script>

<template>
  <main>
    <div class="mt-8">
      <h1 class="text-2xl font-bold">Todo not found</h1>
    </div>

    <p class="mt-8 text-secondary">Todoが見つかりませんでした</p>

    <div class="mt-8 flex justify-between">
      <Link to="/" title="戻る" />
    </div>
  </main>
</template>
