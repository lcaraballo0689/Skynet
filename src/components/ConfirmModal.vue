<template>
  <div :class="['confirm-box', { active: open }]">
    <h3>Confirma el número</h3>
    <p>Vas a enviar a:<br><strong>Ros**** Ari**</strong></p>
    <p>Al número de celular:<br><strong>{{ store.cel }}</strong></p>
    <p>¿Cuánto?<br><strong>\${{ store.amount }}</strong></p>
    <p>Mensaje:<br><strong>{{ store.message }}</strong></p>
    <p>La plata saldrá de:<br><strong>Disponible</strong></p>
    <div class="btn" @click="onConfirm">Confirma</div>
    <div class="btn outline" @click="store.hideConfirm()">Corrige algo</div>
  </div>
</template>
<script>
import { usePaymentStore } from '@/store/usePaymentStore'
export default {
  name: 'ConfirmModal',
  props: { open: Boolean },
  setup() {
    const store = usePaymentStore()
    const onConfirm = () => store.confirm()
    return { store, onConfirm }
  }
}
</script>
