<template>
  <v-navigation-drawer
    v-model="drawer"
    class="yellow lighten-5"
    temporary
    fixed
    app
  >
    <div class="mt-2 ml-2">
      <v-btn
        dark
        color="light-green darken-2"
        class="font-weight-bold"
        a
        href="https://reserve.olivebodycare.healthcare/mypage/"
      >
        マイページ
      </v-btn>
      <v-btn
        dark
        color="light-green darken-2"
        a
        href="https://olivebodycare.healthcare/reserve/"
      >
        24時間Web予約
      </v-btn>
    </div>
    <v-list class="brown--text">
      <v-list-tile
        v-for="(item, homeIndex) in itemsHome"
        :key="`home-item-${homeIndex}`"
        :to="item.to"
      >
        <v-list-tile-action>
          <v-icon>{{ item.action }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="font-weight-bold" v-text="item.title" />
        </v-list-tile-content>
      </v-list-tile>
      <v-list-group
        v-for="(item, index) in items"
        :key="`item-${index}`"
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
          v-for="(subItem, subIndex) in item.items"
          :key="`sub-item-${subIndex}`"
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
      <v-list-tile
        v-for="(item, voiceIndex) in itemsVoice"
        :key="`voice-item-${voiceIndex}`"
        :to="item.to"
      >
        <v-list-tile-action>
          <v-icon>{{ item.action }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="font-weight-bold" v-text="item.title" />
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile
        v-for="(item, salonIndex) in itemsSalon"
        :key="`salon-item-${salonIndex}`"
        :to="item.to"
      >
        <v-list-tile-action>
          <v-icon>{{ item.action }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="font-weight-bold" v-text="item.title" />
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import menuConfig from '@/assets/configs/menus.js'

export default {
  props: {
    drawed: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      // warningが出るため、直接returnしない
      ...menuConfig
    }
  },
  computed: {
    drawer: {
      get() {
        return this.drawed
      },
      set(drawed) {
        this.$emit('input', drawed)
      }
    }
  }
}
</script>
