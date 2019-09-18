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
      name: 'たまプラーザ本店院長 赤川 優衣（あかがわ ゆい）',
      qualification: '鍼灸師',
      title: '私たちにお任せください！',
      message:
        'たまプラーザ院院長、赤川優衣です。当院は若い方からご年配の方まで幅広くご来院頂いております。女性には人生の中であらゆるターニングポイントがあります。結婚、妊娠、出産、産後、お孫さんのお世話といった重大イベントです。年代に合わせてお悩みも違ってきますが当院ではどの年代の女性の方にも満足して心と身体が楽になって頂けるようしっかりケアさせて頂いております！『女性を元気に！』という理念もモットーに、多くの女性の生涯をサポートをさせて頂けたら幸いです。また、お子様もご一緒にご来院いただけます。私たちもお子様に元気をもらっており楽しみにしておりますので是非ご一緒にお待ちしております！少しでも皆さまの人生に関われたら大変嬉しく思います！身体のお悩みは私達にお任せください！',
      img1: require('@/assets/images/salon/salon6.jpg'),
      img2: require('@/assets/images/salon/salon7.jpg')
    }
  }
}
</script>
