<script setup lang="ts">
import { useRoute } from 'vue-router'
import { readTodo } from '../utils/storage'
import type { Todo } from '../types/Todo'
import EditScreenTodoExists from './EditScreenTodoExists.vue'
import EditScreenTodoNotExists from './EditScreenTodoNotExists.vue'

document.title = 'Todoの編集 - Vue Todo'

const route = useRoute()

const id = route.params.id as string
const todo: Todo | null = readTodo(id)
</script>

<template>
  <EditScreenTodoNotExists v-if="todo === null" />
  <EditScreenTodoExists v-if="todo !== null" :todo="todo" />
</template>
