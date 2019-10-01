<template>
  <div class="info">
    <v-layout justify-center>
      <v-flex xs12 sm11 md9 lg8 xl7>
        <v-carousel hide-delimiters height="auto" width="auto">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
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
          src: require('@/assets/images/campaign/maruyama-cp1.jpg')
        },
        {
          src: require('@/assets/images/campaign/maruyama-cp2.jpg')
        }
      ]
    }
  }
}
</script>
