<template>
  <v-toolbar color="info">
    <v-toolbar-items>
      <v-btn
        class="brown--text font-weight-bold caption"
        color="info"
        small
        :to="seitai"
        >骨盤矯正</v-btn
      >
      <v-btn
        class="brown--text font-weight-bold caption"
        color="info"
        small
        :to="sango"
        >産後の骨盤矯正</v-btn
      >
      <v-btn
        class="brown--text font-weight-bold caption"
        color="info"
        small
        :to="option"
        >骨盤矯正ダイエット</v-btn
      >
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      seitai: '/menu/pelvis-correction',
      sango: '/menu/pelvis-correction/sango',
      option: '/menu/pelvis-correction/diet'
    }
  }
}
</script>
