<template>
  <div class="tickets-page">
    <div class="container">
      <div v-if="ticketStore.loading" class="tickets-loading">
        <p>Loading tickets...</p>
      </div>

      <template v-else>
        <!-- Page Header -->
        <div class="tickets-header">
          <div>
            <h1 class="tickets-title">Ticket Management</h1>
            <p class="tickets-subtitle">Create, edit, and manage your tickets</p>
          </div>
          <BaseButton variant="primary" size="lg" @click="handleCreate">
            + Create Ticket
          </BaseButton>
        </div>

        <!-- Tickets List -->
        <TicketList
          :tickets="ticketStore.tickets"
          @edit="handleEdit"
          @delete="handleDeleteRequest"
        />

        <!-- Create/Edit Modal -->
        <ModalDialog
          :is-open="isFormOpen"
          :title="selectedTicket ? 'Edit Ticket' : 'Create New Ticket'"
          size="md"
          @close="handleFormCancel"
        >
          <TicketForm
            :ticket="selectedTicket"
            :loading="formLoading"
            @submit="handleFormSubmit"
            @cancel="handleFormCancel"
          />
        </ModalDialog>

        <!-- Delete Confirmation Modal -->
        <ModalDialog
          :is-open="isDeleteModalOpen"
          title="Delete Ticket"
          size="sm"
          @close="handleDeleteCancel"
        >
          <p>
            Are you sure you want to delete this ticket? This action cannot be
            undone.
          </p>
          <template #footer>
            <BaseButton variant="secondary" @click="handleDeleteCancel">
              Cancel
            </BaseButton>
            <BaseButton variant="danger" @click="handleDeleteConfirm">
              Delete
            </BaseButton>
          </template>
        </ModalDialog>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import { useTicketStore } from '@/stores/tickets';
import TicketList from '@/components/tickets/TicketList.vue';
import TicketForm from '@/components/tickets/TicketForm.vue';
import ModalDialog from '@/components/common/ModalDialog.vue';
import BaseButton from '@/components/common/BaseButton.vue';

const ticketStore = useTicketStore();
const toast = inject('toast', null);

const isFormOpen = ref(false);
const isDeleteModalOpen = ref(false);
const selectedTicket = ref(null);
const ticketToDelete = ref(null);
const formLoading = ref(false);

// Open create form
const handleCreate = () => {
  selectedTicket.value = null;
  isFormOpen.value = true;
};

// Open edit form
const handleEdit = (ticket) => {
  selectedTicket.value = ticket;
  isFormOpen.value = true;
};

// Handle form submission
const handleFormSubmit = async (formData) => {
  formLoading.value = true;

  try {
    if (selectedTicket.value) {
      await ticketStore.updateTicket(selectedTicket.value.id, formData);
      if (toast) {
        toast.showToast('Ticket updated successfully!', 'success');
      }
    } else {
      await ticketStore.createTicket(formData);
      if (toast) {
        toast.showToast('Ticket created successfully!', 'success');
      }
    }
    isFormOpen.value = false;
    selectedTicket.value = null;
  } catch (error) {
    if (toast) {
      toast.showToast(
        error.message || 'Failed to save ticket. Please try again.',
        'error'
      );
    }
  } finally {
    formLoading.value = false;
  }
};

// Handle form cancel
const handleFormCancel = () => {
  isFormOpen.value = false;
  selectedTicket.value = null;
};

// Open delete confirmation
const handleDeleteRequest = (ticketId) => {
  ticketToDelete.value = ticketId;
  isDeleteModalOpen.value = true;
};

// Confirm delete
const handleDeleteConfirm = async () => {
  if (!ticketToDelete.value) return;

  try {
    await ticketStore.deleteTicket(ticketToDelete.value);
    if (toast) {
      toast.showToast('Ticket deleted successfully!', 'success');
    }
    isDeleteModalOpen.value = false;
    ticketToDelete.value = null;
  } catch (error) {
    if (toast) {
      toast.showToast(
        error.message || 'Failed to delete ticket. Please try again.',
        'error'
      );
    }
  }
};

// Cancel delete
const handleDeleteCancel = () => {
  isDeleteModalOpen.value = false;
  ticketToDelete.value = null;
};
</script>

<style scoped>
.tickets-page {
  padding: var(--space-2xl) 0;
}

.tickets-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-2xl);
  gap: var(--space-lg);
}

.tickets-title {
  font-size: var(--text-4xl);
  font-weight: 700;
  margin-bottom: var(--space-xs);
}

.tickets-subtitle {
  font-size: var(--text-lg);
  color: var(--color-neutral-600);
}

.tickets-loading {
  text-align: center;
  padding: var(--space-3xl);
  color: var(--color-neutral-500);
}

@media (max-width: 768px) {
  .tickets-header {
    flex-direction: column;
  }

  .tickets-header button {
    width: 100%;
  }

  .tickets-title {
    font-size: var(--text-3xl);
  }
}
</style>