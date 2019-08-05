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
            ご来院にあたって
          </h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 md10>
          <h3 class="my-3 accent--text text-xs-center">
            地下鉄円山公園４番出口から徒歩５分or地下鉄西18丁目１番出口から徒歩７分
          </h3>
          <p>
            地下鉄円山公園４番出口から徒歩５分or地下鉄西18丁目１番出口から徒歩７分
          </p>
        </v-flex>
        <v-flex xs6 md5>
          <v-img :src="require('@/assets/images/home/home8.jpg')"></v-img>
        </v-flex>
        <v-flex xs6 md5>
          <v-img :src="require('@/assets/images/home/home9.jpg')"></v-img>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d728.831016383603!2d141.32343458814435!3d43.055651398690266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b29eae308ffff%3A0x39bb65ed75d8075c!2z77yw772B772M772B772a772a772P6KOP5Y-C6YGT!5e0!3m2!1sja!2sjp!4v1558325458777!5m2!1sja!2sjp"
            width="100%"
            height="300px"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </v-flex>
      </v-layout>
    </v-container>
    <Maruyamavisit />
    <Maruyamamessage />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import Maruyamavisit from '~/components/salon/Maruyamavisit.vue'
import Maruyamamessage from '~/components/salon/Maruyamamessage.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    Maruyamavisit,
    Maruyamamessage
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
            '地下鉄円山公園４番出口から徒歩または地下鉄西18丁目１番出口から徒歩'
        },
        {
          title: '営業時間',
          contents: '10 : 00〜20 : 00、休診：不定休'
        },
        {
          title: '電話',
          contents: '完全予約制'
        }
      ]
    }
  }
}
</script>
