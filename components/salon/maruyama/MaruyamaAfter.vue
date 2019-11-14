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
            <v-card class="pa-2">
              <h3>
                <v-icon left>chat_bubble_outline</v-icon>
                <span>{{ item.guest }}</span>
              </h3>
              <hr color="#ffcccc" />
              <p class="mt-3 font-weight-bold">
                {{ item.comment1a }}
              </p>
              <p class="font-weight-bold">
                {{ item.comment1b }}
              </p>
            </v-card>
          </v-flex>
          <v-flex xs12 sm10 md6 lg5 xl4>
            <v-card class="pa-2">
              <h3>
                <v-icon left>chat_bubble_outline</v-icon>
                <span>{{ item.guest2 }}</span>
              </h3>
              <hr color="#ffcccc" />
              <p class="mt-3 font-weight-bold">
                {{ item.comment2a }}
              </p>
              <p class="font-weight-bold">
                {{ item.comment2b }}
              </p>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
      <v-layout row wrap justify-center>
        <v-flex xs6 sm5 md6 lg5 xl4>
          <v-img
            :src="require('@/assets/images/voice/maruyama/pm_konrei.jpg')"
          ></v-img>
        </v-flex>
        <v-flex xs6 sm5 md6 lg5 xl4>
          <v-img
            :src="require('@/assets/images/voice/maruyama/pm_tama.jpg')"
          ></v-img>
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
          guest: '札幌市中央区在住　今野 菜月様',
          comment1a:
            '『背中から腰にかけて、とても軽くなりました。首や頭もほぐしてもらいリラックスできました。』',
          guest2: '札幌市豊平区在住　近藤 紫野様',
          comment2a: '『骨盤の歪みがとれた！！』',
          comment2b: '『顔がはっきりとした。』'
        },
        {
          guest: '札幌市厚別区在住　石塚 舞様',
          comment1a:
            '『一番痛みが強かった腰の痛みがびっくりする程なくなりました。』',
          comment1b:
            '『あとは身体が軽くなり動きやすくなったので、絶対に通おうと思います！！』',
          guest2: '札幌市在住　丹後 友里様',
          comment2a: '『すごく軽いし、体の動きがすごく広がった。』'
        },
        {
          guest: '札幌市南区在住　一戸 翔美様',
          comment1a: '『身体が楽になった！！』',
          guest2: '札幌市在住　近藤 礼野様',
          comment2a: '『背中が軽くなった』'
        },
        {
          guest: '札幌市中央区在住　K.S様',
          comment1a: '『体がスッキリしとても軽くなった。』',
          comment1b: '『体が動かしやすくなった』',
          guest2: '札幌市清田在住　柿坂 亜沙美様',
          comment2a: '『体がすっきり楽になりました！！』'
        }
      ]
    }
  }
}
</script>
