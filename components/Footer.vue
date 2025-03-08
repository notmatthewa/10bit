<template>
  <footer class="py-12 px-[5%] text-center">
    <div class="w-full grid grid-cols-1 place-content-center place-items-center mb-4">
      <img class="w-8 h-8 rounded" src="~/assets/logos/Logo Glyph.png" />
    </div>
    <p class="text-sm opacity-60 mb-4">{{ $t(copyrightKey || 'home.copyright') }}</p>
    <div class="flex justify-center items-center">
      <!-- Using the same buttons as in your original code but with updated handlers -->
      <button @click="$i18n.locale = 'en'; updateRoute('en')" class="flex items-center gap-2 px-4 py-2 rounded text-xl">
        🇺🇸
      </button>
      <button class="flex items-center gap-2 py-2 rounded text-xs">
        ❤️
      </button>
      <button @click="$i18n.locale = 'es'; updateRoute('es')" class="flex items-center gap-2 px-4 py-2 rounded text-xl">
        🇲🇽
      </button>
    </div>
  </footer>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

// Allow custom copyright key to be passed as a prop
const props = defineProps({
  copyrightKey: {
    type: String,
    default: null
  }
});

const router = useRouter();
const route = useRoute();

// Function to update the route based on language
const updateRoute = (lang) => {
  // Get the current path
  const currentPath = route.path;

  // Parse the path into segments
  const pathSegments = currentPath.split('/').filter(segment => segment);

  let newPath;

  // If the first segment is a language code, replace it
  if (pathSegments.length > 0 && ['en', 'es'].includes(pathSegments[0])) {
    pathSegments[0] = lang;
    newPath = '/' + pathSegments.join('/');
  } else {
    // If no language segment exists, add the new language at the beginning
    newPath = '/' + lang + currentPath;
  }

  // Navigate to the new path without reloading the page
  router.push(newPath);
};
</script>
