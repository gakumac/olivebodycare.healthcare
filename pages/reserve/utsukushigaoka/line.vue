<template>
  <div>
    <pagetitle h1="横浜美しが丘店LINE登録" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <LineUtsukushigaoka />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import LineUtsukushigaoka from '~/components/reserve/utsukushigaoka/LineUtsukushigaoka.vue'
import Meta from '~/assets/mixins/meta'
export default {
  layout: 'reserve',
  components: {
    Pagetitle,
    LineUtsukushigaoka
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '横浜美しが丘店LINE登録',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。横浜美しが丘店のLINE登録はこちらから。各店の予約の空き情報やお得なキャンペーン情報を配信しています！',
        type: 'website',
        url: 'https://olivebodycare.healthcare/reserve/utsukushigaoka/line',
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
          text: '横浜美しが丘店24時間Web予約',
          disabled: false,
          href: '/reserve/utsukushigaoka'
        },
        {
          text: '横浜美しが丘店LINE登録',
          disabled: true,
          href: '/reserve/utsukushigaoka/line'
        }
      ]
    }
  }
}
</script>
