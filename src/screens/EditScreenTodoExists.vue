<script setup lang="ts">
import type { Todo } from '../types/Todo'
import { ref } from 'vue'
import { deleteTodo, updateTodo } from '../utils/storage'
import { useRouter } from 'vue-router'
import { generateSampleTodoContent } from '../utils/form'

const props = defineProps<{
  todo: Todo
}>()

const router = useRouter()

const content = ref(props.todo.content)

const handleDelete = () => {
  if (!window.confirm('Todoを削除してもよろしいですか？')) return
  deleteTodo(props.todo.id)
  router.push('/')
}

const handleSave = () => {
  updateTodo(props.todo.id, content.value)
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
      :placeholder="generateSampleTodoContent()"
      class="mt-8 outlined-textarea"
    />

    <div class="mt-8 flex justify-between gap-8 items-start">
      <RouterLink to="/" class="outlined-button">戻る</RouterLink>

      <div class="flex gap-8 flex-wrap justify-end">
        <button @click="handleDelete" class="outlined-button">削除</button>

        <button
          :disabled="content.length === 0 || content.trim() === ''"
          @click="handleSave"
          class="filled-button"
        >
          保存
        </button>
      </div>
    </div>
  </main>
</template>
