// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  extends: ['gh:sandros94/ui/main#3281e19'],

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/content',
    'nuxt-surrealdb',
    'nuxt-auth-utils',
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

  ui: {
    icons: ['simple-icons', 'ph'],
  },

  surrealdb: {
    databases: {
      default: {
        host: 'https://surrealdb.s94.dev',
        ws: 'wss://surrealdb.s94.dev',
        NS: 's94',
        DB: 'website',
      },
      nasa: {
        host: 'https://surrealdb.s94.dev',
        ws: 'wss://surrealdb.s94.dev',
        NS: 'demo',
        DB: 'nasa',
      },
    },
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