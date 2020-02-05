<template>
  <div>
    <pagetitle h1="横浜青葉台店24時間Web予約" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <AobadaiCp />
    <ReserveAobadai />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import AobadaiCp from '~/components/campaign/AobadaiCp.vue'
import ReserveAobadai from '~/components/reserve/aobadai/ReserveAobadai.vue'
import Meta from '~/assets/mixins/meta'
export default {
  layout: 'reserve',
  components: {
    Pagetitle,
    AobadaiCp,
    ReserveAobadai
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '横浜青葉台店24時間Web予約',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。横浜青葉台店24時間Web予約はこちらから。カレンダーからお日にち・時間を選択してその場でご予約できます。',
        type: 'website',
        url: 'https://olivebodycare.healthcare/reserve/aobadai',
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
          text: '横浜青葉台店24時間Web予約',
          disabled: true,
          href: '/reserve/aobadai'
        }
      ]
    }
  }
}
</script>
