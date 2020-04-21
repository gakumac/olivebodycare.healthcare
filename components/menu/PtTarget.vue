<template>
  <div class="info">
    <v-layout justify-center>
      <v-flex xs12 sm9 md9 lg7 xl5>
        <div class="mt-4 text-center">
          <v-icon x-large color="accent">done_outline</v-icon>
        </div>
        <h2 class="accent--text text-center">
          どれか１つでも当てはまる方は<br />
          今すぐお申し込みください！
        </h2>
        <hr color="#ffcccc" />
      </v-flex>
    </v-layout>
    <v-container>
      <v-layout justify-center>
        <v-flex xs12 sm9 md9 lg7 xl5>
          <v-card v-for="(item, i) in items" :key="i" class="mb-3">
            <v-card-title>
              <div class="title font-weight-bold">
                <v-icon class="accent--text">check_box</v-icon>
                {{ item.comment }}
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-md>
      <v-layout justify-center>
        <v-flex xs6 sm5 md5 lg4 xl3>
          <v-img
            :src="require('@/assets/images/salon/salon_akagawa.jpg')"
          ></v-img>
        </v-flex>
        <v-flex xs6 sm5 md5 lg4 xl3>
          <v-img
            :src="require('@/assets/images/salon/salonaobadai_tasaka.jpg')"
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
          comment: '自宅でどのようなトレーニングをすればいいのかわからない。'
        },
        {
          comment: 'ジムに行けず運動不足な方。'
        },
        {
          comment: '最近むくみやすい、太りやすい。'
        },
        {
          comment: '子供を預けてまでジムにいく時間をかけられない。'
        },
        {
          comment: '痩せやすい体を手に入れたい。'
        },
        {
          comment: '自宅でストレス解消したい。'
        },
        {
          comment:
            '外出自粛で自宅で過ごさなければならない為、心身ともに疲れている。'
        },
        {
          comment: 'ストレスを発散する場がなくなっている。'
        },
        {
          comment: '専門家に身体の相談をしたいが外出するのに抵抗がある。'
        },
        {
          comment: 'ジムに入会するのが億劫な方。'
        }
      ]
    }
  }
}
</script>
