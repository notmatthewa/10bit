<template>
  <div class="min-h-screen bg-background">
    <Navbar activeTab="Developers" />

    <main class="pt-32 px-[5%] pb-20">
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-7xl mx-auto">
        <!-- header -->
        <header class="text-center">
          <h1 class="text-4xl font-bold mb-4">{{ $t('developers.header') }}</h1>
          <p class="text-lg opacity-80">{{ $t('developers.subheader') }}</p>
        </header>

        <!-- DevCard Container -->
        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <DevCard v-for="(dev, index) in localizedDevelopers" :key="index" :dev="dev" />
        </section>

        <!-- Join the Community -->
        <section class="bg-gradient-to-r from-accent to-secondary-accent rounded-2xl p-10 text-white">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-6">{{ $t('developers.title') }}</h2>
            <p class="mb-8">{{ $t('developers.description') }}</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" class="px-8 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-opacity-90 transition-all">
                {{ $t('developers.contact') }}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer class="py-12 px-[5%] text-center">
      <div class="w-full grid grid-cols-1 place-content-center place-items-center mb-4">
        <img class="w-8 h-8 rounded" src="~/assets/logos/Logo Glyph.png" />
      </div>
      <p class="text-sm opacity-60 mb-4">{{ $t('home.copyright') }}</p>
      <div class="flex justify-center items-center">
        <button @click="$i18n.locale = 'en'" class="flex items-center gap-2 px-4 py-2 rounded text-xl">
          🇺🇸
        </button>
        <button @click="$i18n.locale = 'en'" class="flex items-center gap-2 py-2 rounded text-xs">
          ❤️
        </button>
        <button @click="$i18n.locale = 'es'" class="flex items-center gap-2 px-4 py-2 rounded text-xl">
          🇲🇽
        </button>
      </div>
    </footer>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  const featuredDevelopers = {
    en: [  
      {
        name: 'Carlos Hernandez',
        initials: 'CH',
        title: 'Software Engineer',
        bio: 'Specializes in creating responsive and accessible interfaces for full-stack applications.',
        skills: ['Nuxt.js', 'Vue', 'Python', 'Tailwind'],
        profileUrl: 'https://www.linkedin.com/in/carlos-hernandez-8b0b552a9/'
      },
      {
        name: 'Matthew Anderson',
        initials: 'MA',
        title: 'API Developer',
        bio: 'Building scalable API solutions for modern web and mobile applications.',
        skills: ['REST', 'FastAPI', 'Python', 'Kubernetes'],
        profileUrl: 'https://www.linkedin.com/in/matthew-anderson-a6254a192/'
      }
    ],
    es: [
      {
        name: "Carlos Hernandez",
        initials: "CH",
        title: "Ingeniero de Software",
        bio: "Especializado en crear interfaces accesibles y responsivas para aplicaciones full-stack.",
        skills: ["Nuxt.js", "Vue", "Python", "Tailwind"],
        profileUrl: "https://www.linkedin.com/in/carlos-hernandez-8b0b552a9/"
      },
      {
        name: "Matthew Anderson",
        initials: "MA",
        title: "Desarrollador de API",
        bio: "Construyendo soluciones API escalables para aplicaciones web y móviles modernas.",
        skills: ["REST", "FastAPI", "Python", "Kubernetes"],
        profileUrl: "https://www.linkedin.com/in/matthew-anderson-a6254a192/"
      }
    ]
  };

  const route = useRoute();
  const getLanguage = computed(() => {
    const lang = route.fullPath.split('/')[1];
    return Object.keys(featuredDevelopers).includes(lang) ? lang : 'en';
  });

  const localizedDevelopers = computed(() => featuredDevelopers[getLanguage.value]);

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