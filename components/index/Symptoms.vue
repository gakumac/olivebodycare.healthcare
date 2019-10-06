<template>
  <div class="yellow lighten-5">
    <v-layout>
      <v-flex>
        <div class="mt-4 text-xs-center">
          <v-icon x-large class="brown--text">healing</v-icon>
        </div>
        <h2 class="mt-2 brown--text text-xs-center">
          当院を利用する事で、期待できる効果的症状
        </h2>
      </v-flex>
    </v-layout>
    <v-container>
      <v-layout row wrap justify-center class="text-xs-center">
        <v-flex xs12 md8>
          <p class="mt-4">
            骨盤のゆがみ、骨盤矯正、肩こり、腰痛
          </p>
          <p>
            四十肩、五十肩、ぎっくり腰
          </p>
          <p>
            首・背中の痛み、手足のしびれ
          </p>
          <p>
            O脚、X脚
          </p>
          <p>
            頭痛、生理痛、冷え
          </p>
          <p>
            むくみ、便秘、自律神経系の症状
          </p>
          <p>
            恥骨痛、鼠蹊部（そけいぶ）痛
          </p>
          <p>
            むちうち、椎間板ヘルニア
          </p>
          <p class="font-weight-bold">
            その他の症状等お気軽にご相談下さい。ひとりひとりに合った施術をしていきます。
          </p>
          <p class="font-weight-bold">
            無理な施術はいたしませんので、どうぞご安心ください。
          </p>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm8 md8 lg6 xl4>
          <v-img :src="require('@/assets/images/home/home19.jpg')"></v-img>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
