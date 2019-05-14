<template>
  <div class="info">
    <v-layout row wrap>
      <v-flex xs5 md9>
        <h1 class="pt-2 pl-5 primary--text">Home</h1>
      </v-flex>
      <v-flex xs7 md3>
        <v-breadcrumbs class="right" :items="items" divider=">"></v-breadcrumbs>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: 'Home',
        disabled: false,
        href: '/'
      }
    ]
  })
}
</script>
