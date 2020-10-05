<template>
  <div class="info">
    <v-container grid-list-md>
      <v-layout>
        <v-flex>
          <div class="my-2 text-center">
            <v-icon x-large class="brown--text">face</v-icon>
          </div>
          <h2 class="my-2 brown--text text-center">
            店舗・スタッフより
          </h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 md10>
          <h3 class="my-3 accent--text text-center">
            {{ name }}
          </h3>
          <p class="title brown--text text-center">
            所有国家資格&nbsp;{{ qualification }}
          </p>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm9 md9 lg7 xl5>
          <v-img :src="img1"></v-img>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm9 md9 lg7 xl5>
          <v-card class="my-4" flat>
            <v-layout row wrap justify-center>
              <v-flex>
                <v-card-title>
                  <h3 class="brown--text">
                    {{ name }}
                  </h3>
                </v-card-title>
                <div class="mx-2">
                  <p>＜国家資格＞&nbsp;{{ qualification }}</p>
                  <p>
                    ＜趣味・特技＞&nbsp;柔道二段、書道４段、スポーツ観戦、読書、映画鑑賞
                  </p>
                  <h3 class="brown--text">
                    経歴
                  </h3>
                  <p>札幌市豊平区&nbsp;北海高等学校卒業</p>
                  <p>神奈川県相模原市&nbsp;神奈川柔道整復鍼灸専門学校卒業</p>
                  <p>神奈川県藤沢市&nbsp;ななみ整骨院勤務&nbsp;院長</p>
                  <p>
                    神奈川県藤沢市&nbsp;ななみ整骨院本鵠沼院勤務&nbsp;副院長
                  </p>
                  <p>
                    神奈川県藤沢市&nbsp;ななみ整骨院みろくじ院勤務&nbsp;副院長
                  </p>
                  <p>
                    神奈川県横浜市&nbsp;女性専門の治療院オリーヴボディケアたまプラーザ店勤務
                  </p>
                  <p>
                    北海道札幌市&nbsp;女性専門の治療院オリーヴボディケア札幌円山店&nbsp;院長勤務
                  </p>
                  <h3 class="brown--text">
                    その他活動
                  </h3>
                  <p>東京都新宿区&nbsp;高校柔道部&nbsp;トレーナー勤務</p>
                  <p>神奈川県横須賀市&nbsp;高校柔道部&nbsp;トレーナー勤務</p>
                  <p>神奈川県藤沢市&nbsp;バレエスタジオ&nbsp;トレーナー帯同</p>
                  <p>
                    神奈川県藤沢市&nbsp;健康・体操教室開催&nbsp;歩行指導教室開催
                  </p>
                </div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 md6 xl5>
          <iframe
            width="100%"
            height="330"
            src="https://www.youtube.com/embed/pLORfQap_Nc"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm9 md9 lg7 xl5>
          <v-card class="mt-2 pa-4" color="yellow lighten-5">
            <h3 class="mb-2 accent--text">{{ title }}</h3>
            <p>{{ message1 }}</p>
            <p>{{ message2 }}</p>
            <p>{{ message3 }}</p>
            <p>{{ message4 }}</p>
          </v-card>
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

<script>
export default {
  data() {
    return {
      name: '札幌円山店院長 國分 麻美（こくぶん あさみ）',
      qualification: '柔道整復師',
      title: 'お身体の事、私にお任せください！',
      message1:
        'みなさんこんにちは。札幌円山店院長國分麻美です。女性専門の治療院オリーヴボディケアのホームページをご覧いただきありがとうございます。',
      message2:
        'この度ご縁あって、私の地元・札幌にて開業することとなりました。昨今の女性は社会進出や出産・家事・育児などで自分の体に目を向ける時間が取りづらく、身体の不調や痛みを我慢しながら生活されている方も多くいらっしゃると思います。',
      message3:
        'また整体院も溢れており、自分にあっている整体院はどこなのか？お探しの方も多いと思います。そのような皆様のお悩みの相談に乗り、オーダーメイドの治療を提供させたいただきます。',
      message4:
        '「女性を元気に！家庭を元気に！日本そして世界を元気に！！」をモットーに、みなさまからのありがとうを糧に治療に専念させていただきます。当院では小さなお子様もご一緒に来院できる空間づくりをしております。ぜひ、オリーヴボディケア札幌円山店にお任せください。',
      img1: require('@/assets/images/salon/salonmaruyama21.jpg'),
      img2: require('@/assets/images/salon/salonmaruyama_kokubun2.jpg'),
      img3: require('@/assets/images/salon/salon10.jpg')
    }
  }
}
</script>
