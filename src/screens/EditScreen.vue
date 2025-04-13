<script setup lang="ts">
import { ref } from 'vue'
import { generateSampleTodoContent } from '../utils/form'
import { useRoute, useRouter } from 'vue-router'
import { deleteTodo, readTodo, updateTodo } from '../utils/storage'
import Link from '../parts/Link.vue'
import Button from '../parts/Button.vue'

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

    <div class="mt-8 flex justify-between gap-8 items-start">
      <Link to="/" title="戻る" />

      <div class="flex gap-8 flex-wrap justify-end">
        <Button title="削除" variant="outlined" :onClick="handleDelete" />

        <Button
          title="保存"
          variant="filled"
          :disabled="content.length === 0"
          :onClick="handleSave"
        />
      </div>
    </div>
  </main>
</template>
