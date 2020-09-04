<template>
  <div>
    <v-container grid-list-md>
      <v-layout>
        <v-flex>
          <div class="my-2 text-center">
            <v-icon x-large class="brown--text">place</v-icon>
          </div>
          <p class="display-1 text-center red--text">
            2020年9月3日オープン！
            <br />ご予約受付中！
          </p>
          <h2 class="my-2 brown--text text-center">
            川崎宮崎台店ご来院にあたって
          </h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm9 md9 lg7 xl5>
          <h3 class="my-3 accent--text text-center">
            東急田園都市線宮崎台駅北口より徒歩3分
          </h3>
          <p>
            東急田園都市線宮崎台駅北口より徒歩3分、女性だけのプライベート空間です。
          </p>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs6 sm5 md5 lg4 xl3>
          <v-img
            :src="require('@/assets/images/salon/salonmiyazakidai2.jpg')"
          ></v-img>
        </v-flex>
        <v-flex xs6 sm5 md5 lg4 xl3>
          <v-img
            :src="require('@/assets/images/salon/salonmiyazakidai1.jpg')"
          ></v-img>
        </v-flex>
        <v-container>
          <v-layout justify-center>
            <v-flex xl8>
              <div v-for="(item, i) in items" :key="i" class="mt-2">
                <v-layout row wrap>
                  <v-flex xs3 md3>
                    <div class="brown--text font-weight-bold">
                      {{ item.title }}
                    </div>
                  </v-flex>
                  <v-flex xs9 md9>
                    <div>
                      <span>{{ item.contents }}</span>
                    </div>
                  </v-flex>
                </v-layout>
                <hr />
              </div>
            </v-flex>
          </v-layout>
        </v-container>
        <v-flex xs12 md10>
          <iframe
            title="Miyazakidai Store map information"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d811.1543534060819!2d139.5893524292548!3d35.58783379876352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f692a6500423%3A0x7c8b6134399712d5!2z44CSMjE2LTAwMzMg56We5aWI5bed55yM5bed5bSO5biC5a6u5YmN5Yy65a6u5bSO77yS5LiB55uu77yZ4oiS77yR77yUIOODl-ODreODn-ODjeODs-OCueWuruW0juWPsA!5e0!3m2!1sja!2sjp!4v1596850466301!5m2!1sja!2sjp"
            width="100%"
            height="300px"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 md10>
          <v-card flat class="my-2" color="info">
            <h3 class="py-2 accent--text text-center">
              川崎宮崎台店ご予約は今すぐこちら！
            </h3>
            <v-layout row wrap justify-center>
              <v-flex xs12 sm6 md5 lg5 xl4 class="text-center">
                <v-btn
                  large
                  a
                  href="https://olivebodycare.healthcare/reserve/miyazakidai"
                  dark
                  color="green darken-3"
                >
                  <span class="font-weight-bold subtitle-1"
                    >24時間Web予約は今すぐこちら！</span
                  >
                </v-btn>
              </v-flex>
              <v-flex xs12 sm6 md5 lg5 xl4 class="text-center">
                <v-btn large a href="tel:0447409988" color="primary" dark>
                  <v-icon>phone</v-icon>
                  <span class="font-weight-bold subtitle-1"
                    >：044-740-9988</span
                  >
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: '住所',
          contents: '〒216-0033　川崎市宮前区宮崎2-9-14プロミネンス宮崎台202'
        },
        {
          title: 'アクセス',
          contents: '東急田園都市線宮崎台駅北口より徒歩3分'
        },
        {
          title: '営業時間',
          contents: '9 : 00〜19 : 00、休診：不定休'
        },
        {
          title: '電話',
          contents: '044-740-9988　完全予約制'
        }
      ]
    }
  }
}
</script>
