import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useMainStore = defineStore('main', {
  state: () => {
    return {
      counter: 0
    }
  },
  getters: {
    count: ({ counter }) => counter
  },
  actions: {
    incrementCounter(count: number) {
      this.counter += count
    }
  }
})
