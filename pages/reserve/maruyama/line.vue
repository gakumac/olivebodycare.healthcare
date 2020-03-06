<template>
  <div>
    <pagetitle h1="札幌円山店LINE問合せ・予約" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <LineMaruyama />
    <MaruyamaCp />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import MaruyamaCp from '~/components/campaign/MaruyamaCp.vue'
import LineMaruyama from '~/components/reserve/maruyama/LineMaruyama.vue'
import Meta from '~/assets/mixins/meta'
export default {
  layout: 'reserve',
  components: {
    Pagetitle,
    MaruyamaCp,
    LineMaruyama
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '札幌円山店LINE問合せ・予約',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。札幌円山店LINE問合せ・予約はこちらから。LINEのチャットを利用して問い合せ・ご予約等ご利用できます。',
        type: 'website',
        url: 'https://olivebodycare.healthcare/reserve/maruyama/line',
        image: 'https://olivebodycare.healthcare/images/head_1.jpg'
      },
      itemsB: [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: '24時間Web予約はこちらから',
          disabled: false,
          href: '/reserve'
        },
        {
          text: '札幌円山店24時間Web予約',
          disabled: false,
          href: '/reserve/maruyama'
        },
        {
          text: '札幌円山店LINE問合せ・予約',
          disabled: true,
          href: '/reserve/maruyama/line'
        }
      ]
    }
  }
}
</script>
