<template>
  <div class="yellow lighten-5">
    <v-layout justify-center>
      <v-flex xs12 sm12 md12 lg11 xl10>
        <v-carousel hide-delimiters height="auto" width="auto" class="mt-5">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            lazy
          ></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require('@/assets/images/hed_1000.jpg')
        },
        {
          src: require('@/assets/images/hed2_1000.jpg')
        }
      ]
    }
  }
}
</script>

<style></style>
