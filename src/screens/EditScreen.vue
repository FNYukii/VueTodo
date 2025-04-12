<script setup lang="ts">
import { ref } from 'vue'
import { generateSampleTodoContent } from '../utils/form'
import { useRoute, useRouter } from 'vue-router'
import { deleteTodo, readTodo, updateTodo } from '../utils/storage'

document.title = 'Todoの編集 - Vue Todo'

const content = ref('')

const route = useRoute()
const router = useRouter()

const id = route.params.id as string
const todo = readTodo(id)
content.value = todo?.content ?? ''

const handleDelete = () => {
  if (!window.confirm('Todoを削除してもよろしいですか？')) return
  deleteTodo(id)
  router.push('/')
}

const handleSave = () => {
  updateTodo(id, content.value)
  router.push('/')
}
</script>

<template>
  <main>
    <div class="mt-8">
      <h1 class="text-2xl font-bold">Todoの編集</h1>
    </div>

    <textarea
      v-model="content"
      v-bind:placeholder="generateSampleTodoContent()"
      class="mt-8 outlined-textarea"
    />

    <div class="mt-8 flex justify-between items-start">
      <RouterLink to="/" class="outlined-button"> 戻る </RouterLink>

      <div class="flex gap-8 flex-wrap justify-end">
        <button @click="handleDelete" class="outlined-button">削除</button>

        <button
          @click="handleSave"
          v-bind:disabled="content.length === 0"
          class="filled-button"
        >
          保存
        </button>
      </div>
    </div>
  </main>
</template>
