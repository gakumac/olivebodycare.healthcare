<template>
  <div>
    <pagetitle h1="治療院一覧" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <v-container>
      <v-layout>
        <v-flex>
          <div class="my-2 text-xs-center">
            <v-icon x-large class="brown--text">place</v-icon>
          </div>
          <h2 class="my-2 brown--text text-xs-center">
            治療院一覧・詳細
          </h2>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 md10>
          <v-card class="my-2" color="info">
            <h3 class="py-2 accent--text text-xs-center">
              たまプラーザ本店
            </h3>
            <v-layout row wrap>
              <v-flex xs12 md6 class="mb-2 text-xs-center">
                <nuxt-link to="/salon/tamaplaza">
                  <v-btn color="primary" dark>
                    <span class="font-weight-bold body-2"
                      >たまプラーザ店詳しくはこちら</span
                    >
                  </v-btn>
                </nuxt-link>
              </v-flex>
              <v-flex xs12 md6 class="mb-2 text-xs-center">
                <v-btn
                  a
                  href="https://reserve.olivebodycare.healthcare/"
                  dark
                  color="light-green darken-2"
                >
                  <span class="font-weight-bold body-2"
                    >たまプラーザ店予約は今すぐこちら！</span
                  >
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 md10>
          <v-card class="my-2" color="info">
            <h3 class="py-2 accent--text text-xs-center">
              横浜青葉台店（7月オープン！）
            </h3>
            <v-layout row wrap>
              <v-flex xs12 md6 class="mb-2 text-xs-center">
                <nuxt-link to="/salon/aobadai">
                  <v-btn color="primary" dark>
                    <span class="font-weight-bold body-2"
                      >横浜青葉台店詳しくはこちら</span
                    >
                  </v-btn>
                </nuxt-link>
              </v-flex>
              <v-flex xs12 md6 class="mb-2 text-xs-center">
                <v-btn
                  a
                  href="https://olivebodycare.healthcare/"
                  disabled
                  color="light-green darken-2"
                >
                  <span class="font-weight-bold body-2"
                    >横浜青葉台店予約は今すぐこちら！</span
                  >
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 md10>
          <v-card class="my-2" color="info">
            <h3 class="py-2 accent--text text-xs-center">
              札幌円山町店（11月オープン！）
            </h3>
            <v-layout row wrap>
              <v-flex xs12 md6 class="mb-2 text-xs-center">
                <nuxt-link to="/salon/maruyamacho">
                  <v-btn color="primary" dark>
                    <span class="font-weight-bold body-2"
                      >札幌円山町店詳しくはこちら</span
                    >
                  </v-btn>
                </nuxt-link>
              </v-flex>
              <v-flex xs12 md6 class="mb-2 text-xs-center">
                <v-btn
                  a
                  href="https://olivebodycare.healthcare/"
                  disabled
                  color="light-green darken-2"
                >
                  <span class="font-weight-bold body-2"
                    >札幌円山町店予約は今すぐこちら！</span
                  >
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <accesstop />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import Accesstop from '~/components/index/Accesstop.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    Accesstop
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '治療院一覧',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。各治療院のご紹介です。国家資格取得の女性スタッフによる本格施術で、女性本来の健康な身体を取り戻しましょう！',
        type: 'website',
        url: 'https://olivebodycare.healthscare/salon',
        image: 'https://olivebodycare.healthscare/assets/images/hed_1.jpg'
      },
      itemsB: [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: '治療院一覧',
          disabled: true,
          href: '/salon'
        }
      ]
    }
  }
}
</script>
