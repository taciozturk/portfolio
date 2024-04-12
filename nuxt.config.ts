// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxt/content"],
  devtools: { enabled: true },
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
});