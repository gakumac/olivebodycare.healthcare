<template>
  <div>
    <pagetitle h1="横浜青葉台店" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <AobadaiCp />
    <AobadaiInfo />
    <AobadaiMessage />
    <Target />
    <AobadaiVoice />
    <AobadaiAfter />
    <AobadaiPs />
    <AobadaiVisit />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import AobadaiCp from '~/components/campaign/AobadaiCp.vue'
import AobadaiInfo from '~/components/salon/aobadai/AobadaiInfo.vue'
import AobadaiMessage from '~/components/salon/aobadai/AobadaiMessage.vue'
import AobadaiVoice from '~/components/salon/aobadai/AobadaiVoice.vue'
import AobadaiAfter from '~/components/salon/aobadai/AobadaiAfter.vue'
import AobadaiPs from '~/components/salon/aobadai/AobadaiPs.vue'
import Target from '~/components/index/Target.vue'
import AobadaiVisit from '~/components/salon/aobadai/AobadaiVisit.vue'
import Meta from '~/assets/mixins/meta'
export default {
  layout: 'aobadai',
  components: {
    Pagetitle,
    AobadaiCp,
    AobadaiInfo,
    AobadaiMessage,
    AobadaiVoice,
    AobadaiAfter,
    AobadaiPs,
    Target,
    AobadaiVisit
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '横浜青葉台店（駅徒歩3分)',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。田園都市線青葉台駅を降り、左手に進みジョナサンを過ぎた最初のT字路を渡ったすぐの建物に当院がございます。',
        type: 'website',
        url: 'https://olivebodycare.healthcare/salon/aobadai',
        image: 'https://olivebodycare.healthcare/images/head_1.jpg'
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
          text: '横浜青葉台店',
          disabled: true,
          href: '/salon/aobadai'
        }
      ]
    }
  }
}
</script>
