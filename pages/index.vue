<template>
  <div class="min-h-screen bg-background text-text transition-all duration-300 overflow-x-hidden">
    <Navbar active-tab="Home" />

    <main class="mt-24 px-[5%]">
      <section class="hero h-[85vh] flex flex-col justify-center items-start max-w-7xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight pb-6 pr-6 bg-gradient-to-r from-accent to-secondary-accent bg-clip-text text-transparent transition-all duration-300 animate-fadeIn opacity-0" style="animation-delay: 0.2s;">
          {{ $t('home.title.first_line') }} <br /> {{ $t('home.title.second_line') }}
        </h1>
        <p class="text-xl md:text-2xl max-w-[600px] mb-12 animate-fadeIn opacity-0" style="animation-delay: 0.4s;">
          {{ $t('home.description') }}
        </p>
        <div class="flex items-center gap-4 animate-fadeIn opacity-0" style="animation-delay: 0.6s;">
          <a href="#" class="inline-flex items-center bg-accent text-white px-8 py-4 rounded gap-2 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20">
            {{ $t('home.contact') }}
          </a>
          <a href="#" class="inline-flex items-center bg-transparent text-text px-8 py-4 rounded gap-2 font-semibold transition-all duration-300 border border-text hover:-translate-y-0.5 hover:bg-secondary">
            {{ $t('home.projects') }}
          </a>
        </div>
      </section>

      <div class="h-px w-full bg-text opacity-10 my-12"></div>

      <section class="py-20 max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold tracking-tight mb-12">{{ $t('home.why_choose') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="feature-card bg-secondary p-8 rounded-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div class="text-4xl text-accent mb-6">◎</div>
            <h3 class="text-2xl font-semibold mb-4">{{ $t('home.features.solution_title') }}</h3>
            <p>{{ $t('home.features.solution_desc') }}</p>
          </div>
          <div class="feature-card bg-secondary p-8 rounded-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div class="text-4xl text-accent mb-6">◉</div>
            <h3 class="text-2xl font-semibold mb-4">{{ $t('home.features.future_title') }}</h3>
            <p>{{ $t('home.features.future_desc') }}</p>
          </div>
          <div class="feature-card bg-secondary p-8 rounded-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div class="text-4xl text-accent mb-6">◈</div>
            <h3 class="text-2xl font-semibold mb-4">{{ $t('home.features.security_title') }}</h3>
            <p>{{ $t('home.features.security_desc') }}</p>
          </div>
        </div>
      </section>
    </main>

    <Footer />

  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue';

// Component imports are handled automatically by Nuxt
</script>

<style scoped>
.bg-secondary-accent {
  background-color: var(--secondary-accent);
}

.bg-secondary {
  background-color: var(--secondary);
}

.border-text {
  border-color: var(--text);
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease forwards;
}

/* Subtle animation for feature cards */
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
}

.feature-card:hover::before {
  transform: translateX(100%);
}
</style>
