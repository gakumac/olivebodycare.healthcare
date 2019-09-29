<template>
  <v-app>
    <navbar />
    <nuxt />
    <footer1 />
    <Stickyfmaruyama />
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer1 from '~/components/footer/Footer1.vue'
import Stickyfmaruyama from '~/components/footer/Stickyfmaruyama.vue'
export default {
  components: {
    Navbar,
    Footer1,
    Stickyfmaruyama
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
