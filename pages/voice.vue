<template>
  <div class="yellow lighten-5">
    <pagetitle h1="患者様の声" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <Voice1 />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import Voice1 from '~/components/voice/Voice1.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    Voice1
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '患者様の声',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。患者様の声のご紹介です。わたし達国家資格取得の女性スタッフが全力で、女性特有の様々なお悩みを解決致します！',
        type: 'website',
        url: 'https://olivebodycare.healthcare/voice',
        image: 'https://olivebodycare.healthcare/images/head_1.jpg'
      },
      itemsB: [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: '患者様の声',
          disabled: true,
          href: '/voice'
        }
      ]
    }
  }
}
</script>
