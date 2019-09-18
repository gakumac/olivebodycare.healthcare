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

  css: [
    '@/assets/style/main.scss',
  ],

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-146789861-1'
      }
    ],
    '@nuxtjs/sitemap' // 一番後ろにする必要あり
  ],

  vuetify: {
    optionsPath: '~/vuetify.options.js'
  },

  buildModules: [
    '@nuxtjs/vuetify', // 速度改善のため、buildModulesにする必要がある
  ],

  sitemap: {
    hostname: 'https://olivebodycare.healthcare/',
    gzip: true
  },

  /*
   ** Build configuration
   */
  build: {
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
