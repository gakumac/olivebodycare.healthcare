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
        <v-card color="yellow lighten-4" class="pa-2 my-2">
          <v-layout row wrap justify-center>
            <v-flex xs12 md12>
              <h3 class="my-3 brown--text text-center">
                {{ item.name }}
              </h3>
            </v-flex>
            <v-flex xs12 md6>
              <v-img :src="item.sheet"></v-img>
              <div class="caption brown--text">
                ※個人の感想であり、効果を保証するわけではありません。
              </div>
            </v-flex>
            <v-flex xs12 md6>
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
            <v-flex xs12 md6>
              <v-img :src="item.image"></v-img>
            </v-flex>
          </v-layout>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
import { itemConfigs } from '@/assets/configs/voices.js'

export default {
  data() {
    return {
      items: itemConfigs()
    }
  }
}
</script>
