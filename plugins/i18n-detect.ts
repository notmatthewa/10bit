export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) return; // Ensure this only runs on the client-side

  try {
    const userLang = navigator.language || navigator.userLanguage; // Detect browser language
    const detectedLang = userLang.split('-')[0]; // Extract the primary language code

    // Access the i18n instance from Nuxt
    const i18n = nuxtApp.$i18n;

    if (i18n && i18n.availableLocales.includes(detectedLang)) {
      i18n.locale = detectedLang; // Set the detected language
    }
  } catch (error) {
    console.log('Language detection error:', error);
  }
});
