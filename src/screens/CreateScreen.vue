<script setup>
import { ref } from 'vue'

const content = ref('')
</script>

<template>
  <main>
    <div className="mt-8">
      <h1 className="text-2xl font-bold">Todoの作成</h1>
    </div>

    <textarea
      v-model="content"
      placeholder="新しいTodo"
      class="mt-8 outlined-textarea"
    />

    <div className="mt-8   flex justify-between">
      <RouterLink to="/" className="outlined-button"> 戻る </RouterLink>

      <button v-bind:disabled="content.length === 0" className="filled-button">
        作成
      </button>
    </div>
  </main>
</template>
