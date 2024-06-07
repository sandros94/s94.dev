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

  fonts: {
    families: [
      {
        name: 'Montserrat',
        provider: 'google',
        weights: [
          100,
          200,
          300,
          400,
          500,
          600,
          700,
          800,
          900,
        ],
      },
      {
        name: 'Newsreader',
        provider: 'google',
        weights: [
          400,
          500,
          600,
          700,
        ],
      },
      {
        name: 'Fira Code',
        provider: 'google',
        weights: [
          300,
          400,
          500,
          600,
          700,
        ],
      },
    ],
  },

  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Montserrat'],
            serif: ['Newsreader'],
            mono: ['Fira Code'],
          },
        },
      },
    },
  },

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
