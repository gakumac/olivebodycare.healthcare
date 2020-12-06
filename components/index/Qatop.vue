<template>
  <div>
    <v-layout>
      <v-flex>
        <div class="mt-4 text-center">
          <v-icon x-large class="brown--text">chat</v-icon>
        </div>
        <h2 class="mt-2 text-center">
          Q&A-よくある質問-
        </h2>
      </v-flex>
    </v-layout>
    <v-container grid-list-lg>
      <div v-for="(item, i) in items" :key="i">
        <v-layout justify-center>
          <v-flex xs12 sm9 md9 lg7 xl5>
            <v-card color="yellow lighten-5" class="pa-2">
              <h3>
                <span class="title accent--text">Q&nbsp;</span>
                {{ item.q }}
              </h3>
              <hr color="#ffcccc" />
              <div class="mt-3">
                <span class="title accent--text">A&nbsp;</span>
                <span>{{ item.answer }}</span>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
      <div class="mb-3 py-3 text-right">
        <nuxt-link to="/about/qa">
          <v-btn small color="primary" dark>よくある質問詳しくはこちら</v-btn>
        </nuxt-link>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
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
        },
        {
          q: '電子マネーは使えますか？',
          answer:
            'はい。全てのお会計で使えます。Suica、PASMOなど交通系電子マネーの他、iD、QUICPay、Apple Payに対応しております。'
        }
      ]
    }
  }
}
</script>
