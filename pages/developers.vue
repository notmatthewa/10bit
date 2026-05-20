<template>
  <div class="min-h-screen bg-background text-text">
    <Navbar activeTab="Team" />

    <main class="pt-32 px-[5%] pb-20">
      <div class="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
        <!-- Header -->
        <header class="text-center mb-12">
          <h1
            class="text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight mb-6 bg-gradient-to-r from-accent to-secondary-accent bg-clip-text text-transparent"
          >
            {{ $t('team.title') }}
          </h1>
          <p class="text-lg md:text-xl opacity-85 max-w-3xl mx-auto">{{ $t('team.subhead') }}</p>
        </header>

        <!-- DevCards -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DevCard v-for="(dev, index) in localizedDevelopers" :key="index" :dev="dev" />
        </section>

        <!-- Community / get in touch -->
        <section class="bg-gradient-to-r from-accent to-secondary-accent rounded-2xl p-10 md:p-16 text-white mt-8">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('team.community.title') }}</h2>
            <p class="text-lg mb-8 opacity-95">{{ $t('team.community.description') }}</p>
            <div class="flex justify-center">
              <NuxtLink
                :to="localePath('/contact')"
                class="px-8 py-4 bg-white text-accent font-bold rounded-lg hover:bg-opacity-90 transition-all"
              >
                {{ $t('team.community.cta') }}
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
import { useRoute } from 'vue-router';

const route = useRoute();
const localePath = useLocalePath();

const featuredDevelopers = {
  en: [
    {
      name: 'Carlos Hernandez',
      initials: 'CH',
      title: 'Software Engineer · Bilingual',
      bio: 'Builds responsive, accessible interfaces for full-stack applications. Leads bilingual scoping and front-end work.',
      skills: ['Nuxt.js', 'Vue', 'Python', 'Tailwind', 'EN / ES'],
      pl: 'Visit profile',
      profileUrl: 'https://www.linkedin.com/in/carlos-hernandez-8b0b552a9/'
    },
    {
      name: 'Matthew Anderson',
      initials: 'MA',
      title: 'API & Automation Engineer',
      bio: 'Builds scalable APIs, automation pipelines, and the back-end plumbing that makes everything work. Owns infrastructure and deployments.',
      skills: ['REST', 'FastAPI', 'Python', 'Kubernetes'],
      pl: 'Visit profile',
      profileUrl: 'https://www.linkedin.com/in/matthew-anderson-a6254a192/'
    }
  ],
  es: [
    {
      name: 'Carlos Hernandez',
      initials: 'CH',
      title: 'Ingeniero de Software · Bilingüe',
      bio: 'Construye interfaces accesibles y responsivas para aplicaciones full-stack. Lidera el alcance bilingüe y el trabajo de front-end.',
      skills: ['Nuxt.js', 'Vue', 'Python', 'Tailwind', 'EN / ES'],
      pl: 'Ver perfil',
      profileUrl: 'https://www.linkedin.com/in/carlos-hernandez-8b0b552a9/'
    },
    {
      name: 'Matthew Anderson',
      initials: 'MA',
      title: 'Ingeniero de APIs y Automatización',
      bio: 'Construye APIs escalables, pipelines de automatización y la plomería de back-end que hace funcionar todo lo demás. Dueño de infraestructura y despliegues.',
      skills: ['REST', 'FastAPI', 'Python', 'Kubernetes'],
      pl: 'Ver perfil',
      profileUrl: 'https://www.linkedin.com/in/matthew-anderson-a6254a192/'
    }
  ]
};

const getLanguage = computed(() => {
  const lang = route.fullPath.split('/')[1];
  return Object.keys(featuredDevelopers).includes(lang) ? lang : 'en';
});

const localizedDevelopers = computed(() => featuredDevelopers[getLanguage.value]);
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
</style>
