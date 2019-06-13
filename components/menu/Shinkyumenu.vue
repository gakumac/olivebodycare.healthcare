<template>
  <v-toolbar color="info">
    <v-toolbar-items>
      <v-btn
        class="brown--text font-weight-bold caption"
        color="info"
        small
        :to="seitai"
        >鍼灸</v-btn
      >
      <v-btn
        class="brown--text font-weight-bold caption"
        color="info"
        small
        :to="sango"
        >鍼灸と生理</v-btn
      >
      <v-btn
        class="brown--text font-weight-bold caption"
        color="info"
        small
        :to="option"
        >鍼灸オプション</v-btn
      >
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      seitai: '/menu/shinkyu',
      sango: '/menu/shinkyu/menstruation',
      option: '/menu/shinkyu/option'
    }
  }
}
</script>
