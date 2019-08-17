<template>
  <div class="info">
    <v-container grid-list-md>
      <v-layout>
        <v-flex>
          <div class="my-2 text-xs-center">
            <v-icon x-large class="brown--text">face</v-icon>
          </div>
          <h2 class="my-2 brown--text text-xs-center">
            店舗・スタッフより
          </h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 md10>
          <h3 class="my-3 accent--text text-xs-center">
            {{ name }}
          </h3>
          <p class="title brown--text text-xs-center">
            所有国家資格&nbsp;{{ qualification }}
          </p>
        </v-flex>
        <v-flex xs6 md4>
          <v-img :src="img1"></v-img>
        </v-flex>
        <v-flex xs6 md4>
          <v-img :src="img2"></v-img>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 md10>
          <v-card class="mt-2" color="yellow lighten-5">
            <v-card-title primary-title>
              <div>
                <div class="brown--text headline">{{ title }}</div>
                <div class="brown--text">{{ message }}</div>
              </div>
            </v-card-title>
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
      name: '札幌円山店院長 國分 麻美（こくぶん あさみ）',
      qualification: '柔道整復師',
      title: '私たちにお任せください！',
      message:
        'みなさんこんにちは。札幌円山店　院長　國分麻美です。女性専門の治療院オリーヴボディケア のホームページをご覧いただきありがとうございます。この度ご縁あって、私の地元・札幌にて開業することとなりました。昨今の女性は社会進出や出産・家事・育児などで自分の体に目を向ける時間が取りづらく、身体の不調や痛みを我慢しながら生活されている方も多くいらっしゃると思います。また整体院も溢れており、自分にあっている整体院はどこなのか？お探しの方も多いと思います。そのような皆様のお悩みの相談に乗り、オーダーメイドの治療を提供させたいただきます。「女性を元気に！家族を元気に！」をモットーに、みなさまからのありがとうを糧に治療に専念させていただきます。当院では小さなお子様もご一緒に来院できる空間づくりをしております。ぜひ、オリーヴボディケア札幌円山店にお任せください。',
      img1: require('@/assets/images/salon/salon9.jpg'),
      img2: require('@/assets/images/salon/salon10.jpg')
    }
  }
}
</script>
