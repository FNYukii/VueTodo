<script setup>
import { ref } from 'vue'
import { generateSampleTodoContent } from '../utils/form'

document.title = 'Todoの編集 - Vue Todo'

const content = ref('')
</script>

<template>
  <main>
    <div className="mt-8">
      <h1 className="text-2xl font-bold">Todoの作成</h1>
    </div>

    <textarea
      v-model="content"
      v-bind:placeholder="generateSampleTodoContent()"
      class="mt-8 outlined-textarea"
    />

    <div className="mt-8   flex justify-between items-start">
      <RouterLink to="/" className="outlined-button"> 戻る </RouterLink>

      <div className="flex gap-8   flex-wrap justify-end">
        <button onClick="{handleDelete}" className="outlined-button">
          削除
        </button>

        <button
          v-bind:disabled="content.length === 0"
          className="filled-button"
        >
          保存
        </button>
      </div>
    </div>
  </main>
</template>
