<template>
  <v-navigation-drawer
    v-model="drawer"
    class="yellow lighten-5"
    width="280"
    temporary
    fixed
  >
    <div class="mt-3 ml-3">
      <v-btn
        dark
        small
        color="green darken-3"
        class="font-weight-bold mr-2 body-2"
        a
        href="https://reserve.olivebodycare.healthcare/mypage"
      >
        マイページ
      </v-btn>
      <v-btn
        dark
        small
        color="green darken-3"
        class="body-2"
        a
        href="https://olivebodycare.healthcare/reserve"
      >
        24時間Web予約
      </v-btn>
    </div>
    <v-list class="primary--text">
      <v-list-item
        v-for="(item, homeIndex) in itemsHome"
        :key="`home-item-${homeIndex}`"
        :to="item.to"
      >
        <v-list-item-icon>
          <v-icon>{{ item.action }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title v-text="item.title" class="body-2" />
      </v-list-item>
      <v-list-group
        v-for="(item, index) in items"
        :key="`item-${index}`"
        :prepend-icon="item.action"
        no-action
      >
        <!-- <v-list-group
          v-for="(item, index) in items"
          :key="`item-${index}`"
          v-model="item.active"→メニューを開けておきたい場合はこの行を足す。
          :prepend-icon="item.action"
          no-action
        > -->
        <template slot="activator">
          <v-list-item-content>
            <v-list-item-title class="body-2">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item
          v-for="(subItem, subIndex) in item.items"
          :key="`sub-item-${subIndex}`"
          :to="subItem.to"
        >
          <v-list-item-content>
            <v-list-item-title class="body-2">
              {{ subItem.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
    <div class="mb-3 text-center">
      <v-btn
        dark
        target="_blank"
        color="green darken-3"
        class="font-weight-bold mr-2 body-2"
        a
        href="https://olivebodycare.jp/recruit/"
      >
        採用・求人ページ
      </v-btn>
    </div>
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
