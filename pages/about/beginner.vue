<template>
  <div>
    <pagetitle title="入店から施術までの流れ" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <Beginner />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import Beginner from '~/components/about/Beginner.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    Beginner
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '入店から施術までの流れ',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。入店から施術までの流れをご紹介します。国家資格取得の女性スタッフが全力で、女性特有のお悩みを解決します！',
        type: 'website',
        url: 'https://olivebodycare.healthscare/about/beginner',
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
          text: '入店から施術までの流れ',
          disabled: true,
          href: '/about/beginner'
        }
      ]
    }
  }
}
</script>
