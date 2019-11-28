<template>
  <v-app-bar color="info">
    <template>
      <v-tabs background-color="transparent">
        <v-tab class="caption font-weight-bold" :to="kotsuban">骨盤矯正</v-tab>
        <v-tab class="caption font-weight-bold" :to="sango"
          >産後の骨盤矯正</v-tab
        >
        <v-tab class="caption font-weight-bold" :to="diet"
          >骨盤矯正ダイエット</v-tab
        >
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      kotsuban: '/menu/pelvis-correction',
      sango: '/menu/pelvis-correction/sango',
      diet: '/menu/pelvis-correction/diet'
    }
  }
}
</script>
