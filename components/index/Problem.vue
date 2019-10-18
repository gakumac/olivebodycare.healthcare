<template>
  <div class="grey lighten-5">
    <v-layout>
      <v-flex>
        <div class="mt-4 text-xs-center">
          <v-icon x-large class="brown--text">sentiment_dissatisfied</v-icon>
        </div>
        <h2 class="mt-2 brown--text text-xs-center">
          当院の患者様にはこんなお悩みが・・・
        </h2>
      </v-flex>
    </v-layout>
    <v-container grid-list-lg>
      <div v-for="(item, i) in items" :key="i">
        <v-layout row wrap justify-center>
          <v-flex xs12 sm10 md6 lg5 xl4>
            <v-card color="grey lighten-3">
              <v-card-title>
                <v-icon left>chat_bubble</v-icon>
                <span>{{ item.comment }}</span>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 sm10 md6 lg5 xl4>
            <v-card color="grey lighten-3">
              <v-card-title>
                <v-icon left>chat_bubble</v-icon>
                <span>{{ item.comment2 }}</span>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
    <v-container>
      <v-layout justify-center>
        <v-flex xs12 sm8 md8 lg6 xl4>
          <v-img :src="require('@/assets/images/home/home18.jpg')"></v-img>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm8 md6 lg5 xl4>
          <v-btn
            block
            large
            dark
            class="mt-4"
            color="light-green darken-2"
            a
            href="https://olivebodycare.healthcare/reserve/"
          >
            <v-icon>date_range</v-icon>
            <span class="font-weight-bold"
              >２４時間WEB予約は今すぐこちら！</span
            >
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        {
          comment: '『首の痛み、腰痛、肩こり』',
          comment2: '『肩がはっていて頭痛になりやすい』'
        },
        {
          comment: '『骨盤のゆがみ、出産後の骨盤の調整』',
          comment2: '『子育てに追われ自分のことは後まわしで、、』'
        },
        {
          comment: '産後２ヶ月ですが、身体中がぎしぎしです、、』',
          comment2: '『背中が辛いです・・』'
        },
        {
          comment: '『足の痛み』',
          comment2: '『妊娠願望がありましたがなかなか叶わず、』'
        }
      ]
    }
  }
}
</script>
