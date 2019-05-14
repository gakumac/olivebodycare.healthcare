<template>
  <div>
    <pagetitle title="治療院一覧" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
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
        title: '治療院一覧',
        description: '女性専門の治療院オリーヴボディケア',
        type: 'website',
        url: 'https://olivebodycare.healthscare/salon',
        image: 'https://olivebodycare.healthscare/assets/images/hed_1.jpg'
      },
      itemsB: [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: '治療院一覧',
          disabled: true,
          href: ''
        }
      ]
    }
  }
}
</script>
