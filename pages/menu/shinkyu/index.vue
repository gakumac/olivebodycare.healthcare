<template>
  <div>
    <pagetitle h1="鍼灸について" />
    <Shinkyumenu />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <Shinkyu />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import Shinkyumenu from '~/components/menu/Shinkyumenu.vue'
import Shinkyu from '~/components/menu/Shinkyu.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    Shinkyumenu,
    Shinkyu
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '鍼灸について',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。当院の鍼灸についてご紹介。当院では生理不順、不妊症、更年期障害などの婦人科系疾患にも力を入れております。',
        type: 'website',
        url: 'https://olivebodycare.healthcare/menu/shinkyu',
        image: 'https://olivebodycare.healthcare/assets/images/hed_1.jpg'
      },
      itemsB: [
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
          text: '鍼灸',
          disabled: true,
          href: '/menu/shinkyu'
        }
      ]
    }
  }
}
</script>
