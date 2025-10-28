<template>
  <button
    :type="type"
    :class="buttonClasses"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'danger', 'outline'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'button',
  },
});

defineEmits(['click']);

const buttonClasses = computed(() => [
  'btn',
  `btn-${props.variant}`,
  `btn-${props.size}`,
  { 'btn-full-width': props.fullWidth },
]);
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  font-weight: 600;
  border-radius: var(--radius-md);
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  font-family: inherit;
}

.btn-sm {
  padding: var(--space-xs) var(--space-md);
  font-size: var(--text-sm);
}

.btn-md {
  padding: var(--space-sm) var(--space-lg);
  font-size: var(--text-base);
}

.btn-lg {
  padding: var(--space-md) var(--space-xl);
  font-size: var(--text-lg);
}

.btn-primary {
  background-color: var(--color-primary-600);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: var(--color-primary-700);
}

.btn-secondary {
  background-color: var(--color-neutral-200);
  color: var(--color-neutral-800);
}

.btn-secondary:hover:not(:disabled) {
  background-color: var(--color-neutral-300);
}

.btn-danger {
  background-color: var(--color-error);
  color: white;
}

.btn-danger:hover:not(:disabled) {
  background-color: #dc2626;
}

.btn-outline {
  background-color: transparent;
  border: 2px solid var(--color-primary-600);
  color: var(--color-primary-600);
}

.btn-outline:hover:not(:disabled) {
  background-color: var(--color-primary-50);
}

.btn-full-width {
  width: 100%;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>