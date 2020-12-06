<template>
  <div class="info">
    <v-container grid-list-md>
      <v-layout>
        <v-flex>
          <div class="my-2 text-center">
            <v-icon x-large class="brown--text">face</v-icon>
          </div>
          <h2 class="my-2 brown--text text-center">
            店舗・スタッフより
          </h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 md10>
          <h3 class="my-3 accent--text text-center">
            {{ name }}
          </h3>
          <p class="title brown--text text-center">
            所有国家資格&nbsp;{{ qualification }}
          </p>
        </v-flex>
        <v-flex xs6 sm5 md5 lg4 xl3>
          <v-img :src="img1"></v-img>
        </v-flex>
        <v-flex xs6 sm5 md5 lg4 xl3>
          <v-img :src="img2"></v-img>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm9 md9 lg7 xl5>
          <v-card class="my-4" flat>
            <v-layout row wrap justify-center>
              <v-flex>
                <v-card-title>
                  <h3 class="brown--text">
                    {{ name }}
                  </h3>
                </v-card-title>
                <div class="mx-2">
                  <p>＜国家資格＞&nbsp;{{ qualification }}</p>
                  <p>
                    ＜趣味・特技＞&nbsp;ソフトボール全国大会出場、野球観戦
                  </p>
                  <h3 class="brown--text">
                    経歴
                  </h3>
                  <p>神奈川県立&nbsp;荏田高等学校卒業</p>
                  <p>呉竹鍼灸柔整専門学校卒業</p>
                  <p>
                    神奈川県横浜市&nbsp;女性専門の治療院オリーヴボディケアたまプラーザ店&nbsp;勤務
                  </p>
                  <p>
                    神奈川県横浜市&nbsp;女性専門の治療院オリーヴボディケア横浜美しが丘店&nbsp;勤務
                  </p>
                </div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm9 md9 lg7 xl5>
          <v-card class="mt-2 pa-4" color="yellow lighten-5">
            <h3 class="mb-2 accent--text">{{ title }}</h3>
            <p>{{ message1 }}</p>
            <p>{{ message2 }}</p>
            <p>{{ message3 }}</p>
            <p>{{ message4 }}</p>
            <p>{{ message5 }}</p>
            <p>{{ message6 }}</p>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 md10>
          <v-card flat class="my-2" color="info">
            <h3 class="py-2 accent--text text-center">
              横浜美しが丘店ご予約は今すぐこちら！
            </h3>
            <v-layout row wrap justify-center>
              <v-flex xs12 sm6 md5 lg5 xl4 class="text-center">
                <v-btn
                  large
                  a
                  href="https://olivebodycare.healthcare/reserve/utsukushigaoka"
                  dark
                  color="green darken-3"
                >
                  <span class="font-weight-bold subtitle-1"
                    >24時間Web予約は今すぐこちら！</span
                  >
                </v-btn>
              </v-flex>
              <v-flex xs12 sm6 md5 lg5 xl4 class="text-center">
                <v-btn large a href="tel:0455300265" color="primary" dark>
                  <v-icon>phone</v-icon>
                  <span class="font-weight-bold subtitle-1"
                    >：045-530-0265</span
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
      name: '牧野 沙也伽（まきの さやか）',
      qualification: '柔道整復師',
      title: 'お身体の事、私にお任せください！',
      message1:
        'この度は女性専門の治療院オリーヴボディケアのホームページをご覧頂きありがとうございます。美しが丘院の牧野沙也伽です。',
      message2:
        '私達は「女性を元気に！家庭を元気に！日本をそして世界を元気に」をモットーに日々取り組んでいます。',
      message3:
        '日常の生活、出産、育児、仕事などで生じるその痛みを我慢してストレスを溜め込んでいませんか？日々の楽しい生活を守る為にも女性本来の健康な体を取り戻せるようお手伝いさせて頂ければ幸いです。',
      message4:
        '当院は患者様一人一人のご要望に合わせて施術を行います。まずはお気軽にご相談ください。',
      message5:
        '一人でも多くの女性達が心身共に健やかになり、笑顔でいられる時間を増やせるよう、患者様に感謝し、皆様の期待に応えられるよう今後も日々精進していきます。',
      message6:
        '女性専門の治療院オリーヴボディケア美しが丘院でお待ちしております。',
      img1: require('@/assets/images/salon/utsukushigaoka/utsukushi-makino.jpg'),
      img2: require('@/assets/images/salon/utsukushigaoka/utsukushi-makino2.jpg')
    }
  }
}
</script>
