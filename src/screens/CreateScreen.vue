<script setup>
import { ref } from 'vue'
import { generateSampleTodoContent } from '../utils/form'

document.title = 'Todoの作成 - Vue Todo'

const content = ref('')
</script>

<template>
  <main>
    <div class="mt-8">
      <h1 class="text-2xl font-bold">Todoの作成</h1>
    </div>

    <textarea
      v-model="content"
      v-bind:placeholder="generateSampleTodoContent()"
      class="mt-8 outlined-textarea"
      autofocus
    />

    <div class="mt-8 flex justify-between">
      <RouterLink to="/" class="outlined-button"> 戻る </RouterLink>

      <button v-bind:disabled="content.length === 0" class="filled-button">
        作成
      </button>
    </div>
  </main>
</template>
