// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  css: ["@/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/ui-pro"],
  ui: {
    theme: {
      colors: [
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "error",
        "neutral",
        "signup-waiting",
        "signup-start",
        "signup-end",
        "game-start",
        "game-end",
        "gender-m",
        "gender-f",
      ],
    },
  },
  runtimeConfig: {
    public: {
      authorEmail: process.env.NUXT_PUBLIC_AUTHOR_EMAIL,
      authorName: process.env.NUXT_PUBLIC_AUTHOR_NAME,
      authorUrl: process.env.NUXT_PUBLIC_AUTHOR_URL,
    },
  },
})
