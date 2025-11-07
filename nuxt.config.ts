// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },
  app: {
    head: {
      script: [
        {
          src: "http://127.0.0.1:8080/loader.js",
          type: "application/javascript",
        id: "usercentrics-cmp",
        "data-settings-id": "IjaOij_6w",
        async: true,
        },
      ],
    },
  },
})
