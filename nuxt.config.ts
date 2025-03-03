// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  css: ['~/assets/css/main.css'],
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
  app: {
    head: {
      title: '10 Bit Technology | Digital Innovation',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Pioneering solutions with cutting-edge technology to transform the digital experience of tomorrow.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      autoSubfolderIndex: false
    }
  }
})
