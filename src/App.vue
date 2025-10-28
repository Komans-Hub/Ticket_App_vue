<template>
  <AppLayout>
    <router-view />
  </AppLayout>
  <ToastNotification ref="toastRef" />
</template>

<script setup>
import { ref, provide, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useTicketStore } from '@/stores/tickets';
import AppLayout from '@/components/layout/AppLayout.vue';
import ToastNotification from '@/components/common/ToastNotification.vue';

const authStore = useAuthStore();
const ticketStore = useTicketStore();
const toastRef = ref(null);

// Provide toast to all child components
provide('toast', toastRef);

// Initialize stores
onMounted(() => {
  authStore.initialize();
  ticketStore.initialize();
});
</script>

<style>
/* Global styles are imported in main.js */
</style>