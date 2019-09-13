<template>
  <div>
    <pagetitle h1="札幌円山店" />
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
            札幌円山店ご来院にあたって
          </h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 md10>
          <h3 class="my-3 accent--text text-xs-center">
            地下鉄円山公園６番出口から徒歩５分または地下鉄西18丁目１番出口から徒歩７分
          </h3>
          <p class="text-xs-center">
            地下鉄円山公園６番出口から近くデザイナーズマンション内の女性だけのプライベート空間です。
          </p>
        </v-flex>
        <v-flex xs6 sm5 md5 lg4 xl3>
          <v-img
            :src="require('@/assets/images/salon/salonmaruyama23.jpg')"
          ></v-img>
        </v-flex>
        <v-flex xs6 sm5 md5 lg4 xl3>
          <v-img
            :src="require('@/assets/images/salon/salonmaruyama24.jpg')"
          ></v-img>
        </v-flex>
        <v-container>
          <v-layout justify-center>
            <v-flex xl8>
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
            </v-flex>
          </v-layout>
        </v-container>
        <v-flex xs12 md10>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182.2079902533404!2d141.32396282148622!3d43.05557191899343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9b3fd242a4c92d1!2z5aWz5oCn5bCC6ZaA44Gu5rK755mC6Zmi44Kq44Oq44O844O044Oc44OH44Kj44Kx44Ki5pyt5bmM5YaG5bGx5bqX!5e0!3m2!1sja!2sjp!4v1565835828826!5m2!1sja!2sjp"
            width="100%"
            height="300px"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </v-flex>
      </v-layout>
    </v-container>
    <Maruyamamessage />
    <Maruyamavoice />
    <Maruyamavisit />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import Maruyamamessage from '~/components/salon/Maruyamamessage.vue'
import Maruyamavoice from '~/components/salon/Maruyamavoice.vue'
import Maruyamavisit from '~/components/salon/Maruyamavisit.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    Maruyamamessage,
    Maruyamavoice,
    Maruyamavisit
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '札幌円山店（札幌市中央区）',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。国家資格取得の女性スタッフによる本格施術が受けれます。お子様連れ歓迎。マッサージ、不妊、鍼もお任せ下さい！',
        type: 'website',
        url: 'https://olivebodycare.healthcare/salon/maruyama',
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
          text: '札幌円山店',
          disabled: true,
          href: '/salon/maruyama'
        }
      ],
      items: [
        {
          title: '住所',
          contents:
            '〒064-0811　札幌市中央区南1条西22丁目2-21パラッツォ裏参道302'
        },
        {
          title: 'アクセス',
          contents:
            '地下鉄円山公園６番出口から徒歩5分または地下鉄西18丁目１番出口から徒歩7分'
        },
        {
          title: '営業時間',
          contents: '10 : 00〜20 : 00、休診：不定休'
        },
        {
          title: '電話',
          contents: '011-676-8970　完全予約制'
        }
      ]
    }
  }
}
</script>
