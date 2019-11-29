<template>
  <div class="yellow lighten-5">
    <v-layout>
      <v-flex>
        <div class="mt-4 text-center">
          <v-icon x-large class="accent--text">face</v-icon>
        </div>
        <h2 class="mt-2 accent--text text-center">
          患者様から喜びの声が届きました！
        </h2>
      </v-flex>
    </v-layout>
    <v-container grid-list-md>
      <div v-for="(item, i) in items" :key="i">
        <v-card color="yellow lighten-5" class="pa-2 my-2">
          <v-layout row wrap justify-center>
            <v-flex xs12 md12>
              <h3 class="my-3 brown--text text-center">
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
      <v-layout justify-center>
        <v-flex xs12 md10>
          <v-card flat class="my-2" color="yellow lighten-5">
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
  data: function() {
    return {
      items: [
        {
          name: '札幌市中央区在住　今野菜月様',
          sheet: require('@/assets/images/voice/maruyama/qm_h.k.jpg'),
          image: require('@/assets/images/voice/maruyama/pm_h.k.jpg'),
          message1:
            '産後の骨盤のゆがみが気になったのと、腰痛が辛くなったので整体に通いたいと思いました。',
          message2:
            'webで近くの整体を探していたところ、知人に紹介していただきました。',
          message3a: '背中から腰にかけて、とても軽くなりました。',
          message3b: '首や頭もほぐしてもらいリラックスできました。',
          message4a:
            '産後は心身共に無理をしてしまうと思うので、無理にでも時間を見つけて身体も心もほぐしてもらってほしいです。'
        },
        {
          name: '札幌市豊平区在住　近藤紫野様',
          sheet: require('@/assets/images/voice/maruyama/qm_s.k.jpg'),
          image: require('@/assets/images/voice/maruyama/pm_s.k.jpg'),
          message1: '肩こり',
          message2: 'ご紹介',
          message3a: '骨盤の歪みがとれた！！',
          message3b: '顔がはっきりとした。',
          message4a:
            '自分では自覚症状のない肩こり・歪みを治療するのとあわせまたお顔の調整がとても良かったです。',
          message4b: 'とてもお顔のスッキリ感に感動しました！！'
        },
        {
          name: '札幌市厚別区在住　石塚舞様',
          sheet: require('@/assets/images/voice/maruyama/qm_ishizuka.jpg'),
          image: require('@/assets/images/voice/maruyama/pm_ishizuka.jpg'),
          message1:
            '毎日の子どものだっこで肩と腰の痛みがあったのでゆがみを直してもらおうと思い来院しました。',
          message2: '院長さんに紹介していただいたため。',
          message3a:
            '一番痛みが強かった腰の痛みがびっくりする程なくなりました。',
          message3b:
            'あとは身体が軽くなり動きやすくなったので、絶対に通おうと思います！！',
          message4a:
            '出産後のバタバタした毎日の中で1時間でもホッとできる時間を作ることのできる、ステキな場所であり、もちろん身体も動きやすくなるので声を大にしてオススメしたいです！ありがとうございました(^0^)'
        },
        {
          name: '札幌市在住　丹後友里様',
          sheet: require('@/assets/images/voice/maruyama/qm_tango.jpg'),
          image: require('@/assets/images/voice/maruyama/pm_tango.jpg'),
          message1: '疲れが溜まっている',
          message2: 'インスタで知り合った',
          message3a: 'すごく軽いし、体の動きがすごく広がった。',
          message4a: '説明もすごく丁寧で、施術も適確です！！',
          message4b: '女性らしい心配りもできているので、安心して通えます(^^)'
        },
        {
          name: '札幌市南区在住　一戸翔美様',
          sheet: require('@/assets/images/voice/maruyama/qm_s.i.jpg'),
          image: require('@/assets/images/voice/maruyama/pm_s.i.jpg'),
          message1: '肩こりMAX',
          message2: '院長つながりです。',
          message3a: '身体が楽になった！！',
          message4a:
            '女性ならではの悩み相談も気軽にでき、すぐに施術とアドバイスをして頂きとても良かったです！！'
        },
        {
          name: '札幌市在住　近藤礼野様',
          sheet: require('@/assets/images/voice/maruyama/qm_r.k.jpg'),
          image: require('@/assets/images/voice/maruyama/pm_s.k-r.k.jpg'),
          message1: '疲労感、肩こり、むくみ',
          message2: '知人',
          message3a: '背中が軽くなった',
          message4a:
            'ゆがみから来たコリとは知らず、元の位置に整えることが必要なんだと初めて知った。',
          message4b:
            'もっとはやく通えば良かった！自分がどの位ゆがんでいるかを知ることも大切！'
        },
        {
          name: '札幌市中央区在住　K.S様',
          sheet: require('@/assets/images/voice/maruyama/qm_k.s.jpg'),
          image: require('@/assets/images/voice/maruyama/pm_k.s.jpg'),
          message1: '肩こり、腰痛、足のむくみ',
          message2: '友人の紹介',
          message3a: '体がスッキリしとても軽くなった。',
          message3b: '体が動かしやすくなった',
          message4a:
            '体の疲れがたまっている時に施術を受けるととても楽になるのでオススメです！'
        },
        {
          name: '札幌市清田在住　柿坂亜沙美様',
          sheet: require('@/assets/images/voice/maruyama/qm_kakizaka.jpg'),
          image: require('@/assets/images/voice/maruyama/pm_kakizaka.jpg'),
          message1: '肩こりで来ました。',
          message2: '知人の紹介です。',
          message3a: '体がすっきり楽になりました！！',
          message4a: '肩こり等で体が辛い方はぜひ来てみてください！！'
        }
      ]
    }
  }
}
</script>
