<template>
  <div class="screen visible">
    <BaseHeader title="Detalle del movimiento" />
    <div class="share" @click="share()"></div>
    <div class="ticket-wrapper">
      <div class="zigzag-top"></div>
      <div class="ticket">
        <div class="illustration-bg"></div>
        <div class="content">
          <div class="status">¡Pago exitoso!</div>
          <div class="qr"></div>
          <div class="info-note">
            ¡Escanea este QR con Nequi para verificar tu pago al instante!
          </div>
          <div class="info-row">
            <div class="info-label">Para</div>
            <div class="info-value">Ros**** Ari**</div>
          </div>
          <div class="info-row">
            <div class="info-label">Conversación</div>
            <div class="info-value">{{ store.message }}</div>
          </div>
          <div class="info-row">
            <div class="info-label">¿Cuánto?</div>
            <div class="info-value">\${{ store.amount }}</div>
          </div>
          <div class="info-row">
            <div class="info-label">Número Nequi</div>
            <div class="info-value">{{ store.cel }}</div>
          </div>
          <div class="info-row">
            <div class="info-label">Fecha</div>
            <div class="info-value">{{ formattedDate }}</div>
          </div>
          <div class="info-row">
            <div class="info-label">Referencia</div>
            <div class="info-value">M5133104</div>
          </div>
          <div class="info-row">
            <div class="info-label">¿De dónde salió la plata?</div>
            <div class="info-value">Disponible</div>
          </div>
          <div class="problem">
            <a href="#">¿Algún problema con este movimiento?</a>
          </div>
          <a class="button" href="#" @click.prevent="store.reset()">Listo</a>
        </div>
      </div>
      <div class="zigzag-bottom"></div>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue'
import { usePaymentStore } from '@/store/usePaymentStore'
import BaseHeader from '@/components/BaseHeader.vue'
export default {
  name: 'TicketDetail',
  components: { BaseHeader },
  setup() {
    const store = usePaymentStore()
    const formattedDate = computed(() => {
      const now = new Date()
      return (
        now.toLocaleDateString('es-CO',{ day:'numeric', month:'long', year:'numeric' }) +
        ' a las ' +
        now.toLocaleTimeString('es-CO',{ hour:'2-digit', minute:'2-digit', hour12:true })
      )
    })
    const share = () => alert('Compartir')
    return { store, formattedDate, share }
  }
}
</script>
