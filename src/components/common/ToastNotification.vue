<template>
  <Teleport to="body">
    <div v-if="toasts.length" class="toast-container">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        :class="['toast', `toast-${toast.type}`]"
        role="alert"
        aria-live="polite"
      >
        <span class="toast-icon">{{ getIcon(toast.type) }}</span>
        <span class="toast-message">{{ toast.message }}</span>
        <button
          class="toast-close"
          @click="removeToast(toast.id)"
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue';

const toasts = ref([]);

const getIcon = (type) => {
  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
  };
  return icons[type] || icons.info;
};

const showToast = (message, type = 'info', duration = 3000) => {
  const id = Date.now();
  toasts.value.push({ id, message, type });

  setTimeout(() => {
    removeToast(id);
  }, duration);
};

const removeToast = (id) => {
  toasts.value = toasts.value.filter((toast) => toast.id !== id);
};

defineExpose({ showToast });
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: var(--space-xl);
  right: var(--space-xl);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  max-width: 400px;
}

.toast {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  background: white;
  animation: slideIn 0.3s ease-out;
  min-width: 300px;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.toast-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-weight: bold;
  flex-shrink: 0;
}

.toast-message {
  flex: 1;
  font-size: var(--text-sm);
  color: var(--color-neutral-800);
}

.toast-close {
  background: none;
  border: none;
  font-size: var(--text-2xl);
  line-height: 1;
  color: var(--color-neutral-500);
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
}

.toast-close:hover {
  color: var(--color-neutral-700);
}

.toast-success {
  border-left: 4px solid var(--color-success);
}

.toast-success .toast-icon {
  background-color: #d1fae5;
  color: var(--color-success);
}

.toast-error {
  border-left: 4px solid var(--color-error);
}

.toast-error .toast-icon {
  background-color: #fee2e2;
  color: var(--color-error);
}

.toast-warning {
  border-left: 4px solid var(--color-warning);
}

.toast-warning .toast-icon {
  background-color: #fef3c7;
  color: var(--color-warning);
}

.toast-info {
  border-left: 4px solid var(--color-info);
}

.toast-info .toast-icon {
  background-color: #dbeafe;
  color: var(--color-info);
}

@media (max-width: 768px) {
  .toast-container {
    top: var(--space-md);
    right: var(--space-md);
    left: var(--space-md);
    max-width: none;
  }

  .toast {
    min-width: auto;
  }
}
</style>