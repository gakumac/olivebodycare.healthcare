import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang: 'ja'
    },
    titleTemplate: '%s｜整体・骨盤矯正の女性専門の治療院オリーヴボディケア',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。国家資格取得の女性スタッフによる本格施術が受けれます。お子様連れ歓迎。マッサージ、不妊、鍼もお任せ下さい！'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '整体・骨盤矯正の女性専門の治療院オリーヴボディケア'
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
        content: '整体・骨盤矯正の女性専門の治療院オリーヴボディケア'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。国家資格取得の女性スタッフによる本格施術が受けれます。お子様連れ歓迎。マッサージ、不妊、鍼もお任せ下さい！'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://olivebodycare.healthscare/images/hed_1.jpg'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      // vuetifyのcssをCDNから取得
      // 参考：https://V15.vuetifyjs.com/ja/getting-started/quick-start
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/vuetify@1.x/dist/vuetify.min.css'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vuetify'],

  vuetify: {},

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
