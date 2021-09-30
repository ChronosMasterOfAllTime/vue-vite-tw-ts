import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

// Create a new store instance.
const store: Store<State> = createStore({
  state() {
    return {
      count: 0,
    }
  },
  mutations: {
    INCREMENT_COUNT(state) {
      state.count++
    },
  },
})

export default store
