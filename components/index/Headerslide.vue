<template>
  <div>
    <v-carousel hide-delimiters height="auto" class="mt-5">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
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

<style></style>
