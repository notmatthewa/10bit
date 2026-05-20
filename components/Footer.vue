<template>
  <footer class="py-12 px-[5%] border-t border-text/10">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">
        <!-- Brand + location -->
        <div class="text-center md:text-left">
          <img class="w-10 h-10 rounded mx-auto md:mx-0 mb-3" src="~/assets/logos/Logo Glyph.png" alt="10 Bit Technology" />
          <p class="font-semibold">{{ $t('common.company') }}</p>
          <p class="text-sm opacity-70">{{ $t('common.based_in') }}</p>
        </div>

        <!-- Contact -->
        <div class="text-center md:text-left">
          <p class="text-xs uppercase tracking-wider opacity-60 mb-2">{{ $t('contact.info.title') }}</p>
          <a :href="`mailto:${$t('common.email')}`" class="block text-sm hover:text-accent transition-colors">{{ $t('common.email') }}</a>
          <a :href="$t('common.phone_href')" class="block text-sm hover:text-accent transition-colors">{{ $t('common.phone') }}</a>
        </div>

        <!-- Language toggle -->
        <div class="text-center md:text-right">
          <p class="text-xs uppercase tracking-wider opacity-60 mb-2">{{ $t('common.language_en') }} · {{ $t('common.language_es') }}</p>
          <div class="flex justify-center md:justify-end items-center">
            <NuxtLink @click="changeLocale('en')" class="flex items-center gap-2 px-3 py-2 rounded text-xl cursor-pointer">
              <Icon name="twemoji:flag-for-flag-united-states" />
            </NuxtLink>
            <span class="flex items-center gap-2 py-2 rounded text-xs">❤️</span>
            <NuxtLink @click="changeLocale('es')" class="flex items-center gap-2 px-3 py-2 rounded text-xl cursor-pointer">
              <Icon name="twemoji:flag-for-flag-mexico" />
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="border-t border-text/10 pt-6 text-center">
        <p class="text-xs opacity-60">{{ $t('common.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useSwitchLocalePath, useI18n } from '#imports';

const switchLocalePath = useSwitchLocalePath();
const { locale } = useI18n();

const changeLocale = (newLocale) => {
  if (locale.value !== newLocale) {
    window.location.href = switchLocalePath(newLocale);
  }
};
</script>
