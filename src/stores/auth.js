import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { getSession, setSession, clearSession } from '../utils/storage';

const DEMO_CREDENTIALS = {
  email: 'demo@ticketapp.com',
  password: '12345',
};

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const loading = ref(true);

  // Computed
  const isAuthenticated = computed(() => !!user.value);

  // Initialize - check for existing session
  const initialize = () => {
    const session = getSession();
    if (session) {
      user.value = session.user;
    }
    loading.value = false;
  };

  // Login
  const login = async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
          const userData = {
            id: 'user_demo',
            name: 'Demo User',
            email: email,
          };

          const sessionData = {
            user: userData,
            token: `token_${Date.now()}`,
            expiresAt: Date.now() + 24 * 60 * 60 * 1000,
          };

          setSession(sessionData);
          user.value = userData;
          resolve(userData);
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 500);
    });
  };

  // Signup
  const signup = async (userData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = {
          id: `user_${Date.now()}`,
          name: userData.name,
          email: userData.email,
        };

        const sessionData = {
          user: newUser,
          token: `token_${Date.now()}`,
          expiresAt: Date.now() + 24 * 60 * 60 * 1000,
        };

        setSession(sessionData);
        user.value = newUser;
        resolve(newUser);
      }, 500);
    });
  };

  // Logout
  const logout = () => {
    clearSession();
    user.value = null;
  };

  // Check session validity
  const checkSession = () => {
    const session = getSession();
    if (!session) return false;

    if (session.expiresAt && Date.now() > session.expiresAt) {
      logout();
      return false;
    }

    return true;
  };

  return {
    user,
    loading,
    isAuthenticated,
    initialize,
    login,
    signup,
    logout,
    checkSession,
  };
});