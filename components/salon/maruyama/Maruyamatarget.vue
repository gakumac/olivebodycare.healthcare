<template>
  <div class="info">
    <v-layout>
      <v-flex>
        <div class="mt-4 text-xs-center">
          <v-icon x-large class="accent--text">beenhere</v-icon>
        </div>
        <h2 class="mt-2 accent--text text-xs-center">
          こんな方は是非おこしください！
        </h2>
      </v-flex>
    </v-layout>
    <v-container>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm9 md9 lg7 xl5>
          <v-card
            v-for="(item, i) in items"
            :key="i"
            color="red lighten-4"
            class="brown--text mb-3"
          >
            <v-card-title>
              <div class="title font-weight-bold">
                {{ item.comment }}
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout justify-center>
        <v-flex xs10 sm8 md7 lg5 xl4>
          <v-img
            :src="require('@/assets/images/salon/salon_m_sejutsu1.jpg')"
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
          comment: '首の痛み、腰痛、肩こりを治したい。'
        },
        {
          comment: '最近むくみやすい、太りやすい。'
        },
        {
          comment: '整体に通いたいけど男性の先生だと緊張する。'
        },
        {
          comment: '痩せやすい体を手に入れたい。'
        },
        {
          comment: '産後の骨盤が気になる。'
        },
        {
          comment: '身体が辛くて整体に通いたいが子供が預けられない。'
        },
        {
          comment: '女性の先生にデリケートな悩みを相談したい。'
        },
        {
          comment: '心身ともリラックスして痛みを解消したい。'
        },
        {
          comment: '子供（赤ちゃん）も連れて骨盤矯正に通いたい。'
        },
        {
          comment: '駅から近くの整体を探している。'
        }
      ]
    }
  }
}
</script>
