<template>
  <header
    class="fixed top-0 w-full px-[5%] py-8 flex justify-between items-center z-50 backdrop-filter backdrop-blur-lg bg-background/95 transition-all duration-300"
    :class="{ 'py-4': scrolled }"
  >
    <NuxtLink :to="localePath('/')" class="logo text-2xl font-bold tracking-tighter">
      <img src="~/assets/logos/Single Logo White.png" alt="10 Bit Technology" class="hidden sm:block w-24 md:w-32" />
      <img src="~/assets/logos/Logo Glyph.png" alt="10 Bit Technology" class="block sm:hidden w-8" />
    </NuxtLink>

    <nav class="flex items-center md:gap-6 gap-3">
      <ul class="flex items-center md:gap-8 gap-3">
        <li v-for="item in navItems" :key="item.key">
          <NavLink :href="item.href" :active="activeTab === item.key">
            {{ item.label }}
          </NavLink>
        </li>
      </ul>

      <!-- Language toggle -->
      <div class="hidden sm:flex items-center text-xs font-semibold tracking-wider ml-4 border-l border-text/20 pl-4">
        <button
          @click="changeLocale('en')"
          :class="[
            'px-2 py-1 transition-colors',
            locale === 'en' ? 'text-accent' : 'text-text/60 hover:text-text'
          ]"
          aria-label="Switch to English"
        >
          EN
        </button>
        <span class="text-text/30">·</span>
        <button
          @click="changeLocale('es')"
          :class="[
            'px-2 py-1 transition-colors',
            locale === 'es' ? 'text-accent' : 'text-text/60 hover:text-text'
          ]"
          aria-label="Cambiar a español"
        >
          ES
        </button>
      </div>

      <!-- Mobile language toggle (compact) -->
      <button
        @click="toggleLocale"
        class="sm:hidden px-2 py-1 text-xs font-semibold tracking-wider border border-text/30 rounded text-text/80 hover:text-accent hover:border-accent transition-colors"
        :aria-label="locale === 'en' ? 'Cambiar a español' : 'Switch to English'"
      >
        {{ locale === 'en' ? 'ES' : 'EN' }}
      </button>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

defineProps({
  activeTab: {
    type: String,
    default: ''
  }
});

const { t, locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();

// Nav items use stable English keys so the `activeTab` prop on each page
// keeps working without translating the comparison string.
const navItems = computed(() => [
  { key: 'Home', label: t('nav.home'), href: '/' },
  { key: 'Solutions', label: t('nav.solutions'), href: '/solutions' },
  { key: 'Team', label: t('nav.team'), href: '/developers' },
  { key: 'Contact', label: t('nav.contact'), href: '/contact' }
]);

const changeLocale = (newLocale) => {
  if (locale.value !== newLocale) {
    window.location.href = switchLocalePath(newLocale);
  }
};

const toggleLocale = () => {
  changeLocale(locale.value === 'en' ? 'es' : 'en');
};

const scrolled = ref(false);
const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped></style>
