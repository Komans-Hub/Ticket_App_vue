<template>
  <div class="auth-page">
    <div class="container">
      <div class="auth-container">
        <BaseCard class="auth-card">
          <div class="auth-header">
            <h1 class="auth-title">Welcome Back</h1>
            <p class="auth-subtitle">Sign in to your account to continue</p>
          </div>

          <form class="auth-form" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="email" class="form-label">Email Address</label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                :class="{ error: errors.email }"
                placeholder="demo@ticketapp.com"
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
                placeholder="Enter your password"
                @input="errors.password = ''"
              />
              <span v-if="errors.password" class="error-message">
                {{ errors.password }}
              </span>
            </div>

            <BaseButton
              type="submit"
              variant="primary"
              size="lg"
              full-width
              :disabled="loading"
            >
              {{ loading ? 'Signing in...' : 'Sign In' }}
            </BaseButton>
          </form>

          <div class="auth-footer">
            <p>
              Don't have an account?
              <router-link to="/auth/signup" class="auth-link">
                Sign up
              </router-link>
            </p>
          </div>

          <div class="auth-demo">
            <p class="demo-label">Demo Credentials:</p>
            <p class="demo-credentials">
              <strong>Email:</strong> demo@ticketapp.com<br />
              <strong>Password:</strong> 12345
            </p>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, inject } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { validateLoginForm } from '@/utils/validation'
import BaseCard from '@/components/common/BaseCard.vue'
import BaseButton from '@/components/common/BaseButton.vue'

defineOptions({ name: 'LoginPage' })

const router = useRouter()
const authStore = useAuthStore()
const toast = inject('toast', null)

const formData = reactive({
  email: '',
  password: '',
})

const errors = reactive({})
const loading = ref(false)

const handleSubmit = async () => {
  const validation = validateLoginForm(formData)

  if (!validation.isValid) {
    Object.assign(errors, validation.errors)
    toast?.showToast('Please fix the form errors', 'error')
    return
  }

  loading.value = true
  try {
    await authStore.login(formData.email, formData.password)
    toast?.showToast('Login successful!', 'success')
    setTimeout(() => router.push('/dashboard'), 500)
  } catch (error) {
    toast?.showToast(error.message || 'Login failed. Please try again.', 'error')
  } finally {
    loading.value = false
  }
}
</script>


<script>
import { inject } from 'vue';
export default {
  name: 'LoginPage',
};
</script>

<style scoped>
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

.auth-demo {
  margin-top: var(--space-xl);
  padding: var(--space-lg);
  background-color: var(--color-primary-50);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--color-primary-500);
}

.demo-label {
  font-weight: 600;
  margin-bottom: var(--space-sm);
  color: var(--color-neutral-800);
}

.demo-credentials {
  font-size: var(--text-sm);
  color: var(--color-neutral-700);
  font-family: var(--font-mono);
  line-height: 1.8;
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