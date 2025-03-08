<template>
  <div class="min-h-screen bg-background">
    <Navbar activeTab="Solutions" />

    <main class="pt-32 px-[5%] pb-20">
      <div class="max-w-7xl mx-auto">
        <!-- Page Header -->
        <div class="text-center section-spacing">
          <h1
            class="text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight mb-6 bg-gradient-to-r from-accent to-secondary-accent bg-clip-text text-transparent">
            {{ $t('solutions.page_header.title') }}
          </h1>
          <p class="text-xl max-w-3xl mx-auto opacity-80">
            {{ $t('solutions.page_header.description') }}
          </p>
        </div>

        <!-- Solutions Overview -->
        <section class="pb-20">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(solution, index) in localizedSolutionCategories" :key="index"
              class="bg-secondary rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg p-8">
              <div class="text-4xl text-accent mb-6">{{ solution.icon }}</div>
              <h3 class="text-2xl font-bold mb-4">{{ solution.title }}</h3>
              <p class="mb-6 opacity-80">{{ solution.description }}</p>
            </div>
          </div>
        </section>

        <!-- Industry Solutions -->
        <section class="section-spacing">
          <h2 class="text-3xl font-bold tracking-tight mb-6">{{ $t('solutions.industry_section.title') }}</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="(industry, index) in localizedIndustrySolutions" :key="index"
              class="bg-secondary rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div class="h-20 bg-gradient-to-r from-accent/10 to-secondary-accent/10 p-6 flex items-start justify-start">
                <div class="text-3xl">{{ industry.icon }}</div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-4">{{ industry.name }}</h3>
                <p class="mb-5">{{ industry.description }}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span v-for="feature in industry.features" :key="feature"
                    class="my-1 px-2 bg-accent/10 text-accent whitespace-nowrap badge">
                    {{ feature }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Technology Benefits -->
        <section class="section-spacing">
          <h2 class="text-3xl font-bold tracking-tight mb-6">{{ $t('solutions.benefits_section.title') }}</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(benefit, index) in localizedTechnologyBenefits" :key="index"
              class="bg-secondary rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div class="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center text-2xl text-accent mb-6">
                {{ benefit.icon }}
              </div>
              <h3 class="text-xl font-semibold mb-4">{{ benefit.title }}</h3>
              <p class="opacity-80">{{ benefit.description }}</p>
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section class="bg-gradient-to-r from-accent to-secondary-accent rounded-2xl p-10 text-white">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-6">{{ $t('solutions.contact_section.title') }}</h2>
            <p class="mb-8">{{ $t('solutions.contact_section.description') }}</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#"
                class="px-8 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-opacity-90 transition-all">
                {{ $t('solutions.contact_section.book_call') }}
              </a>
              <a href="#"
                class="px-8 py-3 bg-transparent border border-white font-semibold rounded-lg hover:bg-white/10 transition-all">
                {{ $t('solutions.contact_section.contact_sales') }}
              </a>
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
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();
const route = useRoute();

// Get current language from route or default to 'en'
const getLanguage = computed(() => {
  const lang = route.fullPath.split('/')[1];
  return ['en', 'es'].includes(lang) ? lang : 'en';
});

// Get localized solution categories using tm()
const localizedSolutionCategories = computed(() => {
  return tm('solutions.solution_categories');
});

// Get localized industry solutions using tm()
const localizedIndustrySolutions = computed(() => {
  return tm('solutions.industry_solutions');
});

// Get localized technology benefits using tm()
const localizedTechnologyBenefits = computed(() => {
  return tm('solutions.technology_benefits');
});
</script>

<style scoped>
/* Animations */
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

/* Gradient text effect for headings */
.gradient-text {
  background: linear-gradient(to right, var(--accent-color), var(--secondary-accent-color));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.section-spacing {
  margin-bottom: 4rem;
}

.badge {
  font-size: 0.8rem;
  border: 1px solid #373737;
  border-radius: 3px;
}
</style>
