<template>
  <form class="ticket-form" @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="title" class="form-label">
        Title <span class="required">*</span>
      </label>
      <input
        id="title"
        v-model="formData.title"
        type="text"
        :class="{ error: errors.title && touched.title }"
        placeholder="Enter ticket title"
        @blur="touched.title = true"
      />
      <span v-if="errors.title && touched.title" class="error-message">
        {{ errors.title }}
      </span>
    </div>

    <div class="form-group">
      <label for="status" class="form-label">
        Status <span class="required">*</span>
      </label>
      <select
        id="status"
        v-model="formData.status"
        :class="{ error: errors.status && touched.status }"
        @blur="touched.status = true"
      >
        <option value="open">Open</option>
        <option value="in_progress">In Progress</option>
        <option value="closed">Closed</option>
      </select>
      <span v-if="errors.status && touched.status" class="error-message">
        {{ errors.status }}
      </span>
    </div>

    <div class="form-group">
      <label for="priority" class="form-label">Priority</label>
      <select id="priority" v-model="formData.priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>

    <div class="form-group">
      <label for="description" class="form-label">Description</label>
      <textarea
        id="description"
        v-model="formData.description"
        :class="{ error: errors.description && touched.description }"
        placeholder="Enter ticket description (optional)"
        rows="4"
        @blur="touched.description = true"
      />
      <span v-if="errors.description && touched.description" class="error-message">
        {{ errors.description }}
      </span>
    </div>

    <div class="form-actions">
      <BaseButton type="submit" variant="primary" :disabled="loading">
        {{ loading ? 'Saving...' : ticket ? 'Update Ticket' : 'Create Ticket' }}
      </BaseButton>
      <BaseButton type="button" variant="secondary" :disabled="loading" @click="$emit('cancel')">
        Cancel
      </BaseButton>
    </div>
  </form>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';
import { validateTicketForm } from '@/utils/validation';
import BaseButton from '../common/BaseButton.vue';

const props = defineProps({
  ticket: {
    type: Object,
    default: null,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['submit', 'cancel']);

const formData = reactive({
  title: '',
  status: 'open',
  description: '',
  priority: 'medium',
});

const errors = ref({});
const touched = reactive({
  title: false,
  status: false,
  description: false,
  priority: false,
});

// Populate form when editing
watch(
  () => props.ticket,
  (ticket) => {
    if (ticket) {
      formData.title = ticket.title || '';
      formData.status = ticket.status || 'open';
      formData.description = ticket.description || '';
      formData.priority = ticket.priority || 'medium';
    }
  },
  { immediate: true }
);

const handleSubmit = () => {
  // Mark all fields as touched
  Object.keys(touched).forEach((key) => {
    touched[key] = true;
  });

  // Validate
  const validation = validateTicketForm(formData);

  if (!validation.isValid) {
    errors.value = validation.errors;
    return;
  }

  emit('submit', { ...formData });
};
</script>

<style scoped>
.ticket-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.form-label {
  font-weight: 600;
  font-size: var(--text-sm);
  color: var(--color-neutral-800);
}

.required {
  color: var(--color-error);
}

.error-message {
  font-size: var(--text-sm);
  color: var(--color-error);
  margin-top: var(--space-xs);
}

.form-actions {
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-md);
}

@media (max-width: 768px) {
  .form-actions {
    flex-direction: column;
  }

  .form-actions button {
    width: 100%;
  }
}
</style>
