import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

// Create a new store instance.
const store: Store<State> = createStore({
  state() {
    return {
      count: 0
    }
  },
  getters: {
    count({ count }) {
      return count
    }
  },
  mutations: {
    INCREMENT_COUNT(state, n: number) {
      state.count += n
    }
  },
  actions: {
    increment(store, n = 1) {
      store.commit('INCREMENT_COUNT', n)
    }
  }
})

// define your own `useStateStore` composition function
export function useStateStore() {
  return baseUseStore(key)
}

export default store
