<template>
  <div>
    <pagetitle h1="交通事故治療" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <Traffic />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import Traffic from '~/components/menu/Traffic.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    Traffic
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '交通事故治療',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。交通事故治療についてご紹介。早期の適切な治療が大事です。少しでも思い当たる症状がある場合お早めにご来院を！',
        type: 'website',
        url: 'https://olivebodycare.healthcare/menu/traffic-accident',
        image: 'https://olivebodycare.healthcare/images/head_1.jpg'
      },
      itemsB: [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: '施術メニュー・料金',
          disabled: false,
          href: '/menu'
        },
        {
          text: '交通事故治療',
          disabled: true,
          href: '/menu/traffic-accident'
        }
      ]
    }
  }
}
</script>
