<template>
  <div class="grey lighten-5">
    <v-layout>
      <v-flex>
        <div class="mt-4 text-center">
          <v-icon x-large class="brown--text">chat</v-icon>
        </div>
        <h2 class="mt-2 brown--text text-center">
          {{ title }}
        </h2>
      </v-flex>
    </v-layout>
    <v-container>
      <div v-for="(item, i) in items" :key="i">
        <v-layout justify-center>
          <v-flex xs12 sm9 md9 lg7 xl5>
            <v-card flat color="yellow lighten-5" class="brown--text my-2">
              <v-card-title>
                <h3><span class="accent--text">Q&nbsp;</span>{{ item.q }}</h3>
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
      title: '当院についての質問',
      items: [
        {
          q: 'どんな服装で行けばいいですか？',
          answer: 'お着替えをご用意しておりますので、どんな服装でも大丈夫です。'
        },
        {
          q: '子供（赤ちゃん）を連れて行っても大丈夫ですか？',
          answer:
            '大丈夫です。当院お子様連れが大丈夫な治療院となっております。皆様、生後2ヶ月くらいからの赤ちゃんから小学生のお子様まで、一緒にご来院して頂いております。3人のお子様をお連れになり来て頂いている患者さまもいらっしゃいます。お子様のお好きなＤＶＤやオモチャがありましたら一緒にお持ちください。こちらでもお子様グッズをご用意しております。ベビーカーも院内に入ります。バウンサーのご用意もございます。是非ご一緒にご来院ください。'
        },
        {
          q: 'クレジットカードは使えますか？',
          answer:
            'はい。全てのお会計でクレジットカードをご利用いただけます。VIZA・MASTER・AMERICANEXPRESS・JCB・DISCOVER・DinersClubに対応しております。'
        },
        {
          q: '電子マネーは使えますか？',
          answer:
            'はい。全てのお会計で使えます。Suica、PASMOなど交通系電子マネーの他、iD、QUICPay、Apple Payに対応しております。'
        },
        {
          q: '赤ちゃん用のバウンサーはありますか？',
          answer: 'はい。各部屋にバウンサーをご用意しております。'
        },
        {
          q: '駐車場はありますか？',
          answer:
            'たまプラーザ店には併設の駐車場をあわせ、第１・第２駐車場とございます。青葉台店には併設の駐車場はございませんので、近隣の駐車場をご利用くださいませ。'
        }
      ]
    }
  }
}
</script>
