<template>
  <div>
    <pagetitle title="横浜青葉台店" />
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d811.6313277315405!2d139.51569893814946!3d35.54072649875815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f83041fe7081%3A0xf5f6c6b0919d47db!2z44OT44Oz44K744OX44OI!5e0!3m2!1sja!2sjp!4v1558324702061!5m2!1sja!2sjp"
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
        title: '横浜青葉台店',
        description: '女性専門の治療院オリーヴボディケア',
        type: 'website',
        url: 'https://olivebodycare.healthscare/salon/aobadai',
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
          disabled: false,
          href: '/salon'
        },
        {
          text: '横浜青葉台店',
          disabled: true,
          href: ''
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
          contents: '完全予約制'
        }
      ]
    }
  }
}
</script>
