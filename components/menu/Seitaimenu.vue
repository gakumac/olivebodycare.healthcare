<template>
  <v-toolbar color="info">
    <v-toolbar-items>
      <v-btn
        class="brown--text font-weight-bold"
        color="info"
        small
        :to="seitai"
        >整体について</v-btn
      >
      <v-btn class="brown--text font-weight-bold" color="info" small :to="sango"
        >産後の整体</v-btn
      >
      <v-btn
        class="brown--text font-weight-bold"
        color="info"
        small
        :to="option"
        >整体オプション</v-btn
      >
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      seitai: '/menu/seitai',
      sango: '/menu/seitai/sangoseitai',
      option: '/menu/seitai/seitaioption'
    }
  }
}
</script>
