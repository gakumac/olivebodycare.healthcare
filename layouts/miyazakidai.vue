<template>
  <v-app>
    <navbar />
    <nuxt />
    <footer1 />
    <StickyfMiyazakidai />
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer1 from '~/components/footer/Footer1.vue'
import StickyfMiyazakidai from '~/components/footer/StickyfMiyazakidai.vue'
export default {
  components: {
    Navbar,
    Footer1,
    StickyfMiyazakidai
  },
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://olivebodycare.healthcare' + this.$route.path
        }
      ]
    }
  }
}
</script>
