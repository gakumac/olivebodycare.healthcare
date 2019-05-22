<template>
  <div>
    <div class="grey lighten-4">
      <v-container grid-list-md>
        <v-layout row wrap justify-center>
          <v-flex xs12 md12>
            <h3 class="my-2 accent--text text-xs-center">
              駐車場のご案内
            </h3>
          </v-flex>
          <v-flex xs12 md8>
            <h4 class="title mt-2">
              近隣の駐車場のご案内
            </h4>
          </v-flex>
          <v-flex xs6 md5>
            <v-img :src="require('@/assets/images/salon/salon3.jpg')"></v-img>
          </v-flex>
          <v-flex xs6 md5>
            <v-img :src="require('@/assets/images/salon/salon4.jpg')"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>
