<template>
  <HeaderHotel />
  <NavbarHotel />
  <BookingBar />

  <router-view />

  <FooterHotel />
  
</template>

<script setup>
import HeaderHotel from './components/HeaderHotel.vue'
import NavbarHotel from './components/NavbarHotel.vue'
import FooterHotel from './components/FooterHotel.vue'
import BookingBar from './components/BookingBar.vue';
</script>
