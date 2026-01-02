<template>
  <section class="reservas-view">

    <header class="reservas-header">
      <h1>Planifica tu estancia</h1>
      <p class="subtitle">
        Consulta de disponibilidad · Proyecto conceptual
      </p>
    </header>

    <div class="reservas-card">

      <div class="resumen">
        <h3>Resumen de tu estancia</h3>

        <ul>
          <li><strong>Entrada:</strong> {{ booking.checkIn }}</li>
          <li><strong>Salida:</strong> {{ booking.checkOut }}</li>
          <li><strong>Huéspedes:</strong> {{ booking.guests }}</li>
        </ul>
      </div>

      <div class="habitacion">
        <h3>Tipo de habitación</h3>
        <select v-model="booking.room">
          <option>Habitación Doble</option>
          <option>Suite Mirage</option>
          <option>Suite Vista Mar</option>
        </select>
      </div>

      <button class="cta">
        Solicitar disponibilidad
      </button>

      <p class="disclaimer">
        * Simulación de reserva con fines demostrativos.
      </p>

    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const booking = reactive({
  checkIn: '12/08/2026',
  checkOut: '15/08/2026',
  guests: 2,
  room: 'Habitación Doble'
})
</script>
<style scoped>
.reservas-view {
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
}

.reservas-header {
  text-align: center;
  margin-bottom: 3rem;
}

.subtitle {
  opacity: 0.7;
}

.reservas-card {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.08);
}

.resumen ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0 2rem;
}

.resumen li {
  margin-bottom: 0.5rem;
}

select {
  width: 100%;
  padding: 0.75rem;
  border-radius: 0px;
  border: 1px solid #ddd;
}

.cta {
  margin-top: 2rem;
  width: 100%;
  padding: 0.6rem 1.4rem;
  background: transparent;
  color: rgb(27, 27, 27);
  border: rgb(214, 211, 211)  0.5px solid;
  border-radius: 0px;
  font-size: 1rem;
  cursor: pointer;
}

.disclaimer {
  margin-top: 1rem;
  font-size: 0.8rem;
  opacity: 0.6;
  text-align: center;
}

</style>