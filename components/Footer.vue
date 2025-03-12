<template>
  <footer class="py-12 px-[5%] text-center">
    <div class="w-full grid grid-cols-1 place-content-center place-items-center mb-4">
      <img class="w-8 h-8 rounded" src="~/assets/logos/Logo Glyph.png" />
    </div>
    <p class="text-sm opacity-60 mb-4">{{ 'home.copyright' }}</p>
    <div class="flex justify-center items-center">
      <!-- Using the same buttons as in your original code but with updated handlers -->
      <NuxtLink :to="switchLocalePath('en')" class="flex items-center gap-2 px-4 py-2 rounded text-xl">
        🇺🇸
      </NuxtLink>
      <span class="flex items-center gap-2 py-2 rounded text-xs">
        ❤️
      </span>
      <NuxtLink :to="switchLocalePath('es')" class="flex items-center gap-2 px-4 py-2 rounded text-xl">
        🇲🇽
      </NuxtLink>
    </div>
  </footer>
</template>

<script setup>
const switchLocalePath = useSwitchLocalePath()
</script>
