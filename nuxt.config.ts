// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  googleFonts: {
    families: {
      Audiowide: true,
      "42dot Sans": true,
    },
  },
})
