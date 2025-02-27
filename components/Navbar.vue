<template>
    <header 
      class="fixed top-0 w-full px-[5%] py-8 flex justify-between items-center z-50 backdrop-filter backdrop-blur-lg bg-background/80 transition-all duration-300"
      :class="{ 'py-4': scrolled }"
    >
        <div class="logo text-2xl font-bold tracking-tighter">
            <img src="~/assets/logos/Single Logo White.png" alt="10 Bit Technology" class="hidden sm:block w-24 md:w-32">
            <img src="~/assets/logos/Logo Glyph.png" alt="10 Bit Technology" class="block sm:hidden w-8">
        </div>
        <nav>
            <ul class="flex items-center md:gap-8 gap-4">
            <li v-for="item in navItems" :key="item.text">
                <NavLink :href="item.href">{{ item.text }}</NavLink>
            </li>
            </ul>
        </nav>
    </header>
</template>
  
<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const navItems = [
    { text: 'Products', href: '#' },
    { text: 'Solutions', href: '#' },
    { text: 'Developers', href: '#' },
    { text: 'Pricing', href: '#' }
  ];
  
  // Scroll effect for header
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

<style scoped>

</style>