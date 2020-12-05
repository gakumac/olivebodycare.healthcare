<template>
  <div>
    <pagetitle h1="横浜美しが丘店" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <!-- <UtsukushigaokaCp /> -->
    <UtsukushigaokaInfo />
    <UtsukushigaokaMessage />
    <Target />
    <Voicetop />
    <!-- <UtsukushigaokaVoice /> -->
    <After />
    <!-- <UtsukushigaokaAfter /> -->
    <postscript />
    <!-- <UtsukushigaokaPs /> -->
    <UtsukushigaokaVisit />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
// import UtsukushigaokaCp from '~/components/campaign/UtsukushigaokaCp.vue'
import UtsukushigaokaInfo from '~/components/salon/utsukushigaoka/UtsukushigaokaInfo.vue'
import UtsukushigaokaMessage from '~/components/salon/utsukushigaoka/UtsukushigaokaMessage.vue'
import Voicetop from '~/components/index/Voicetop.vue'
// import UtsukushigaokaVoice from '~/components/salon/utsukushigaoka/UtsukushigaokaVoice.vue'
import After from '~/components/index/After.vue'
// import UtsukushigaokaAfter from '~/components/salon/utsukushigaoka/UtsukushigaokaAfter.vue'
import Postscript from '~/components/index/Postscript.vue'
// import UtsukushigaokaPs from '~/components/salon/utsukushigaoka/UtsukushigaokaPs.vue'
import Target from '~/components/index/Target.vue'
import UtsukushigaokaVisit from '~/components/salon/utsukushigaoka/UtsukushigaokaVisit.vue'
import Meta from '~/assets/mixins/meta'
export default {
  layout: 'utsukushigaoka',
  components: {
    Pagetitle,
    // UtsukushigaokaCp,
    UtsukushigaokaInfo,
    UtsukushigaokaMessage,
    Voicetop,
    // UtsukushigaokaVoice,
    After,
    // UtsukushigaokaAfter,
    Postscript,
    // UtsukushigaokaPs,
    Target,
    UtsukushigaokaVisit
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '美しが丘店（駅徒歩3分)',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。田園都市線たまプラーザ駅北口徒歩3分にございます。１部屋・1人だけの完全個室女性だけのプライベート空間です。',
        type: 'website',
        url: 'https://olivebodycare.healthcare/salon/utsukushigaoka',
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
          text: '横浜美しが丘店',
          disabled: true,
          href: '/salon/utsukushigaoka'
        }
      ]
    }
  }
}
</script>
