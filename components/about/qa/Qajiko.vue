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
      title: '交通事故治療についての質問',
      items: [
        {
          q: '自賠責保険は使えますか？',
          answer:
            'はい、使えます。治療費は直接保険会社に請求するので、患者様の来院時のお支払いは０円です。'
        },
        {
          q: '保険会社とのサポートをしてもらえますか？',
          answer:
            '経験豊富な女性スタッフがサポートしますので、何でもご相談下さい。'
        },
        {
          q: '交通事故の治療費はどれくらいかかりますか？',
          answer:
            '実質０円です。治療費は、加害者の保険会社を通じて全額が各医療機関に支払われます。'
        },
        {
          q: '他の治療院に通院中ですが、転院は可能ですか？',
          answer:
            'はい、大丈夫です。どういった治療を受けるかは患者さまに決める権利があり、治療の途中でも転院する事は可能です。'
        },
        {
          q: '交通事故による行為傷害が心配です。',
          answer:
            '交通事故は身体にかかる負担が大きい場合が多く、適切な治療を行わない場合、後遺症害に悩まされることもあり、早期の治療が最も重要になります。また、痛みがないから・軽い事故だったからと自分で判断せず、まずは治療を受け、続ける事を強くお勧めします。'
        },
        {
          q: '治療時間はどれくらいですか？',
          answer:
            '怪我の状態にもよりますが、１０分から３０分程度の治療です。その他日常生活で気をつけて頂きたい事なども指導します。'
        }
      ]
    }
  }
}
</script>
