<template>
  <div class="screen visible">
    <BaseHeader title="Envía plata" />
    <label class="label">Cel</label>
    <input v-model="store.cel" type="tel" placeholder="310 200 8563" />
    <div class="note">Revisa bien el número para enviarle a la persona correcta</div>
    <label class="label">¿Cuánto?</label>
    <input v-model="store.amount" type="text" placeholder="$" />
    <label class="label">Mensaje</label>
    <textarea v-model="store.message" placeholder="Mensaje"></textarea>
    <div class="label">Escoge de donde saldrá la plata</div>
    <PaymentCard />
    <div class="btn" @click="store.showConfirm()">Sigue</div>
  </div>
</template>
<script>
import { usePaymentStore } from '@/store/usePaymentStore'
import BaseHeader from '@/components/BaseHeader.vue'
import PaymentCard from '@/components/PaymentCard.vue'
export default {
  name: 'SendForm',
  components: { BaseHeader, PaymentCard },
  setup() {
    const store = usePaymentStore()
    return { store }
  }
}
</script>
