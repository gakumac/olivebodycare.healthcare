<template>
  <div>
    <v-container grid-list-lg>
      <v-layout justify-center>
        <h2 class="text-center brown--text mb-2">
          当院の不妊治療についてご紹介です。
        </h2>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm9 md9 lg7 xl5>
          <p>
            お腹・手足を触ってみてください。<br />
            冷たく冷えきっていませんか？<br />
            妊娠しやすい身体とは、身体がポカポカで子宮もフカフカな状態です。
          </p>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm8 md8 lg6 xl4>
          <v-img :src="require('@/assets/images/menu/hunin1.jpg')"></v-img>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm9 md9 lg7 xl5>
          <div class="mb-3 title red--text font-weight-bold">
            <v-icon large class="red--text">check</v-icon>
            <span>
              当院の鍼治療を受けると！?
            </span>
          </div>
          <div class="subheading brown--text font-weight-bold">
            <p>滞っていた血液が流れ血行が良くなります！</p>
            <p>
              冷えが改善して、子宮もポカポカ・フワフワな状態にしてくれます！
            </p>
            <p>血行が良くなることで身体の中に蓄積した毒素が排出されます！</p>
            <p>卵巣や子宮に酸素や栄養が運ばれるので良好な卵子を育てます！</p>
            <p>バラバラになっていたホルモンバランスも正常な状態へ導きます！</p>
            <p>妊娠する準備が整う身体になります。</p>
          </div>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex>
          <h3 class="text-center brown--text mt-4 mb-2">
            患者様の喜びの声が届きました！
          </h3>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm9 md9 lg7 xl5>
          <v-card color="yellow lighten-4" class="pa-2">
            <v-layout>
              <v-flex>
                <p class="text-xs-center title">
                  ３０代&nbsp;主婦&nbsp;M.Mさま
                </p>
                子供が欲しいと思ってから半年、すぐに授かるものだと思っていたので中々授からない事に不安になっていました。<br />
                去年の１０月から不妊でお世話になり治療してもらいました。<br />
                体には自身があったのでどこか悪いと思ってなかったのですが、先生曰く、婦人科系が弱くお腹が冷たいとの事。<br />
                実際施術前後のお腹の温かさや反応する婦人科系のツボの痛みが劇的に変化！！<br />
                不妊治療を開始してから生理周期が整うようになり辛かったPMSが嘘のように改善。<br />
                忙しくなかなか思うように治療出来なかったのですが排卵前後に続けて治療が出来た今年の２月に妊娠反応が初めて出ました！！<br />
                本当に感謝感謝で今もお世話になっています！！これからもずっとよろしくお願いします！！
                <div class="caption brown--text">
                  ※個人の感想であり、効果を保証するわけではありません。
                </div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-md>
      <div v-for="(item, i) in items" :key="i">
        <v-card color="yellow lighten-4" class="pa-2">
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
          <v-layout justify-center>
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
          name: '東京都三鷹市在住　溝井 香織 様',
          sheet: require('@/assets/images/voice/q_k.m.jpg'),
          image: require('@/assets/images/voice/p_k.m.jpg'),
          message1:
            '妊娠願望がありましたがなかなか叶わず、友人がこちらに通って妊娠したと聞き、体質改善も兼ねて、鍼治療を受けました。',
          message2: '友人の紹介',
          message3:
            '肩こりや頭痛の症状が軽くなりました。末端の冷えも改善されました。何度か通い、妊娠する事ができました。妊娠中の腰痛・むくみ、産後の骨盤矯正でもお世話になっています。',
          message4:
            '女性しかいない空間で安心できますし、こ連れで行けるのも嬉しいです。また鍼治療は痛いイメージを抱きがちですが、全く痛くありません。治療はリラックスして受けれますし、先生たちは気さくな方ばかりでお話するのも楽しいです。'
        }
      ]
    }
  }
}
</script>
