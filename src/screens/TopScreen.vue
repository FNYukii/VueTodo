<script setup>
const SAMPLE_TODOS = [
  {
    id: 'aaa',
    content: '買い物',
  },
  {
    id: 'bbb',
    content: '洗濯',
  },
]
</script>

<template>
  <main>
    <div class="mt-8 flex justify-between items-center">
      <h1 class="text-2xl font-bold">Todos</h1>

      <RouterLink to="/new" class="outlined-button -my-2">新規Todo</RouterLink>
    </div>

    <div class="mt-8">
      <p v-if="SAMPLE_TODOS.length === 0" class="text-secondary">
        Todoがありません
      </p>

      <div
        v-if="SAMPLE_TODOS.length !== 0"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        <RouterLink
          v-for="todo in SAMPLE_TODOS"
          v-bind:to="'/todos/' + todo.id"
          class="p-4 border border-iron transition outline-none hover:bg-iron-pale focus:bg-iron-pale active:bg-iron-pale"
        >
          <p class="whitespace-pre">{{ todo.content }}</p>
        </RouterLink>
      </div>
    </div>
  </main>
</template>
