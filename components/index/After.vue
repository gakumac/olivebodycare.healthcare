<template>
  <div class="info">
    <v-container grid-list-md>
      <v-layout>
        <v-flex>
          <div class="mt-2 text-xs-center">
            <v-icon x-large class="accent--text">mood</v-icon>
          </div>
          <h2 class="my-2 accent--text text-xs-center">
            当院の施術を受けるとどうなる？
          </h2>
        </v-flex>
      </v-layout>
      <div v-for="(item, i) in items" :key="i">
        <v-layout row wrap justify-center>
          <v-flex xs12 sm10 md6 lg5 xl4>
            <v-card color="info" class="brown--text">
              <v-card-title>
                <v-icon left>chat_bubble_outline</v-icon>
                <span class="title">{{ item.guest }}</span>
              </v-card-title>
              <v-card-text class="subheading">
                {{ item.comment }}
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm10 md6 lg5 xl4>
            <v-card color="info" class="brown--text">
              <v-card-title>
                <v-icon left>chat_bubble_outline</v-icon>
                <span class="title">{{ item.guest2 }}</span>
              </v-card-title>
              <v-card-text class="subheading">
                {{ item.comment2 }}
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
      <v-layout row wrap justify-center>
        <v-flex xs6 sm5 md6 lg5 xl4>
          <v-img :src="require('@/assets/images/voice/pm_s.i.jpg')"></v-img>
        </v-flex>
        <v-flex xs6 sm5 md6 lg5 xl4>
          <v-img :src="require('@/assets/images/voice/pm_s.k-r.k.jpg')"></v-img>
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
          guest: '川崎市 山口絵美子さん',
          comment:
            '『痛みがひどく眠れない日が続いていましたが、よく眠れるようになりました。』『冷えも解消し、手足もポカポカしています。』',
          guest2: '東京都中野区 M.Tさん',
          comment2:
            '『もともと疲れをためやすい方だと思うのですが、通うようになって定期的にメンテナンスをして頂き寝込むことはなくなってきました。鍼も受けるようになってからは風邪をひきにくく、また生理周期も整ってきています。』'
        },
        {
          guest: '横浜市青葉区 K.Sさん',
          comment:
            '『速こう性？があって施術してもらった後はすぐにスッキリして、しばらく楽です。』',
          guest2: '札幌市中央区 今野葉月さん',
          comment2:
            '『背中から腰にかけて、とても軽くなりました。首や頭もほぐしてもらいリラックスできました。』'
        },
        {
          guest: '横浜市青葉区 N.Kさん',
          comment: '『身体の軽さと日常の体調が良好な日が増えた。』',
          guest2: '町田市　S.Hさん',
          comment2:
            '『非常に心地よく、リラックスできたので、身も心もスッキリしました。』『体全体がすごく軽くなり楽になりました。』'
        },
        {
          guest: '札幌市豊平区 近藤紫野さん',
          comment: '『骨盤の歪みがとれた！！顔がはっきりとした。』',
          guest2: '川崎市高津区 E.Kさん',
          comment2:
            '『骨盤のゆがみ解消。』『痛み、むくみなど、その時々の症状の緩和、改善。』'
        },
        {
          guest: '横浜市青葉区 Y.Hさん',
          comment: '『体が軽くなり、夜ぐっすり眠れます。』',
          guest2: '横浜市青葉区 石塚阿左子さん',
          comment2:
            '『疲れやすさが軽減されました。』『産後の体型・体重の戻りがスムーズに進みました。』'
        },
        {
          guest: '川崎市宮前区 E.Oさん',
          comment:
            '『メンテナンスして頂き頭の隅でいつも自分の体の状態を確認するようになりました。』',
          guest2: '東京都三鷹市在住 溝井香織さん',
          comment2:
            '『肩こりや頭痛の症状が軽くなりました。』『末端の冷えも改善されました。』『何度か通い妊娠する事が出来ました。』'
        }
      ]
    }
  }
}
</script>
