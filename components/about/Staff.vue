<template>
  <div>
    <v-container>
      <v-layout row wrap justify-center>
        <v-flex xs12 md12>
          <div class="my-2  text-xs-center">
            <v-icon x-large class="brown--text">business</v-icon>
          </div>
          <h2 class="my-2 brown--text text-xs-center">
            当院の施術スタッフについて
          </h2>
        </v-flex>
        <v-flex xs12 md8>
          <v-img :src="image1"></v-img>
        </v-flex>
        <v-flex xs12 md8>
          <div class="title mt-2 brown--text">
            当院の女性スタッフは安心・安全な治療を提供する為、全員国家資格を保有しています。<br />
            他院との豊富なネットワークを駆使して定期的な交流勉強会を行い、技術・食育・美容など健康全般に渡り力を入れております。
          </div>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 md10>
          <v-card color="info" class="my-4" flat>
            <v-layout row wrap justify-center>
              <v-flex xs6 md3>
                <v-img :src="image2"></v-img>
              </v-flex>
              <v-flex xs6 md3>
                <v-img :src="image3"></v-img>
              </v-flex>
              <v-flex xs12 md6>
                <v-card-title>
                  <h3 class="brown--text">
                    {{ name }}
                  </h3>
                </v-card-title>
                <div class="mx-2">
                  <p>＜国家資格＞&nbsp;{{ qualification }}</p>
                  <p>＜趣味・特技＞&nbsp;柔道二段、3児の母、カラオケ</p>
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
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 md10>
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
      image2: require('@/assets/images/about/greeting1.jpg'),
      image3: require('@/assets/images/about/greeting2.jpg'),
      name: '総院長  町田 恵  (まちだ めぐみ)',
      qualification: '柔道整復師',
      items: [
        {
          name: 'たまプラーザ院院長  赤川 優衣',
          image: require('@/assets/images/salon/salon6.jpg'),
          image2: require('@/assets/images/salon/salon7.jpg'),
          qualification: '鍼灸師',
          hobby: 'バドミントン、サーフィン、ヨガ'
        },
        {
          name: '青葉台院院長  田坂 百香合',
          image: require('@/assets/images/salon/salon8.jpg'),
          image2: require('@/assets/images/home/home2.jpg'),
          qualification: '鍼灸師',
          hobby: 'バレー'
        },
        {
          name: '札幌円山町院院長  國文 麻美',
          image: require('@/assets/images/salon/salon9.jpg'),
          image2: require('@/assets/images/salon/salon10.jpg'),
          qualification: '柔道整復師',
          hobby: '柔道・ウォーキング・登山'
        },
        {
          name: '木野村 美波',
          image: require('@/assets/images/about/kinomura.jpg'),
          image2: require('@/assets/images/about/kinomura2.jpg'),
          qualification: '柔道整復師',
          hobby: 'ディズニー、歴史、バレー'
        },
        {
          name: '金森 明咲美',
          image: require('@/assets/images/about/kanamori.jpg'),
          image2: require('@/assets/images/about/kanamori2.jpg'),
          qualification: '鍼灸師、あん摩マッサージ・指圧師',
          hobby: '読書、ピアノ即興'
        },
        {
          name: '牧野 沙也伽',
          image: require('@/assets/images/about/makino.jpg'),
          image2: require('@/assets/images/about/makino2.jpg'),
          qualification: '柔道整復師',
          hobby: 'ソフトボール'
        },
        {
          name: '水谷 真梨',
          image: require('@/assets/images/about/mizutani.jpg'),
          image2: require('@/assets/images/about/mizutani2.jpg'),
          qualification: '柔道整復師、鍼灸師、あん摩マッサージ・指圧師',
          hobby: 'テニス'
        },
        {
          name: '鎌田 可奈 ',
          image: require('@/assets/images/about/kamata.jpg'),
          image2: require('@/assets/images/about/kamata2.jpg'),
          qualification: '柔道整復師',
          hobby: 'バスケットボール'
        }
      ]
    }
  }
}
</script>
