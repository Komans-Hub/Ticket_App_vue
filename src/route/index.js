import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

// Import views
import LandingPage from '@/views/LandingPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import SignupPage from '@/views/SignupPage.vue';
import DashboardPage from '@/views/DashboardPage.vue';
import TicketManagementPage from '@/views/TicketManagementPage.vue';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage,
    meta: { requiresAuth: false },
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: LoginPage,
    meta: { requiresAuth: false, redirectIfAuth: true },
  },
  {
    path: '/auth/signup',
    name: 'Signup',
    component: SignupPage,
    meta: { requiresAuth: false, redirectIfAuth: true },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: TicketManagementPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guards
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // Check if route requires authentication
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/auth/login');
  }
  // Redirect authenticated users away from auth pages
  else if (to.meta.redirectIfAuth && authStore.isAuthenticated) {
    next('/dashboard');
  }
  // Allow navigation
  else {
    next();
  }
});

export default router;