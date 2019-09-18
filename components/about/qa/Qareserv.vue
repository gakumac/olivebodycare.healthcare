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
            <v-card text color="yellow lighten-5" class="brown--text ma-2">
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
      title: 'ご予約についての質問',
      items: [
        {
          q: '予約をキャンセルした場合キャンセル料はかかりますか？',
          answer:
            'お客様が施術予約の全部またはその一部をキャンセルした場合、以下に示す当院が定める違約金（キャンセル料）をお支払いいただきます。前日・・・オプション代金を含まない施術料金の50%。当日・・・オプション代金を含まない施術料金の100%。'
        },
        {
          q: '予約をキャンセルしたい場合はどうすれば良いですか？',
          answer:
            '施術予約をキャンセルまたは変更するときは、当院のインターネット予約システム・メールまたは電話にて当院へ連絡していただきます。'
        },
        {
          q: 'web予約システムを使ってキャンセルの処理は出来ますか？',
          answer: 'web予約システムを使ってのキャンセル処理に対応しております。'
        }
      ]
    }
  }
}
</script>
