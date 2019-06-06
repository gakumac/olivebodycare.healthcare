<template>
  <div>
    <pagetitle h1="マッサージについて" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <making />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import Making from '~/components/Making.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    Making
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'マッサージについて',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。マッサージついてご紹介。当院では身体本来に備わっている自然治癒力を高めるマッサージを行い悩みを解決します！',
        type: 'website',
        url: 'https://olivebodycare.healthscare/menu/massage',
        image: 'https://olivebodycare.healthscare/assets/images/hed_1.jpg'
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
          text: 'マッサージについて',
          disabled: true,
          href: '/menu/massage'
        }
      ]
    }
  }
}
</script>
