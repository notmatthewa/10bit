<template>
  <div class="min-h-screen bg-background text-text">
    <Navbar activeTab="Solutions" />

    <main class="pt-32 px-[5%] pb-20">
      <div class="max-w-7xl mx-auto">
        <!-- Page Header -->
        <div class="text-center section-spacing">
          <p class="text-sm uppercase tracking-widest font-semibold text-accent mb-4">
            {{ $t('solutions.page_header.eyebrow') }}
          </p>
          <h1
            class="text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight mb-6 bg-gradient-to-r from-accent to-secondary-accent bg-clip-text text-transparent"
          >
            {{ $t('solutions.page_header.title') }}
          </h1>
          <p class="text-xl max-w-3xl mx-auto opacity-80">
            {{ $t('solutions.page_header.description') }}
          </p>
        </div>

        <!-- The three service lines -->
        <section class="section-spacing">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="(service, index) in localizedServices"
              :key="index"
              class="bg-secondary rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col"
            >
              <div class="text-5xl text-accent mb-6">{{ service.icon }}</div>
              <h3 class="text-2xl font-bold mb-4">{{ service.title }}</h3>
              <p class="mb-6 opacity-85 flex-1">{{ service.description }}</p>
              <div class="border-t border-text/10 pt-5">
                <p class="text-xs uppercase tracking-wider opacity-60 mb-3">Includes</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="cap in service.capabilities"
                    :key="cap"
                    class="px-3 py-1 bg-accent/10 text-accent text-xs rounded badge"
                  >
                    {{ cap }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Industries -->
        <section class="section-spacing">
          <div class="mb-10 max-w-3xl">
            <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {{ $t('solutions.industries_section.title') }}
            </h2>
            <p class="text-lg opacity-80">
              {{ $t('solutions.industries_section.subhead') }}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              v-for="(industry, index) in localizedIndustries"
              :key="index"
              class="bg-secondary rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div class="h-20 bg-gradient-to-r from-accent/10 to-secondary-accent/10 p-6 flex items-start justify-start">
                <div class="text-3xl">{{ industry.icon }}</div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-3">{{ industry.name }}</h3>
                <p class="mb-5 opacity-85">{{ industry.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="feature in industry.features"
                    :key="feature"
                    class="my-1 px-2 bg-accent/10 text-accent whitespace-nowrap badge"
                  >
                    {{ feature }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Why us -->
        <section class="section-spacing">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-10">
            {{ $t('solutions.why_section.title') }}
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(item, index) in localizedWhy"
              :key="index"
              class="bg-secondary rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div class="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center text-2xl text-accent mb-6">
                {{ item.icon }}
              </div>
              <h3 class="text-xl font-semibold mb-3">{{ item.title }}</h3>
              <p class="opacity-85">{{ item.description }}</p>
            </div>
          </div>
        </section>

        <!-- Contact CTA -->
        <section class="bg-gradient-to-r from-accent to-secondary-accent rounded-2xl p-10 md:p-16 text-white">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('solutions.cta_section.title') }}</h2>
            <p class="text-lg mb-8 opacity-95">{{ $t('solutions.cta_section.description') }}</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink
                :to="localePath('/contact')"
                class="px-8 py-4 bg-white text-accent font-bold rounded-lg hover:bg-opacity-90 transition-all"
              >
                {{ $t('solutions.cta_section.primary') }}
              </NuxtLink>
              <NuxtLink
                :to="localePath('/contact')"
                class="px-8 py-4 bg-transparent border border-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                {{ $t('solutions.cta_section.secondary') }}
              </NuxtLink>
            </div>
          </div>
        </section>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const { tm } = useI18n();
const localePath = useLocalePath();

const localizedServices = computed(() => tm('solutions.services'));
const localizedIndustries = computed(() => tm('solutions.industries'));
const localizedWhy = computed(() => tm('solutions.why'));
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease forwards;
}

.section-spacing {
  margin-bottom: 5rem;
}

.badge {
  font-size: 0.8rem;
  border: 1px solid #373737;
  border-radius: 3px;
}
</style>
