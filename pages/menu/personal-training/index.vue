<template>
  <div>
    <pagetitle h1="オンラインパーソナルトレーニング" />
    <PtMenu />
    <div class="ml-2 yellow lighten-5">
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
    </div>
    <PtReason />
    <PtTarget />
    <PtVoice />
    <PtQa />
    <postscript />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import PtMenu from '~/components/menu/PtMenu.vue'
import PtReason from '~/components/menu/PtReason.vue'
import PtTarget from '~/components/menu/PtTarget.vue'
import PtVoice from '~/components/menu/PtVoice.vue'
import PtQa from '~/components/menu/PtQa.vue'
import Postscript from '~/components/index/Postscript.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    PtMenu,
    PtReason,
    PtTarget,
    PtVoice,
    PtQa,
    Postscript
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'オンラインパーソナルトレーニング',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。オリーヴパーソナルトレーニングでは国家資格取得の女性治療家が女性の為のトレーニングをオンラインで行います！',
        type: 'website',
        url: 'https://olivebodycare.healthcare/menu/personal-training',
        image: 'https://olivebodycare.healthcare/images/head_1.jpg'
      },
      items: [
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
          text: 'オンラインパーソナルトレーニング',
          disabled: true,
          href: '/menu/personal-training'
        }
      ]
    }
  }
}
</script>
