<template>
  <v-carousel height="auto">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require('@/assets/images/mv_02.jpg')
        },
        {
          src: require('@/assets/images/mv_01.jpg')
        }
      ]
    }
  }
}
</script>

<style>
.v-carousel__controls {
  background: rgba(0, 0, 0, 0.1);
  height: 40px;
}
</style>
