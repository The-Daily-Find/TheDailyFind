import type { ProductTypes } from '@/models/types'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    items: [] as ProductTypes[],
    drawerVisible: false,
  }),
  actions: {
    addToCart(product: ProductTypes) {
      this.items.push(product)
    },
    removeFromCart(index: number) {
      this.items.splice(index, 1)
    },
    toggleDrawer(val?: boolean) {
      this.drawerVisible = val !== undefined ? val : !this.drawerVisible
    },
  },
})