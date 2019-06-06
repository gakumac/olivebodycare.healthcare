<template>
  <div>
    <div v-for="(item, i) in items" :key="i">
      <v-container grid-list-lg>
        <v-layout row wrap justify-center>
          <v-flex xs12 md12>
            <h2 class="text-xs-center brown--text">
              {{ item.h2 }}
            </h2>
          </v-flex>
          <v-flex xs12 md8>
            <div class="mb-3 title red--text font-weight-bold">
              <v-icon large class="red--text">check</v-icon>
              <span>
                受けるとどうなる！？
              </span>
            </div>
            <div class="subheading brown--text font-weight-bold">
              <p>{{ item.after1 }}</p>
              <p>{{ item.after2 }}</p>
              <p>{{ item.after3 }}</p>
              <p>{{ item.after4 }}</p>
              <p>{{ item.after5 }}</p>
              <p>{{ item.after6 }}</p>
            </div>
          </v-flex>
          <v-flex xs12 md8>
            <div class="mb-3 title red--text font-weight-bold">
              <v-icon large class="red--text">check</v-icon>
              <span>
                こんな方は是非お試し下さい。
              </span>
            </div>
            <div>
              <v-chip color="primary" text-color="white">{{
                item.target1
              }}</v-chip>
              <v-chip color="brown" text-color="white">{{
                item.target2
              }}</v-chip>
              <v-chip color="red" text-color="white">{{ item.target3 }}</v-chip>
              <v-chip color="green" text-color="white">{{
                item.target4
              }}</v-chip>
              <v-chip color="primary" text-color="white">{{
                item.target5
              }}</v-chip>
              <v-chip color="brown" text-color="white">{{
                item.target6
              }}</v-chip>
              <v-chip color="red" text-color="white">{{ item.target7 }}</v-chip>
            </div>
          </v-flex>
          <v-flex xs12 md10>
            <p>
              {{ item.note1 }}
            </p>
          </v-flex>
          <v-flex xs12 md10>
            <v-img :src="item.image"></v-img>
          </v-flex>
          <v-flex xs6 md6>
            <div class="subheading text-xs-center">技術料金</div>
          </v-flex>
          <v-flex xs6 md6>
            <span class="headline accent--text font-weight-bold">
              {{ item.price }}
            </span>
            <span>
              税抜
            </span>
          </v-flex>
          <v-flex xs12 md8>
            <p>
              {{ item.note2 }}
            </p>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        {
          h2: '小顔矯正オプション',
          after1: 'たるみ・ほうれい線が改善される！',
          after2: '顔の歪み・フェイスラインが整う！',
          after3: 'むくみ・リンパの流れがスッキリする！',
          after4: ' 頭〜顔が軽くなる！',
          after5: '人に会いたくなる！',
          after6: '',
          target1: 'たるみが気になる',
          target2: '顔の歪み・フェイスラインが気になる',
          target3: 'むくみ・リンパの滞りが気になる',
          target4: '大切な人と会う前に',
          target5: '記念日・記念撮影の前に',
          target6: 'ママ友会の前に',
          target7: 'ほうれい線が気になる',
          image: require('@/assets/images/menu/kogao.jpg'),
          price: '４０００円',
          note1:
            '※小顔オプションは整体・マッサージ・骨盤矯正・鍼灸治療など、どのコースにもお付けできます。',
          note2:
            '小顔オプションは通常60分コースの時間内に追加でお付けするものとなっております。施術前にスタッフにお申し付けください。電話予約・WEB予約の際にも受付しております。どちらでも構いません。お気軽にお申し付けくださいませ。'
        },
        {
          h2: '足つぼ-足は第二の心臓-',
          after1: '冷えが改善される！',
          after2: 'むくみがスッキリする！',
          after3: '食欲不審が改善する！',
          after4: ' 疲れにくくなる！',
          after5: 'リラックス効果が期待できる！',
          after6: '',
          target1: '冷えのある方',
          target2: 'むくみが気になる',
          target3: 'リンパの滞りが気になる',
          target4: '食欲不審',
          target5: '疲れやすい',
          target6: '血流が気になる',
          target7: 'ストレスが溜まっている',
          image: require('@/assets/images/menu/ashitsubo.png'),
          price: '２０００円',
          note1:
            '※小顔オプションは整体・マッサージ・骨盤矯正・鍼灸治療など、どのコースにもお付けできます。',
          note2:
            '小顔オプションは通常60分コースの時間内に追加でお付けするものとなっております。施術前にスタッフにお申し付けください。電話予約・WEB予約の際にも受付しております。どちらでも構いません。お気軽にお申し付けくださいませ。'
        }
      ]
    }
  }
}
</script>
