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
                  <v-img :src="item.sheet"></v-img>
                  <div class="caption brown--text">
                    ※個人の感想であり、効果を保証するわけではありません。
                  </div>
                </v-flex>
                <v-flex xs12 sm10 md10 lg9>
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
                <v-flex xs12 sm10 md6 lg5 xl4>
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
          name: '千葉県在住 M.A 様',
          // sheet: require('@/assets/images/voice/q_e.y.jpg'),
          // image: require('@/assets/images/voice/p_e.y.jpg'),
          message1: 'あります。クラシックバレエをやっていました。',
          message2: '勧めてもらい受けました。',
          message3:
            '運動不足なのもあり、久しぶりのトレーニングはその日ぐっすり眠ってしまうほど疲れました笑、筋トレはキツかったものもありましたが、やりきれない程ではなく、がんばれー！と声かけをしてくれたのもあり、最後までやりきることが出来ました。また、音楽をかけてやるトレーニングもあり、楽しんでやる事が出来たので、自宅で自分ひとりでやるよりも楽しくトレーニング出来ました！丁寧な説明と一緒にデモ付きで同時にやってくれるので、自己流にならずに正しくトレーニングでき、パーソナルなので自分に必要なトレーニングも分かり、受けて良かったと思います。',
          message4a:
            '『ひとりでやるよりも先生と一緒にやることで最後まで頑張れますし、正しいやり方でトレーニング出来るのでおすすめです！』'
        }
      ]
    }
  }
}
</script>
