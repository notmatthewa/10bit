<template>
  <footer class="py-12 px-[5%] text-center">
    <div class="w-full grid grid-cols-1 place-content-center place-items-center mb-4">
      <img class="w-8 h-8 rounded" src="~/assets/logos/Logo Glyph.png" />
    </div>
    <p class="text-sm opacity-60 mb-2 mt-4">{{ $t('home.copyright') }}</p>
    <div class="flex justify-center items-center">
      <NuxtLink @click="changeLocale('en')" class="flex items-center gap-2 px-4 py-2 rounded text-xl">
        <Icon name="twemoji:flag-for-flag-united-states" />
      </NuxtLink>
      <span class="flex items-center gap-2 py-2 rounded text-xs">
        ❤️
      </span>
      <NuxtLink @click="changeLocale('es')" class="flex items-center gap-2 px-4 py-2 rounded text-xl">
        <Icon name="twemoji:flag-for-flag-mexico" />
      </NuxtLink>
    </div>
  </footer>
</template>

<script setup>
import { useSwitchLocalePath, useI18n } from "#imports";

const switchLocalePath = useSwitchLocalePath();
const { locale } = useI18n();

const changeLocale = (newLocale) => {
  if (locale.value !== newLocale) {
    window.location.href = switchLocalePath(newLocale); // Forces a full page reload
  }
};
</script>
