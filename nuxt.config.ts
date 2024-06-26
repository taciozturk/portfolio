// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxt/content", "@tresjs/nuxt"],
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  content: {
    highlight: {
      langs: ["c", "cpp", "java", "python", "swift"],
      theme: {
        // Default theme (same as single string)
        default: "catppuccin-mocha",
        // Theme used if `html.dark`
        dark: "catppuccin-mocha",
        // Theme used if `html.sepia`
        light: "catppuccin-mocha",
      },
    },
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
});
