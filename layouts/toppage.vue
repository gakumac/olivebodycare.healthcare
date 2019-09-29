<template>
  <v-app>
    <navbar />
    <nuxt />
    <footer1 />
    <stickyfooter />
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer1 from '~/components/footer/Footer1.vue'
import Stickyfooter from '~/components/footer/Stickyfooter.vue'
export default {
  components: {
    Navbar,
    Footer1,
    Stickyfooter
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
