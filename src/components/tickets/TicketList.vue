<template>
  <div v-if="tickets.length === 0" class="ticket-list-empty">
    <p>No tickets found. Create your first ticket to get started!</p>
  </div>
  <div v-else class="ticket-list">
    <TicketCard
      v-for="ticket in tickets"
      :key="ticket.id"
      :ticket="ticket"
      @edit="$emit('edit', $event)"
      @delete="$emit('delete', $event)"
    />
  </div>
</template>

<script setup>
import TicketCard from './TicketCard.vue';

defineProps({
  tickets: {
    type: Array,
    required: true,
  },
});

defineEmits(['edit', 'delete']);
</script>

<style scoped>
.ticket-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--space-xl);
}

.ticket-list-empty {
  text-align: center;
  padding: var(--space-3xl);
  color: var(--color-neutral-500);
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

@media (max-width: 768px) {
  .ticket-list {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
}
</style>
