<template>
  <ul>
    <li v-for="todo in todos" :key="todo.text">
      <input data-testId='todo-checkbox' :checked="todo.done" @change="toggle(todo)" type="checkbox">
      <span data-testId='todo-item' :class="{ done: todo.done}">{{ todo.text }}</span>
    </li>
    <li><input data-testId='todo-input' type="text"  title='todo' name='todo'  @keyup.enter="addTodo" placeholder="What needs to be done?"></li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo (e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>