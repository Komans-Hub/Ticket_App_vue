<template>
  <header class="header">
    <div class="container header-content">
      <router-link to="/" class="header-logo">
         <div class="logo-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="3" width="20" height="18" rx="2"/>
            <line x1="8" y1="3" x2="8" y2="21"/>
            </svg>
          </div>
        <span class="logo-text">TicketHub</span>
      </router-link>

      <nav class="header-nav" aria-label="Main navigation">
        <template v-if="authStore.isAuthenticated">
          <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          <router-link to="/tickets" class="nav-link">Tickets</router-link>
          <div class="header-user">
            <span class="user-name">{{ authStore.user?.name }}</span>
            <BaseButton variant="outline" size="sm" @click="handleLogout">
              Logout
            </BaseButton>
          </div>
        </template>
        <template v-else>
          <router-link to="/auth/login" class="nav-link">Login</router-link>
          <router-link to="/auth/signup">
            <BaseButton variant="primary" size="sm" class="signup-button">Sign Up</BaseButton>
          </router-link>
        </template>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import BaseButton from '../common/BaseButton.vue';

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = () => {
  authStore.logout();
  router.push('/');
};
</script>

<style scoped>
.header {
  background: white;
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-lg);
  padding-bottom: var(--space-lg);
}

.header-logo {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  text-decoration: none;
  font-weight: 700;
  font-size: var(--text-xl);
  color: var(--color-neutral-900);
  transition: opacity 0.2s;
}

.header-logo:hover {
  opacity: 0.8;
}

.logo-icon {
  font-size: var(--text-3xl);
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
}
.logo-text {
  font-size: var(--text-xl);
  font-weight: 700;
  color: #0F172A;
  text-decoration: none;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
}

.nav-link {
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
  position: relative;
  color: #64748B;
  font-size: 15px;
  padding: 8px 16px; 
}

.nav-link:hover {
  color: var(--color-primary-600);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--color-primary-600);
  transform: scaleX(0);
  transition: transform 0.2s;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  transform: scaleX(1);
}
.signup-button {
background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%);
color: white;
padding: 12px 28px;
border-radius: 8px;
font-size: 15px;
font-weight: 600;
text-decoration: none;
transition: all 0.2s ease;
box-shadow: 0 1px 2px rgba(37, 99, 235, 0.1);
}

.signup-button:hover {
transform: translateY(-1px);
box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
}

.header-user {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.user-name {
  font-weight: 500;
  color: var(--color-neutral-700);
}

@media (max-width: 768px) {
  .header-content {
    flex-wrap: wrap;
    gap: var(--space-md);
  }

  .header-nav {
    gap: var(--space-md);
    font-size: var(--text-sm);
  }

  .user-name {
    display: none;
  }

  .logo-text {
    display: none;
  }
}
</style>