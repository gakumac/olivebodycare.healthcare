<template>
  <div>
    <pagetitle title="当院について" />
    <div class="ml-2 yellow lighten-5">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <Aboutobc />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import Aboutobc from '~/components/about/Aboutobc.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    Aboutobc
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '当院について',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。国家資格取得の女性スタッフによる本格施術が受けれます。お子様連れ歓迎。マッサージ、不妊、鍼もお任せ下さい！',
        type: 'website',
        url: 'https://olivebodycare.healthscare/about',
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
          disabled: true,
          href: '/about'
        }
      ]
    }
  }
}
</script>
