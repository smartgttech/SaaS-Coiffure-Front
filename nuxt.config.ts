// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  // Typage Typescript Strict
  typescript: {
    strict: true,
    typeCheck: true,
  },

  // Tailwind via Vite Plugin (Tailwind Css V4)
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  // Fichier CSS Global
  css: ['~/assets/css/main.css'],

  devtools: { enabled: true }
})
