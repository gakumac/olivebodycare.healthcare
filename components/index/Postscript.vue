<template>
  <div class="info">
    <v-container>
      <v-layout>
        <v-flex>
          <h2 class="my-2 accent--text text-xs-center">
            追伸
          </h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center class="text-xs-center">
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
        <v-flex xs12 sm8 md8 lg6 xl5>
          <v-img :src="require('@/assets/images/home/postscript1.jpg')"></v-img>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm8 md6 lg5 xl4>
          <v-btn
            block
            large
            dark
            class="mt-4"
            color="green darken-3"
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
