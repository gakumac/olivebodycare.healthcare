<template>
  <div>
    <pagetitle h1="問診票のご記入" />
    <div class="ml-2">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <MedicalQuestionnaire />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import MedicalQuestionnaire from '~/components/about/MedicalQuestionnaire.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    MedicalQuestionnaire
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '問診票のご記入',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。当院では患者様にご来院して頂いた際、施術のお時間をなるべく多くおとりする為に事前の記入をお願いしております。',
        type: 'website',
        url: 'https://olivebodycare.healthcare/about/medical-questionnaire.vue',
        image: 'https://olivebodycare.healthcare/assets/images/hed_1.jpg'
      },
      itemsB: [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: '当院について',
          disabled: false,
          href: '/about'
        },
        {
          text: '問診票のご記入',
          disabled: true,
          href: '/about/medical-questionnaire'
        }
      ]
    }
  }
}
</script>
