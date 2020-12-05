<template>
  <v-app>
    <navbar />
    <nuxt />
    <footer1 />
    <StickyfUtsukushigaoka />
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer1 from '~/components/footer/Footer1.vue'
import StickyfUtsukushigaoka from '~/components/footer/StickyfUtsukushigaoka.vue'
export default {
  components: {
    Navbar,
    Footer1,
    StickyfUtsukushigaoka
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
