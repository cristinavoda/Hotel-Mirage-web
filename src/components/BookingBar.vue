<template>
  <div
    ref="bookingBar"
    :class="['booking-bar', { sticky: isSticky }]"
  >
    <div class="booking-inner">
      <div class="field">
        <label>Check-in</label>
        <input type="date" />
      </div>

      <div class="field">
        <label>Check-out</label>
        <input type="date" />
      </div>

      <div class="field">
        <label>Personas</label>
        <select>
          <option>1 adulto</option>
          <option>2 adultos</option>
          <option>Familia</option>
        </select>
      </div>
<router-link to="/reservas" class="booking-btn">
Reservar
</router-link>

      
    </div>
  </div>
  <div class="line-separator"></div> 
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isSticky = ref(false)
const navbarHeight = 64 

const handleScroll = () => {
  isSticky.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>


<style scoped>
 .booking-bar {
  width: 100%;
  background: white;
  transition: all 0.3s ease;
  z-index: 100;
}

.booking-bar.sticky {
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 10px 30px rgba(0,0,0,0.012);
}

.booking-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
}
.booking-btn {
  background: transparent; 
  color: black;
  border: 0.5px solid rgb(179, 175, 175);
  padding: 0.5rem 1.4rem;
  font-size: 0.65rem;
  text-decoration: none;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: auto;
  background: transparent; 
  color: black;
  border: 1px solid rgb(179, 175, 175);
   text-decoration: none;
  padding: 0.5rem 1.4rem;
  font-size: 0.85rem;
  cursor: pointer;
   transition: all 0.3s ease;
}
.booking-btn:hover {
  background: rgba(0,0,0,0.04);
  border-color: #0b1e70;   
  color: #0d0b85;
}
.field {
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
}

.field input,
.field select {
  border: 1px solid #d1cece;
  padding: 0.4rem 0.6rem;
  font-size: 0.85rem;
}

.cta {
  margin-left: auto;
  background: transparent; 
  color: black;
  border: 1px solid rgb(179, 175, 175);
  padding: 0.6rem 1.4rem;
  font-size: 0.85rem;
  cursor: pointer;
}
 .line-separator {
  width: 100%;
  height: 0.5px;
  margin: 0.5rem auto;
  color: #575353;
  background: linear-gradient(50deg, rgb(159, 162, 163), #555353);
  }


.booking-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: flex-end;
  gap: 1.2rem;
}

@media (max-width: 768px) {

  .booking-inner {
    flex-wrap: wrap;
    gap: 0.6rem;
    padding: 0.6rem;
  }

  
  .field {
    width: 48%;
  }

  .field label {
    font-size: 0.7rem;
  }

  .field input,
  .field select {
    width: 100%;
    padding: 0.4rem;
    font-size: 0.85rem;
  }

  
  .booking-btn {
    width: 100%;
    margin-left: 0;
    text-align: center;
    padding: 0.6rem;
    font-size: 0.9rem;
  }
}

   
</style>