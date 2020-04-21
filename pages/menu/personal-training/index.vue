<template>
  <div>
    <pagetitle h1="オリーヴパーソナルトレーニングについて" />
    <PtMenu />
    <div class="ml-2">
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
    </div>
    <PtReason />
    <PtTarget />
    <PtQa />
    <postscript />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import PtMenu from '~/components/menu/PtMenu.vue'
import PtReason from '~/components/menu/PtReason.vue'
import PtTarget from '~/components/menu/PtTarget.vue'
import PtQa from '~/components/menu/PtQa.vue'
import Postscript from '~/components/index/Postscript.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    PtMenu,
    PtReason,
    PtTarget,
    PtQa,
    Postscript
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'オリーヴパーソナルトレーニングについて',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。オリーヴパーソナルトレーニングでは国家資格取得の女性スタッフが女性の為のトレーニングをリモートで行います！',
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
          text: 'パーソナルトレーニング',
          disabled: true,
          href: '/menu/personal-training'
        }
      ]
    }
  }
}
</script>
