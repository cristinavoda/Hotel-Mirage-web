<template>
  <section class="experience-view">
    <header class="experience-header">
      <h1>Experiencias Mirage</h1>
      <p>Momentos pensados para desconectar, sentir y disfrutar</p>
    </header>

   
      <article
        v-for="exp in experiences"
        :key="exp.id"
        class="experience-card"
      >
        <img :src="exp.image" :alt="exp.title" />
        <div class="experience-content">
          <h2>{{ exp.title }}</h2>
          <p>{{ exp.description }}</p>
        </div>
      </article>
   
  </section>
</template>

<script setup>
const experiences = [
  {
    id: 1,
    title: 'Spa & Wellness',
    description: 'Rituales de relajación con vistas al mar.',
    image: '../images/experiences/spa2.jpg'
  },
  {
    id: 2,
    title: 'Gastronomía',
    description: 'Cocina mediterránea con producto local.',
    image: '../images/experiences/restaurante.png'
  },
  {
    id: 3,
    title: 'Piscina & Rooftop',
    description: 'Atardeceres únicos en nuestra terraza.',
    image: '../images/experiences/piscina2.jpg'
  },
  {
    id: 4,
    title: 'Fitness & Yoga',
    description: 'Entrena cuerpo y mente en un entorno premium.',
    image: '../images/experiences/gym.jpg'
  }
]
</script>

<style scoped>
.experience-view {
  padding: 4rem 1.5rem;
  background: #fff;
}

.experience-header {
  text-align: center;
  margin-bottom: 3rem;
}

.experience-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.experience-header p {
  color: #555;
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.experience-card {
  overflow: hidden;
  border-radius: 12px;
  background: #f8f8f8;
  transition: transform 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-6px);
}

.experience-card img {
  width: 100%;
  height: 550px;
  object-fit: cover;
}

.experience-content {
  padding: 1.5rem;
}
</style>
