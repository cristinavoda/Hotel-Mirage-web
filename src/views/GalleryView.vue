<template>
  <div class="gallery-view">

    
    <section class="gallery-intro">
      <h1>Galería de Hotel Mirage</h1>
      <p>Explora nuestras instalaciones, habitaciones y experiencias exclusivas.</p>
    </section>

   
    <section class="gallery-grid">
      <div v-for="(image, index) in images" :key="index" class="gallery-item">
        <img :src="image.src" :alt="image.alt" />
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const images = ref([
  { src: '../images/piscina3.jpg', alt: 'Piscina exterior' },
  { src: '../images/lobby.jpg', alt: 'Lobby' },
  { src: '../images/suite3.jpg', alt: 'Habitación suite' },
  { src: '../images/spa3.jpg', alt: 'Spa' },
  { src: '../images/bar3.jpg', alt: 'Bar terraza' },
  { src: '../images/restaurante3.jpg', alt: 'Restaurante' },
])
</script>

<style scoped>
.gallery-intro {
  text-align: center;
  margin-bottom: 2rem;
}

.gallery-intro h1 {
  font-size: 2rem;
  color: var(--color-dark);
  margin-bottom: 0.5rem;
}

.gallery-intro p {
  font-size: 1rem;
  color: var(--color-text);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.gallery-item {
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 5px 8px 20px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}
</style>
