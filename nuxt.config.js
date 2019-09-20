import colors from 'vuetify/es5/util/colors'

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
        content: 'https://olivebodycare.healthcare'
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
        content: 'https://olivebodycare.healthcare/images/hed_1.jpg'
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
   ** Plugins to load before mounting the App
   */
  plugins: [],

  vuetify: {
    // vuetify-loaderやstylus-loaderを使用するための設定
    treeShake: true,
    theme: {
      primary: '#4169e1',
      accent: '#ff5959',
      secondary: '#ffc0cb',
      info: '#fff0f5',
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    ['@nuxtjs/google-tag-manager', {
      id: 'GTM-P4S32NS',
      pageTracking: true,
      dev: process.env.NODE_ENV !== 'production'
    }],
    '@nuxtjs/sitemap' // 一番後ろにする必要あり
  ],

  buildModules: [
    '@nuxtjs/vuetify'
  ],

  sitemap: {
    hostname: 'https://olivebodycare.healthcare/',
    gzip: true
  },

  /*
   ** Build configuration
   */
  build: {
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
