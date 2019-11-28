<template>
  <div class="info">
    <v-layout justify-center>
      <v-flex xs12 sm9 md9 lg7 xl5>
        <div class="mt-4 text-center">
          <v-icon x-large color="accent">done_outline</v-icon>
        </div>
        <h2 class="accent--text text-center">
          どれか１つでも当てはまる方は<br />
          今すぐ当院にお越しください！
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
          <v-img :src="require('@/assets/images/home/home16.jpg')"></v-img>
        </v-flex>
        <v-flex xs6 sm5 md5 lg4 xl3>
          <v-img
            :src="require('@/assets/images/salon/salonaobadai_tasaka2.jpg')"
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
