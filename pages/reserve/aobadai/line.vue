<template>
  <div>
    <pagetitle h1="横浜青葉台店LINE登録" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <LineAobadai />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import LineAobadai from '~/components/reserve/aobadai/LineAobadai.vue'
import Meta from '~/assets/mixins/meta'
export default {
  layout: 'reserve',
  components: {
    Pagetitle,
    LineAobadai
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '横浜青葉台店LINE登録',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。横浜青葉台店のLINE登録は今すぐこちらから。各店の予約の空き情報やお得なキャンペーン情報を配信しています！',
        type: 'website',
        url: 'https://olivebodycare.healthcare/reserve/aobadai/line',
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
          text: '横浜青葉台店24時間Web予約',
          disabled: false,
          href: '/reserve/aobadai'
        },
        {
          text: '横浜青葉台店LINE登録',
          disabled: true,
          href: '/reserve/aobadai/line'
        }
      ]
    }
  }
}
</script>
