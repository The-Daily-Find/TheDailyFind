import type { SignupTypes } from '@/models/types'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as SignupTypes[],
    currentUser: null as SignupTypes | null,
  }),
  actions: {
    signup(data: SignupTypes) {
      this.users.push(data)
    },
    login(email: string, password: string) {
      const found = this.users.find(
        user => user.email === email && user.password === password
      )
      if (found) {
        this.currentUser = found
        return true
      }
      return false
    },
    logout() {
      this.currentUser = null
    }
  },
  persist: true,
})