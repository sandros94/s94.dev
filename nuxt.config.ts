// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  extends: ['gh:sandros94/ui#f77b037'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxthub/core',
    '@nuxt/image',
    '@nuxtjs/mdc',
    '@nuxt/content',
  ],

  hub: {
    database: true,
    kv: true,
    blob: true,
    cache: true,
  },

  nitro: {
    experimental: {
      openAPI: true
    }
  },

  content: {
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    },
  },

  vite: {
    build: {
      rollupOptions: {
        external: [
          'shiki/onig.wasm',
        ],
      },
    },
  },
})
