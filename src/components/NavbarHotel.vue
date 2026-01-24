<template>
  <nav :class="['navbar', { sticky: isSticky }]">

    <!-- HAMBURGER -->
    <div class="hamburger" @click="toggleMenu">
      <span :class="['bar', { open: isOpen }]"></span>
      <span :class="['bar', { open: isOpen }]"></span>
      <span :class="['bar', { open: isOpen }]"></span>
    </div>

    <!-- MENU -->
    <ul :class="['nav-list', { open: isOpen }]">
      <li class="nav-item">
        <router-link to="/" @click="closeMenu" class="nav-link">
          Inicio
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/habitaciones" @click="closeMenu" class="nav-link">
          Habitaciones
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/experiencias" @click="closeMenu" class="nav-link">
          Experiencias
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/galeria" @click="closeMenu" class="nav-link">
          Galería
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/contacto" @click="closeMenu" class="nav-link">
          Contacto
        </router-link>
      </li>
    </ul>

    <div class="line-separator"></div>
  </nav>
</template>



<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const isSticky = ref(false)

const handleScroll = () => {
  isSticky.value = window.scrollY > 80
}

const route = useRoute()


const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
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
   position: relative;
  background: rgba(255,255,255,0.95);
  transition: all 0.3s ease;
   text-decoration: none;
  z-index: 200;
align-items: center;
}
.navbar.sticky {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
}
.nav-list {
  justify-content: center;
  max-width: 1200px;
  padding: 0.8rem 0.5rem;
  display: flex;
  gap: 2.5rem;
  list-style: none;
  text-decoration: none;
}

.nav-link {
  position: relative;
  font-family:  system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.7rem;
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
  bottom: 1px;
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
  transform: scaleX(1.1);
}

.router-link-active {
  color: #24222c;
  border-bottom: 1px solid #110436;
  font-family: system-ui, -apple-system, BlinkMacSystemFont,
               'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}
.line-separator {
  width: 99%;
  height: 0.5px;
  margin: 1rem auto;
  background: linear-gradient(90deg, rgb(92, 94, 95), #eeeded);
  background-size: 250% 250%;}


 .hamburger {
  display: none;
  flex-direction: column;
  margin-right: 2rem;
  gap: 5px;
  cursor: pointer;
  color: #889191;
}
.hamburger span {
  width: 25px;
  height: 3px;
  background-color: currentColor;
  border-radius: 2px;
  color: #889191;
}
.bar {
  width: 25px;
  color: #949b9b;
  background-color: #e7ecec;
  box-shadow: 1px 1px  #f5f7f7;
  transition: all 0.3s ease;
  margin-right: 3rem;
}

.bar.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.bar.open:nth-child(2) {
  opacity: 1;
}
.bar.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: all 0.4s ease;
}
.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: point5r;
  z-index: 1001;
}

.bar {
  width: 26px;
  height: 3px;
  background: #1c067a;
  transition: all 0.3s ease;
}


.bar.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.bar.open:nth-child(2) {
  opacity: 0;
}
.bar.open:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}


@media (max-width: 768px) {
  nav {
  position: relative;
  height: fit-content ;
}

  .hamburger {
    display:flex;
    position: absolute;
    margin-top: -46px;
     right: -50px;
     
  }

  .nav-list {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 100%;
    background: white;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    transition: right 0.3s ease;
  }

  .nav-list.open {
    right: 0;
  }
}

 
</style>