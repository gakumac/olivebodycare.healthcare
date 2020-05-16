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
        <nuxt-link to="/menu/personal-training/beginner">
          <v-btn small color="primary" dark>開始までの流れはこちら</v-btn>
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
          q: 'トレーニング時間はどれくらいですか？',
          answer:
            '当院では基本枠で、お一人様１時間枠で予約をとらさせて頂いております。通話が開始して終了するまでのお時間です。'
        },
        {
          q: '妊娠中ですが大丈夫ですか？',
          answer:
            'ただ今当院では妊娠している方へのサービスは行っておりません。産後の骨盤矯正は行っております。ぜひ産後のケアはお任せください。'
        },
        {
          q: '何を用意すれば良いですか？',
          answer:
            '・運動が出来る服装・タオル・水分・スマホ、タブレット、カメラ付きPCいずれか、等です。詳しくは予約確定後にメールでお知らせさせて頂きます。'
        },
        {
          q: '予約の変更はできますか？',
          answer:
            ' 2日前までの変更が可能です。当院の予約システムにてお客様ご自身で行って頂くか、当院にご連絡をお願い致します。'
        },
        {
          q: 'お会計はどうすれば良いですか？',
          answer:
            'リモートでのお会計はクレジットカード払いのみとなります。当院共通の回数券のご利用もできます。'
        },
        {
          q: '身体の不調や悩みの相談はできますか？',
          answer:
            '時間内でしたら可能です。普段は治療家としても活動をしておりますのでお任せ下さい。'
        },
        {
          q: '家が狭いですがトレーニングはできるのでしょうか？',
          answer:
            'トレーニングスペースが最低でも畳1畳、できれば2畳以上あるとより充実したトレーニングが可能です。'
        },
        {
          q: '自分以外も一緒に受けることはできますか？',
          answer:
            'お子様や旦那様もお一人様分の料金で一緒にトレーニングを受ける事ができます。ただしご一緒に受ける事が出来るのはご家族の方限定とさせて頂きます。お二人以上だとトレーナーの目が行き届かない為、上限お二人様が理想です。'
        },
        {
          q: '食事に関してのアドバイスもしてもらえますか？',
          answer: 'トレーニング時間内であれば可能です。'
        }
      ]
    }
  }
}
</script>
