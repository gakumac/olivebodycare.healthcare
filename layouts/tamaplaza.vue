<template>
  <v-app>
    <navbar />
    <nuxt />
    <footer1 />
    <StickyfTamaplaza />
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer1 from '~/components/footer/Footer1.vue'
import StickyfTamaplaza from '~/components/footer/StickyfTamaplaza.vue'
export default {
  components: {
    Navbar,
    Footer1,
    StickyfTamaplaza
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
