<template>
  <div>
    <pagetitle h1="私達の理念-ミッション-" />
    <div>
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <MissionPage />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import MissionPage from '~/components/about/MissionPage.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    MissionPage
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '私達の理念-ミッション-',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。私等はこの理念のもと患者様に寄りそい心身共に健やかな生活を送れるよう日々力を尽くし営業に取り組んでいます。',
        type: 'website',
        url: 'https://olivebodycare.healthcare/about/mission',
        image: 'https://olivebodycare.healthcare/images/head_1.jpg'
      },
      itemsB: [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: '当院について',
          disabled: false,
          href: '/about'
        },
        {
          text: '私達の理念-ミッション-',
          disabled: true,
          href: '/about/mission'
        }
      ]
    }
  }
}
</script>
