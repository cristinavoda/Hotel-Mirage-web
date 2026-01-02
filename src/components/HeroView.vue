<template>
  <section class="hero">
    <!-- VIDEO -->
    <video
      class="hero-video"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      poster="../assets/videos/mirage-hero-poster.jpg"
    >
      <source src="../assets/videos/mirage-hero.mp4" type="video/mp4" />
    </video>

    
    <div class="hero-overlay">
     
    </div>
  </section>
</template>

<script setup>
// por ahora no necesitamos JS
</script>

<style scoped>
.hero {
  position: relative;
  margin-top: 1rem;
  height: 100vh;
 
  overflow: hidden;
  background: white;
}

/* VIDEO */
.hero-video {
  width: 120%;
  height: 100%;
  object-fit: cover;
  margin-left: -10%;
  
}

/* OVERLAY SUAVE (lujo) */
.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.12); 
}


.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}


.line {
  width: 60px;
  height: 1px;
  background: var(--color-dark); 
}
.animate-zoom {
  animation: zoomIn 1.2s ease-out forwards;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(1.1);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@media (max-width: 768px) {
  .hero-title {
    padding: 0.5rem 1.2rem;
    gap: 0.8rem;
  }

  .line {
    width: 40px;
  }
}

</style>
