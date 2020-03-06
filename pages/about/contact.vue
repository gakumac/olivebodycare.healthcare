<template>
  <div>
    <pagetitle h1="お問合せ・メール予約" />
    <div class="ml-2 yellow lighten-5">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <Contactform />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import Contactform from '~/components/about/Contactform.vue'
import Meta from '~/assets/mixins/meta'
export default {
  layout: 'reserve',
  components: {
    Pagetitle,
    Contactform
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'お問合せ・メール予約',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。お問い合わせフォームです。どの整体院に行けば良いのか迷われてる方。当院女性スタッフが丁寧にお答えします。',
        type: 'website',
        url: 'https://olivebodycare.healthcare/about/contact',
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
          text: 'お問合せ・メール予約',
          disabled: true,
          href: '/about/contact'
        }
      ]
    }
  }
}
</script>
