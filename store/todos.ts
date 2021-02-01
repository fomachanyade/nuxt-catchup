import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

export type Todo = {
  text: string
  done: boolean
}

export type TodoState = {
  list: Todo[]
}
@Module({
  name: 'todos',
  stateFactory: true,
  namespaced: true,
})
export default class TodosModule extends VuexModule {
  private list: Todo[] = []

  public get todos() {
    return this.list
  }

  @Mutation
  public add(text: string) {
    this.list.push({
      text,
      done: false,
    })
  }

  @Mutation
  public remove(todo: Todo) {
    this.list.splice(this.list.indexOf(todo), 1)
  }

  @Mutation
  public toggle(todo: Todo) {
    todo.done = !todo.done
  }
}
