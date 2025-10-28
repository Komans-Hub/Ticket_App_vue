<template>
  <div class="dashboard-page">
    <div class="container">
      <div v-if="ticketStore.loading" class="dashboard-loading">
        <p>Loading dashboard...</p>
      </div>

      <template v-else>
        <div class="dashboard-header">
          <div>
            <h1 class="dashboard-title">Dashboard Overview</h1>
            <p class="dashboard-subtitle">
              Monitor your support operations and ticket performance metrics
            </p>
          </div>
          <router-link to="/tickets">
            <BaseButton variant="primary" size="lg">Manage Tickets</BaseButton>
          </router-link>
        </div>

        
        <div class="stats-grid">
          <BaseCard class="stat-card stat-card-total" hoverable>
               <div class="stat-header">
                <div class="stat-icon blue">
                      <svg viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="#2563EB" stroke-width="2"/>
                            <path d="M3 9h18M9 3v18" stroke="#2563EB" stroke-width="2" opacity="0.3"/>
                            <line x1="7" y1="13" x2="7" y2="17" stroke="#2563EB" stroke-width="2" stroke-linecap="round"/>
                            <line x1="12" y1="11" x2="12" y2="17" stroke="#2563EB" stroke-width="2" stroke-linecap="round"/>
                            <line x1="17" y1="14" x2="17" y2="17" stroke="#2563EB" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                </div>
              </div>
            <div class="stat-content">
              <p class="stat-label">Total Tickets</p>
              <p class="stat-value">{{ ticketStore.stats.total }}</p>
            </div>
          </BaseCard>

          <BaseCard class="stat-card stat-card-open" hoverable>
                <div class="stat-header">
              <div class="stat-icon green">
                <svg viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="9" stroke="#10B981" stroke-width="2"/>
                            <path d="M12 6v6l4 2" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
                            <circle cx="12" cy="12" r="2" fill="#10B981"/>
                </svg>
              </div>
            </div>
            <div class="stat-content">
              <p class="stat-label">Open Tickets</p>
              <p class="stat-value">{{ ticketStore.stats.open }}</p>
            </div>
          </BaseCard>

          <BaseCard class="stat-card stat-card-progress" hoverable>
             <div class="stat-header">
              <div class="stat-icon yellow">
                        <svg viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" stroke="#F59E0B" stroke-width="2" fill="none"/>
                            <circle cx="12" cy="12" r="3" stroke="#F59E0B" stroke-width="2" opacity="0.5"/>
                            <circle cx="12" cy="12" r="1.5" fill="#F59E0B"/>
                        </svg>
                </div>
            </div>
            <div class="stat-content">
              <p class="stat-label">In Progress</p>
              <p class="stat-value">{{ ticketStore.stats.inProgress }}</p>
            </div>
          </BaseCard>

          <BaseCard class="stat-card stat-card-closed" hoverable>
              <div class="stat-header">
              <div class="stat-icon gray">
                        <svg viewBox="0 0 24 24" fill="none">
                            <path d="M9 11l3 3L22 4" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="#6B7280" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
                        </svg>
                </div>
              </div>
            <div class="stat-content">
              <p class="stat-label">Resolved Tickets</p>
              <p class="stat-value">{{ ticketStore.stats.closed }}</p>
            </div>
          </BaseCard>
        </div>

        <div class="dashboard-actions">
          <BaseCard>
            <h2 class="actions-title">Quick Actions</h2>
            <div class="actions-grid">
              <router-link to="/tickets" class="action-button">
                  <div class="action-icon create">
              <svg viewBox="0 0 24 24" fill="none">
                        <rect x="4" y="4" width="16" height="16" rx="2" stroke="#8B5CF6" stroke-width="2" opacity="0.3"/>
                        <path d="M12 8v8M8 12h8" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round"/>
                        <path d="M8 10h8M8 14h5" stroke="#8B5CF6" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>
              </svg>
            </div>
                            <h3 class="action-title action-label">Create New Ticket</h3>
            <p class="action-description">Initialize a new support request with automated routing</p>
              </router-link>
              <router-link to="/tickets" class="action-button">
                            <div class="action-icon view">
                    <svg viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#2563EB" stroke-width="2"/>
                        <path d="M3 9h18" stroke="#2563EB" stroke-width="2"/>
                        <circle cx="7" cy="7" r="0.5" fill="#2563EB"/>
                        <circle cx="9" cy="7" r="0.5" fill="#2563EB"/>
                        <circle cx="11" cy="7" r="0.5" fill="#2563EB"/>
                        <line x1="6" y1="13" x2="18" y2="13" stroke="#2563EB" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>
                        <line x1="6" y1="16" x2="14" y2="16" stroke="#2563EB" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>
                    </svg>
                </div>
                <h3 class="action-title action-label">View All Tickets</h3>
                <p class="action-description">Access comprehensive ticket list with filtering options</p>
              </router-link>
              <router-link to="/tickets" class="action-button">
                  <div class="action-icon search">
                    <svg viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="#6366F1" stroke-width="2"/>
                        <path d="M16 16l5 5" stroke="#6366F1" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="11" cy="11" r="3" stroke="#6366F1" stroke-width="1.5" opacity="0.4"/>
                        <path d="M11 8v6M8 11h6" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" opacity="0.3"/>
                    </svg>
            </div>
                <h3 class="action-title action-label">Search Tickets</h3>
                <p class="action-description">Query tickets using advanced search parameters</p>
              </router-link>
            </div>
          </BaseCard>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useTicketStore } from '@/stores/tickets';
import BaseCard from '@/components/common/BaseCard.vue';
import BaseButton from '@/components/common/BaseButton.vue';

const ticketStore = useTicketStore();
</script>

<style scoped>
.dashboard-page {
  padding: var(--space-2xl) 0;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-2xl);
  gap: var(--space-lg);
}

.dashboard-title {
  font-size: var(--text-4xl);
  font-weight: 700;
  margin-bottom: var(--space-xs);
}

.dashboard-subtitle {
  font-size: var(--text-lg);
  color: var(--color-neutral-600);
}

.dashboard-loading {
  text-align: center;
  padding: var(--space-3xl);
  color: var(--color-neutral-500);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-3xl);
}

.stat-card {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  padding: var(--space-xl);
  position: relative;
  overflow: hidden;
  background: white;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.stat-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
}

.stat-card-total::before {
  background-color: var(--color-primary-500);
}

.stat-card-open::before {
  background-color: var(--color-status-open);
}

.stat-card-progress::before {
  background-color: var(--color-status-in-progress);
}

.stat-card-closed::before {
  background-color: var(--color-status-closed);
}
.stat-card:hover {
  border-color: #CBD5E1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.stat-card.blue::before {
  background: linear-gradient(180deg, #2563EB 0%, #1D4ED8 100%);
}

.stat-card.green::before {
  background: linear-gradient(180deg, #10B981 0%, #059669 100%);
}
.stat-card.yellow::before {
  background: linear-gradient(180deg, #F59E0B 0%, #D97706 100%);
}
.stat-card.gray::before {
  background: linear-gradient(180deg, #6B7280 0%, #4B5563 100%);
}
.stat-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  line-height: 1;
}

.stat-icon.blue {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(29, 78, 216, 0.05) 100%);
}

.stat-icon.green {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%);
}
.stat-icon.yellow {
   background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(217, 119, 6, 0.05) 100%);
}

.stat-icon.gray {
  background: linear-gradient(135deg, rgba(107, 114, 128, 0.1) 0%, rgba(75, 85, 99, 0.05) 100%);
}

.stat-icon svg {
  width: 24px;
  height: 24px;
}

.stat-content {
  flex: 1;
}

.stat-label {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-neutral-600);
  margin-bottom: var(--space-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stat-value {
  font-size: var(--text-4xl);
  font-weight: 700;
  color: var(--color-neutral-900);
  line-height: 1;
  letter-spacing: -0.02em;
}

.dashboard-actions {
  margin-top: var(--space-3xl);
}

.actions-title {
  font-size: var(--text-2xl);
  font-weight: 600;
  margin-bottom: var(--space-xl);
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-lg);
}

.action-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-xl);
  background-color: var(--color-neutral-50);
  border-radius: var(--radius-lg);
  text-decoration: none;
  transition: all 0.2s;
  border: 2px solid transparent;
}

.action-button:hover {
  background-color: var(--color-primary-50);
  border-color: var(--color-primary-200);
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.12);
}

.action-icon {
  font-size: 2.5rem;
  width: 64px;
  height: 64px;
  margin: 0 auto 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.action-label {
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-neutral-800);
  text-align: center;
}

.action-icon.create {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(124, 58, 237, 0.05) 100%);
}

.action-icon.view {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(29, 78, 216, 0.05) 100%);
}

.action-icon.search {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(79, 70, 229, 0.05) 100%);
}

.action-icon svg {
  width: 32px;
  height: 32px;
}

.action-title {
  font-weight: 600;
  color: #0F172A;
  margin-bottom: 8px;
}

.action-description {
  font-size: 14px;
  color: #64748B;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .dashboard-header {
    flex-direction: column;
  }

  .dashboard-header a {
    width: 100%;
  }

  .dashboard-title {
    font-size: var(--text-3xl);
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  .actions-grid {
    grid-template-columns: 1fr;
  }
}
</style>