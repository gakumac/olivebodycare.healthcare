<template>
  <div>
    <v-layout justify-center>
      <v-flex xl8>
        <v-container grid-list-lg>
          <v-layout>
            <v-flex>
              <v-card flat color="info">
                <v-card-title>
                  <h2 class="brown--text">
                    初診・問診
                  </h2>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout class="brown--text">
            <v-flex xs6 md6>
              <div class="font-weight-bold text-center">
                施術内容
              </div>
            </v-flex>
            <v-flex xs6 md6>
              <div class="font-weight-bold text-center">
                料金(税抜)
              </div>
            </v-flex>
          </v-layout>
          <hr />
          <div v-for="(item, i) in itemsSho" :key="i" class="mt-2">
            <v-layout row wrap class="brown--text">
              <v-flex xs6 md6>
                <div class="text-center">{{ item.menu }}</div>
              </v-flex>
              <v-flex xs6 md6>
                <div class="text-center">
                  <span class="headline accent--text font-weight-bold">{{
                    item.price
                  }}</span>
                  <span>{{ item.time }}</span>
                </div>
              </v-flex>
            </v-layout>
            <hr />
          </div>
          <v-layout>
            <v-flex>
              <v-card flat color="info">
                <v-card-title>
                  <h2 class="brown--text">
                    整体
                  </h2>
                  <v-spacer></v-spacer>
                  <nuxt-link to="/menu/seitai">
                    <v-btn small color="primary" dark>整体詳しくはこちら</v-btn>
                  </nuxt-link>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
          <hr />
          <div v-for="(item, i) in itemsSei" :key="i" class="mt-2">
            <v-layout row wrap class="brown--text">
              <v-flex xs6 md6>
                <div class="text-center">{{ item.menu }}</div>
              </v-flex>
              <v-flex xs6 md6>
                <div class="text-center">
                  <span class="headline accent--text font-weight-bold">{{
                    item.price
                  }}</span>
                  <span>/{{ item.time }}</span>
                </div>
              </v-flex>
            </v-layout>
            <hr />
          </div>
          <v-layout>
            <v-flex>
              <v-card flat color="yellow lighten-5">
                <h3 class="py-2 ml-4 brown--text">
                  ＋ご利用可能オプション
                </h3>
              </v-card>
            </v-flex>
          </v-layout>
          <hr />
          <div v-for="(item, i) in options1" :key="i" class="mt-2">
            <v-layout class="brown--text">
              <v-flex xs6 md6>
                <div class="text-center">{{ item.menu }}</div>
              </v-flex>
              <v-flex xs6 md6>
                <div class="text-center">
                  <span class="title accent--text font-weight-bold">{{
                    item.price
                  }}</span>
                </div>
              </v-flex>
            </v-layout>
            <hr />
          </div>
          <v-layout>
            <v-flex>
              <v-card flat color="info">
                <v-card-title>
                  <h2 class="brown--text">
                    骨盤矯正
                  </h2>
                  <v-spacer></v-spacer>
                  <nuxt-link to="/menu/pelvis-correction">
                    <v-btn small color="primary" dark
                      >骨盤矯正詳しくはこちら</v-btn
                    >
                  </nuxt-link>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
          <hr />
          <div v-for="(item, i) in itemsKo" :key="i" class="mt-2">
            <v-layout class="brown--text">
              <v-flex xs6 md6>
                <div class="text-center">{{ item.menu }}</div>
              </v-flex>
              <v-flex xs6 md6>
                <div class="text-center">
                  <span class="headline accent--text font-weight-bold">{{
                    item.price
                  }}</span>
                  <span>/{{ item.time }}</span>
                </div>
              </v-flex>
            </v-layout>
            <hr />
          </div>
          <v-layout>
            <v-flex>
              <v-card flat color="yellow lighten-5">
                <h3 class="py-2 ml-4 brown--text">
                  ＋ご利用可能オプション
                </h3>
              </v-card>
            </v-flex>
          </v-layout>
          <hr />
          <div v-for="(item, i) in options1" :key="i" class="mt-2">
            <v-layout class="brown--text">
              <v-flex xs6 md6>
                <div class="text-center">{{ item.menu }}</div>
              </v-flex>
              <v-flex xs6 md6>
                <div class="text-center">
                  <span class="title accent--text font-weight-bold">{{
                    item.price
                  }}</span>
                </div>
              </v-flex>
            </v-layout>
            <hr />
          </div>
          <v-layout>
            <v-flex>
              <v-card flat color="info">
                <v-card-title>
                  <h2 class="brown--text">
                    マッサージ
                  </h2>
                  <v-spacer></v-spacer>
                  <nuxt-link to="/menu/massage">
                    <v-btn small color="primary" dark>詳しくはこちら</v-btn>
                  </nuxt-link>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
          <hr />
          <div v-for="(item, i) in itemsMa" :key="i" class="mt-2">
            <v-layout class="brown--text">
              <v-flex xs6 md6>
                <div class="text-center">{{ item.menu }}</div>
              </v-flex>
              <v-flex xs6 md6>
                <div class="text-center">
                  <span class="headline accent--text font-weight-bold">{{
                    item.price
                  }}</span>
                  <span>/{{ item.time }}</span>
                </div>
              </v-flex>
            </v-layout>
            <hr />
          </div>
          <v-layout>
            <v-flex>
              <v-card flat color="yellow lighten-5">
                <h3 class="py-2 ml-4 brown--text">
                  ＋ご利用可能オプション
                </h3>
              </v-card>
            </v-flex>
          </v-layout>
          <hr />
          <div v-for="(item, i) in options1" :key="i" class="mt-2">
            <v-layout class="brown--text">
              <v-flex xs6 md6>
                <div class="text-center">{{ item.menu }}</div>
              </v-flex>
              <v-flex xs6 md6>
                <div class="text-center">
                  <span class="title accent--text font-weight-bold">{{
                    item.price
                  }}</span>
                </div>
              </v-flex>
            </v-layout>
            <hr />
          </div>
          <v-layout>
            <v-flex>
              <v-card flat color="info">
                <v-card-title>
                  <h2 class="brown--text">
                    鍼灸
                  </h2>
                  <v-spacer></v-spacer>
                  <nuxt-link to="/menu/shinkyu">
                    <v-btn small color="primary" dark>鍼灸詳しくはこちら</v-btn>
                  </nuxt-link>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
          <hr />
          <div v-for="(item, i) in itemsShi" :key="i" class="mt-2">
            <v-layout class="brown--text">
              <v-flex xs6 md6>
                <div class="text-center">{{ item.menu }}</div>
              </v-flex>
              <v-flex xs6 md6>
                <div class="text-center">
                  <span class="headline accent--text font-weight-bold">{{
                    item.price
                  }}</span>
                  <span>/{{ item.time }}</span>
                </div>
              </v-flex>
            </v-layout>
            <hr />
          </div>
          <v-layout>
            <v-flex>
              <v-card flat color="yellow lighten-5">
                <h3 class="py-2 ml-4 brown--text">
                  ＋ご利用可能オプション
                </h3>
              </v-card>
            </v-flex>
          </v-layout>
          <hr />
          <div v-for="(item, i) in options2" :key="i" class="mt-2">
            <v-layout class="brown--text">
              <v-flex xs6 md6>
                <div class="text-center">{{ item.menu }}</div>
              </v-flex>
              <v-flex xs6 md6>
                <div class="text-center">
                  <span class="title accent--text font-weight-bold">{{
                    item.price
                  }}</span>
                </div>
              </v-flex>
            </v-layout>
            <hr />
          </div>
          <v-layout>
            <v-flex>
              <v-card flat color="info">
                <v-card-title>
                  <h2 class="brown--text">
                    パーソナルトレーニング（リモート）
                  </h2>
                  <v-spacer></v-spacer>
                  <nuxt-link to="/menu/personal-training">
                    <v-btn small color="primary" dark>詳しくはこちら</v-btn>
                  </nuxt-link>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
          <hr />
          <div v-for="(item, i) in itemsPt" :key="i" class="mt-2">
            <v-layout class="brown--text">
              <v-flex xs6 md6>
                <div class="text-center">{{ item.menu }}</div>
              </v-flex>
              <v-flex xs6 md6>
                <div class="text-center">
                  <span class="headline accent--text font-weight-bold">{{
                    item.price
                  }}</span>
                  <span>/{{ item.time }}</span>
                </div>
              </v-flex>
            </v-layout>
            <hr />
          </div>
          <v-layout>
            <v-flex>
              <v-card flat color="info">
                <v-card-title>
                  <h2 class="brown--text">
                    不妊治療
                  </h2>
                  <v-spacer></v-spacer>
                  <nuxt-link to="/menu/fertility-treatment">
                    <v-btn small color="primary" dark
                      >不妊治療詳しくはこちら</v-btn
                    >
                  </nuxt-link>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
          <hr />
          <div v-for="(item, i) in itemsHu" :key="i" class="mt-2">
            <v-layout class="brown--text">
              <v-flex xs6 md6>
                <div class="text-center">{{ item.menu }}</div>
              </v-flex>
              <v-flex xs6 md6>
                <div class="text-center">
                  <span class="headline accent--text font-weight-bold">{{
                    item.price
                  }}</span>
                  <span>/{{ item.time }}</span>
                </div>
              </v-flex>
            </v-layout>
            <hr />
          </div>
          <v-layout>
            <v-flex>
              <v-card flat color="info">
                <v-card-title>
                  <h2 class="brown--text">
                    交通事故治療
                  </h2>
                  <v-spacer></v-spacer>
                  <nuxt-link to="/menu/traffic-accident">
                    <v-btn small color="primary" dark>詳しくはこちら</v-btn>
                  </nuxt-link>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
          <hr />
          <div v-for="(item, i) in itemsJi" :key="i" class="mt-2">
            <v-layout class="brown--text">
              <v-flex xs6 md6>
                <div class="text-center">{{ item.menu }}</div>
              </v-flex>
              <v-flex xs6 md6>
                <div class="text-center">
                  <span class="headline accent--text font-weight-bold">{{
                    item.price
                  }}</span>
                  <span>/{{ item.time }}</span>
                </div>
              </v-flex>
            </v-layout>
            <hr />
          </div>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemsB: [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: '施術メニュー・料金',
          disabled: true,
          href: ''
        }
      ],
      itemsSho: [
        {
          menu: '初診・問診',
          price: '１０００円',
          time: ''
        }
      ],
      itemsSei: [
        {
          menu: '整体',
          price: '６０００円',
          time: '60分'
        }
      ],
      itemsKo: [
        {
          menu: '骨盤矯正',
          price: '６０００円',
          time: '60分'
        },
        {
          menu: '産後の骨盤矯正',
          price: '６０００円',
          time: '60分'
        }
      ],
      itemsMa: [
        {
          menu: 'マッサージ',
          price: '６０００円',
          time: '60分'
        }
      ],
      itemsShi: [
        {
          menu: '鍼灸',
          price: '６０００円',
          time: '60分'
        },
        {
          menu: '特別鍼灸',
          price: '６０００円',
          time: '60分'
        }
      ],
      itemsPt: [
        {
          menu: 'パーソナルトレーニング',
          price: '６０００円',
          time: '60分'
        }
      ],
      itemsHu: [
        {
          menu: '不妊治療',
          price: '６０００円',
          time: '60分'
        }
      ],
      itemsJi: [
        {
          menu: '交通事故治療',
          price: '実質０円',
          time: '60分'
        }
      ],
      options1: [
        {
          menu: '足つぼ',
          price: '２０００円'
        },
        {
          menu: '小顔矯正',
          price: '４０００円'
        },
        {
          menu: 'インデプス',
          price: '２０００円'
        },
        {
          menu: '本治療',
          price: '２０００円'
        },
        {
          menu: '耳つぼ',
          price: '２０００円'
        },
        {
          menu: '耳つぼジュエリー',
          price: '５００円/1ヶ'
        },
        {
          menu: '赤ちゃん鍼',
          price: '１０００円'
        }
      ],
      options2: [
        {
          menu: '足つぼ',
          price: '２０００円'
        },
        {
          menu: '小顔矯正',
          price: '４０００円'
        },
        {
          menu: 'インデプス',
          price: '２０００円'
        },
        {
          menu: '耳つぼ',
          price: '２０００円'
        },
        {
          menu: '耳つぼジュエリー',
          price: '５００円/1ヶ'
        },
        {
          menu: '赤ちゃん鍼',
          price: '１０００円'
        }
      ]
    }
  }
}
</script>
