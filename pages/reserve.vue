<template>
  <div>
    <pagetitle h1="24時間Web予約はこちらから" />
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
            治療院一覧
          </h2>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 md10>
          <v-card class="my-2" color="info">
            <h3 class="py-2 accent--text text-xs-center">
              たまプラーザ本店
            </h3>
            <v-layout row wrap justify-center>
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
              横浜青葉台店
            </h3>
            <v-layout row wrap justify-center>
              <v-flex xs12 md6 class="mb-2 text-xs-center">
                <v-btn
                  a
                  href="https://reserve.olivebodycare.healthcare/menus/?shopId=3&menuIndex=1"
                  dark
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
              札幌円山町店（9月6日オープン！）
            </h3>
            <v-layout row wrap justify-center>
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
  layout: 'reserve',
  components: {
    Pagetitle,
    Accesstop
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '24時間Web予約はこちらから',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。24時間Web予約はこちらからお進みください。カレンダーからお日にち・時間を選択してその場でご予約できます。',
        type: 'website',
        url: 'https://olivebodycare.healthscare/reserve',
        image: 'https://olivebodycare.healthscare/assets/images/hed_1.jpg'
      },
      itemsB: [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: '24時間Web予約はこちらから',
          disabled: true,
          href: '/reserve'
        }
      ]
    }
  }
}
</script>
