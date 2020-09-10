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
            東急田園都市線宮崎台駅北口より徒歩3分、完全個室の女性だけのプライベート空間です。
          </p>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs6 sm5 md5 lg4 xl3>
          <v-img
            :src="require('@/assets/images/salon/miyazakidai/miyazakidai2.jpg')"
          ></v-img>
        </v-flex>
        <v-flex xs6 sm5 md5 lg4 xl3>
          <v-img
            :src="require('@/assets/images/salon/miyazakidai/miyazakidai1.jpg')"
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1467.1897229765223!2d139.58844658745357!3d35.58743948130846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xab2bf75065352a1!2z5aWz5oCn5bCC6ZaA44Gu5rK755mC6Zmi44Kq44Oq44O844O044Oc44OH44Kj44Kx44KiIOWuruW0juWPsOW6lw!5e0!3m2!1sja!2sjp!4v1599714150239!5m2!1sja!2sjp"
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
