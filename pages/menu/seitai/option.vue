<template>
  <div>
    <pagetitle h1="整体オプションについて" />
    <Seitaimenu />
    <div class="ml-2">
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
    </div>
    <Seitaioption />
    <After />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import Seitaimenu from '~/components/menu/Seitaimenu.vue'
import Seitaioption from '~/components/menu/Seitaioption.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    Seitaimenu,
    Seitaioption
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '整体オプションについて',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。当院の整体ついてご紹介。本来の正常な動きを妨げている原因を見つけ出し多くの女性が抱える悩みを解決します！',
        type: 'website',
        url: 'https://olivebodycare.healthcare/menu/seitai/option',
        image: 'https://olivebodycare.healthcare/assets/images/hed_1.jpg'
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
          disabled: false,
          href: '/menu/seitai'
        },
        {
          text: '整体オプションについて',
          disabled: true,
          href: '/menu/seitai/seitaioption'
        }
      ]
    }
  }
}
</script>
