import type { ProductTypes } from '@/models/types'
import { defineStore } from 'pinia'

type productStoreTypes = {
  products: ProductTypes[]
  loading: boolean
  errorMsg: string | null
}

export const useProductStore = defineStore('productStore', {
  state: (): productStoreTypes => ({
    products: [],
    loading: false,
    errorMsg: null,
  }),
  getters: {
    getProducts: (state) => state.products,
    getLoading: (state) => state.loading,
    getErrorMsg: (state) => state.errorMsg,
  },
  actions: {
    setProducts(newVal: ProductTypes[]) {
      this.products = newVal
    },
    setLoading(val: boolean) {
      this.loading = val
    },
    setErrorMsg(message: string | null) {
      this.errorMsg = message
    },
  },
})
