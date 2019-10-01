<template>
  <div>
    <pagetitle h1="札幌円山店" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <MaruyamaCp />
    <Maruyamainfo />
    <Maruyamamessage />
    <Maruyamatarget />
    <Maruyamavoice />
    <Maruyamavisit />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import MaruyamaCp from '~/components/campaign/MaruyamaCp.vue'
import Maruyamainfo from '~/components/salon/Maruyamainfo.vue'
import Maruyamamessage from '~/components/salon/Maruyamamessage.vue'
import Maruyamatarget from '~/components/salon/Maruyamatarget.vue'
import Maruyamavoice from '~/components/salon/Maruyamavoice.vue'
import Maruyamavisit from '~/components/salon/Maruyamavisit.vue'
import Meta from '~/assets/mixins/meta'
export default {
  layout: 'maruyama',
  components: {
    Pagetitle,
    MaruyamaCp,
    Maruyamainfo,
    Maruyamamessage,
    Maruyamatarget,
    Maruyamavoice,
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
