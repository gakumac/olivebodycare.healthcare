<template>
  <div>
    <pagetitle h1="スタッフについて" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <Staff />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import Staff from '~/components/about/Staff.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    Staff
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'スタッフについて',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。スタッフについてのご紹介です。国家資格取得の女性スタッフが全力で、女性特有の様々なお悩みを解決致します！',
        type: 'website',
        url: 'https://olivebodycare.healthcare/about/staff',
        image: 'https://olivebodycare.healthcare/assets/images/hed_1.jpg'
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
          text: 'スタッフについて',
          disabled: true,
          href: '/about/staff'
        }
      ]
    }
  }
}
</script>
