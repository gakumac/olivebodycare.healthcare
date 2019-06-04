<template>
  <div>
    <pagetitle title="整体について" />
    <div class="ml-2">
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
    </div>
    <Seitai />
    <Seitaisango />
    <After />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import Seitai from '~/components/menu/Seitai.vue'
import Seitaisango from '~/components/menu/Seitaisango.vue'
import After from '~/components/index/After.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    Seitai,
    Seitaisango,
    After
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '整体について',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。当院の整体ついてご紹介。本来の正常な動きを妨げている原因を見つけ出し多くの女性が抱える悩みを解決します！',
        type: 'website',
        url: 'https://olivebodycare.healthscare/menu/seitai',
        image: 'https://olivebodycare.healthscare/assets/images/hed_1.jpg'
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
          text: '整体について',
          disabled: true,
          href: '/menu/seitai'
        }
      ]
    }
  }
}
</script>
