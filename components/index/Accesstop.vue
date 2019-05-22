<template>
  <div class="grey lighten-5 mb-4">
    <v-layout>
      <v-flex>
        <div class="mt-4 text-xs-center">
          <v-icon x-large class="brown--text">place</v-icon>
        </div>
        <h2 class="mt-4 brown--text text-xs-center">
          店舗情報
        </h2>
      </v-flex>
    </v-layout>
    <v-container>
      <v-card flat color="info">
        <v-layout row wrap justify-center>
          <v-flex xs12 md12>
            <h3 class="my-3 accent--text text-xs-center">
              たまプラーザ本店
            </h3>
          </v-flex>
          <v-container grid-list-lg>
            <div v-for="(item, i) in items" :key="i" class="mt-2">
              <v-layout row wrap>
                <v-flex xs3 md3>
                  <div class="subheading red--text font-weight-bold">
                    {{ item.title }}
                  </div>
                </v-flex>
                <v-flex xs9 md9>
                  <div>
                    <span class="subheading">{{ item.contents }}</span>
                  </div>
                </v-flex>
              </v-layout>
              <hr />
            </div>
          </v-container>
          <!-- <v-flex xs12 md6 class="text-xs-center">
            <v-btn
              a
              href="tel:0455301688"
              class="white--text"
              color="light-green darken-2"
            >
              <v-icon left>local_phone</v-icon>
              <span class="font-weight-bold title">045-530-1688</span>
            </v-btn>
          </v-flex>
          <v-flex xs12 md6 class="text-xs-center">
            <v-btn
              a
              href="https://olivebodycare.healthcare/"
              class="white--text"
              color="light-green darken-2"
            >
              <v-icon>date_range</v-icon>
              <span class="font-weight-bold body-2"
                >２４時間WEB予約は今すぐこちら！</span
              >
            </v-btn>
          </v-flex> -->
          <v-flex xs12 md10>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1495.6946074700454!2d139.55859857898!3d35.57573905724052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f71ab6b44f25%3A0xd8617b3b315c81fc!2z5aWz5oCn5bCC6ZaA44Gu5rK755mC6Zmi44Kq44Oq44O844O044Oc44OH44Kj44Kx44Ki!5e0!3m2!1sja!2sjp!4v1557065211029!5m2!1sja!2sjp"
              width="100%"
              height="300px"
              frameborder="0"
              style="border:0"
              allowfullscreen
            ></iframe>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex class="ma-2">
            <nuxt-link to="/salon/tamaplaza">
              <v-btn class="right" small color="primary" dark
                >たまプラーザ本店詳しくはこちら</v-btn
              >
            </nuxt-link>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
    <v-container>
      <v-card flat color="info">
        <v-layout row wrap justify-center>
          <v-flex xs12 md12>
            <h3 class="my-3 accent--text text-xs-center">
              横浜青葉台店（7月オープン！）
            </h3>
          </v-flex>
          <v-container grid-list-lg>
            <div v-for="(item, i) in itemsYA" :key="i" class="mt-2">
              <v-layout row wrap>
                <v-flex xs3 md3>
                  <div class="subheading red--text font-weight-bold">
                    {{ item.title }}
                  </div>
                </v-flex>
                <v-flex xs9 md9>
                  <div>
                    <span class="subheading">{{ item.contents }}</span>
                  </div>
                </v-flex>
              </v-layout>
              <hr />
            </div>
          </v-container>
          <v-flex xs12 md10>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d811.6313277315405!2d139.51569893814946!3d35.54072649875815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f83041fe7081%3A0xf5f6c6b0919d47db!2z44OT44Oz44K744OX44OI!5e0!3m2!1sja!2sjp!4v1558324702061!5m2!1sja!2sjp"
              width="100%"
              height="300px"
              frameborder="0"
              style="border:0"
              allowfullscreen
            ></iframe>
          </v-flex>
          <v-layout>
            <v-flex class="ma-2">
              <nuxt-link to="/salon/aobadai">
                <v-btn class="right" small color="primary" dark
                  >横浜青葉台店詳しくはこちら</v-btn
                >
              </nuxt-link>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-card>
    </v-container>
    <v-container>
      <v-card flat color="info">
        <v-layout row wrap justify-center>
          <v-flex xs12 md12>
            <h3 class="my-3 accent--text text-xs-center">
              札幌円山町店（11月オープン！）
            </h3>
          </v-flex>
          <v-container grid-list-lg>
            <div v-for="(item, i) in itemsSM" :key="i" class="mt-2">
              <v-layout row wrap>
                <v-flex xs3 md3>
                  <div class="subheading red--text font-weight-bold">
                    {{ item.title }}
                  </div>
                </v-flex>
                <v-flex xs9 md9>
                  <div>
                    <span class="subheading">{{ item.contents }}</span>
                  </div>
                </v-flex>
              </v-layout>
              <hr />
            </div>
          </v-container>
          <v-flex xs12 md10>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d728.831016383603!2d141.32343458814435!3d43.055651398690266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b29eae308ffff%3A0x39bb65ed75d8075c!2z77yw772B772M772B772a772a772P6KOP5Y-C6YGT!5e0!3m2!1sja!2sjp!4v1558325458777!5m2!1sja!2sjp"
              width="100%"
              height="300px"
              frameborder="0"
              style="border:0"
              allowfullscreen
            ></iframe>
          </v-flex>
          <v-layout>
            <v-flex class="ma-2">
              <nuxt-link to="/salon/maruyamacho">
                <v-btn class="right" small color="primary" dark
                  >札幌円山町店詳しくはこちら</v-btn
                >
              </nuxt-link>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        {
          title: '住所',
          contents:
            '〒225-0003　横浜市青葉区新石川3-15-16メディカルモールたまプラーザ301'
        },
        {
          title: 'アクセス',
          contents: '東急田園都市線たまプラーザ駅より徒歩2分'
        },
        {
          title: '営業時間',
          contents: '10 : 00〜20 : 00、休診：不定休'
        },
        {
          title: '電話',
          contents: '045-530-1688　完全予約制'
        }
      ],
      itemsYA: [
        {
          title: '住所',
          contents: '〒227-0063　横浜市青葉区榎が丘2-1ビンセプト502'
        },
        {
          title: 'アクセス',
          contents: '東急田園都市線青葉台駅より徒歩3分'
        },
        {
          title: '営業時間',
          contents: '10 : 00〜20 : 00、休診：不定休'
        },
        {
          title: '電話',
          contents: '完全予約制'
        }
      ],
      itemsSM: [
        {
          title: '住所',
          contents: '〒064-0811　札幌市中央区'
        },
        {
          title: 'アクセス',
          contents:
            '地下鉄円山公園４番出口から徒歩または地下鉄西18丁目１番出口から徒歩'
        },
        {
          title: '営業時間',
          contents: '10 : 00〜20 : 00、休診：不定休'
        },
        {
          title: '電話',
          contents: '完全予約制'
        }
      ]
    }
  }
}
</script>
