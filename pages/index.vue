<template>
  <div class="min-h-screen bg-background text-text transition-all duration-300 overflow-x-hidden">
    <Navbar active-tab="Home" />

    <main class="mt-24 px-[5%]">
      <!-- Hero — fills the viewport below the fixed navbar (mt-24 = 6rem). -->
      <section class="hero min-h-[calc(100vh-6rem)] flex flex-col justify-center items-start max-w-7xl mx-auto py-12">
        <p
          class="text-sm md:text-base uppercase tracking-widest font-semibold text-accent mb-6 animate-fadeIn opacity-0"
          style="animation-delay: 0.1s;"
        >
          {{ $t('home.hero.eyebrow') }}
        </p>
        <h1
          class="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight pb-6 pr-6 bg-gradient-to-r from-accent to-secondary-accent bg-clip-text text-transparent transition-all duration-300 animate-fadeIn opacity-0"
          style="animation-delay: 0.2s;"
        >
          {{ $t('home.hero.title_line_1') }} <br /> {{ $t('home.hero.title_line_2') }}
        </h1>
        <p
          class="text-xl md:text-2xl max-w-[640px] mb-10 opacity-90 animate-fadeIn opacity-0"
          style="animation-delay: 0.4s;"
        >
          {{ $t('home.hero.subhead') }}
        </p>
        <div class="flex flex-wrap items-center gap-4 animate-fadeIn opacity-0" style="animation-delay: 0.6s;">
          <NuxtLink
            :to="localePath('/contact')"
            class="inline-flex items-center bg-accent text-white px-8 py-4 rounded gap-2 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20"
          >
            {{ $t('common.cta_audit') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/solutions')"
            class="inline-flex items-center bg-transparent text-text px-8 py-4 rounded gap-2 font-semibold transition-all duration-300 border border-text/40 hover:-translate-y-0.5 hover:bg-secondary"
          >
            {{ $t('common.cta_solutions') }}
          </NuxtLink>
        </div>
      </section>

      <div class="h-px w-full bg-text opacity-10 mt-16 mb-8"></div>

      <!-- Proof bar -->
      <section class="py-12 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="proof in proofItems" :key="proof.title" class="flex flex-col">
            <div class="text-accent text-2xl mb-2">{{ proof.icon }}</div>
            <h3 class="text-lg font-semibold mb-1">{{ proof.title }}</h3>
            <p class="text-sm opacity-75">{{ proof.desc }}</p>
          </div>
        </div>
      </section>

      <div class="h-px w-full bg-text opacity-10 my-8"></div>

      <!-- Services -->
      <section class="py-20 max-w-7xl mx-auto">
        <div class="mb-12 max-w-3xl">
          <h2 class="text-4xl font-bold tracking-tight mb-4">{{ $t('home.services.title') }}</h2>
          <p class="text-lg opacity-80">{{ $t('home.services.subhead') }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="service in services"
            :key="service.title"
            class="feature-card bg-secondary p-8 rounded-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
          >
            <div class="text-4xl text-accent mb-6">{{ service.icon }}</div>
            <h3 class="text-2xl font-semibold mb-4">{{ service.title }}</h3>
            <p class="opacity-85">{{ service.desc }}</p>
          </div>
        </div>
        <div class="mt-10">
          <NuxtLink :to="localePath('/solutions')" class="inline-flex items-center text-accent font-medium hover:underline">
            {{ $t('common.cta_solutions') }}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>
        </div>
      </section>

      <div class="h-px w-full bg-text opacity-10 my-8"></div>

      <!-- How we work -->
      <section class="py-20 max-w-7xl mx-auto">
        <div class="mb-12 max-w-3xl">
          <h2 class="text-4xl font-bold tracking-tight mb-4">{{ $t('home.process.title') }}</h2>
          <p class="text-lg opacity-80">{{ $t('home.process.subhead') }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="step in processSteps"
            :key="step.title"
            class="bg-secondary/50 border border-text/10 p-6 rounded-lg transition-all duration-300 hover:-translate-y-1"
          >
            <h3 class="text-xl font-bold mb-3 bg-gradient-to-r from-accent to-secondary-accent bg-clip-text text-transparent">
              {{ step.title }}
            </h3>
            <p class="opacity-85 text-sm">{{ step.desc }}</p>
          </div>
        </div>
      </section>

      <div class="h-px w-full bg-text opacity-10 my-8"></div>

      <!-- Starter offer -->
      <section class="py-20 max-w-7xl mx-auto">
        <div class="bg-gradient-to-br from-accent/10 via-secondary to-secondary-accent/10 border border-accent/30 rounded-2xl p-8 md:p-12">
          <div class="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div class="lg:col-span-3">
              <span class="inline-block px-3 py-1 mb-4 bg-accent/20 text-accent text-xs font-semibold uppercase tracking-wider rounded">
                {{ $t('home.starter.badge') }}
              </span>
              <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {{ $t('home.starter.title') }}
              </h2>
              <p class="text-lg opacity-85 mb-6">{{ $t('home.starter.description') }}</p>
              <ul class="space-y-2 mb-8">
                <li v-for="bullet in starterBullets" :key="bullet" class="flex items-start">
                  <span class="text-accent mr-3 mt-1">✓</span>
                  <span>{{ bullet }}</span>
                </li>
              </ul>
              <NuxtLink
                :to="localePath('/contact')"
                class="inline-flex items-center bg-accent text-white px-8 py-4 rounded font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20"
              >
                {{ $t('home.starter.cta') }}
              </NuxtLink>
            </div>
            <div class="lg:col-span-2 flex justify-center lg:justify-end">
              <div class="text-center">
                <div class="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-accent to-secondary-accent bg-clip-text text-transparent">
                  $1,500
                </div>
                <div class="text-sm opacity-70 mt-2 uppercase tracking-wider">2 weeks · flat fee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="h-px w-full bg-text opacity-10 my-8"></div>

      <!--
        Recent work — hidden until real case studies replace the placeholders.
        Flip `v-if="false"` to `v-if="true"` (or remove the directive) once
        the workItems data references real engagements.
      -->
      <section v-if="false" class="py-20 max-w-7xl mx-auto">
        <div class="mb-12 max-w-3xl">
          <h2 class="text-4xl font-bold tracking-tight mb-4">{{ $t('home.work.title') }}</h2>
          <p class="text-lg opacity-80">{{ $t('home.work.subhead') }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="item in workItems"
            :key="item.title"
            class="bg-secondary p-8 rounded-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div class="text-xs uppercase tracking-wider text-accent mb-3 opacity-80">
              {{ item.tag }}
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ item.title }}</h3>
            <p class="opacity-85 text-sm">{{ item.desc }}</p>
          </div>
        </div>
      </section>

      <!-- Bottom CTA -->
      <section class="py-20 max-w-7xl mx-auto">
        <div class="bg-gradient-to-r from-accent to-secondary-accent rounded-2xl p-10 md:p-16 text-white text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('home.cta_section.title') }}</h2>
          <p class="text-lg mb-8 max-w-2xl mx-auto opacity-95">{{ $t('home.cta_section.description') }}</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              :to="localePath('/contact')"
              class="px-8 py-4 bg-white text-accent font-bold rounded-lg hover:bg-opacity-90 transition-all"
            >
              {{ $t('home.cta_section.primary') }}
            </NuxtLink>
            <a
              :href="$t('common.phone_href')"
              class="px-8 py-4 bg-transparent border border-white font-semibold rounded-lg hover:bg-white/10 transition-all"
            >
              {{ $t('home.cta_section.secondary') }}
            </a>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Navbar from '~/components/Navbar.vue';

const { t } = useI18n();
const localePath = useLocalePath();

const proofItems = computed(() => [
  { icon: '🌎', title: t('home.proof.bilingual_title'), desc: t('home.proof.bilingual_desc') },
  { icon: '📍', title: t('home.proof.local_title'), desc: t('home.proof.local_desc') },
  { icon: '💵', title: t('home.proof.price_title'), desc: t('home.proof.price_desc') },
  { icon: '🚀', title: t('home.proof.speed_title'), desc: t('home.proof.speed_desc') }
]);

const services = computed(() => [
  { icon: '⚙️', title: t('home.services.automation_title'), desc: t('home.services.automation_desc') },
  { icon: '🔄', title: t('home.services.data_title'), desc: t('home.services.data_desc') },
  { icon: '📱', title: t('home.services.apps_title'), desc: t('home.services.apps_desc') }
]);

const processSteps = computed(() => [
  { title: t('home.process.step1_title'), desc: t('home.process.step1_desc') },
  { title: t('home.process.step2_title'), desc: t('home.process.step2_desc') },
  { title: t('home.process.step3_title'), desc: t('home.process.step3_desc') },
  { title: t('home.process.step4_title'), desc: t('home.process.step4_desc') }
]);

const starterBullets = computed(() => [
  t('home.starter.bullet_1'),
  t('home.starter.bullet_2'),
  t('home.starter.bullet_3'),
  t('home.starter.bullet_4')
]);

const workItems = computed(() => [
  { tag: 'ETL · Walmart supplier', title: t('home.work.placeholder_1_title'), desc: t('home.work.placeholder_1_desc') },
  { tag: 'Custom app · bilingual', title: t('home.work.placeholder_2_title'), desc: t('home.work.placeholder_2_desc') },
  { tag: 'Emergency rebuild', title: t('home.work.placeholder_3_title'), desc: t('home.work.placeholder_3_desc') }
]);
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease forwards;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
  pointer-events: none;
}

.feature-card:hover::before {
  transform: translateX(100%);
}
</style>
