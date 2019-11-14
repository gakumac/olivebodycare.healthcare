<template>
  <div>
    <pagetitle h1="札幌円山店" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <MaruyamaCp />
    <Maruyamainfo />
    <Maruyamamessage />
    <Target />
    <Maruyamavoice />
    <MaruyamaAfter />
    <MaruyamaPs />
    <Maruyamavisit />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import MaruyamaCp from '~/components/campaign/MaruyamaCp.vue'
import Maruyamainfo from '~/components/salon/maruyama/Maruyamainfo.vue'
import Maruyamamessage from '~/components/salon/maruyama/Maruyamamessage.vue'
import Target from '~/components/index//Target.vue'
import Maruyamavoice from '~/components/salon/maruyama/Maruyamavoice.vue'
import MaruyamaAfter from '~/components/salon/maruyama/MaruyamaAfter.vue'
import MaruyamaPs from '~/components/salon/maruyama/MaruyamaPs.vue'
import Maruyamavisit from '~/components/salon/maruyama/Maruyamavisit.vue'
import Meta from '~/assets/mixins/meta'
export default {
  layout: 'maruyama',
  components: {
    Pagetitle,
    MaruyamaCp,
    Maruyamainfo,
    Maruyamamessage,
    Target,
    Maruyamavoice,
    MaruyamaAfter,
    MaruyamaPs,
    Maruyamavisit
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '札幌円山店（札幌市中央区）',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。円山公園駅６番出口から徒歩5分。南1条西22丁目デザイナーズマンション内の女性だけのプライベート空間です。',
        type: 'website',
        url: 'https://olivebodycare.healthcare/salon/maruyama',
        image: 'https://olivebodycare.healthcare/assets/images/hed_1.jpg'
      },
      itemsB: [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: '治療院一覧',
          disabled: false,
          href: '/salon'
        },
        {
          text: '札幌円山店',
          disabled: true,
          href: '/salon/maruyama'
        }
      ]
    }
  }
}
</script>
