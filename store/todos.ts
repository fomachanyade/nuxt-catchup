export type Todo = {
  text: string
  done: boolean
}
export type TodoState = {
  list: Todo[]
}

export const state = (): TodoState => ({
  list: [],
})

export const mutations = {
  add(state: TodoState, text: string) {
    state.list.push({
      text,
      done: false,
    })
  },
  remove(state: TodoState, todo: Todo) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state: TodoState, todo: Todo) {
    todo.done = !todo.done
  },
}
