<template>
  <div class="info">
    <v-layout>
      <v-flex>
        <div class="mt-4 text-xs-center">
          <v-icon x-large class="accent--text">beenhere</v-icon>
        </div>
        <h2 class="mt-2 accent--text text-xs-center">
          こんな方は是非おこしください！
        </h2>
      </v-flex>
    </v-layout>
    <v-container grid-list-lg>
      <v-layout row wrap justify-center>
        <v-flex xs12 md8>
          <v-card color="red lighten-4" class="brown--text">
            <v-card-title>
              <div class="title font-weight-bold">
                首の痛み、腰痛、肩こりを治したい。
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-md>
      <v-layout justify-center>
        <v-flex xs6 md5>
          <v-img :src="require('@/assets/images/home/home16.jpg')"></v-img>
        </v-flex>
        <v-flex xs6 md5>
          <v-img :src="require('@/assets/images/home/home17.jpg')"></v-img>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
