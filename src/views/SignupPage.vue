<template>
  <div class="auth-page">
    <div class="container">
      <div class="auth-container">
        <BaseCard class="auth-card">
          <div class="auth-header">
            <h1 class="auth-title">Create Account</h1>
            <p class="auth-subtitle">Sign up to start managing your tickets</p>
          </div>

          <form class="auth-form" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name" class="form-label">Full Name</label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                :class="{ error: errors.name }"
                placeholder="John Doe"
                @input="errors.name = ''"
              />
              <span v-if="errors.name" class="error-message">
                {{ errors.name }}
              </span>
            </div>

            <div class="form-group">
              <label for="email" class="form-label">Email Address</label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                :class="{ error: errors.email }"
                placeholder="john@example.com"
                @input="errors.email = ''"
              />
              <span v-if="errors.email" class="error-message">
                {{ errors.email }}
              </span>
            </div>

            <div class="form-group">
              <label for="password" class="form-label">Password</label>
              <input
                id="password"
                v-model="formData.password"
                type="password"
                :class="{ error: errors.password }"
                placeholder="Create a password"
                @input="errors.password = ''"
              />
              <span v-if="errors.password" class="error-message">
                {{ errors.password }}
              </span>
            </div>

            <div class="form-group">
              <label for="confirmPassword" class="form-label">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                v-model="formData.confirmPassword"
                type="password"
                :class="{ error: errors.confirmPassword }"
                placeholder="Confirm your password"
                @input="errors.confirmPassword = ''"
              />
              <span v-if="errors.confirmPassword" class="error-message">
                {{ errors.confirmPassword }}
              </span>
            </div>

            <BaseButton
              type="submit"
              variant="primary"
              size="lg"
              full-width
              :disabled="loading"
            >
              {{ loading ? 'Creating Account...' : 'Sign Up' }}
            </BaseButton>
          </form>

          <div class="auth-footer">
            <p>
              Already have an account?
              <router-link to="/auth/login" class="auth-link">
                Sign in
              </router-link>
            </p>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, inject } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { validateSignupForm } from '@/utils/validation';
import BaseCard from '@/components/common/BaseCard.vue';
import BaseButton from '@/components/common/BaseButton.vue';

const router = useRouter();
const authStore = useAuthStore();

const formData = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
});

const errors = ref({});
const loading = ref(false);

const toast = inject('toast', null);

const handleSubmit = async () => {
  // Validate form
  const validation = validateSignupForm(formData);

  if (!validation.isValid) {
    errors.value = validation.errors;
    if (toast) {
      toast.showToast('Please fix the form errors', 'error');
    }
    return;
  }

  loading.value = true;

  try {
    await authStore.signup({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });
    if (toast) {
      toast.showToast('Account created successfully!', 'success');
    }
    setTimeout(() => {
      router.push('/dashboard');
    }, 500);
  } catch (error) {
    if (toast) {
      toast.showToast(
        error.message || 'Signup failed. Please try again.',
        'error'
      );
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
/* Same styles as LoginPage.vue */
.auth-page {
  min-height: calc(100vh - 160px);
  display: flex;
  align-items: center;
  padding: var(--space-2xl) 0;
  background: linear-gradient(
    135deg,
    var(--color-primary-50) 0%,
    var(--color-neutral-50) 100%
  );
}

.auth-container {
  max-width: 480px;
  margin: 0 auto;
  width: 100%;
}

.auth-card {
  padding: var(--space-3xl);
}

.auth-header {
  text-align: center;
  margin-bottom: var(--space-2xl);
}

.auth-title {
  font-size: var(--text-3xl);
  font-weight: 700;
  margin-bottom: var(--space-sm);
}

.auth-subtitle {
  font-size: var(--text-base);
  color: var(--color-neutral-600);
}

.auth-form {
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

.error-message {
  font-size: var(--text-sm);
  color: var(--color-error);
  margin-top: var(--space-xs);
}

.auth-footer {
  text-align: center;
  margin-top: var(--space-xl);
  padding-top: var(--space-xl);
  border-top: 1px solid var(--color-neutral-200);
}

.auth-link {
  color: var(--color-primary-600);
  font-weight: 600;
  text-decoration: none;
}

.auth-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .auth-card {
    padding: var(--space-2xl);
  }

  .auth-title {
    font-size: var(--text-2xl);
  }
}
</style>