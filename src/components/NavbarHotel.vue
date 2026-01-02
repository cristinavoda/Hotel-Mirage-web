<template>
  <nav class="['navbar', { sticky: isSticky }]">
    <ul class="nav-list"> 

      <li class="nav-item active">
        <router-link to="/" class="nav-link">
          Inicio
        </router-link>
      </li>

      <li class="nav-item "> <router-link to="/habitaciones" class="nav-link"> Habitaciones</router-link>
        
      </li>

      <li class="nav-item">
        <router-link to="/experiencias" class="nav-link">
          Experencias
        </router-link>
      </li>

      <li class="nav-item"><router-link to="/galeria" class="nav-link">
          Galeria
        </router-link></li>
      
 <li class="nav-item">
  <router-link to="/contacto" class="nav-link">
    Contacto
  </router-link>
</li>

</ul>
 <div class="line-separator"></div> 
  </nav>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isSticky = ref(false)

const handleScroll = () => {
  isSticky.value = window.scrollY > 80
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  background: rgba(255,255,255,0.95);
  transition: all 0.3s ease;
   text-decoration: none;
  z-index: 200;
align-items: center;
}
.navbar.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
}
.nav-list {
  justify-content: center;
  max-width: 1200px;
  margin-top:80px;
  padding: 0.8rem 1.5rem;
  display: flex;
  gap: 2.5rem;
  list-style: none;
  text-decoration: none;
}

.nav-link {
  position: relative;
  font-size: 0.95rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  color: #111010;
  text-decoration: none;
  list-style: none;
  padding: 0.25rem 0;
  transition: color 0.3s ease;
  
}


.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 2px;
  background-color: #110436; 
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s ease;
}


.nav-link:hover {
  color: #341b74;
}

.nav-link:hover::after {
  transform: scaleX(1);
}


.router-link-active::after {
  transform: scaleX(1.2);
}

.router-link-active {
  color: #24222c;
  border-bottom: 1px solid #110436;
}
.line-separator {
  width: 100%;
  height: 0.5px;
  margin: 1rem auto;
  background: linear-gradient(90deg, rgb(150, 153, 155), #ffffff);
  background-size: 250% 250%;}


 
 
</style>
