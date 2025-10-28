<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-overlay" @click="$emit('close')">
        <div
          :class="['modal-content', `modal-${size}`]"
          @click.stop
          role="dialog"
          aria-modal="true"
          :aria-labelledby="titleId"
        >
          <div class="modal-header">
            <h3 :id="titleId" class="modal-title">{{ title }}</h3>
            <button
              class="modal-close"
              @click="$emit('close')"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>

          <div class="modal-body">
            <slot />
          </div>

          <div v-if="$slots.footer" class="modal-footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
})

const emit = defineEmits(['close'])
const titleId = `modal-title-${Date.now()}`

const handleEscape = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

watch(
  () => props.isOpen,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
  }
)

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = 'unset'
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--space-lg);
}

.modal-content {
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  max-height: 90vh;
  overflow-y: auto;
}

.modal-sm {
  width: 100%;
  max-width: 400px;
}

.modal-md {
  width: 100%;
  max-width: 600px;
}

.modal-lg {
  width: 100%;
  max-width: 900px;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-xl);
  border-bottom: 1px solid var(--color-neutral-200);
}

.modal-title {
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-neutral-900);
}

.modal-close {
  background: none;
  border: none;
  font-size: var(--text-4xl);
  line-height: 1;
  color: var(--color-neutral-500);
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  transition: all 0.2s;
}

.modal-close:hover {
  background-color: var(--color-neutral-100);
  color: var(--color-neutral-700);
}

.modal-body {
  padding: var(--space-xl);
}

.modal-footer {
  padding: var(--space-xl);
  border-top: 1px solid var(--color-neutral-200);
  display: flex;
  gap: var(--space-md);
  justify-content: flex-end;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: translateY(20px);
}

@media (max-width: 768px) {
  .modal-overlay {
    padding: var(--space-md);
  }

  .modal-content {
    max-height: 95vh;
  }

  .modal-header,
  .modal-body,
  .modal-footer {
    padding: var(--space-lg);
  }
}
</style>
