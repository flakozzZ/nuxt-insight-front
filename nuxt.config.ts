
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      charset: 'utf-8',
      title: 'Vanres',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
      'nuxt-icons'
    // 'nuxt-svgo',
  ],
  ssr: false,
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  // svgo: {
  //   autoImportPath: '~/assets/icons/'
  // },
  runtimeConfig: {
    baseURL: import.meta.env.VITE_BASE_URL
  },

})