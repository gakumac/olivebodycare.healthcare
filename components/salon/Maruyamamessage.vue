<template>
  <div class="info">
    <v-container grid-list-md>
      <v-layout>
        <v-flex>
          <div class="my-2 text-xs-center">
            <v-icon x-large class="brown--text">face</v-icon>
          </div>
          <h2 class="my-2 brown--text text-xs-center">
            店舗・スタッフより
          </h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 md10>
          <h3 class="my-3 accent--text text-xs-center">
            {{ name }}
          </h3>
          <p class="title brown--text text-xs-center">
            所有国家資格&nbsp;{{ qualification }}
          </p>
        </v-flex>
        <v-flex xs6 md4>
          <v-img :src="require('@/assets/images/salon/salon9.jpg')"></v-img>
        </v-flex>
        <v-flex xs6 md4>
          <v-img :src="require('@/assets/images/salon/salon10.jpg')"></v-img>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 md10>
          <v-card class="mt-2" color="yellow lighten-5">
            <v-card-title primary-title>
              <div>
                <div class="brown--text headline">{{ title }}</div>
                <div class="brown--text">{{ message }}</div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '札幌円山町店店院長 國分 麻美（こくぶん あさみ）',
      qualification: '柔道整復師',
      title: '私たちにお任せください！',
      message: '院長の國分麻美です。'
    }
  }
}
</script>
