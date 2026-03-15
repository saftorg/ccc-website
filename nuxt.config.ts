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

  app: {
    head: {
      title: "Confident Christian Conversations",
      meta: [
        {
          name: "description",
          content:
            "A free 6-month apologetics training programme in partnership with Reasonable Faith and Ratio Christi. Equipping Indian Christians to defend their faith in campuses, workplaces, and communities.",
        },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
    },
  },
});

