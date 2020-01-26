<template>
  <v-app-bar color="info">
    <template>
      <v-tabs background-color="transparent">
        <v-tab :to="seitai" class="caption font-weight-bold"
          >整体について</v-tab
        >
        <v-tab :to="sango" class="caption font-weight-bold">産後の整体</v-tab>
        <v-tab :to="option" class="caption font-weight-bold"
          >整体オプション</v-tab
        >
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      seitai: '/menu/seitai',
      sango: '/menu/seitai/sango',
      option: '/menu/seitai/option'
    }
  }
}
</script>
