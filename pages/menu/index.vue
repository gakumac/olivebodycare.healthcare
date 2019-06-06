<template>
  <div>
    <pagetitle h1="施術メニュー・料金" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <Menufee />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import Menufee from '~/components/menu/Menufee.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    Menufee
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '施術メニュー・料金',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。各種コース・料金のご紹介。本来の正常な動きを妨げている原因を見つけ出し多くの女性が抱える悩みを解決します！',
        type: 'website',
        url: 'https://olivebodycare.healthscare/menu',
        image: 'https://olivebodycare.healthscare/assets/images/hed_1.jpg'
      },
      itemsB: [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: '施術メニュー・料金',
          disabled: true,
          href: '/menu'
        }
      ]
    }
  }
}
</script>
