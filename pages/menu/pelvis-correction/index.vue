<template>
  <div>
    <pagetitle h1="骨盤矯正について" />
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
        title: '骨盤矯正について',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。当院の骨盤矯正・産後の骨盤矯正ついてご紹介。健やかな毎日を過ごせるよう、お手伝いをさせていただきます。',
        type: 'website',
        url: 'https://olivebodycare.healthscare/menu/pelvis-correction',
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
          text: '骨盤矯正について',
          disabled: true,
          href: '/menu/pelvis-correction'
        }
      ]
    }
  }
}
</script>
