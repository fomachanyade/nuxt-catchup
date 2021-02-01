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
  private add(text: string) {
    this.list.push({
      text,
      done: false,
    })
  }

  @Mutation
  private remove(todo: Todo) {
    this.list.splice(this.list.indexOf(todo), 1)
  }

  @Mutation
  private toggle(todo: Todo) {
    todo.done = !todo.done
  }

  @Action({ rawError: true })
  public addTodo(text: string) {
    this.add(text)
  }

  @Action({ rawError: true })
  public toggleTodo(todo: Todo) {
    this.toggle(todo)
  }

  @Action({ rawError: true })
  public removeTodo(todo: Todo) {
    this.remove(todo)
  }
}
