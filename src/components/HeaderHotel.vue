<template>
  <header class="header">
    <div class="header-container">

     
      <div class="header-brand">
        <span class="brand-hotel">Hotel</span>
        <span class="brand-mirage">
  <span>M</span><span>i</span><span>r</span><span>a</span><span>g</span><span>e</span>
</span>

        <span class="stars">★★★★★</span>
      </div>

      
      <div class="header-info">
        <span class="location">Bellavista</span>
        <span class="separator">·</span>
        <a href="tel:+34900000000" class="phone">+34 900 000 000</a>
    <span class="location">
  <svg class="icon-pin" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/>
  </svg>

   
  <a href="https://maps.app.goo.gl/KMNKUquv6P66Hq497" target="_blank">View map</a>
</span>
    

      </div>

      
      <div class="header-cta">
        <button class="btn-reserve">Reservar</button>
      </div>

    </div>
    <div class="line-separator"></div> 
  </header>
</template>

<script setup>

</script>

<style scoped>

.header {
  position: sticky;
   margin-top: 8px;
  width: 100%;
  z-index: 10;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(6px);
  border-bottom: 2px solid rgba(1, 1, 2, 0.05);
}


.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
   
}


.header-brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.brand-hotel {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #111;
}
.brand-mirage {
  display: inline-flex;
  white-space: nowrap;
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 500;
  color:#4b4747;
  text-shadow: #143dc2 1px 1px 2px;
  letter-spacing: 0.05em;
}
.brand-mirage span {
  display: inline-block;
}

.brand-mirage span:nth-child(2) {
  transform: translateY(-2px);
}

.brand-mirage span:nth-child(4) {
  transform: translateY(2px);
}

.brand-mirage span:nth-child(6) {
  transform: translateY(-1px);
}
.stars {
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  color: var(--color-dark);
}


.header-info {
  justify-self: center;
  font-size: 0.9rem;
  color: #555;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border-bottom: 2px solid rgba(0,0,0,0.05);
}

.header-info a {
  color: inherit;
  text-decoration: none;
  gap:3rem;
}
.icon-pin {
  width: 16px;
  height: 16px;
  fill: currentColor;
  margin-right: 6px;
  opacity: 0.7;
  color:#0e0eec;
  
}

.map {
  margin-left: auto;
}



.header-cta {
  justify-self: end;
}

.btn-reserve {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 0.6rem 1.4rem;
  font-size: 0.9rem;
  cursor: pointer;
   
  transition: background var(--transition-soft);
}

.btn-reserve:hover {
   
  background: transparent; 
  color: black;
  border: none;
  background-color: #e2dfdf;
  padding: 0.5rem 1rem;
  font-size: 0.89rem;
  cursor: pointer;
  margin-right: 99px;
}
 .line-separator {
  width: 99%;
  height: 0.4px;
  color:#2c2b2b;
 }
@media (max-width: 768px) {
  .header-container {
    grid-template-columns: 1fr auto;
  }

  .header-info {
    display: none;
  }

  .brand-name {
    font-size: 0.8rem;
  }
   .brand-mirage span {
    display: inline;
  }
  .line-separator {
    color: transparent;
  }
  .btn-reserve {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 0.3rem 1rem;
  margin-left: 76px;
  font-size: 0.7rem;
  cursor: pointer;
   
  transition: background var(--transition-soft);
}
}
</style>
