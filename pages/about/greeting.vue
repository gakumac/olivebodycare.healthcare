<template>
  <div>
    <pagetitle h1="総院長からの挨拶" />
    <div class="ml-2 info">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <Greeting />
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import Greeting from '~/components/about/Greeting.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle,
    Greeting
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '総院長からの挨拶',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。総院長からの挨拶。たくさん頑張ってこられた女性の皆様に心も身体も元気になってもらいたい！全力を尽くします。',
        type: 'website',
        url: 'https://olivebodycare.healthcare/about/greeting.vue',
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
          text: '総院長からの挨拶',
          disabled: true,
          href: '/about/greeting'
        }
      ]
    }
  }
}
</script>
