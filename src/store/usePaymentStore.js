import { defineStore } from 'pinia'

export const usePaymentStore = defineStore('payment', {
  state: () => ({
    cel: '',
    amount: '',
    message: '',
    modalOpen: false,
    loading: false,
    view: 'form',
  }),
  actions: {
    showConfirm() { this.modalOpen = true },
    hideConfirm() { this.modalOpen = false },
    async confirm() {
      this.modalOpen = false
      this.loading = true
      await new Promise(r => setTimeout(r, 1000))
      this.loading = false
      this.view = 'ticket'
    },
    reset() {
      this.cel = ''
      this.amount = ''
      this.message = ''
      this.view = 'form'
    },
  },
})
