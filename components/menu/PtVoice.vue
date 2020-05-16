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
      <v-layout justify-center>
        <v-flex xs12 sm9 md9 lg7 xl5>
          <div v-for="(item, i) in items" :key="i">
            <v-card color="yellow lighten-5" class="pa-2 my-2">
              <v-layout row wrap justify-center>
                <v-flex xs12 md12>
                  <h3 class="my-3 text-center brown--text">
                    {{ item.name }}
                  </h3>
                </v-flex>
                <v-flex xs12 sm10 md10 lg9>
                  <div class="caption brown--text">
                    ※個人の感想であり、効果を保証するわけではありません。
                  </div>
                  <div>
                    <p class="accent--text">
                      ①今までに運動経験はありましたか？
                    </p>
                    <p>
                      {{ item.message1 }}
                    </p>
                    <p class="accent--text my-2">
                      ②オンラインパーソナルトレーニングを受けようと思った理由をお聞かせください。
                    </p>
                    <p>
                      {{ item.message2 }}
                    </p>
                    <p class="accent--text my-2">
                      ③当院のオンラインパーソナルトレーニングを受けてどうでしたか？
                    </p>
                    <p>
                      {{ item.message3 }}
                    </p>
                    <p class="accent--text my-2">
                      ④同じようなお悩みをお持ちの女性へのメッセージ
                    </p>
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
              <v-layout justify-center>
                <v-flex xs12 sm10 md10 lg9>
                  <v-img :src="item.image"></v-img>
                </v-flex>
              </v-layout>
            </v-card>
          </div>
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
          name: '八王子市在住 A.N 様',
          // sheet: require('@/assets/images/voice/q_e.y.jpg'),
          image: require('@/assets/images/menu/p-training/pt_tasatomo.jpg'),
          message1: '現在継続してやっている運動はありませんでした。',
          message2:
            '最近本当に太っていて気にしといるけど何やっても続かないため',
          message3:
            '先生が優しいながらもスパルタでした、、でも自分がここが弱いんだな、とかがよくわかったし、わたしが飽きっぽいことも悟ってくれて楽しい続けられるようなトレーニングを教えてくれました！',
          message4a: '『コロナ太りをコロナ痩せに変えて頑張りましょう！』'
        },
        {
          name: '千葉県在住 M.A 様',
          // sheet: require('@/assets/images/voice/q_e.y.jpg'),
          // image: require('@/assets/images/voice/p_e.y.jpg'),
          message1: 'あります。クラシックバレエをやっていました。',
          message2: '勧めてもらい受けました。',
          message3:
            '運動不足なのもあり、久しぶりのトレーニングはその日ぐっすり眠ってしまうほど疲れました笑、筋トレはキツかったものもありましたが、やりきれない程ではなく、がんばれー！と声かけをしてくれたのもあり、最後までやりきることが出来ました。また、音楽をかけてやるトレーニングもあり、楽しんでやる事が出来たので、自宅で自分ひとりでやるよりも楽しくトレーニング出来ました！丁寧な説明と一緒にデモ付きで同時にやってくれるので、自己流にならずに正しくトレーニングでき、パーソナルなので自分に必要なトレーニングも分かり、受けて良かったと思います。',
          message4a:
            '『ひとりでやるよりも先生と一緒にやることで最後まで頑張れますし、正しいやり方でトレーニング出来るのでおすすめです！』'
        },
        {
          name: '川崎市高津区在住 Y.Y 様',
          // sheet: require('@/assets/images/voice/q_e.y.jpg'),
          image: require('@/assets/images/menu/p-training/pt_makino2.jpg'),
          message1: '15年間ソフトボール経験有り',
          message2: '運動不足解消のため',
          message3:
            '１人で動画を見ながら運動するよりも、資格のある方にアドバイスをいただきながら楽しくトレーニングが出来るので、受けて良かったです！',
          message4a:
            '『外出自粛で運動不足な方、健康の為にオンラインパーソナルトレーニングおすすめです！』'
        },
        {
          name: '立川市在住 A.T 様',
          // sheet: require('@/assets/images/voice/q_e.y.jpg'),
          image: require('@/assets/images/menu/p-training/pt_tasaane3.jpg'),
          message1: 'あります。　バスケットボールをしていました。',
          message2:
            '知人の紹介で興味を持ちました。効果的なセルフケアを教わりたびたび起こしてしまう首寝違えををどうにかできるようになれないだろうか と相談しました。',
          message3:
            '施術を、受ける前とおなじく　しっかりと事前確認をしてくださるので安心しました。自分に合ったトレーニングを提案提供してくださり　説明もわかりやすく　楽しかったです。',
          message4a:
            '『セルフケアでも正しい動作で行えば　こんなに違うのか！　と実感できました。覚えると　一生使えるので興味がある方は是非一度、トライしてみてください。』'
        },
        {
          name: '東大和市高木在住 Y.O 様',
          // sheet: require('@/assets/images/voice/q_e.y.jpg'),
          image: require('@/assets/images/menu/p-training/pt_tasaane.jpg'),
          message1:
            '小中高バレーボールふとたまにする筋トレくらいで最近は自転車に乗るくらいしかしていません。',
          message2:
            '健康的な生活ライフにプラスなることがあればとおもったのと、勧められたので。',
          message3:
            '今私に足りていない筋肉の箇所が知れて良かった。また、その筋トレ方法も短い時間で明確にいくつか知れてとても役に立った。モノを使わずに身体一つで行うことができるので魅力的で、エコ的でよかった。',
          message4a:
            '『息子（6歳）と暮らしているので、なかなか自分の速度で外ランニング等できないが、お子様がいても割とインナーマッスルが鍛えられ、また一段と健康を知ったのでとても良かった。仕事をしているような感覚だったから、お邪魔してこなかったのかな息子。是非自分に足りない、弱い部位を知って鍛えて貰いたい！！』'
        }
      ]
    }
  }
}
</script>
