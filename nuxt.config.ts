// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  colorMode: {
    classSuffix: "",
  },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
  ],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  nitro: {
    preset: "github-pages",
  },
  app: {
    baseURL: "/nuxtflix/",
  },
  router: {
    options: {
      hashMode: false, 
    },
  },
});
