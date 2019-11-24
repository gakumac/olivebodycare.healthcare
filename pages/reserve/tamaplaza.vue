<template>
  <div>
    <pagetitle h1="たまプラーザ本店24時間Web予約" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <ReserveTamaplaza />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import ReserveTamaplaza from '~/components/reserve/ReserveTamaplaza.vue'
import Meta from '~/assets/mixins/meta'
export default {
  layout: 'reserve',
  components: {
    Pagetitle,
    ReserveTamaplaza
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'たまプラーザ本店24時間Web予約',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。たまプラーザ本店24時間Web予約はこちらから。カレンダーからお日にち・時間を選択してその場で予約できます。',
        type: 'website',
        url: 'https://olivebodycare.healthcare/reserve/tamaplaza',
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
          disabled: true,
          href: '/reserve/tamaplaza'
        }
      ]
    }
  }
}
</script>
