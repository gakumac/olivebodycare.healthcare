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
              <h3 class="my-3 text-center brown--text">
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
                <!-- <p class="accent--text">
                  ①来院時の症状はどんな症状でいらっしゃいましたか？
                </p>
                <p>
                  {{ item.message1 }}
                </p>
                <p class="accent--text my-2">
                  ②どんな経緯で来院しましたか？
                </p>
                <p>
                  {{ item.message2 }}
                </p>
                <p class="accent--text my-2">
                  ③当院の治療を受けて、どんな変化がありましたか？
                </p>
                <p>
                  {{ item.message3 }}
                </p>
                <p class="accent--text my-2">
                  ④同じようなお悩みをお持ちの女性へのメッセージ
                </p> -->
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
      <div class="py-3 text-right">
        <nuxt-link to="/voice">
          <v-btn small color="primary" dark>患者様の声詳しくはこちら</v-btn>
        </nuxt-link>
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
          name: '川崎市在住　山口絵美子様',
          sheet: require('@/assets/images/voice/q_e.y.jpg'),
          image: require('@/assets/images/voice/p_e.y.jpg'),
          message1: '首、肩、腰の痛み',
          message2: 'ホームページ',
          message3:
            '痛みがひどく眠れない日が続いていましたが、よく眠れるようになりました。末端冷え性でしたが、冷えも解消し、手足もポカポカしています。',
          message4a:
            '『いつもゆったりと施術していただけるので、痛みが解消するだけでなく、精神的にもリラックスできます。』',
          message4b:
            '『子供を連れての来院ですが、ビデオやおもちゃもあるので、子供たちも家のようにくつろいでいます（笑）。』',
          message4c:
            '『先日、初めて”はり”をやっていただきましたが、痛みもなく、体がとても楽になりました。』'
        },
        {
          name: '札幌市中央区在住　今野菜月様',
          sheet: require('@/assets/images/voice/maruyama/qm_h.k.jpg'),
          image: require('@/assets/images/voice/maruyama/pm_h.k.jpg'),
          message1:
            '産後の骨盤のゆがみが気になったのと、腰痛が辛くなったので整体に通いたいと思いました。',
          message2:
            'webで近くの整体を探していたところ、知人に紹介していただきました。',
          message3:
            '背中から腰にかけて、とても軽くなりました。首や頭もほぐしてもらいリラックスできました。',
          message4a:
            '『産後は心身共に無理をしてしまうと思うので、無理にでも時間を見つけて身体も心もほぐしてもらってほしいです。』'
        },
        {
          name: '東京都三鷹市在住　溝井 香織 様',
          sheet: require('@/assets/images/voice/q_k.m.jpg'),
          image: require('@/assets/images/voice/p_k.m.jpg'),
          message1:
            '妊娠願望がありましたがなかなか叶わず、友人がこちらに通って妊娠したと聞き、体質改善も兼ねて、鍼治療を受けました。',
          message2: '友人の紹介',
          message3:
            '肩こりや頭痛の症状が軽くなりました。末端の冷えも改善されました。何度か通い、妊娠する事ができました。妊娠中の腰痛・むくみ、産後の骨盤矯正でもお世話になっています。',
          message4a:
            '『女性しかいない空間で安心できますし、こ連れで行けるのも嬉しいです。』',
          message4b:
            '『また鍼治療は痛いイメージを抱きがちですが、全く痛くありません。』',
          message4c:
            '『治療はリラックスして受けれますし、先生たちは気さくな方ばかりでお話するのも楽しいです。』'
        },
        {
          name: '横浜市青葉区在住　K.S様',
          sheet: require('@/assets/images/voice/q_k.s.jpg'),
          image: '',
          message1: '妊娠による腰痛、肩こり',
          message2: 'インターネット検索',
          message3:
            'だいぶ楽になりました。速こう性？があって施術してもらった後はすぐにスッキリして、しばらく楽です。',
          message4a:
            '『ムリせずためこまず、しんどくなったら先生におまかせしたら一発で治りますので是非！！！』'
        },
        {
          name: '東京都中野区在住　M.T様',
          sheet: require('@/assets/images/voice/q_m.t.jpg'),
          image: '',
          message1: '腰痛、肩こり',
          message2: 'HPで女性専用のクリニックを探していました。',
          message3:
            'もともと疲れをためやすい方だと思うのですが、通うようになって定期的にメンテナンスをして頂き寝込むことはなくなってきました。鍼も受けるようになってからは風邪をひきにくく、また生理周期も整ってきています。',
          message4a:
            '『整体も鍼も、先生にお任せして大丈夫、安心して受けられます。』',
          message4b:
            '『診て頂いた直後はもちろんですが、だんだん体調がキープできるようになるのを実感できます。』',
          message4c:
            '『引っこしして遠くなってしまいましたが、こんなにぴったりのクリニックをみつけられず、ずっとお世話になっています。』'
        },
        {
          name: '札幌市豊平区在住　近藤紫野様',
          sheet: require('@/assets/images/voice/maruyama/qm_s.k.jpg'),
          image: require('@/assets/images/voice/maruyama/pm_s.k.jpg'),
          message1: '肩こり',
          message2: 'ご紹介',
          message3: '骨盤の歪みがとれた！！顔がはっきりとした。',
          message4a:
            '『自分では自覚症状のない肩こり・歪みを治療するのとあわせまたお顔の調整がとても良かったです。』',
          message4b: '『とてもお顔のスッキリ感に感動しました！！』'
        }
      ]
    }
  }
}
</script>
