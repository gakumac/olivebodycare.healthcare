<template>
  <div>
    <pagetitle h1="横浜青葉台店" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <v-container grid-list-md>
      <v-layout>
        <v-flex>
          <div class="my-2 text-xs-center">
            <v-icon x-large class="brown--text">place</v-icon>
          </div>
          <h2 class="my-2 brown--text text-xs-center">
            ご来院にあたって
          </h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 md10>
          <h3 class="my-3 accent--text text-xs-center">
            東急田園都市線青葉台駅より徒歩3分
          </h3>
          <p>
            東急田園都市線青葉台駅より徒歩3分
          </p>
        </v-flex>
        <v-flex xs6 md5>
          <v-img
            :src="require('@/assets/images/salon/salonaoba17.jpg')"
          ></v-img>
        </v-flex>
        <v-flex xs6 md5>
          <v-img
            :src="require('@/assets/images/salon/salonaoba18.jpg')"
          ></v-img>
        </v-flex>
        <v-container>
          <div v-for="(item, i) in items" :key="i" class="mt-2">
            <v-layout row wrap>
              <v-flex xs3 md3>
                <div class="subheading red--text font-weight-bold">
                  {{ item.title }}
                </div>
              </v-flex>
              <v-flex xs9 md9>
                <div>
                  <span class="subheading">{{ item.contents }}</span>
                </div>
              </v-flex>
            </v-layout>
            <hr />
          </div>
        </v-container>
        <v-flex xs12 md10>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.524672126769!2d139.51405901574515!3d35.540742280227214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f95ba673c72d%3A0x548a6d2a4178fc56!2z5aWz5oCn5bCC6ZaA44Gu5rK755mC6Zmi44Kq44Oq44O844O044Oc44OH44Kj44Kx44Ki6Z2S6JGJ5Y-w5bqX!5e0!3m2!1sja!2sjp!4v1564983221640!5m2!1sja!2sjp"
            width="100%"
            height="300px"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </v-flex>
      </v-layout>
    </v-container>
    <Aobavisit />
    <Aobamessage />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import Aobavisit from '~/components/salon/Aobavisit.vue'
import Aobamessage from '~/components/salon/Aobamessage.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    Aobavisit,
    Aobamessage
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '横浜青葉台店（青葉台駅徒歩3分）',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。田園都市線青葉台駅を降り、左手に進みジョナサンを過ぎた最初のT字路を渡ったすぐの建物に当院がございます。',
        type: 'website',
        url: 'https://olivebodycare.healthcare/salon/aobadai',
        image: 'https://olivebodycare.healthcare/assets/images/hed_1.jpg'
      },
      itemsB: [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: '治療院一覧',
          disabled: false,
          href: '/salon'
        },
        {
          text: '横浜青葉台店',
          disabled: true,
          href: '/salon/aobadai'
        }
      ],
      items: [
        {
          title: '住所',
          contents: '〒227-0063　横浜市青葉区榎が丘2-1ビンセプト502'
        },
        {
          title: 'アクセス',
          contents: '東急田園都市線青葉台駅より徒歩3分'
        },
        {
          title: '営業時間',
          contents: '10 : 00〜20 : 00、休診：不定休'
        },
        {
          title: '電話',
          contents: '045-530-3903　完全予約制'
        }
      ]
    }
  }
}
</script>
