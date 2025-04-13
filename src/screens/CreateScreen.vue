<script setup lang="ts">
import { ref } from 'vue'
import { generateSampleTodoContent } from '../utils/form'
import { useRouter } from 'vue-router'
import { createTodo } from '../utils/storage'

document.title = 'Todoの作成 - Vue Todo'

const content = ref('')
const router = useRouter()

const handleCreate = () => {
  createTodo(content.value)
  router.push('/')
}
</script>

<template>
  <main>
    <div class="mt-8">
      <h1 class="text-2xl font-bold">Todoの作成</h1>
    </div>

    <textarea
      v-model="content"
      :placeholder="generateSampleTodoContent()"
      class="mt-8 outlined-textarea"
      autofocus
    />

    <div class="mt-8 flex justify-between">
      <RouterLink to="/" class="outlined-button">戻る</RouterLink>

      <button
        :disabled="content.length === 0 || content.trim() === ''"
        @click="handleCreate"
        class="filled-button"
      >
        作成
      </button>
    </div>
  </main>
</template>
