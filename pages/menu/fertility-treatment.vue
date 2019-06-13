<template>
  <div>
    <pagetitle h1="不妊治療について" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <Fertility />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import Fertility from '~/components/menu/Fertility.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    Fertility
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '不妊治療について',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。不妊治療についてご紹介。自律神経に乱れ・ホルモンバランスを整え、妊娠する準備が整う身体を手に入れましょう！',
        type: 'website',
        url: 'https://olivebodycare.healthscare/menu/fertility-treatment',
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
          text: '不妊治療',
          disabled: true,
          href: '/menu/fertility-treatment'
        }
      ]
    }
  }
}
</script>
