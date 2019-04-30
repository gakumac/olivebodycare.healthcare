<template>
  <div class="yellow lighten-5">
    <v-container>
      <v-layout row wrap justify-center>
        <v-flex xs6 md4 pr-1>
          <v-carousel height="auto">
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
        <v-flex xs6 md4 pl-1>
          <v-carousel height="auto">
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require('@/assets/images/hed_1.jpg')
        },
        {
          src: require('@/assets/images/hed_2.jpg')
        }
      ]
    }
  }
}
</script>

<style>
.v-carousel__controls {
  background: rgba(0, 0, 0, 0);
  height: 40px;
}
</style>
