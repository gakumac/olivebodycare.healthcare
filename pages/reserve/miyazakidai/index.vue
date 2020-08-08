<template>
  <div>
    <pagetitle h1="川崎宮崎台店24時間Web予約" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <!-- <MiyazakidaiCp /> -->
    <ReserveMiyazakidai />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
// import MiyazakidaiCp from '~/components/campaign/MiyazakidaiCp.vue'
import ReserveMiyazakidai from '~/components/reserve/miyazakidai/ReserveMiyazakidai.vue'
import Meta from '~/assets/mixins/meta'
export default {
  layout: 'reserve',
  components: {
    Pagetitle,
    // MiyazakidaiCp,
    ReserveMiyazakidai
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '川崎宮崎台店24時間Web予約',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。川崎宮崎台店24時間Web予約はこちらから。カレンダーからお日にち・時間を選択してその場でご予約できます。',
        type: 'website',
        url: 'https://olivebodycare.healthcare/reserve/miyazakidai',
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
          disabled: true,
          href: '/reserve/miyazakidai'
        }
      ]
    }
  }
}
</script>
