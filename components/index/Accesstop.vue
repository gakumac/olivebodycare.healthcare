<template>
  <div class="grey lighten-5 mb-4">
    <v-layout>
      <v-flex>
        <div class="mt-4 text-center">
          <v-icon x-large class="brown--text">place</v-icon>
        </div>
        <h2 class="mt-4 brown--text text-center">
          店舗情報
        </h2>
      </v-flex>
    </v-layout>
    <v-container>
      <v-card text color="info">
        <v-layout row wrap justify-center>
          <v-flex xs12 md12>
            <h3 class="my-3 accent--text text-center">
              たまプラーザ本店
            </h3>
          </v-flex>
          <v-container grid-list-lg>
            <v-layout justify-center>
              <v-flex xl8>
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
              </v-flex>
            </v-layout>
          </v-container>
          <!-- <v-flex xs12 md6 class="text-center">
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
          <v-flex xs12 md6 class="text-center">
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
        <v-layout row wrap>
          <v-flex xs12 md6 class="mb-2 text-center">
            <nuxt-link to="/salon/tamaplaza">
              <v-btn color="primary" dark small>
                たまプラーザ店詳しくはこちら
              </v-btn>
            </nuxt-link>
          </v-flex>
          <v-flex xs12 md6 class="mb-2 text-center">
            <v-btn
              a
              href="https://reserve.olivebodycare.healthcare/"
              dark
              color="light-green darken-2"
            >
              <span class="font-weight-bold body-2"
                >たまプラーザ店予約は今すぐこちら！</span
              >
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
    <v-container>
      <v-card text color="info">
        <v-layout row wrap justify-center>
          <v-flex xs12 md12>
            <h3 class="my-3 accent--text text-center">
              横浜青葉台店
            </h3>
          </v-flex>
          <v-container grid-list-lg>
            <v-layout justify-center>
              <v-flex xl8>
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
              </v-flex>
            </v-layout>
          </v-container>
          <v-flex xs12 md10>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2105.1154045213502!2d139.51484803214495!3d35.54057200726833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x548a6d2a4178fc56!2z5aWz5oCn5bCC6ZaA44Gu5rK755mC6Zmi44Kq44Oq44O844O044Oc44OH44Kj44Kx44Ki6Z2S6JGJ5Y-w5bqX!5e0!3m2!1sja!2sjp!4v1566443617945!5m2!1sja!2sjp"
              width="100%"
              height="300px"
              frameborder="0"
              style="border:0"
              allowfullscreen
            ></iframe>
          </v-flex>
          <v-layout row wrap>
            <v-flex xs12 md6 class="mb-2 text-center">
              <nuxt-link to="/salon/aobadai">
                <v-btn color="primary" dark small>
                  横浜青葉台店詳しくはこちら
                </v-btn>
              </nuxt-link>
            </v-flex>
            <v-flex xs12 md6 class="mb-2 text-center">
              <v-btn
                a
                href="https://reserve.olivebodycare.healthcare/menus/?shopId=3&menuIndex=1"
                dark
                color="light-green darken-2"
              >
                <span class="font-weight-bold body-2"
                  >横浜青葉台店予約は今すぐこちら！</span
                >
              </v-btn>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-card>
    </v-container>
    <v-container>
      <v-card text color="info">
        <v-layout row wrap justify-center>
          <v-flex xs12 md12>
            <h3 class="my-3 accent--text text-center">
              札幌円山店
            </h3>
          </v-flex>
          <v-container grid-list-lg>
            <v-layout justify-center>
              <v-flex xl8>
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
              </v-flex>
            </v-layout>
          </v-container>
          <v-flex xs12 md10>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182.2079902533404!2d141.32396282148622!3d43.05557191899343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9b3fd242a4c92d1!2z5aWz5oCn5bCC6ZaA44Gu5rK755mC6Zmi44Kq44Oq44O844O044Oc44OH44Kj44Kx44Ki5pyt5bmM5YaG5bGx5bqX!5e0!3m2!1sja!2sjp!4v1565835828826!5m2!1sja!2sjp"
              width="100%"
              height="300px"
              frameborder="0"
              style="border:0"
              allowfullscreen
            ></iframe>
          </v-flex>
          <v-layout row wrap>
            <v-flex xs12 md6 class="mb-2 text-center">
              <nuxt-link to="/salon/maruyama">
                <v-btn color="primary" dark small>
                  札幌円山店詳しくはこちら
                </v-btn>
              </nuxt-link>
            </v-flex>
            <v-flex xs12 md6 class="mb-2 text-center">
              <v-btn
                a
                href="https://reserve.olivebodycare.healthcare/menus/?shopId=4&menuIndex=1"
                dark
                color="light-green darken-2"
              >
                <span class="font-weight-bold body-2"
                  >札幌円山店予約は今すぐこちら！</span
                >
              </v-btn>
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
          contents: '045-530-3903　完全予約制'
        }
      ],
      itemsSM: [
        {
          title: '住所',
          contents:
            '〒064-0811　札幌市中央区南1条西22丁目2-21パラッツォ裏参道302'
        },
        {
          title: 'アクセス',
          contents:
            '地下鉄円山公園駅６番出口から徒歩５分or地下鉄西18丁目１番出口から徒歩７分'
        },
        {
          title: '営業時間',
          contents: '10 : 00〜20 : 00、休診：不定休'
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
