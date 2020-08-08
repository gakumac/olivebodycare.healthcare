<template>
  <div>
    <pagetitle h1="治療院一覧" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <SalonList />
    <accesstop />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import SalonList from '~/components/salon/SalonList.vue'
import Accesstop from '~/components/index/Accesstop.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    SalonList,
    Accesstop
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '治療院一覧',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。各治療院のご紹介です。国家資格取得の女性スタッフによる本格施術で、女性本来の健康な身体を取り戻しましょう！',
        type: 'website',
        url: 'https://olivebodycare.healthcare/salon',
        image: 'https://olivebodycare.healthcare/images/head_1.jpg'
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
          href: '/salon'
        }
      ]
    }
  }
}
</script>
