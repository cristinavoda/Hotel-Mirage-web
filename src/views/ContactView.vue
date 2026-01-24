<template>
  <div class="contact-view">

    <section class="contact-intro">
      <h1>Contacto</h1>
      <p>Estamos aquí para ayudarte. Escríbenos tus dudas o reservas especiales.</p>
    </section>

    
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
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Formulario enviado', form)
  alert('¡Gracias! Hemos recibido tu mensaje.')
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<style scoped>

.contact-intro {
  text-align: center;
  margin-bottom: 2rem;
}

.contact-intro h1 {
  font-size: 2rem;
  color: var(--color-dark);
  margin-bottom: 0.5rem;
}

.contact-intro p {
  font-size: 1rem;
  color: var(--color-text);
}

.contact-form {
  max-width: 600px;
  margin: 0 auto 3rem auto;
  
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
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
  padding: 0.5rem;
  border: 0.1px solid rgb(211, 202, 202);
  border-radius: px;
  font-size: 0.95rem;
  resize: none;
}

.btn {
   background: transparent; 
  color: black;
  border: 1px solid black;
  padding: 0.7rem 1.4rem;
  font-size: 0.85rem;
  cursor: pointer;
  
  align-self: flex-start;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #999a9b;
}
.contact-map iframe {
  width: 100%;
  height: 350px;
  border: 0;
  display: block;
}

.contact-map {
  width: 100%;
  aspect-ratio: 16 / 9;
}

.contact-map iframe {
  width: 100%;
  height: 100%;
  border: 0;
}
.contact-map iframe {
  touch-action: manipulation;
}

</style>
