<template>
  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-section">
        <h4 class="footer-title">TicketApp</h4>
        <p class="footer-description">
          Streamline your ticket management workflow with our modern, intuitive
          platform.
        </p>
      </div>

      <div class="footer-section">
        <h4 class="footer-title">Quick Links</h4>
        <ul class="footer-links">
          <li><router-link to="/" class="footer-link">Home</router-link></li>
          <li>
            <router-link to="/auth/login" class="footer-link">Login</router-link>
          </li>
          <li>
            <router-link to="/auth/signup" class="footer-link">Sign Up</router-link>
          </li>
        </ul>
      </div>

      <div class="footer-section">
        <h4 class="footer-title">Support</h4>
        <ul class="footer-links">
          <li><a href="#" class="footer-link">Help Center</a></li>
          <li><a href="#" class="footer-link">Documentation</a></li>
          <li><a href="#" class="footer-link">Contact Us</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p class="footer-copyright">
          © {{ currentYear }} Komans-Hub. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
  background-color: #87CEEB;
  color: #0F172A;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-2xl);
  padding-top: var(--space-3xl);
  padding-bottom: var(--space-2xl);
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.footer-title {
  font-size: var(--text-lg);
  font-weight: 600;
  color: white;
  margin-bottom: #1E293B;
}

.footer-description {
  font-size: var(--text-sm);
  line-height: 1.6;
  color: #075985;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.footer-link {
  color: #075985;
  text-decoration: none;
  font-size: var(--text-sm);
  transition: color 0.2s;
}

.footer-link:hover {
  color: #012E4A;
}

.footer-bottom {
  border-top: 1px solid var(--color-neutral-800);
  padding: var(--space-xl) 0;
}

.footer-copyright {
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-neutral-500);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
}
</style>
