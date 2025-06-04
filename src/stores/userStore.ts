import type { SignupTypes } from '@/models/types'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as SignupTypes[], 
  }),
  actions: {
    signup(data: SignupTypes) {
      this.users.push(data)
    },
  },
  persist: true,
})