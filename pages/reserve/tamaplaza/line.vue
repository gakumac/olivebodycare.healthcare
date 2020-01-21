<template>
  <div>
    <pagetitle h1="たまプラーザ本店LINE登録" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <LineTamaplaza />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import LineTamaplaza from '~/components/reserve/tamaplaza/LineTamaplaza.vue'
import Meta from '~/assets/mixins/meta'
export default {
  layout: 'reserve',
  components: {
    Pagetitle,
    LineTamaplaza
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'たまプラーザ本店LINE登録',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。たまプラーザ本店のLINE登録はこちらから。各店の予約の空き情報やお得なキャンペーン情報を配信しています！',
        type: 'website',
        url: 'https://olivebodycare.healthcare/reserve/tamaplaza/line',
        image: 'https://olivebodycare.healthcare/assets/images/hed_1.jpg'
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
          text: 'たまプラーザ本店24時間Web予約',
          disabled: false,
          href: '/reserve/tamaplaza'
        },
        {
          text: 'たまプラーザ本店LINE登録',
          disabled: true,
          href: '/reserve/tamaplaza/line'
        }
      ]
    }
  }
}
</script>
