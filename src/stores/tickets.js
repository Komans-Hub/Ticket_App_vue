import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { getTickets, saveTickets, generateId } from '../utils/storage';

export const useTicketStore = defineStore('tickets', () => {
  const tickets = ref([]);
  const loading = ref(true);
  const error = ref(null);

  // Computed
  const stats = computed(() => ({
    total: tickets.value.length,
    open: tickets.value.filter((t) => t.status === 'open').length,
    inProgress: tickets.value.filter((t) => t.status === 'in_progress').length,
    closed: tickets.value.filter((t) => t.status === 'closed').length,
  }));

  // Initialize - load tickets
  const initialize = () => {
    try {
      const storedTickets = getTickets();
      tickets.value = storedTickets;
    } catch (err) {
      error.value = 'Failed to load tickets';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  // Create ticket
  const createTicket = async (ticketData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const newTicket = {
            id: generateId(),
            ...ticketData,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };

          tickets.value.push(newTicket);
          saveTickets(tickets.value);
          resolve(newTicket);
        } catch (err) {
          reject(new Error('Failed to create ticket'));
        }
      }, 300);
    });
  };

  // Update ticket
  const updateTicket = async (ticketId, updates) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const index = tickets.value.findIndex((t) => t.id === ticketId);

          if (index === -1) {
            reject(new Error('Ticket not found'));
            return;
          }

          const updatedTicket = {
            ...tickets.value[index],
            ...updates,
            updatedAt: new Date().toISOString(),
          };

          tickets.value[index] = updatedTicket;
          saveTickets(tickets.value);
          resolve(updatedTicket);
        } catch (err) {
          reject(new Error('Failed to update ticket'));
        }
      }, 300);
    });
  };

  // Delete ticket
  const deleteTicket = async (ticketId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          tickets.value = tickets.value.filter((t) => t.id !== ticketId);
          saveTickets(tickets.value);
          resolve();
        } catch (err) {
          reject(new Error('Failed to delete ticket'));
        }
      }, 300);
    });
  };

  // Get ticket by ID
  const getTicketById = (ticketId) => {
    return tickets.value.find((t) => t.id === ticketId) || null;
  };

  return {
    tickets,
    loading,
    error,
    stats,
    initialize,
    createTicket,
    updateTicket,
    deleteTicket,
    getTicketById,
  };
});