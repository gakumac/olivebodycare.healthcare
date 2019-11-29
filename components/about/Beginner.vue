<template>
  <div>
    <v-container grid-list-sm>
      <v-layout row wrap justify-center>
        <v-flex xs12 md12>
          <div class="my-2 text-center">
            <v-icon x-large class="brown--text">business</v-icon>
          </div>
          <h2 class="my-2 brown--text text-center">
            来院から治療までの流れをご紹介します。
          </h2>
        </v-flex>
        <v-flex xs12 sm9 md9 lg7 xl5>
          <h3 class="my-2 brown--text">
            初めての方へ
          </h3>
          <div>
            ご来院頂いてからお帰りになられるまでの流れを簡単に説明させて頂きます。<br />
            ※初診の患者様には問診票などのご記入がございますので5分ほど前にお越しください。<br />
            前に患者様がいらっしゃいますので早く来られすぎると中に入れない場合がございますので5分前にお願いいたします。
          </div>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm10 md9 lg8 xl6>
          <v-card
            v-for="(item, i) in items"
            :key="i"
            color="info"
            class="my-8"
            flat
          >
            <v-layout row wrap justify-center>
              <v-flex xs12 sm4 md4>
                <v-img :src="item.image"></v-img>
              </v-flex>
              <v-flex xs12 sm8 md8>
                <v-card-title>
                  <h3 class="brown--text">
                    {{ item.title }}
                  </h3>
                </v-card-title>
                <v-card-text>
                  {{ item.message1 }}
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm8 md8 lg6 xl4>
          <p class="title font-weight-bold brown--text">
            以上が初回の流れです。<br />
            お越し頂いてからご帰宅まで６０分前後となります。<br />
            初めての場合は緊張すると思いますが<br />
            分からないことはどんなことでも<br />
            お気軽にお聞きください！<br />
          </p>
          <p class="subheading mt-3">
            ※当院では基本枠で、お一人様１時間枠で予約をとらさせて頂いております。施術時間は患者様によって矯正する場所が違いますのではっきりとした時間は申し上げられませんが、だいたいの施術時間は５０分程度となっております。
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        {
          title: '１.ご予約',
          image: require('@/assets/images/about/beginner1.jpg'),
          message1:
            'メニューと日時を選んで予約フォームに入力・送信していただくと、２４時間その場でご予約をお取りする事が出来ます。当日１時間前までのご予約も可能です。'
        },
        {
          title: '２.ご来院・カルテ記入',
          image: require('@/assets/images/about/beginner2.jpg'),
          message1:
            '現在の症状から体質の診断に必要な事項まで、簡単に記入できるようになっています。気になることはなんでも、お気軽にご記入ください。'
        },
        {
          title: '３.お着替え',
          image: require('@/assets/images/about/beginner3.jpg'),
          message1:
            'お着替えを用意しております（S,M,L,LL各種サイズ対応可）。ご来院の際はどんな服装でも大丈夫です。'
        },
        {
          title: '４. 問診・カウンセリング',
          image: require('@/assets/images/about/beginner4.jpg'),
          message1:
            '記入していただいた予診票を拝見しながら、詳しくお話を伺います。'
        },
        {
          title: '５.触診・検査',
          image: require('@/assets/images/about/beginner5.jpg'),
          message1:
            'さらにお話を聞きながら、お体の診察を行い、お身体の状態を確かめ、治療方針をご説明いたします。'
        },
        {
          title: '６.施術メニュー・方法の提案',
          image: require('@/assets/images/about/beginner6.jpg'),
          message1:
            'あなたの症状に最適な施術法を提案し、納得して頂いた上で施術にはいります。'
        },
        {
          title: '７.施術',
          image: require('@/assets/images/about/beginner7.jpg'),
          message1:
            'お一人お一人に合わせたオーダーメイドの治療を丁寧に行います。'
        },
        {
          title: '８.自己ストレッチ・日常生活注意点アドバイス',
          image: require('@/assets/images/about/beginner8.jpg'),
          message1:
            'ご自宅で出来るストレッチや、日常生活で気をつけることなどをお伝えします。'
        },
        {
          title: '９.今後の治療方針のご説明',
          image: require('@/assets/images/about/beginner9.jpg'),
          message1:
            '今後の治療方針をご説明します。治るために必要なご提案ははっきりとさせていただきますが、患者さんのご都合、ご希望に合わせた無理のないプランで治療することを心がけています。'
        },
        {
          title: '１０.お会計',
          image: require('@/assets/images/about/beginner10.jpg'),
          message1: 'お会計の際に、次回のご予約をしていただけます。'
        },
        {
          title: '１１.お見送り',
          image: require('@/assets/images/about/beginner11.jpg'),
          message1:
            'お帰りになられたら、10分でも良いので横になってください。より高い施術効果が期待できます。お大事にどうぞ。'
        }
      ]
    }
  }
}
</script>
