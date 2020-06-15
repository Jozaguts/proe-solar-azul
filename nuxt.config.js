const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/proe-solar-azul/'
  }
} : {}

module.exports = {
  ...routerBase,
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main.scss',
    '~assets/css/animate.css',
    '~assets/css/fontawesome.min.css',
    '~assets/css/fonts.css',
    '~assets/css/magnific-popup.css',
    '~assets/css/style.css',
    '~assets/css/swiper.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: 'plugins/owl-carousel.js', ssr: false },
    '~/plugins/vee-validate.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'vue-scrollto/nuxt',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: ["vee-validate/dist/rules"],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
