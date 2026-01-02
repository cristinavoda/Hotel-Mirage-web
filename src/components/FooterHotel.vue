<template>
  <footer class="footer">
    <div class="footer-container">

     
      <div class="footer-brand">
        <h3>Hotel Mirage</h3>
        <p>
          Hotel boutique frente al mar.<br />
          Lujo, calma y experiencias únicas.
        </p>
      </div>

      
      <div class="footer-block">
        <h4>Contacto</h4>
        <ul>
          <li>Bellavista, España</li>
          <li>+34 900 000 000</li>
          <li>info@hotelmirage.com</li>
         

        </ul>
      </div>

      
      <div class="footer-block">
        <h4>Hotel</h4>
        <ul>
          <li><a href="#">Habitaciones</a></li>
          <li><a href="#">Experiencias</a></li>
          <li><a href="#">Spa & Wellness</a></li>
          <li><a href="#">Ofertas</a></li>
        </ul>
      </div>

    </div>

    
    <div class="footer-bottom">
      <p>© 2025 Hotel Mirage · Proyecto conceptual-Cristina Voda</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-light);
  color: var(--color-text);
  border-top: 1px solid #1d1818;
}


.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.1rem 1rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
}


.footer-brand h3 {
  font-family: var(--font-title);
  font-size: 1.6rem;
  margin-bottom: 0.9rem;
  text-shadow: 1px 1px 1px white;
}

.footer-brand p {
  color: #555;
  line-height: 1.6;
  max-width: 320px;
   margin-bottom: 0.1rem;
   text-shadow: 1px 1px 1px white;
}


.footer-block h4 {
  font-size: 0.95rem;
  margin-bottom: 0.1rem;
  color: var(--color-dark);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.footer-block ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-block li {
  margin-bottom: 0.1rem;
  font-size: 0.95rem;
  color: #555;
}

.footer-block a {
  text-decoration: none;
  color: inherit;
  transition: color var(--transition-soft);
}

.footer-block a:hover {
  color: var(--color-primary);
}


.footer-bottom {
  border-top: 1px solid #686464;
  padding: 0.5rem;
  text-align: center;
  font-size: 0.85rem;
  color: #777;
}


@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3rem 1.5rem 2rem;
  }

  .footer-brand p {
    max-width: none;
  }
}
</style>
