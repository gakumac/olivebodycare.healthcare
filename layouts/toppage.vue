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
import Footer1 from '~/components/Footer1.vue'
import Stickyfooter from '~/components/Stickyfooter.vue'
export default {
  components: {
    Navbar,
    Footer1,
    Stickyfooter
  }
}
</script>
