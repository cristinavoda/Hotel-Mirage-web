<template>
  <div class="rooms-view">

    <section class="rooms-intro">
      <h1>Nuestras Habitaciones</h1>
      <p>Descubre la comodidad, el diseño y las vistas que harán tu estancia inolvidable.</p>
    </section>

    <section class="rooms-grid">
      <div
        v-for="room in rooms"
        :key="room.id"
        class="room-card"
      >
        <img :src="room.image" :alt="room.name" class="card-img"/>
        <div class="room-info">
          <h3>{{ room.name }}</h3>
          <p>{{ room.description }}</p>
          <router-link :to="`/habitaciones/${room.type}`" class="btn">
            Ver más
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const rooms = ref([
  {
    id: 1,
    name: 'Habitación doble, camas individuales',
    type: 'individual',
    description: 'Habitación para dos personas, con todas las comodidades.',
    image: '/images/habitacion.jpg'
  },
  {
    id: 2,
    name: 'Habitación Doble',
    type: 'doble',
    description: 'Espaciosa habitación para dos, perfecta para parejas o amigos.',
    image: '/images/habitacion2.jpg'
  },
  {
    id: 3,
    name: 'Suite',
    type: 'suite',
    description: 'Comodidad, espacio  y modernidad',
    image: '/images/suite2.jpg'
  },
   {
    id: 4,
    name: 'Suite luxe',
    type: 'suite',
    description: 'Lujo, espacio y vistas panorámicas, la experiencia definitiva.',
    image: '/images/suite3.png'
  }
])
</script>

<style scoped>
.rooms-intro {
  text-align: center;
  margin-bottom: 3rem;
}

.rooms-intro h1 {
  font-size: 2.2rem;
  margin-bottom: 0.8rem;
  color: var(--color-dark);
}

.rooms-intro p {
  color: var(--color-text);
  font-size: 1.1rem;
}

.rooms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.room-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 10px 10px 30px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.room-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
}

.room-card img {
  width: 100%;
  height: 450px;
  object-fit: cover;
}

.room-info {
  padding: 1rem;
}

.room-info h3 {
  margin-bottom: 0.5rem;
  color: var(--color-dark);
}

.room-info p {
  font-size: 0.9rem;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.room-info .btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: transparent;
  color: rgb(14, 13, 13);
  border: 1px solid black;
  text-decoration: none;
  transition: background 0.3s ease;
}

.room-info .btn:hover {
  background: #e9e9eb;
}
</style>
