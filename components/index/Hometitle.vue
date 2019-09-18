<template>
  <div class="info">
    <v-layout row wrap>
      <v-flex xs5 md9>
        <h1 class="pt-2 pl-12 primary--text">
          Home
        </h1>
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
        disabled: true,
        href: ''
      }
    ]
  })
}
</script>
