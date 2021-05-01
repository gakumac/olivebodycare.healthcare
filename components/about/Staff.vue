<template>
  <div>
    <v-container grid-list-sm>
      <v-layout row wrap justify-center>
        <v-flex xs12 md12>
          <div class="my-2  text-center">
            <v-icon x-large class="brown--text">business</v-icon>
          </div>
          <h2 class="my-2 brown--text text-center">
            当院の施術スタッフについて
          </h2>
        </v-flex>
        <v-flex xs12 sm8 md8 lg6 xl4>
          <v-img :src="image1"></v-img>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm9 md9 lg7 xl5>
          <div class="title mt-2 brown--text">
            当院の女性スタッフは安心・安全な治療を提供する為、全員国家資格を保有しています。<br />
            他院との豊富なネットワークを駆使して定期的な交流勉強会を行い、技術・食育・美容など健康全般に渡り力を入れております。
          </div>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm10 md9 lg8 xl7>
          <v-card color="info" class="my-4" flat>
            <v-layout row wrap justify-center>
              <v-flex xs6 md3>
                <v-img :src="imageMM"></v-img>
              </v-flex>
              <v-flex xs6 md3>
                <v-img :src="imageMM2"></v-img>
              </v-flex>
              <v-flex xs12 md6>
                <v-card-title>
                  <h3 class="brown--text">
                    {{ nameMM }}
                  </h3>
                </v-card-title>
                <div class="mx-2">
                  <p>＜国家資格＞&nbsp;{{ qualificationMM }}</p>
                  <p>＜趣味・特技＞&nbsp;{{ hobbyMM }}</p>
                  <h3 class="brown--text">
                    経歴
                  </h3>
                  <p>日本柔道整復師専門学校卒業</p>
                  <p>横浜市田沢整骨院勤務</p>
                  <p>横浜市笠原整形外科勤務</p>
                  <p>長野県湯田中整骨院勤務</p>
                  <p>竜王スキー場救急救護室勤務</p>
                  <p>東京都三軒茶屋爽快マッサージ勤務</p>
                  <p>神奈川県座間市ひまわり整骨院勤務</p>
                  <p>東京都町田市共立整骨院勤務</p>
                  <p>東京都新宿ほぐし職人勤務</p>
                  <p>川崎市マザー整骨院勤務</p>
                  <p>2008年女性専門の治療院オリーヴボディケア開業</p>
                </div>
              </v-flex>
            </v-layout>
            <v-layout justify-center>
              <v-flex xs12 md8 xl7>
                <iframe
                  width="100%"
                  height="330"
                  src="https://www.youtube.com/embed/kcNWZIq0dos"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                >
                </iframe>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm10 md9 lg8 xl7>
          <v-card color="info" class="my-4" flat>
            <v-layout row wrap justify-center>
              <v-flex xs6 md3>
                <v-img :src="imageYA"></v-img>
              </v-flex>
              <v-flex xs6 md3>
                <v-img :src="imageYA2"></v-img>
              </v-flex>
              <v-flex xs12 md6>
                <v-card-title>
                  <h3 class="brown--text">
                    {{ nameYA }}
                  </h3>
                </v-card-title>
                <div class="mx-2">
                  <p>＜国家資格＞&nbsp;{{ qualificationYA }}</p>
                  <p>＜趣味・特技＞&nbsp;{{ hobbyYA }}</p>
                </div>
              </v-flex>
            </v-layout>
            <v-layout justify-center>
              <v-flex xs12 md8 xl7>
                <iframe
                  width="100%"
                  height="330"
                  src="https://www.youtube.com/embed/ELMAcPq2MJ4"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                >
                </iframe>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm10 md9 lg8 xl7>
          <v-card color="info" class="my-4" flat>
            <v-layout row wrap justify-center>
              <v-flex xs6 md3>
                <v-img :src="imageYT"></v-img>
              </v-flex>
              <v-flex xs6 md3>
                <v-img :src="imageYT2"></v-img>
              </v-flex>
              <v-flex xs12 md6>
                <v-card-title>
                  <h3 class="brown--text">
                    {{ nameYT }}
                  </h3>
                </v-card-title>
                <div class="mx-2">
                  <p>＜国家資格＞&nbsp;{{ qualificationYT }}</p>
                  <p>＜趣味・特技＞&nbsp;{{ hobbyYA }}</p>
                </div>
              </v-flex>
            </v-layout>
            <v-layout justify-center>
              <v-flex xs12 md8 xl7>
                <iframe
                  width="100%"
                  height="330"
                  src="https://www.youtube.com/embed/EraVsCCA1GY"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                >
                </iframe>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm10 md9 lg8 xl7>
          <v-card color="info" class="my-4" flat>
            <v-layout row wrap justify-center>
              <v-flex xs6 md3>
                <v-img :src="imageAK"></v-img>
              </v-flex>
              <v-flex xs6 md3>
                <v-img :src="imageAK2"></v-img>
              </v-flex>
              <v-flex xs12 md6>
                <v-card-title>
                  <h3 class="brown--text">
                    {{ nameAK }}
                  </h3>
                </v-card-title>
                <div class="mx-2">
                  <p>＜国家資格＞&nbsp;{{ qualificationAK }}</p>
                  <p>＜趣味・特技＞&nbsp;{{ hobbyAK }}</p>
                </div>
              </v-flex>
            </v-layout>
            <v-layout justify-center>
              <v-flex xs12 md8 xl7>
                <iframe
                  width="100%"
                  height="330"
                  src="https://www.youtube.com/embed/pLORfQap_Nc"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                >
                </iframe>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm10 md9 lg8 xl7>
          <v-card color="info" class="my-4" flat>
            <v-layout row wrap justify-center>
              <v-flex xs6 md3>
                <v-img :src="imageMI"></v-img>
              </v-flex>
              <v-flex xs6 md3>
                <v-img :src="imageMI2"></v-img>
              </v-flex>
              <v-flex xs12 md6>
                <v-card-title>
                  <h3 class="brown--text">
                    {{ nameMI }}
                  </h3>
                </v-card-title>
                <div class="mx-2">
                  <p>＜国家資格＞&nbsp;{{ qualificationMI }}</p>
                  <p>＜趣味・特技＞&nbsp;{{ hobbyMI }}</p>
                </div>
              </v-flex>
            </v-layout>
            <v-layout justify-center>
              <v-flex xs12 md8 xl7>
                <iframe
                  width="100%"
                  height="330"
                  src="https://www.youtube.com/embed/dP-wnmTsFDc"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                >
                </iframe>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm10 md9 lg8 xl7>
          <v-card color="info" class="my-4" flat>
            <v-layout row wrap justify-center>
              <v-flex xs6 md3>
                <v-img :src="imageSM"></v-img>
              </v-flex>
              <v-flex xs6 md3>
                <v-img :src="imageSM2"></v-img>
              </v-flex>
              <v-flex xs12 md6>
                <v-card-title>
                  <h3 class="brown--text">
                    {{ nameSM }}
                  </h3>
                </v-card-title>
                <div class="mx-2">
                  <p>＜国家資格＞&nbsp;{{ qualificationSM }}</p>
                  <p>＜趣味・特技＞&nbsp;{{ hobbySM }}</p>
                </div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm10 md9 lg8 xl7>
          <v-card
            v-for="(item, i) in items"
            :key="i"
            color="info"
            class="my-4"
            flat
          >
            <v-layout row wrap justify-center>
              <v-flex xs6 md3>
                <v-img :src="item.image"></v-img>
              </v-flex>
              <v-flex xs6 md3>
                <v-img :src="item.image2"></v-img>
              </v-flex>
              <v-flex xs12 md6>
                <v-card-title>
                  <h3 class="brown--text">
                    {{ item.name }}
                  </h3>
                </v-card-title>
                <div class="mx-2">
                  <p>＜国家資格＞&nbsp;{{ item.qualification }}</p>
                  <p>＜趣味・特技＞&nbsp;{{ item.hobby }}</p>
                </div>
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
  data: function() {
    return {
      image1: require('@/assets/images/about/about2.jpg'),
      nameMM: '総院長  町田 恵  (まちだ めぐみ)',
      imageMM: require('@/assets/images/about/greeting1.jpg'),
      imageMM2: require('@/assets/images/about/greeting2.jpg'),
      qualificationMM: '柔道整復師',
      hobbyMM: '3児の母、柔道二段、全国ベスト16、カラオケ',
      nameYA: 'たまプラーザ院院長  赤川 優衣',
      imageYA: require('@/assets/images/salon/salon6.jpg'),
      imageYA2: require('@/assets/images/salon/salon7.jpg'),
      qualificationYA: '鍼灸師',
      hobbyYA: 'バドミントン、サーフィン、ヨガ',
      nameYT: '青葉台院院長  田坂 百香合',
      imageYT: require('@/assets/images/salon/salon8.jpg'),
      imageYT2: require('@/assets/images/home/home2.jpg'),
      qualificationYT: '鍼灸師',
      hobbyYT: 'バレー',
      nameAK: '札幌円山院院長  國文 麻美',
      imageAK: require('@/assets/images/salon/salon9.jpg'),
      imageAK2: require('@/assets/images/salon/salon10.jpg'),
      qualificationAK: '柔道整復師',
      hobbyAK: '柔道二段、書道４段、スポーツ観戦、読書、映画鑑賞',
      nameMI: '川崎宮崎台院主任　稲田 真梨',
      imageMI: require('@/assets/images/about/mizutani.jpg'),
      imageMI2: require('@/assets/images/about/mizutani2.jpg'),
      qualificationMI: '柔道整復師、鍼灸師、あん摩マッサージ・指圧師',
      hobbyMI: 'テニス',
      nameSM: '牧野 沙也伽',
      imageSM: require('@/assets/images/about/makino.jpg'),
      imageSM2: require('@/assets/images/about/makino2.jpg'),
      qualificationSM: '柔道整復師',
      hobbySM: 'ソフトボール全国大会出場、野球観戦',
      items: [
        {
          name: '木野村 美波',
          image: require('@/assets/images/about/kinomura.jpg'),
          image2: require('@/assets/images/about/kinomura2.jpg'),
          qualification: '柔道整復師',
          hobby: 'ディズニー、歴史、バレーボール'
        },
        {
          name: '上村 花菜',
          image: require('@/assets/images/about/k.k_1.jpg'),
          image2: require('@/assets/images/about/k.k_2.jpg'),
          qualification: '柔道整復師',
          hobby: '旅行、バレーボール、食べ歩き'
        },
        {
          name: '中村 彩子',
          image: require('@/assets/images/about/a.n_2.jpg'),
          image2: require('@/assets/images/about/a.n_3.jpg'),
          qualification: '鍼灸師',
          hobby: 'チアリーディング、映画・音楽鑑賞、ディズニー'
        },
        {
          name: '佐藤 陽代',
          image: require('@/assets/images/about/h.s_2.jpg'),
          image2: require('@/assets/images/about/h.s_3.jpg'),
          qualification: '鍼灸師',
          hobby: '吹奏楽、パーカッション、テニス、読書'
        },
        {
          name: '磯部 友香',
          image: require('@/assets/images/about/y.i_1.jpg'),
          image2: require('@/assets/images/about/y.i_3.jpg'),
          qualification: '国家資格取得中',
          hobby: ''
        },
        {
          name: '鎌田 可奈 ',
          image: require('@/assets/images/about/kamata.jpg'),
          image2: require('@/assets/images/about/kamata2.jpg'),
          qualification: '柔道整復師',
          hobby: 'バスケットボール'
        },
        {
          name: '鈴木希巳佳',
          image: '',
          image2: '',
          qualification: '柔道整復師',
          hobby: '映画鑑賞、バスケットボール'
        },
        {
          name: '鈴木 千晴',
          image: '',
          image2: '',
          qualification: '柔道整復師',
          hobby: '映画鑑賞、テニス、スポーツ'
        }
      ]
    }
  }
}
</script>
