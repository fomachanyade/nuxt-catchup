/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Todos from '~/store/todos'

let TodosStore: Todos
function initializeStores(store: Store<any>): void {
  TodosStore = getModule(Todos, store)
}

export { initializeStores, TodosStore }
