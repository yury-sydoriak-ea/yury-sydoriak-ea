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
          src: "https://web.cmp.usercentrics.eu/ui/loader.js",
          type: "application/javascript",
        id: "usercentrics-cmp",
        "data-ruleset-id": "y3gXuK6uG_sUwg",
        async: true,
        },
      ],
    },
  },
})
