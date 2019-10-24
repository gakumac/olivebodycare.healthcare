<template>
  <div class="yellow lighten-5">
    <v-layout>
      <v-flex>
        <div class="mt-4 text-xs-center">
          <v-icon x-large class="accent--text">face</v-icon>
        </div>
        <h2 class="mt-2 accent--text text-xs-center">
          患者様から喜びの声が届きました！
        </h2>
      </v-flex>
    </v-layout>
    <v-container grid-list-md>
      <div v-for="(item, i) in items" :key="i">
        <v-card color="yellow lighten-5" class="pa-2 my-2">
          <v-layout row wrap justify-center>
            <v-flex xs12 md12>
              <h3 class="my-3 brown--text text-xs-center">
                {{ item.name }}
              </h3>
            </v-flex>
            <v-flex xs12 sm10 md6 lg5 xl4>
              <v-img :src="item.sheet"></v-img>
              <div class="caption brown--text">
                ※個人の感想であり、効果を保証するわけではありません。
              </div>
            </v-flex>
            <v-flex xs12 sm10 md6 lg5 xl4>
              <div>
                <div class="accent--text caption">
                  ①来院時の症状はどんな症状でいらっしゃいましたか？
                </div>
                <p>
                  {{ item.message1 }}
                </p>
                <div class="accent--text mt-3 caption">
                  ②どんな経緯で来院しましたか？
                </div>
                <p>
                  {{ item.message2 }}
                </p>
                <div class="accent--text mt-3 caption">
                  ③当院の治療を受けて、どんな変化がありましたか？
                </div>
                <p>
                  {{ item.message3a }}
                </p>
                <p>
                  {{ item.message3b }}
                </p>
                <p>
                  {{ item.message3c }}
                </p>
                <div class="accent--text mt-3 caption">
                  ④同じようなお悩みをお持ちの女性へのメッセージ
                </div>
                <p class="font-weight-bold">
                  {{ item.message4a }}
                </p>
                <p class="font-weight-bold">
                  {{ item.message4b }}
                </p>
                <p class="font-weight-bold">
                  {{ item.message4c }}
                </p>
                <p class="font-weight-bold">
                  {{ item.message4d }}
                </p>
              </div>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center>
            <v-flex xs12 sm10 md6 lg5 xl4>
              <v-img :src="item.image"></v-img>
            </v-flex>
          </v-layout>
        </v-card>
      </div>
      <v-layout row wrap justify-center>
        <v-flex xs8 sm6 md5 lg4 xl3>
          <v-img
            :src="require('@/assets/images/voice/aobadai/pa_nosaki.jpg')"
          ></v-img>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 md10>
          <v-card flat class="my-2" color="yellow lighten-5">
            <h3 class="py-2 accent--text text-xs-center">
              横浜青葉台店ご予約は今すぐこちら！
            </h3>
            <v-layout row wrap justify-center>
              <v-flex xs12 sm6 md5 lg5 xl4 class="text-xs-center">
                <v-btn
                  large
                  a
                  href="https://olivebodycare.healthcare/reserve/aobadai"
                  dark
                  color="green darken-3"
                >
                  <span class="font-weight-bold subtitle-1"
                    >24時間Web予約は今すぐこちら！</span
                  >
                </v-btn>
              </v-flex>
              <v-flex xs12 sm6 md5 lg5 xl4 class="text-xs-center">
                <v-btn large a href="tel:0455303903" color="primary" dark>
                  <v-icon>phone</v-icon>
                  <span class="font-weight-bold subtitle-1"
                    >：045-530-3903</span
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
  data: function() {
    return {
      items: [
        {
          name: '横浜市青葉区在住　山崎 さおり様',
          sheet: require('@/assets/images/voice/aobadai/qa_yamazaki.jpg'),
          image: '',
          message1: '全身疲れ・肩・腰のこり',
          message2: '体質改善、妊活',
          message3a: '身体の可動域が広くなった、肩こりなどが軽減した。',
          message4a:
            '何か一つでも不調を感じているならぜひ通った方が良いと思います。',
          message4b: '毎回変化が感じられるので気持ちが上がりますよ！'
        },
        {
          name: '横浜市青葉区在住　森保 奈津子様',
          sheet: require('@/assets/images/voice/aobadai/qa_moriho.jpg'),
          image: '',
          message1:
            '産後骨盤のゆがみをしっかり治したいと思っていたのと肩こりがひどく頭痛も感じていました。',
          message2:
            'ママ友の間ではオリーヴが良い！と話題になっていて2人目出産を機に続けて通おうと思っていました。',
          message3a: '骨盤の歪みがとれた！！顔がはっきりとした。',
          message3b: 'スタッフの方とお話することで心もスッキリします。',
          message4a:
            '産後しばらくは子連れでの外出も難しく疲れやストレスがたまりますが、オリーヴは生後2ヶ月の赤ちゃんも安心して連れていくことができます^o^',
          message4b:
            '気持ち良い施術と楽しいお話で心身ともにスッキリ リフレッシュしましょう！！'
        },
        {
          name: '横浜市青葉区在住　S.C様',
          sheet: require('@/assets/images/voice/aobadai/qa_s.c.jpg'),
          image: '',
          message1: '身体の疲れ、肩こり',
          message2: '自宅の近く',
          message3a: '身体の軽さを感じることが出来ました。',
          message4a: '本当にオススメです。',
          message4b: '先生たちもアットホームでやさしい方ばかりです。',
          message4c:
            '身体の不調の事について詳しく説明してくれるので安心して受けることが出来ます。'
        },
        {
          name: '国立市在住　鹿股 利恵様',
          sheet: require('@/assets/images/voice/aobadai/qa_shikamata.r.jpg'),
          image: '',
          message1: '全身のゆがみ、痛み。',
          message2: 'インターネットで。',
          message3a: '痛みが和らぎ、生活の支障がなくなった。',
          message4a: 'ぜひ、一度受けてみてください。',
          message4b: '何かが変わるはずです。'
        },
        {
          name: '横浜市青葉区在住　畠山 美穂様',
          sheet: require('@/assets/images/voice/aobadai/qa_hatakeyama.jpg'),
          image: require('@/assets/images/voice/aobadai/pa_hatakeyama.jpg'),
          message1: '首肩背中のコリ、腰の痛み',
          message2: 'ギックリ腰になって',
          message3a:
            '治療以降、腰の痛みを感じることが少なくなりギックリ腰になっていません。',
          message4a: '素敵なスタッフさんで、雰囲気よく通いやすいです。',
          message4b: '子連れでも大丈夫なので気軽に通えます。'
        },
        {
          name: '国立市在住　鹿股 萌様',
          sheet: require('@/assets/images/voice/aobadai/qa_shikamata.m.jpg'),
          image: '',
          message1: '腰の痛み、仰臥位で眠れない',
          message2: '母の紹介',
          message3a: '腰の痛みがなく仰臥位で寝れるようになった。',
          message3b: '日常生活で体が軽くなった。',
          message4a: 'どんな悩みでも受けとめてくれる信頼できる先生がいます。',
          message4b: '悩み続ける前に一歩の勇気を！！'
        }
      ]
    }
  }
}
</script>
