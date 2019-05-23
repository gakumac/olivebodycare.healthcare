<template>
  <div>
    <pagetitle title="たまプラーザ本店" />
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
            たまプラーザ駅南口より徒歩2分
          </h3>
          <p>
            当院はメディカルモールたまプラーザの3階にございます。
            ビルの裏手には専用の駐車場もございます。
            女性の方に安心してご利用いただくようオートロックになっております。
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1495.6946074700454!2d139.55859857898!3d35.57573905724052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f71ab6b44f25%3A0xd8617b3b315c81fc!2z5aWz5oCn5bCC6ZaA44Gu5rK755mC6Zmi44Kq44Oq44O844O044Oc44OH44Kj44Kx44Ki!5e0!3m2!1sja!2sjp!4v1557065211029!5m2!1sja!2sjp"
            width="100%"
            height="300px"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </v-flex>
      </v-layout>
    </v-container>
    <Tamavisit />
    <Tamamessage />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import Tamavisit from '~/components/salon/Tamavisit.vue'
import Tamamessage from '~/components/salon/Tamamessage.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    Tamavisit,
    Tamamessage
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'たまプラーザ本店（たまプラーザ駅徒歩2分）',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。田園都市線たまプラーザ駅南口を降り、住宅展示場を左手に進むと見える５階建ての白いビルに当院がございます。',
        type: 'website',
        url: 'https://olivebodycare.healthscare/salon/tamaplaza',
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
          text: 'たまプラーザ本店',
          disabled: true,
          href: '/salon/tamaplaza'
        }
      ],
      items: [
        {
          title: '住所',
          contents:
            '〒225-0003　横浜市青葉区新石川3-15-16メディカルモールたまプラーザ301'
        },
        {
          title: 'アクセス',
          contents: '東急田園都市線たまプラーザ駅より徒歩2分'
        },
        {
          title: '営業時間',
          contents: '10 : 00〜20 : 00、休診：不定休'
        },
        {
          title: '電話',
          contents: '045-530-1688　完全予約制'
        }
      ]
    }
  }
}
</script>
