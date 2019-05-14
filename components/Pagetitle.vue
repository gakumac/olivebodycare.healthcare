<template>
  <div class="accent mt-5">
    <v-layout>
      <v-flex>
        <h1 class="mt-3 py-1 pl-3 white--text">
          {{ title }}
        </h1>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Default title'
    }
  }
}
</script>
