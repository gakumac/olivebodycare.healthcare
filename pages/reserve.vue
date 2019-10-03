<template>
  <div>
    <pagetitle h1="24時間Web予約はこちらから" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <ReserveSalon />
    <accesstop />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import ReserveSalon from '~/components/reserve/ReserveSalon.vue'
import Accesstop from '~/components/index/Accesstop.vue'
import Meta from '~/assets/mixins/meta'
export default {
  layout: 'reserve',
  components: {
    Pagetitle,
    ReserveSalon,
    Accesstop
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '24時間Web予約はこちらから',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。24時間Web予約はこちらからお進みください。カレンダーからお日にち・時間を選択してその場でご予約できます。',
        type: 'website',
        url: 'https://olivebodycare.healthcare/reserve',
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
          disabled: true,
          href: '/reserve'
        }
      ]
    }
  }
}
</script>
