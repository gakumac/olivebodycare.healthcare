<template>
  <div>
    <pagetitle h1="開始までの流れ" />
    <PtMenu />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <PtBeginner />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import PtMenu from '~/components/menu/PtMenu.vue'
import PtBeginner from '~/components/menu/PtBeginner.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    PtMenu,
    PtBeginner
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '開始までの流れ',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。オリーヴパーソナルトレーニングでは国家資格取得の女性スタッフが女性の為のトレーニングをリモートで行います！',
        type: 'website',
        url: 'https://olivebodycare.healthcare/menu/personal-training/biginner',
        image: 'https://olivebodycare.healthcare/images/head_1.jpg'
      },
      itemsB: [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: 'パーソナルトレーニング',
          disabled: false,
          href: '/menu/personal-training'
        },
        {
          text: '開始までの流れ',
          disabled: true,
          href: '/menu/personal-training/beginner'
        }
      ]
    }
  }
}
</script>
