<template>
  <BaseCard class="ticket-card" hoverable>
    <div class="ticket-card-header">
      <h3 class="ticket-title">{{ ticket.title }}</h3>
      <span :class="['badge', `badge-${ticket.status}`]">
        {{ getStatusLabel(ticket.status) }}
      </span>
    </div>

    <p v-if="ticket.description" class="ticket-description">
      {{ ticket.description }}
    </p>

    <div class="ticket-meta">
      <span v-if="ticket.priority" class="ticket-priority">
        <strong>Priority:</strong> {{ ticket.priority }}
      </span>
      <span class="ticket-date">
        <strong>Created:</strong> {{ formatDate(ticket.createdAt) }}
      </span>
    </div>

    <div class="ticket-actions">
      <BaseButton variant="primary" size="sm" @click="$emit('edit', ticket)">
        Edit
      </BaseButton>
      <BaseButton variant="danger" size="sm" @click="$emit('delete', ticket.id)">
        Delete
      </BaseButton>
    </div>
  </BaseCard>
</template>

<script setup>
import BaseCard from '../common/BaseCard.vue';
import BaseButton from '../common/BaseButton.vue';

defineProps({
  ticket: {
    type: Object,
    required: true,
  },
});

defineEmits(['edit', 'delete']);

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const getStatusLabel = (status) => {
  return status.replace('_', ' ');
};
</script>

<style scoped>
.ticket-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.ticket-card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-md);
}

.ticket-title {
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--color-neutral-900);
  margin: 0;
  flex: 1;
}

.ticket-description {
  font-size: var(--text-sm);
  color: var(--color-neutral-600);
  line-height: 1.6;
  margin: 0;
}

.ticket-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-lg);
  font-size: var(--text-sm);
  color: var(--color-neutral-600);
  padding-top: var(--space-sm);
  border-top: 1px solid var(--color-neutral-200);
}

.ticket-priority {
  text-transform: capitalize;
}

.ticket-actions {
  display: flex;
  gap: var(--space-md);
  padding-top: var(--space-sm);
}

@media (max-width: 768px) {
  .ticket-card-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .ticket-actions {
    flex-direction: column;
  }

  .ticket-actions button {
    width: 100%;
  }
}
</style>
