<template>
  <div>
    <pagetitle title="Q&A-よくある質問-" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <qasalon />
    <qatreat />
    <qareserv />
    <qajiko />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import Qasalon from '~/components/about/qa/Qasalon.vue'
import Qatreat from '~/components/about/qa/Qatreat.vue'
import Qareserv from '~/components/about/qa/Qareserv.vue'
import Qajiko from '~/components/about/qa/Qajiko.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    Qasalon,
    Qatreat,
    Qareserv,
    Qajiko
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'Q&A-よくある質問-',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。よくある質問をご紹介します。国家資格取得の女性スタッフが全力で、女性特有の様々なお悩みを解決致します！',
        type: 'website',
        url: 'https://olivebodycare.healthscare/about/qa',
        image: 'https://olivebodycare.healthscare/assets/images/hed_1.jpg'
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
          text: 'Q&A-よくある質問-',
          disabled: true,
          href: '/about/qa'
        }
      ]
    }
  }
}
</script>
