<template>
  <div>
    <v-app-bar fixed color="yellow lighten-5">
      <v-btn @click.stop="drawNavMenus" text color="green darken-3">
        <v-icon>menu</v-icon>
        <span class="text-capitalize">Menu</span>
      </v-btn>
      <v-toolbar-title class="mt-2">
        <nuxt-link to="/">
          <img src="@/assets/images/logo_nav.png" width="180" alt="logo" />
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <nav-menus v-if="drawed" :drawed="drawed" @input="updateNavMenu" />
  </div>
</template>

<script>
import NavMenus from './NavMenus.vue'

export default {
  components: { NavMenus },
  data() {
    return {
      drawed: false
    }
  },
  methods: {
    drawNavMenus() {
      this.drawed = !this.drawed
    },
    updateNavMenu(drawed) {
      this.drawed = drawed
    }
  }
}
</script>
