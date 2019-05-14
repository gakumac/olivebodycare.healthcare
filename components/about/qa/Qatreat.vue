<template>
  <div class="grey lighten-5">
    <v-layout>
      <v-flex>
        <div class="mt-4 text-xs-center">
          <v-icon x-large class="brown--text">chat</v-icon>
        </div>
        <h2 class="mt-2 brown--text text-xs-center">
          {{ title }}
        </h2>
      </v-flex>
    </v-layout>
    <v-container>
      <div v-for="(item, i) in items" :key="i">
        <v-layout row wrap justify-center>
          <v-flex xs12 md10>
            <v-card flat color="yellow lighten-5" class="brown--text ma-2">
              <v-card-title>
                <span class="title accent--text">Q&nbsp;</span>
                <h3 class="subheading font-weight-bold">{{ item.q }}</h3>
              </v-card-title>
              <v-card-text>
                <span class="title accent--text">A&nbsp;</span>
                <span> {{ item.answer }}</span>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '施術・症状についての質問',
      items: [
        {
          q: '施術時間はどれくらいですか？',
          answer:
            '当院では基本枠で、お一人様１時間枠で予約をとらさせて頂いております。来て頂いて、お帰りいただくまでのお時間です。施術時間は患者様によって矯正する場所が違いますのではっきりとした時間は申し上げられませんが、だいたいの施術時間は５０分程度となっております。'
        },
        {
          q: '妊娠中ですが大丈夫ですか？',
          answer:
            'ただ今当院では妊娠している方への治療は行っておりません。産後の骨盤矯正は行っております。ぜひ産後のケアはお任せください。'
        },
        {
          q: '子供（赤ちゃん）を連れて行っても大丈夫ですか？',
          answer:
            '大丈夫です。当院お子様連れが大丈夫な治療院となっております。皆様、生後2ヶ月くらいからの赤ちゃんから小学生のお子様まで、一緒にご来院して頂いております。3人のお子様をお連れになり来て頂いている患者さまもいらっしゃいます。お子様のお好きなＤＶＤやオモチャがありましたら一緒にお持ちください。こちらでもお子様グッズをご用意しております。ベビーカーも院内に入ります。バウンサーのご用意もございます。是非ご一緒にご来院ください。'
        },
        {
          q: 'どんな服装で行けばいいですか？',
          answer: 'お着替えをご用意しておりますので、どんな服装でも大丈夫です。'
        },
        {
          q: 'クレジットカードは使えますか？',
          answer:
            'はい。全てのお会計でクレジットカードをご利用いただけます。VIZA・MASTER・AMERICANEXPRESS・JCB・DISCOVER・DinersClubに対応しております。'
        }
      ]
    }
  }
}
</script>
