<template>
  <v-app-bar color="info">
    <template>
      <v-tabs background-color="transparent">
        <v-tab :to="opt" class="caption font-weight-bold"
          >パーソナルトレーニング</v-tab
        >
        <v-tab :to="ptbeginner" class="caption font-weight-bold"
          >開始までの流れ</v-tab
        >
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      opt: '/menu/personal-training',
      ptbeginner: '/menu/personal-training/beginner'
    }
  }
}
</script>
