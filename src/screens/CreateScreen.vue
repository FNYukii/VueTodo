<script setup>
import { ref } from 'vue'
import { generateSampleTodoContent } from '../utils/form'
import { useRouter } from 'vue-router'
import { createTodo } from '../utils/storage'
import Link from '../parts/Link.vue'
import Button from '../parts/Button.vue'

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
      v-bind:placeholder="generateSampleTodoContent()"
      class="mt-8 outlined-textarea"
      autofocus
    />

    <div class="mt-8 flex justify-between">
      <Link to="/" title="戻る" />

      <Button
        title="作成"
        variant="filled"
        :disabled="content.length === 0"
        :onClick="handleCreate"
      />
    </div>
  </main>
</template>
