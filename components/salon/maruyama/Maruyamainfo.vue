<template>
  <div>
    <v-container grid-list-md>
      <v-layout>
        <v-flex>
          <div class="my-2 text-center">
            <v-icon x-large class="brown--text">place</v-icon>
          </div>
          <h2 class="my-2 brown--text text-center">
            札幌円山店ご来院にあたって
          </h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm9 md9 lg7 xl5>
          <h3 class="my-3 accent--text text-center">
            地下鉄円山公園駅６番出口から徒歩５分または地下鉄西18丁目１番出口から徒歩７分
          </h3>
          <p>
            円山公園駅から近くデザイナーズマンション内、完全個室の女性だけのプライベート空間です。
          </p>
          <p>
            駐車場は近隣に多数ございます。円山院では近隣の駐車場ご利用の患者様には１時間分の駐車料金をキャッシュバックしております（駐車券をお持ち下さい）。
          </p>
          <p>
            院内には待合スペースがございますので施術までお時間がある場合は、お待ちいただく場所としてご利用ください。
          </p>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs6 sm5 md5 lg4 xl3>
          <v-img
            :src="require('@/assets/images/salon/salonmaruyama23.jpg')"
          ></v-img>
        </v-flex>
        <v-flex xs6 sm5 md5 lg4 xl3>
          <v-img
            :src="require('@/assets/images/salon/salonmaruyama24.jpg')"
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
            title="Maruyama Store map information"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4282.647724735018!2d141.32217169199225!3d43.057155598500536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9b3fd242a4c92d1!2z5aWz5oCn5bCC6ZaA44Gu5rK755mC6Zmi44Kq44Oq44O844O044Oc44OH44Kj44Kx44Ki5pyt5bmM5YaG5bGx5bqX!5e0!3m2!1sja!2sjp!4v1571796215054!5m2!1sja!2sjp"
            width="100%"
            height="300px"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 md10>
          <v-card flat class="my-2" color="info">
            <h3 class="py-2 accent--text text-center">
              札幌円山店ご予約は今すぐこちら！
            </h3>
            <v-layout row wrap justify-center>
              <v-flex xs12 sm6 md5 lg5 xl4 class="text-center">
                <v-btn
                  large
                  a
                  href="https://olivebodycare.healthcare/reserve/maruyama"
                  dark
                  color="green darken-3"
                >
                  <span class="font-weight-bold subtitle-1"
                    >24時間Web予約は今すぐこちら！</span
                  >
                </v-btn>
              </v-flex>
              <v-flex xs12 sm6 md5 lg5 xl4 class="text-center">
                <v-btn large a href="tel:0116768970" color="primary" dark>
                  <v-icon>phone</v-icon>
                  <span class="font-weight-bold subtitle-1"
                    >：011-676-8970</span
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
          contents:
            '〒064-0811　札幌市中央区南1条西22丁目2-21パラッツォ裏参道302'
        },
        {
          title: 'アクセス',
          contents:
            '地下鉄円山公園駅６番出口から徒歩5分または地下鉄西18丁目１番出口から徒歩7分'
        },
        {
          title: '営業時間',
          contents: '9 : 00〜20 : 00、休診：不定休'
        },
        {
          title: '電話',
          contents: '011-676-8970　完全予約制'
        }
      ]
    }
  }
}
</script>
