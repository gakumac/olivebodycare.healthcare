<template>
  <div class="yellow lighten-5">
    <v-layout>
      <v-flex class="text-center">
        <div class="mt-4">
          <v-icon x-large class="brown--text">business</v-icon>
        </div>
        <h2 class="mt-2 brown--text">
          初めての方へ。当院についてご紹介します。
        </h2>
        <p class="mt-2 font-weight-bold">
          『女性を元気に！家庭を元気に！日本そして世界を元気に！！』
        </p>
      </v-flex>
    </v-layout>
    <v-container>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm6 md6 lg5 xl4>
          <v-card
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            color="info"
            class="ma-4"
          >
            <v-img :src="item.image"></v-img>
            <v-card-title>
              <h3 class="brown--text">
                {{ item.title }}
              </h3>
            </v-card-title>
            <v-card-text>
              {{ item.message1 }}
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md6 lg5 xl4>
          <v-card
            v-for="(item, i) in items2"
            :key="i"
            :to="item.to"
            color="info"
            class="ma-4"
          >
            <v-img :src="item.image2"></v-img>
            <v-card-title>
              <h3 class="brown--text">
                {{ item.title2 }}
              </h3>
            </v-card-title>
            <v-card-text>
              {{ item.message2 }}
            </v-card-text>
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
      items: [
        {
          title: '私達の理念-ミッション-',
          image: require('@/assets/images/home/reason1.jpg'),
          message1:
            '私等はこの理念のもと、どうしたら来て頂いた時より元気になって帰って頂けるか、そして患者様一人一人に寄りそい、健やかな生活を送れるように関わっていけるか、日々力を尽くし営業に取り組んでいます。',
          to: '/about/mission'
        },
        {
          title: '総院長からの挨拶',
          image: require('@/assets/images/about/about1.jpg'),
          message1:
            'みなさまこんにちは。『女性専門の治療院オリーヴボディケア』のサイトをご覧いただきありがとうございます。院長の町田恵です。',
          to: '/about/greeting'
        },
        {
          title: '当院のスタッフについて',
          image: require('@/assets/images/about/about2.jpg'),
          message1:
            '当院のスタッフは全員女性。全てのスタッフが国家資格を所有しています。全力で女性の悩みを解決します！',
          to: '/about/staff'
        }
      ],
      items2: [
        {
          title2: 'Q&A-よくある質問-',
          image2: require('@/assets/images/about/about4.jpg'),
          message2:
            '患者様から頂いた、当院について・施術・症状・ご予約について等よくある質問についてお答えします。',
          to: '/about/qa'
        },
        {
          title2: '入店から施術までの流れ',
          image2: require('@/assets/images/about/about3.jpg'),
          message2:
            'ご来院頂いてからお帰りになられるまでの流れを説明させて頂きます。',
          to: '/about/beginner'
        },
        {
          title2: 'お問い合わせはこちら',
          image2: require('@/assets/images/about/contact1.jpg'),
          message2: 'お問い合わせはこちらからお願い致します。',
          to: '/about/contact'
        }
      ]
    }
  }
}
</script>
