<template>
  <div class="home-view">

    
    <HeroVideo />

   
    <section class="intro">
      <h1>Bienvenido a Hotel Mirage</h1>
      <p>Alguna vez has soñado con despertar en un lugar donde la realidad supera la fantasía?
En Hotel Mirage, cada espacio invita a disfrutar, relajarse y desconectar. Desde nuestras habitaciones hasta el spa y la gastronomía, todo está pensado para que vivas una escapada inolvidable.
Descubre más y empieza a planificar tu próxima experiencia.</p>
    </section>

 <hr class="section-divider" />

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

     <hr class="section-divider" />

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

<div class="highlight">
        <img src="../assets/images/suite1.png" alt="Vistas">
        <h3>Habitaciones de ensueño </h3>
      </div>


    </section>
    

 <hr class="section-divider" />

 <h1 class="contact-h1">Contacto</h1> 
 <section class="contact-form">
      <form @submit.prevent="handleSubmit">
        <div class="field">
          <label for="name">Nombre</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>

        <div class="field">
          <label for="email">Correo electrónico</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>

        <div class="field">
          <label for="message">Mensaje</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>

        <button type="submit" class="btn">Enviar</button>
      </form>
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
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

function handleSubmit() {
  console.log('Formulario enviado:', form.value)

  // reset opcional
  form.value = {
    name: '',
    email: '',
    message: ''
  }
}

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
.section-divider::before {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 1px;
  background: rgb(89, 90, 90);
  animation: moveLine 4s infinite alternate ease-in-out;
}

@keyframes moveLine {
  50% { transform: translateX(-10%); opacity: 0.8; }
  100% { transform: translateX(110%); opacity: 0.5; }
}
.contact-form {
  max-width: 600px;
  margin: 0 auto 3rem auto;
  
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
 .contact-h1 {
  font-size: 2rem;
  color: var(--color-dark);
 
  margin-top: 0.1rem;
}

.field {
  display: flex;
  flex-direction: column;
}

.field label {
  margin-bottom: 0.3rem;
  font-weight: 500;
  color: var(--color-dark);
}

.field input,
.field textarea {
  padding: 0.5rem 0.5rem;
  gap: 1rem;
  border: transparent;
  border-bottom: 0.1px solid rgb(170, 165, 165);
  font-size: 0.95rem;
  resize: none;
}

.btn {
   background: transparent; 
  color: black;
  border: 1px solid rgb(182, 180, 180);
  padding: 0.7rem 1.4rem;
  font-size: 0.85rem;
  cursor: pointer;
  
  align-self: flex-start;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #999a9b;
}


.contact-map {
  max-width: 1200px;
  margin: 0 auto;      
  padding: 0 1rem; 
}
</style>
