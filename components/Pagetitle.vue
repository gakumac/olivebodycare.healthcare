<template>
  <div class="accent mt-12">
    <v-layout>
      <v-flex>
        <h1 class="mt-3 py-1 pl-4 white--text">
          {{ h1 }}
        </h1>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    h1: {
      type: String,
      default: 'OliveBodyCare'
    }
  }
}
</script>
