<template>
  <div class="grey lighten-5">
    <v-layout>
      <v-flex>
        <div class="mt-4 text-center">
          <v-icon x-large class="brown--text">party_mode</v-icon>
        </div>
        <h2 class="mt-2 brown--text text-center">
          メディア掲載されました！
        </h2>
        <div class="mt-2 text-center title red--text font-weight-bold">
          <v-icon large class="red--text">check</v-icon>
          <span>メディアも注目！</span>
        </div>
      </v-flex>
    </v-layout>
    <v-container grid-list-md>
      <v-layout justify-center>
        <v-flex xs6 sm5 md4 lg3 xl2>
          <v-img :src="require('@/assets/images/home/home12.jpg')"></v-img>
        </v-flex>
        <v-flex xs6 sm5 md4 lg3 xl2>
          <v-img :src="require('@/assets/images/home/home13.jpg')"></v-img>
        </v-flex>
        <v-flex xs6 sm5 md4 lg3 xl2>
          <v-img :src="require('@/assets/images/home/home14.jpg')"></v-img>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout row wrap justify-center>
        <v-flex xs6 sm5 md4 lg3 xl2>
          <v-img :src="require('@/assets/images/home/home15.jpg')"></v-img>
        </v-flex>
        <v-flex xs6 sm5 md4 lg3 xl2>
          <p class="ml-2">
            メディアサイト『サロン開業支援-EGG-』に人気サロンインタビューコーナーにて取材を受けました！
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
