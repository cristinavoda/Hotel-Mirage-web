<template>
  <div class="home-view">

    
    <HeroVideo />

   
    <section class="intro">
      <h1>Bienvenido a Hotel Mirage</h1>
      <p>Alguna vez has soñado con despertar en un lugar donde la realidad supera la fantasía?
En Hotel Mirage, cada espacio invita a disfrutar, relajarse y desconectar. Desde nuestras habitaciones hasta el spa y la gastronomía, todo está pensado para que vivas una escapada inolvidable.
Descubre más y empieza a planificar tu próxima experiencia.</p>
    </section>

   
    <section class="highlights">
      <div class="highlight">
        <img src="../assets/images/piscina.jpg" alt="Piscina">
        <h3>Piscina Infinity</h3>
      </div>
      <div class="highlight">
        <img src="../assets/images/spa.jpg" alt="Spa">
        <h3>Spa & Bienestar</h3>
      </div>
      <div class="highlight">
        <img src="../assets/images/tapas.png" alt="Restaurante">
        <h3>Gastronomía Premium</h3>
      </div>
      <div class="highlight">
        <img src="../assets/images/vistas.jpg" alt="Vistas">
        <h3>Vistas Inigualables</h3>
      </div>
    </section>
    <section class="habitaciones">
      <div class="highlight">
        <img src="../assets/images/piscina.jpg" alt="Piscina">
        <h3>Piscina Infinity</h3>
      </div>
      <div class="highlight">
        <img src="../assets/images/spa.jpg" alt="Spa">
        <h3>Spa & Bienestar</h3>
      </div>
      <div class="highlight">
        <img src="../assets/images/tapas.png" alt="Restaurante">
        <h3>Gastronomía Premium</h3>
      </div>
      <div class="highlight">
        <img src="../assets/images/vistas.jpg" alt="Vistas">
        <h3>Vistas Inigualables</h3>
      </div>
    </section>

      <section class="contact-map">
        <h3>Ubicacion</h3>
      <iframe
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.3738847614263!2d1.1585751747757729!3d41.06081931618993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a159111b713a61%3A0xde1381cdf9cd2d9b!2sCala%20Penya%20Tallada!5e0!3m2!1ses!2ses!4v1767354838229!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      width="100%"
        height="350"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </section>
  </div>
</template>

<script setup>
import HeroVideo from '../components/HeroView.vue'
import BookingBar from '../components/BookingBar.vue'
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.intro {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.intro h1 {
   font-family: 'Playfair Display', serif;
  font-weight: 500;
  letter-spacing: 0.02em;
  font-size: clamp(2rem, 4vw, 3rem);
}



.intro p {
   max-width: 720px;
  line-height: 1.6;
  font-size: 1.05rem;
  letter-spacing: 0.01em;
}

.highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.highlight img {
  width: 100%;
  height: 450px;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.highlight img:hover {
  transform: scale(1.05);
}

.highlight h3 {
  text-align: center;
  margin-top: 0.8rem;
  color: var(--color-dark);
}
.contact-map {
  max-width: 1200px;
  margin: 0 auto;      
  padding: 0 1rem; 
}
</style>
