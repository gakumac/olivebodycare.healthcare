import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s｜女性専門の治療院オリーヴボディケア',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '共通ディスクリプション'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '女性専門の治療院オリーヴボディケア'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://olivebodycare.healthscare'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '女性専門の治療院オリーヴボディケア'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '共通ディスクリプション'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://olivebodycare.healthscare/assets/images/hed_1.jpg'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vuetify'],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],

  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
