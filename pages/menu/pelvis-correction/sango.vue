<template>
  <div>
    <pagetitle h1="産後の骨盤矯正" />
    <Pelvismenu />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <Pelvissango />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import Pelvismenu from '~/components/menu/Pelvismenu.vue'
import Pelvissango from '~/components/menu/Pelvissango.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    Pelvismenu,
    Pelvissango
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '産後の骨盤矯正',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。当院の骨盤矯正・産後の骨盤矯正ついてご紹介。健やかな毎日を過ごせるよう、お手伝いをさせていただきます。',
        type: 'website',
        url: 'https://olivebodycare.healthcare/menu/pelvis-correction/sango',
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
          text: '骨盤矯正について',
          disabled: false,
          href: '/menu/pelvis-correction'
        },
        {
          text: '産後の骨盤矯正',
          disabled: true,
          href: '/menu/pelvis-correction/sango'
        }
      ]
    }
  }
}
</script>
