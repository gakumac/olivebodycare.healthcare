<template>
  <div class="info">
    <v-container grid-list-md>
      <v-layout>
        <v-flex>
          <h2 class="my-2 accent--text text-center">
            追伸
          </h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center class="text-center">
        <v-flex xs12 md8>
          <p class="mt-2">
            当治療院は女性専門、女性スタッフによる女性のための整体院です。
          </p>
          <p>
            肩こりや腰痛、関節痛、痛みの他、シビレや倦怠感・・・症状は様々です。
          </p>
          <p>
            どこに行けば良いのか迷われてる方、お気軽にご相談ください。
          </p>
          <p>
            患者様一人一人の体に合った施術をご提供いたします。
          </p>
          <p class="font-weight-bold">
            痛みや不快感の無い女性本来の健康な身体を取り戻しましょう！
          </p>
          <p>
            質問相談だけでも当院女性スタッフが丁寧にお答えしますのでお気軽にお問い合わせ下さい。
          </p>
          <p class="title accent--text font-weight-bold">
            早期治癒を目指し 一緒に頑張りましょう!
          </p>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs8 sm6 md5 lg4 xl3>
          <v-img
            :src="require('@/assets/images/salon/salonmaruyama_kokubun.jpg')"
          ></v-img>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 md10>
          <v-card flat class="my-2" color="info">
            <h3 class="py-2 accent--text text-center">
              札幌円山店ご予約は今すぐこちら！
            </h3>
            <v-layout row wrap justify-center>
              <v-flex xs12 sm6 md5 lg5 xl4 class="text-center">
                <v-btn
                  large
                  a
                  href="https://olivebodycare.healthcare/reserve/maruyama"
                  dark
                  color="green darken-3"
                >
                  <span class="font-weight-bold subtitle-1"
                    >24時間Web予約は今すぐこちら！</span
                  >
                </v-btn>
              </v-flex>
              <v-flex xs12 sm6 md5 lg5 xl4 class="text-center">
                <v-btn large a href="tel:0116768970" color="primary" dark>
                  <v-icon>phone</v-icon>
                  <span class="font-weight-bold subtitle-1"
                    >：011-676-8970</span
                  >
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
