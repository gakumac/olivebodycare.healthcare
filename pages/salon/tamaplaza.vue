<template>
  <div>
    <pagetitle h1="たまプラーザ本店" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <TamaplazaInfo />
    <TamaplazaMessage />
    <Target />
    <TamaplazaPs />
    <TamaplazaVisit />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import TamaplazaInfo from '~/components/salon/tamaplaza/TamaplazaInfo.vue'
import TamaplazaMessage from '~/components/salon/tamaplaza/TamaplazaMessage.vue'
import Target from '~/components/index//Target.vue'
import TamaplazaPs from '~/components/salon/tamaplaza/TamaplazaPs.vue'
import TamaplazaVisit from '~/components/salon/tamaplaza/TamaplazaVisit.vue'
import Meta from '~/assets/mixins/meta'
export default {
  layout: 'tamaplaza',
  components: {
    Pagetitle,
    TamaplazaInfo,
    TamaplazaMessage,
    Target,
    TamaplazaPs,
    TamaplazaVisit
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'たまプラーザ本店（駅徒歩2分）',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。田園都市線たまプラーザ駅南口を降り、住宅展示場を左手に進むと見える５階建ての白いビルに当院がございます。',
        type: 'website',
        url: 'https://olivebodycare.healthcare/salon/tamaplaza',
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
          text: 'たまプラーザ本店',
          disabled: true,
          href: '/salon/tamaplaza'
        }
      ]
    }
  }
}
</script>
