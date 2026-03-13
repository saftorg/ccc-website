// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/a11y",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/hints",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
  ],
  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",
});

