<template>
  <div>
    <pagetitle title="整体" />
    <div class="ml-2">
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
    </div>
    <making />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import Making from '~/components/Making.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    Making
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '整体',
        description: '女性専門の治療院オリーヴボディケア',
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
          text: '整体',
          disabled: true,
          href: ''
        }
      ]
    }
  }
}
</script>
