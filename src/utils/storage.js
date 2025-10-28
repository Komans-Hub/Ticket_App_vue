// LocalStorage utility functions
const STORAGE_KEYS = {
  SESSION: 'ticketapp_session',
  TICKETS: 'ticketapp_tickets',
};

export const getSession = () => {
  try {
    const session = localStorage.getItem(STORAGE_KEYS.SESSION);
    return session ? JSON.parse(session) : null;
  } catch (error) {
    console.error('Error reading session:', error);
    return null;
  }
};

export const setSession = (sessionData) => {
  try {
    localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(sessionData));
  } catch (error) {
    console.error('Error setting session:', error);
  }
};

export const clearSession = () => {
  try {
    localStorage.removeItem(STORAGE_KEYS.SESSION);
  } catch (error) {
    console.error('Error clearing session:', error);
  }
};

export const isAuthenticated = () => {
  const session = getSession();
  return !!session && !!session.token;
};

export const getTickets = () => {
  try {
    const tickets = localStorage.getItem(STORAGE_KEYS.TICKETS);
    return tickets ? JSON.parse(tickets) : [];
  } catch (error) {
    console.error('Error reading tickets:', error);
    return [];
  }
};

export const saveTickets = (tickets) => {
  try {
    localStorage.setItem(STORAGE_KEYS.TICKETS, JSON.stringify(tickets));
  } catch (error) {
    console.error('Error saving tickets:', error);
  }
};

export const generateId = () => {
  return `ticket_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};