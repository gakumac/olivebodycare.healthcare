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
      <v-layout justify-center class="text-center">
        <v-flex xs12 md8>
          <p class="mt-2">
            当治療院は女性専門、女性スタッフによる女性のための整体院です。
          </p>
          <p>
            おかげさまで、横浜の地で開業して13年目を向かえました。
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
            心身ともに健やかな生活を目指し 一緒に頑張りましょう!
          </p>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm8 md8 lg6 xl5>
          <v-img :src="require('@/assets/images/home/postscript1.jpg')"></v-img>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex class="mt-4 text-center" xs12 sm9 md9 lg7 xl5>
          <p class="my-4 red--text font-weight-bold display-1">
            女性を元気に！
          </p>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex class="text-center" xs12 sm9 md9 lg7 xl5>
          <v-card color="yellow lighten-5" class="pa-4 mb-4">
            <h3>
              『女性を元気に！家庭を元気に！日本そして世界を元気に！』
            </h3>
            <p class="mt-4">
              この理念のもと<br />
              今働いているスタッフも、どうしたら来て頂いた時より元気になって帰って頂けるか、そして一人一人に寄りそい、健やかな生活を送れるように関わっていけるか、日々力を尽くし営業に取り組んでいます。
            </p>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex class="mt-4 text-center" xs12 sm9 md9 lg7 xl5>
          <h3 class="mb-2 red--text">私たちのミッション</h3>
          <p class="my-4 indigo--text font-weight-bold">
            私たちが日本を代表する<br />
            女性専門の治療院だという高い意識を持ち
          </p>
          <v-card color="yellow lighten-5" class="headline pa-4 mb-4">
            <p>働く女性も含めすべての関わる女性を元気に！</p>
            <p>明るい家庭の実現に貢献し</p>
            <p>心身ともに豊かな社会の実現に貢献する。</p>
          </v-card>
          <p class="mt-4 indigo--text font-weight-bold">
            私たちはこの理念のもと力を尽くし<br />
            皆さまと一緒により良い社会を実現していきます！
          </p>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs6 sm5 md6 lg5 xl4>
          <v-img :src="require('@/assets/images/voice/p_y.f.jpg')"></v-img>
        </v-flex>
        <v-flex xs6 sm5 md6 lg5 xl4>
          <v-img
            :src="require('@/assets/images/voice/aobadai/pa_hatakeyama.jpg')"
          ></v-img>
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
