// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  imports: {
    dirs: ["store"],
  },
  modules: ["@nuxt/devtools", "@pinia/nuxt", '@nuxtjs/tailwindcss'],
  extends: ["nuxt-seo-kit"],
  routeRules: {
    "/**": { robots: "index, follow" },
  },
  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL || "https://vue-ecom.vercel.app",
      siteName: "V-Store",
      siteDescription:
        "A Full StoreFront built with Nuxt 3 + Pinia 2 + Bootstrap 5....",
      language: "en-US",
    },
  },
  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },


  css: ["~/assets/styles/main.scss"], 
  css: ["~/assets/styles/my.scss"], 

  render: {
    csp: {
      hashAlgorithm: "sha256",
      policies: {
        "script-src": ["'self'", "*.vercel-insights.com"],
      },
      addMeta: true,
    },
  },
});
