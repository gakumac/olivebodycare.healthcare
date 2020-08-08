<template>
  <div>
    <pagetitle h1="川崎宮崎台店" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <!-- <MiyazakidaiCp /> -->
    <MiyazakidaiInfo />
    <!-- <MiyazakidaiMessage /> -->
    <Target />
    <Voicetop />
    <!-- <MiyazakidaiVoice /> -->
    <After />
    <!-- <MiyazakidaiAfter /> -->
    <postscript />
    <!-- <MiyazakidaiPs /> -->
    <!-- <MiyazakidaiVisit /> -->
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
// import MiyazakidaiCp from '~/components/campaign/MiyazakidaiCp.vue'
import MiyazakidaiInfo from '~/components/salon/miyazakidai/MiyazakidaiInfo.vue'
// import MiyazakidaiMessage from '~/components/salon/miyazakidai/MiyazakidaiMessage.vue'
import Voicetop from '~/components/index/Voicetop.vue'
// import MiyazakidaiVoice from '~/components/salon/miyazakidai/MiyazakidaiVoice.vue'
import After from '~/components/index/After.vue'
// import MiyazakidaiAfter from '~/components/salon/miyazakidai/MiyazakidaiAfter.vue'
import Postscript from '~/components/index/Postscript.vue'
// import MiyazakidaiPs from '~/components/salon/miyazakidai/MiyazakidaiPs.vue'
import Target from '~/components/index/Target.vue'
// import MiyazakidaiVisit from '~/components/salon/miyazakidai/MiyazakidaiVisit.vue'
import Meta from '~/assets/mixins/meta'
export default {
  layout: 'miyazakidai',
  components: {
    Pagetitle,
    // MiyazakidaiCp,
    MiyazakidaiInfo,
    // MiyazakidaiMessage,
    Voicetop,
    // MiyazakidaiVoice,
    After,
    // MiyazakidaiAfter,
    Postscript,
    // MiyazakidaiPs,
    Target
    // MiyazakidaiVisit
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '川崎宮崎台店（駅徒歩3分)',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。田園都市線宮崎台駅北口を降り、左手に進み最初のT字路を右に曲がり次のT字路を左に曲がると当院がございます。',
        type: 'website',
        url: 'https://olivebodycare.healthcare/salon/miyazakidai',
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
          text: '川崎宮崎台店',
          disabled: true,
          href: '/salon/miyazakidai'
        }
      ]
    }
  }
}
</script>
