// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', "nitro-cloudflare-dev", '@nuxtjs/i18n', '@nuxtjs/turnstile', '@nuxt/scripts', '@nuxt/icon'],
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
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ]
    }
  },
  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      autoSubfolderIndex: false
    }
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'es', iso: 'es-ES', name: 'Español' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default', // Uses /en/ and /es/
    detectBrowserLanguage: {
      useCookie: false,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'en' // Fallback if detection fails
    },
    vueI18n: 'i18n.config.ts' // External translation file
  },
  turnstile: {
    siteKey: '0x4AAAAAABAC2jiaOKMQfOzb',
    addValidateEndpoint: true
  },
  runtimeConfig: {
    turnstile: {
      // This can be overridden at runtime via the NUXT_TURNSTILE_SECRET_KEY
      // environment variable.
      secretKey: '',
    },
    NUXT_TWILIO_API_KEY: '' 
  }
})