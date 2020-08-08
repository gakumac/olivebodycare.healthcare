<template>
  <div>
    <pagetitle h1="川崎宮崎台店LINE登録" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <LineMiyazakidai />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import LineMiyazakidai from '~/components/reserve/miyazakidai/LineMiyazakidai.vue'
import Meta from '~/assets/mixins/meta'
export default {
  layout: 'reserve',
  components: {
    Pagetitle,
    LineMiyazakidai
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '川崎宮崎台店LINE登録',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。川崎宮崎台店のLINE登録はこちらから。各店の予約の空き情報やお得なキャンペーン情報を配信しています！',
        type: 'website',
        url: 'https://olivebodycare.healthcare/reserve/miyazakidai/line',
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
          text: '川崎宮崎台店24時間Web予約',
          disabled: false,
          href: '/reserve/miyazakidai'
        },
        {
          text: '川崎宮崎台店LINE登録',
          disabled: true,
          href: '/reserve/miyazakidai/line'
        }
      ]
    }
  }
}
</script>
