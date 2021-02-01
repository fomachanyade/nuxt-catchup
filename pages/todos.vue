<template>
  <ul>
    <li v-for="todo in todos" :key="todo.text">
      <input
        data-testId="todo-checkbox"
        :checked="todo.done"
        @change="toggle(todo)"
        type="checkbox"
      />
      <span data-testId="todo-item" :class="{ done: todo.done }">{{
        todo.text
      }}</span>
    </li>
    <li>
      <input
        data-testId="todo-input"
        type="text"
        title="todo"
        name="todo"
        @keyup.enter="addTodo"
        placeholder="What needs to be done?"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { TodosStore } from '~/store'
import { Todo } from '~/store/todos'

export default Vue.extend({
  computed: {
    todos() {
      return TodosStore.todos
    },
  },
  methods: {
    addTodo(e: KeyboardEvent) {
      const target = e.target as HTMLInputElement
      TodosStore.addTodo(target.value)
      target.value = ''
    },
    toggle(todo: Todo) {
      TodosStore.toggleTodo(todo)
    },
  },
})
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
