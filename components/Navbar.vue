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
    </v-toolbar>
    <v-navigation-drawer
      v-model="Drawer"
      class="yellow lighten-5"
      temporary
      fixed
      app
    >
      <v-list class="brown--text">
        <v-list-tile v-for="(item, i) in itemsHome" :key="i" :to="item.to">
          <v-list-tile-action>
            <v-icon>{{ item.action }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="font-weight-bold" v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
        <v-list-group
          v-for="(item, i) in items"
          :key="i"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template slot="activator">
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          <v-list-tile
            v-for="(subItem, i) in item.items"
            :key="i"
            :to="subItem.to"
          >
            <v-list-tile-content>
              <v-list-tile-title class="font-weight-bold">
                {{ subItem.title }}
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>{{ subItem.action }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
        <v-list-tile v-for="(item, i) in itemsVoice" :key="i" :to="item.to">
          <v-list-tile-action>
            <v-icon>{{ item.action }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="font-weight-bold" v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-for="(item, i) in itemsSalon" :key="i" :to="item.to">
          <v-list-tile-action>
            <v-icon>{{ item.action }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="font-weight-bold" v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemsHome: [
        {
          action: 'home',
          title: 'Home',
          to: '/'
        }
      ],
      items: [
        {
          action: 'import_contacts',
          title: 'メニュー・料金',
          active: true,
          items: [
            {
              title: '施術メニュー・料金',
              to: '/menu',
              action: ''
            },
            {
              title: '整体について',
              to: '/menu/seitai',
              action: ''
            },
            {
              title: '骨盤矯正について',
              to: '/menu/pelvis-correction',
              action: ''
            },
            {
              title: 'マッサージについて',
              to: '/menu/massage',
              action: ''
            },
            {
              title: '鍼灸について',
              to: '/menu/shinkyu',
              action: ''
            },
            {
              title: '不妊治療',
              to: '/menu/fertility-treatment',
              action: ''
            },
            {
              title: '交通事故治療',
              to: '/menu/traffic-accident',
              action: ''
            }
          ]
        },
        {
          action: 'business',
          title: '当院について',
          active: true,
          items: [
            {
              title: '当院について',
              to: '/about',
              action: ''
            },
            {
              title: 'スタッフについて',
              to: '/about/staff',
              action: ''
            },
            {
              title: 'Q&A-良くある質問-',
              to: '/about/qa',
              action: ''
            },
            {
              title: '入店から施術までの流れ',
              to: '/about/beginner',
              action: ''
            }
          ]
        }
      ],
      itemsVoice: [
        {
          action: 'face',
          title: '患者様の声',
          to: '/voice'
        }
      ],
      itemsSalon: [
        {
          action: 'place',
          title: '治療院一覧',
          to: '/salon'
        }
      ],
      Drawer: false
    }
  }
}
</script>
<style></style>
