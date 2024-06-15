// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  app:{
    head:{
      link: [{ rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }]
    }
  },
  css: ['~/assets/css/main.css'],
  modules: [],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['gsap'],
  },
})
