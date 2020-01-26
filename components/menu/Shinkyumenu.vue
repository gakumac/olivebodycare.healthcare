<template>
  <v-app-bar color="info">
    <template>
      <v-tabs background-color="transparent">
        <v-tab :to="shinkyu" class="caption font-weight-bold">鍼灸</v-tab>
        <v-tab :to="seiri" class="caption font-weight-bold">鍼灸と生理</v-tab>
        <v-tab :to="option" class="caption font-weight-bold"
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
