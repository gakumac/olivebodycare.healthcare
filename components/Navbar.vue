<template>
  <div>
    <v-toolbar fixed color="yellow lighten-5">
      <v-btn flat color="light-green darken-2" @click.stop="Drawer = !Drawer">
        <v-icon>menu</v-icon>
        <span class="text-capitalize">Menu</span>
      </v-btn>
      <v-toolbar-title class="mt-2">
        <nuxt-link to="/">
          <img src="@/assets/images/logo_nav.png" width="180" />
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />

      <!-- <v-menu offset-y>
        <v-btn slot="activator" flat color="grey">
          <v-icon>expand_more</v-icon>
          <span>Menu</span>
        </v-btn>
        <v-list>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            router
            :to="item.to"
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu> -->
    </v-toolbar>
    <v-navigation-drawer
      v-model="Drawer"
      class="yellow lighten-5"
      temporary
      fixed
      app
    >
      <v-layout column align-center>
        <v-flex class="mt-5">
          <img src="@/assets/images/logo-01.png" width="100" />
        </v-flex>
      </v-layout>
      <!-- <v-text-field
        class="ma-3"
        label="Search"
        prepend-inner-icon="search"
      ></v-text-field> -->
      <v-list class="brown--text">
        <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="brown--text">
        <v-list-group prepend-icon="account_circle" value="true">
          <div slot="activator">
            <v-list-tile>
              <v-list-tile-title>Users</v-list-tile-title>
            </v-list-tile>
          </div>
          <v-list-tile
            v-for="(admin, i) in admins"
            :key="i"
            :to="admin.to"
            exact
          >
            <v-list-tile-content>
              <v-list-tile-title
                class="text-xs-center"
                v-text="admin.title"
              ></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        },
        {
          icon: 'home',
          title: 'Dashbord',
          to: '/inspire'
        }
      ],
      admins: [
        {
          icon: 'home',
          title: 'Home',
          to: '/inspire'
        },
        {
          icon: 'home',
          title: '整体について',
          to: '/inspire'
        },
        {
          icon: 'home',
          title: '鍼灸について',
          to: '/inspire'
        }
      ],
      Drawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
<style></style>
