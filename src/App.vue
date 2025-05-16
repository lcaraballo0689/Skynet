<template>
  <SendForm v-if="store.view === 'form'" />
  <TicketDetail v-if="store.view === 'ticket'" />
  <ConfirmModal :open="store.modalOpen" />
  <LoaderOverlay :active="store.loading" />
</template>
<script>
import { usePaymentStore } from '@/store/usePaymentStore'
import SendForm from '@/views/SendForm.vue'
import TicketDetail from '@/views/TicketDetail.vue'
import ConfirmModal from '@/components/ConfirmModal.vue'
import LoaderOverlay from '@/components/LoaderOverlay.vue'

export default {
  name: 'App',
  components: { SendForm, TicketDetail, ConfirmModal, LoaderOverlay },
  setup() {
    const store = usePaymentStore()
    return { store }
  }
}
</script>
