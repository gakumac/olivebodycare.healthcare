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
        <v-card text color="yellow lighten-4" class="pa-2 my-2">
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
                <div>
                  {{ item.message1 }}
                </div>
                <div class="accent--text mt-3 caption">
                  ②どんな経緯で来院しましたか？
                </div>
                <div>
                  {{ item.message2 }}
                </div>
                <div class="accent--text mt-3 caption">
                  ③当院の治療を受けて、どんな変化がありましたか？
                </div>
                <div>
                  {{ item.message3 }}
                </div>
                <div class="accent--text mt-3 caption">
                  ④同じようなお悩みをお持ちの女性へのメッセージ
                </div>
                <div>
                  {{ item.message4 }}
                </div>
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
    </v-container>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        {
          name: '札幌市中央区在住　今野葉月様',
          sheet: require('@/assets/images/voice/qm_h.k.jpg'),
          image: require('@/assets/images/voice/pm_h.k.jpg'),
          message1:
            '産後の骨盤のゆがみが気になったのと、腰痛が辛くなったので整体に通いたいと思いました。',
          message2:
            'webで近くの整体を探していたところ、知人に紹介していただきました。',
          message3:
            '背中から腰にかけて、とても軽くなりました。首や頭もほぐしてもらいリラックスできました。',
          message4:
            '産後は心身共に無理をしてしまうと思うので、無理にでも時間を見つけて身体も心もほぐしてもらってほしいです。'
        },
        {
          name: '札幌市豊平区在住　近藤紫野様',
          sheet: require('@/assets/images/voice/qm_s.k.jpg'),
          image: require('@/assets/images/voice/pm_s.k.jpg'),
          message1: '肩こり',
          message2: 'ご紹介',
          message3: '骨盤の歪みがとれた！！顔がはっきりとした。',
          message4:
            '自分では自覚症状のない肩こり・歪みを治療するのとあわせまたお顔の調整がとても良かったです。とてもお顔のスッキリ感に感動しました！！'
        },
        {
          name: '札幌市南区在住　一戸翔美様',
          sheet: require('@/assets/images/voice/qm_s.i.jpg'),
          image: require('@/assets/images/voice/pm_s.i.jpg'),
          message1: '肩こりMAX',
          message2: '院長つながりです。',
          message3: '身体が楽になった！！',
          message4:
            '女性ならではの悩み相談も気軽にでき、すぐに施術とアドバイスをして頂きとても良かったです！！'
        },
        {
          name: '札幌市在住　近藤礼野様',
          sheet: require('@/assets/images/voice/qm_r.k.jpg'),
          image: require('@/assets/images/voice/pm_s.k-r.k.jpg'),
          message1: '疲労感、肩こり、むくみ',
          message2: '知人',
          message3: '背中が軽くなった',
          message4:
            'ゆがみから来たコリとは知らず、元の位置に整えることが必要なんだと初めて知った。もっとはやく通えば良かった！自分がどの位ゆがんでいるかを知ることも大切！'
        }
      ]
    }
  }
}
</script>
