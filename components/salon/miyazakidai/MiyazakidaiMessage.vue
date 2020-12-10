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
        <v-flex xs6 sm5 md5 lg4 xl3>
          <v-img :src="img1"></v-img>
        </v-flex>
        <v-flex xs6 sm5 md5 lg4 xl3>
          <v-img :src="img2"></v-img>
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
                    ＜趣味・特技＞&nbsp;テニス
                  </p>
                  <h3 class="brown--text">
                    経歴
                  </h3>
                  <p>神奈川県川崎市立&nbsp;橘高等学校卒業</p>
                  <p>東京有明医療大学卒業</p>
                  <p>日本鍼灸理療専門学校卒業</p>
                  <p>エコルスタ&nbsp;整骨院勤務</p>
                  <p>
                    神奈川県横浜市&nbsp;女性専門の治療院オリーヴボディケアたまプラーザ店&nbsp;勤務
                  </p>
                  <p>
                    神奈川県横浜市&nbsp;女性専門の治療院オリーヴボディケア宮崎台店&nbsp;主任勤務
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
            src="https://www.youtube.com/embed/dP-wnmTsFDc"
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
            <p>{{ message5 }}</p>
            <p>{{ message6 }}</p>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 md10>
          <v-card flat class="my-2" color="info">
            <h3 class="py-2 accent--text text-center">
              川崎宮崎台店ご予約は今すぐこちら！
            </h3>
            <v-layout row wrap justify-center>
              <v-flex xs12 sm6 md5 lg5 xl4 class="text-center">
                <v-btn
                  large
                  a
                  href="https://olivebodycare.healthcare/reserve/miyazakidai"
                  dark
                  color="green darken-3"
                >
                  <span class="font-weight-bold subtitle-1"
                    >24時間Web予約は今すぐこちら！</span
                  >
                </v-btn>
              </v-flex>
              <v-flex xs12 sm6 md5 lg5 xl4 class="text-center">
                <v-btn large a href="tel:0447409988" color="primary" dark>
                  <v-icon>phone</v-icon>
                  <span class="font-weight-bold subtitle-1"
                    >：044-740-9988</span
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
      name: '主任 稲田 真梨（いなた まり）',
      qualification: '鍼灸師、柔道整復師、あん摩マッサージ師',
      title: 'お身体の事、私にお任せください！',
      message1:
        'こんにちは。女性専門の治療院オリーヴボディケアの稲田真梨です。この度は当院のホームページをご覧いただき、誠に有難うございます。',
      message2:
        '私たちは、「女性を元気に！家庭を元気に！日本、そして世界を元気に！」という理念を念頭に日々施術させて頂いております。',
      message3:
        '当院は産後の骨盤矯正・首肩凝り・ギックリ腰・妊活と様々な症状の方がいらっしゃいます。',
      message4:
        '女性の皆様は、家事に育児にお仕事。何かをしながら別の何かを考えている。そんな日常が当たり前になってはいませんか？',
      message5:
        '痛みのない身体作りはもちろんのこと、「オリーヴに行くと休める」「また頑張ろうと思える」「ここだけはわたしの時間」そんな場所になれるようにスタッフ一同試行錯誤しております！',
      message6:
        '一緒に悩みを解決していきましょう。皆様のご来院を心よりお待ちしております！',
      img1: require('@/assets/images/salon/miyazakidai/miyazakidai21.jpg'),
      img2: require('@/assets/images/salon/miyazakidai/miyazakidai22.jpg')
    }
  }
}
</script>
