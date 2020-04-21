<template>
  <div>
    <v-container grid-list-lg>
      <v-layout row wrap justify-center text-center>
        <v-flex xs12 md12>
          <div class="my-2">
            <v-icon x-large class="brown--text">business</v-icon>
          </div>
          <h2 class="my-2 brown--text text-center">
            開始までの流れをご紹介します。
          </h2>
        </v-flex>
        <v-flex xs12 sm9 md9 lg7 xl5>
          <h3 class="my-2">
            初めての方へ
          </h3>
          <div>
            ご利用の流れを簡単に説明させて頂きます。
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
              <!-- <v-flex xs12 sm4 md4>
                <v-img :src="item.image"></v-img>
              </v-flex> -->
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
          <p class="title font-weight-boldt">
            以上が初回の流れです。<br />
            通話を開始して終了するまでが６０分前後となります。<br />
            初めての場合は緊張すると思いますが<br />
            分からないことはどんなことでも<br />
            お気軽にお聞きください！<br />
          </p>
        </v-flex>
      </v-layout>
      <v-layout justify-center text-center>
        <v-flex xs12 sm9 md9 lg7 xl5>
          <h3 class="my-8">
            ご準備して頂く物
          </h3>
        </v-flex>
      </v-layout>
      <div v-for="(preparation, i) in preparations" :key="i">
        <v-layout row wrap justify-center>
          <v-flex xs12 sm10 md6 lg5 xl4>
            <v-card color="yellow lighten-5" class="pa-2">
              <h3>
                <v-icon left>done_outline</v-icon>
                <span>{{ preparation.tool }}</span>
              </h3>
              <hr color="#ffcccc" />
              <p class="mt-3 font-weight-bold">
                {{ preparation.comment1 }}
              </p>
            </v-card>
          </v-flex>
          <v-flex xs12 sm10 md6 lg5 xl4>
            <v-card color="yellow lighten-5" class="pa-2">
              <h3>
                <v-icon left>done_outline</v-icon>
                <span>{{ preparation.tool2 }}</span>
              </h3>
              <hr color="#ffcccc" />
              <p class="mt-3 font-weight-bold">
                {{ preparation.comment2 }}
              </p>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
      <v-layout justify-center>
        <v-flex xs12 sm9 md9 lg7 xl5>
          <h3 class="my-8 text-center">
            zoomアプリについて
          </h3>
          <p>当日は『ZOOM』アプリを使用してのレッスンとなります。</p>
          <p>レッスン前にアプリのインストールをお願い致します。</p>
          <p>
            アプリのインストールのみでレッスンに参加することが可能です。アカウントの作成などその他の設定は必要ありません。
          </p>
        </v-flex>
      </v-layout>
      <v-layout justify-center text-center>
        <v-flex xs12 sm9 md9 lg7 xl5>
          <v-btn
            dark
            color="primary"
            class="mb-3"
            target="_blank"
            a
            href="https://play.google.com/store/apps/details?id=us.zoom.videomeetings&hl=ja"
          >
            <span class="font-weight-bold">
              アンドロイドアプリの詳細はこちら
            </span>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-layout justify-center text-center>
        <v-flex xs12 sm9 md9 lg7 xl5>
          <v-btn
            dark
            color="primary"
            class="mb-3"
            target="_blank"
            a
            href="https://apps.apple.com/jp/app/zoom-cloud-meetings/id546505307"
          >
            <span class="font-weight-bold">
              iPhoneアプリの詳細はこちら
            </span>
          </v-btn>
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
            'メニューと日時を選んで予約フォームに入力・送信していただくと、２４時間その場でご予約をお取りする事が出来ます。当日のご予約も可能です。'
        },
        {
          title: '２.当院から確定メール、ご利用方法詳細メールの送信',
          image: require('@/assets/images/about/beginner2.jpg'),
          message1:
            '当院よりご予約が確定した旨を記載したメールとご利用方法の詳細が記載されたメールの２通を送らせて頂きます。'
        },
        {
          title: '３.通話テストの実施',
          image: require('@/assets/images/about/beginner3.jpg'),
          message1:
            '当日スムーズにレッスンが開始出来るように、事前にTV通話が出来るかの確認をさせて頂きます。メールにて日程調整をさせて頂きます。zoom使用経験があり使い方が分かる方は実施せず開始させて頂きます。'
        },
        {
          title: '４.『zoom』アプリの招待メールの送信',
          image: require('@/assets/images/about/beginner5.jpg'),
          message1:
            'ビデオ通話用のURL、決済用URLが記載されたメールをお送りします。'
        },
        {
          title: '５. お会計',
          image: require('@/assets/images/about/beginner4.jpg'),
          message1:
            '『zoom』アプリの招待メールに決済URLが記載してありますので当日までに決済をお願い致します。回数券をご利用の方は当日確認をさせて頂きます。当日や直前のご予約の場合はサービス中にお会計をさせて頂きます。リモートでのお会計はクレジットカードのみとなります。'
        },
        {
          title: '６.トレーニング開始',
          image: require('@/assets/images/about/beginner6.jpg'),
          message1:
            'レッスン開始時間になりましたら招待メールを開き、URLをクリックして頂きます。「このミーティングをホストが開始するまで待機してます」と表示されたらお待ちください。ビデオつきで参加”を選んで頂くとレッスンが開始します。スタッフによるカウンセリング、ストレッチ、トレーニング等を行います。'
        },
        {
          title: '７.トレーニング終了',
          image: require('@/assets/images/about/beginner6.jpg'),
          message1: '通話終了ボタンを押して頂きトレーニング終了となります。'
        }
      ],
      preparations: [
        {
          tool: '運動が出来る服装',
          comment1: '当日は動きやすい服装でお願いします。',
          tool2: 'タオル',
          comment2: '汗が拭き取れる大きさの物'
        },
        {
          tool: 'ヨガマット',
          comment1: '無い場合や他の物での代用でも大丈夫です。',
          tool2: '水分',
          comment2:
            '500mLほどの水またはスポーツドリンクのような物だと好ましいです。'
        },
        {
          tool: 'ネット環境',
          comment1: 'スマホ・携帯の電波でも大丈夫です。',
          tool2: 'スマホ、タブレット、カメラ付きPC、いずれか',
          comment2: 'ビデオ通話が出来る端末をご用意下さい。'
        },
        {
          tool: '端末充電器',
          comment1:
            '１時間続きますので途中充電しながらのトレーニングになる場合がございます。',
          tool2: 'クレジットカードまたは当院回数券',
          comment2:
            'リモートでのお会計はクレジットカード払いのみとなります。または当院共通の回数券のご利用ができます。'
        }
      ]
    }
  }
}
</script>
