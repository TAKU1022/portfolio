export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Uchida Takumiのポートフォリオ',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Uchida Takumiのポートフォリオサイトです。',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~/assets/scss/style.scss' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-scrollto',
    { src: '~/plugins/micromodal', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/google-fonts',
      {
        families: { Lora: [700] },
        display: 'swap',
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources', 'nuxt-lazy-load'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  styleResources: {
    scss: [
      '~/assets/scss/abstracts/_variables.scss',
      '~/assets/scss/abstracts/_mixins.scss',
    ],
  },
};
