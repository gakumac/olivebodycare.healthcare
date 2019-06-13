<template>
  <div>
    <pagetitle h1="鍼灸と生理" />
    <Shinkyumenu />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <Shinkyumenstruation />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import Shinkyumenu from '~/components/menu/Shinkyumenu.vue'
import Shinkyumenstruation from '~/components/menu/Shinkyumenstruation.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    Shinkyumenu,
    Shinkyumenstruation
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '鍼灸と生理',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。当院の鍼灸についてご紹介。当院では生理不順、不妊症、更年期障害などの婦人科系疾患にも力を入れております。',
        type: 'website',
        url: 'https://olivebodycare.healthscare/menu/shinkyu/menstruation',
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
          disabled: false,
          href: '/menu'
        },
        {
          text: '鍼灸',
          disabled: false,
          href: '/menu/shinkyu'
        },
        {
          text: '鍼灸と生理',
          disabled: true,
          href: '/menu/shinkyu/menstruation'
        }
      ]
    }
  }
}
</script>
