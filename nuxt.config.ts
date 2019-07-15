import NuxtConfiguration from "@nuxt/config";

const config: NuxtConfiguration = {
  mode: "universal",
  head: {
    title: "Staart UI",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Frontend admin UI for Staart"
      }
    ],
    link: [
      { rel: "mask-icon", color: "#673ab7", href: "/safari-pinned-tab.svg" },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/balloon-css/1.0.0/balloon.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://use.typekit.net/mov5itj.css"
      }
    ],
    script: [
      {
        type: "text/javascript",
        src:
          "https://polyfill.io/v3/polyfill.min.js?features=es5%2Ces6%2Ces7%2CrequestIdleCallback%2CBlob%2CIntersectionObserver%2CHTMLPictureElement%2CIntersectionObserverEntry%2CMutationObserver%2Cfetch%2ClocalStorage%2CPromise%2CPromise.prototype.finally"
      },
      {
        type: "text/javascript",
        src: "https://public-cdn.oswaldlabs.com/focus-visible.js",
        async: true
      },
      {
        type: "text/javascript",
        src: "https://platform.oswaldlabs.com/_/d1b9d3cd29.js",
        async: true
      }
    ]
  },
  loading: { color: "#492257" },
  css: [],
  plugins: [
    "~/plugins/axios",
    { src: "~/plugins/vue-notification", ssr: false },
    "~/plugins/vue-timeago",
    "~/plugins/meta-ctrl-enter",
    "~/plugins/filters",
    { src: "~/plugins/vuex-persist", ssr: false }
  ],
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/markdownit",
    "@bazzite/nuxt-netlify",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-79176349-16"
      }
    ]
  ],
  axios: {
    host:
      process.env.NODE_ENV === "production"
        ? "staart.caprover.oswaldlabs.com"
        : "localhost",
    https: process.env.NODE_ENV === "production",
    port: process.env.NODE_ENV === "production" ? 443 : 7007
  },
  scrollBehavior: function() {
    return { x: 0, y: 0 };
  },
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient && config && config.module) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        });
      }
    }
  }
};

export default config;
