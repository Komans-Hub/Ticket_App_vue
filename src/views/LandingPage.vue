<template>
  <div class="landing-page">
    <section class="hero-section">
      <div class="hero-background">
        <svg
          class="hero-wave"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#0ea5e9"
            fill-opacity="0.1"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <path
            fill="#0ea5e9"
            fill-opacity="0.2"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        <div class="circle-decor circle-decor-1"></div>
        <div class="circle-decor circle-decor-2"></div>
      </div>

      <div class="container hero-content">
        <h1 class="hero-title">
          Manage Your Tickets
          <br />
          <span class="hero-title-accent">Effortlessly</span>
        </h1>
        <p class="hero-description">
           Empower your business with an intelligent ticket management solution designed to streamline operations and elevate customer support.
        </p>
        <div class="hero-actions">
          <router-link to="/auth/signup">
            <BaseButton variant="primary" size="lg">Get Started</BaseButton>
          </router-link>
          <router-link to="/auth/login">
            <BaseButton variant="outline" size="lg">Login</BaseButton>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title text-center">
          Everything You Need to Manage Tickets Efficiently
        </h2>
        <p class="section-description text-center">
          Powerful features designed to help you work smarter, not harder.
        </p>

        <div class="features-grid">
          <BaseCard class="feature-card" hoverable>
            <div class="feature-icon">📊</div>
            <h3 class="feature-title">Real-time Insights</h3>
            <p class="feature-description">
             Monitor key metrics and ticket activity instantly through a centralized, dynamic dashboard.
            </p>
          </BaseCard>

          <BaseCard class="feature-card" hoverable>
             <div class="icon-container icon-priority feature-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" stroke="#F59E0B" stroke-width="2" fill="none"/>
                    <path d="M12 8v4l3 3" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
                    <circle cx="12" cy="12" r="2" fill="#F59E0B"/>
                  </svg>
              </div>
            <h3 class="feature-title">Intelligent Prioritization</h3>
            <p class="feature-description">
              Automatically prioritize tickets based on urgency and impact to ensure timely resolutions.
            </p>
          </BaseCard>

          <BaseCard class="feature-card" hoverable>
            <div class="icon-container icon-status feature-icon">
                <svg viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="6" height="16" rx="1" stroke="#10B981" stroke-width="2" opacity="0.3"/>
                    <rect x="9" y="4" width="6" height="16" rx="1" stroke="#10B981" stroke-width="2" opacity="0.6"/>
                    <rect x="16" y="4" width="6" height="16" rx="1" stroke="#10B981" stroke-width="2"/>
                    <path d="M4 8h2M11 8h2M18 8h2M4 12h2M11 12h2M18 12h2" stroke="#10B981" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </div>
            <h3 class="feature-title">Centralized Tracking</h3>
            <p class="feature-description">
              Gain full visibility into ticket lifecycles with real-time status updates and actionable progress tracking.
            </p>
          </BaseCard>

          <BaseCard class="feature-card" hoverable>
             <div class="icon-container icon-updates feature-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="4" width="16" height="16" rx="2" stroke="#8B5CF6" stroke-width="2" opacity="0.3"/>
                  <path d="M8 10h8M8 14h5" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round"/>
                  <path d="M16 19l3-3-3-3" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            <h3 class="feature-title">Seamless Updates</h3>
            <p class="feature-description">
              Edit, assign, and update ticket details effortlessly through a clean, intuitive interface.
            </p>
          </BaseCard>

          <BaseCard class="feature-card" hoverable>
               <div class="icon-container icon-search feature-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="7" stroke="#6366F1" stroke-width="2"/>
                  <path d="M16 16l5 5" stroke="#6366F1" stroke-width="2" stroke-linecap="round"/>
                  <path d="M11 8v6M8 11h6" stroke="#6366F1" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
                  <circle cx="18" cy="6" r="2" fill="#6366F1"/>
                </svg>
              </div>

            <h3 class="feature-title">Advanced Search</h3>
            <p class="feature-description">
              Locate tickets instantly using intelligent filters and contextual search suggestions.
            </p>
          </BaseCard>

          <BaseCard class="feature-card" hoverable>
            <div class="feature-icon">📱</div>
            <h3 class="feature-title">Fully Responsive Access</h3>
            <p class="feature-description">
              Stay connected anywhere — optimized for desktop, tablet, and mobile experiences.
            </p>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <BaseCard class="cta-card">
          <h2 class="cta-title">Ready to Get Started?</h2>
          <p class="cta-description">
            Join thousands of teams already using TicketApp to streamline their
            workflow.
          </p>
          <router-link to="/auth/signup">
            <BaseButton variant="primary" size="lg">Create Your Account</BaseButton>
          </router-link>
        </BaseCard>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import BaseButton from '@/components/common/BaseButton.vue'
import BaseCard from '@/components/common/BaseCard.vue'

const authStore = useAuthStore()
const router = useRouter()

onMounted(async () => {
  await nextTick()
  if (authStore.isAuthenticated) {
    router.push('/dashboard')
  }
})
</script>

<style scoped>
.landing-page {
  min-height: calc(100vh - 80px);
}

.hero-section {
  position: relative;
  padding: var(--space-3xl) 0;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.hero-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 400px;
}

.circle-decor {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
}

.circle-decor-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, var(--color-primary-500) 0%, transparent 70%);
  top: -100px;
  right: -100px;
}

.circle-decor-2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, var(--color-primary-600) 0%, transparent 70%);
  bottom: 50px;
  left: -50px;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: var(--space-3);
}
.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  margin-top: 4rem;
  line-height: 1.2;
}
.hero-title-accent {
  color: var(--color-primary-600);
}
.hero-description {
  font-size: var(--text-xl);
  color: var(--color-neutral-600);
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}
.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}
.features-section {
  margin-top: 5rem;
  padding: var(--space-5xl) 0;
  background: var(--color-neutral-50);
}
.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: var(--space-md);
}

.section-description {
  font-size: 1.25rem;
  color: var(--color-neutral-600);
  margin-bottom: var(--space-3xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-2xl);
}

.feature-card {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: var(--space-lg);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-color: #CBD5E1;
}

.icon-container {
  width: 72px;
  height: 72px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  transition: transform 0.3s ease;
}

.feature-card:hover .icon-container {
  transform: scale(1.05);
}

.icon-analytics {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(29, 78, 216, 0.05) 100%);
}

.icon-priority {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(217, 119, 6, 0.05) 100%);
}

.icon-status {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%);
}

.icon-updates {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(124, 58, 237, 0.05) 100%);
}
.icon-responsive {
background: linear-gradient(135deg, rgba(107, 114, 128, 0.1) 0%, rgba(75, 85, 99, 0.05) 100%);
}

.icon-container svg {
width: 36px;
height: 36px;
}



.feature-title {
  font-size: var(--text-xl);
  font-weight: 600;
  margin-bottom: var(--space-sm);
}

.feature-description {
  color: var(--color-neutral-600);
  line-height: 1.6;
}
.cta-section {
  padding: var(--space-3xl) 0;
}

.cta-card {
  text-align: center;
  padding: var(--space-3xl);
  background: linear-gradient(
    135deg,
    var(--color-primary-50) 0%,
    var(--color-primary-100) 100%
  );
}

.cta-title {
  font-size: var(--text-3xl);
  font-weight: 700;
  margin-bottom: var(--space-md);
}

.cta-description {
  font-size: var(--text-lg);
  color: var(--color-neutral-700);
  margin-bottom: var(--space-xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
</style>
