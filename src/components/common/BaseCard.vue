<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  hoverable: {
    type: Boolean,
    default: false,
  },
});

const cardClasses = computed(() => [
  'card',
  { 'card-hoverable': props.hoverable },
]);
</script>

<style scoped>
.card {
  background: white;
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  box-shadow: var(--shadow-md);
  transition: box-shadow 0.2s, transform 0.2s;
}

.card-hoverable:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .card {
    padding: var(--space-lg);
  }
}
</style>