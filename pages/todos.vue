<template>
  <ul>
    <li v-for="todo in todos" :key="todo.text">
      <input :checked="todo.done" @change="toggle(todo)" type="checkbox">
      <span :class="{ done: todo.done, todoitem:true}">{{ todo.text }}</span>
    </li>
    <li><input type="text" id='todo-input' title='todo' name='todo'  @keyup.enter="addTodo" placeholder="What needs to be done?"></li>
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
    // toggle (todo) {
    //   this.$store.commit('todos/toggle', todo)
    // },
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>