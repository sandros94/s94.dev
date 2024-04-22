import tailwindTypography from '@tailwindcss/typography'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
  ],
  hub: {
    database: true,
    kv: true,
    blob: false,
    cache: true,
  },
  nitro: {
    experimental: {
      openAPI: true
    }
  },
  ui: {
    icons: {},
  },
  tailwindcss: {
    config: {
      content: [],
      plugins: [tailwindTypography],
    },
  },
  content: {
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'vitesse-dark',
      },
      themes: [
        {
          
        }
      ]
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
  runtimeConfig: {
    oldBackend: {
      baseURL: ''
    }
  }
})

