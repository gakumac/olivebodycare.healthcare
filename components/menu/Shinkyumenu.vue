<template>
  <v-app-bar color="info">
    <template>
      <v-tabs background-color="transparent">
        <v-tab class="caption font-weight-bold" :to="shinkyu">鍼灸</v-tab>
        <v-tab class="caption font-weight-bold" :to="seiri">鍼灸と生理</v-tab>
        <v-tab class="caption font-weight-bold" :to="option"
          >鍼灸オプション</v-tab
        >
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      shinkyu: '/menu/shinkyu',
      seiri: '/menu/shinkyu/menstruation',
      option: '/menu/shinkyu/option'
    }
  }
}
</script>
