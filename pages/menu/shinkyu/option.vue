<template>
  <div>
    <pagetitle h1="鍼灸オプション" />
    <Shinkyumenu />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <Shinkyuoption />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import Shinkyumenu from '~/components/menu/Shinkyumenu.vue'
import Shinkyuoption from '~/components/menu/Shinkyuoption.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    Shinkyumenu,
    Shinkyuoption
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '鍼灸オプション',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。当院の鍼灸についてご紹介。当院では生理不順、不妊症、更年期障害などの婦人科系疾患にも力を入れております。',
        type: 'website',
        url: 'https://olivebodycare.healthcare/menu/shinkyu/option',
        image: 'https://olivebodycare.healthcare/images/head_1.jpg'
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
          disabled: false,
          href: '/menu/shinkyu'
        },
        {
          text: '鍼灸オプション',
          disabled: true,
          href: '/menu/shinkyu/option'
        }
      ]
    }
  }
}
</script>
