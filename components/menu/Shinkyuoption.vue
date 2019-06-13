<template>
  <div>
    <div v-for="(item, i) in items" :key="i">
      <v-container grid-list-lg>
        <v-layout row wrap justify-center>
          <v-flex xs12 md8>
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
            </div>
          </v-flex>
          <v-flex xs12 md8>
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
        <hr />
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
          h2: '本治療オプション',
          after1: '首・肩こりなどの表面的な痛みの原因を改善する!',
          after2: '腰痛などの表面的な痛みの原因を改善する!',
          after3: '病気や痛みを起こしにくい体質に改善される！',
          after4: ' 疲れにくく、常に良い状態の身体をキープできる！',
          after5: '',
          after6: '',
          target1: '身体がだるい',
          target2: '体質改善がしたい',
          target3: 'むくみが気になる',
          target4: '首・肩こり',
          target5: '腰痛が気になる',
          target6: '冷えが気になる',
          image: require('@/assets/images/menu/shinkyu1.jpg'),
          price: '２０００円',
          note1:
            '当院の本治療は、脈診・舌診・腹診を用いて一人一人にあったツボ刺激により、根本的に体質を改善していきます。またマッサージ・整体と併用する事により相乗効果でより一層症状の改善のスピードが上がります。※鍼灸治療では本治療施術も同時に行っております。※本治療は整体・マッサージ・骨盤矯正など、鍼灸治療意外のどのコースにもお付けできます。',
          note2:
            '本治療オプションは通常60分コースの時間内に追加でお付けするものとなっております。施術前にスタッフにお申し付けください。電話予約・WEB予約の際にも受付しております。どちらでも構いません。お気軽にお申し付けくださいませ。'
        },
        {
          h2: '耳つぼ',
          after1: '過食を抑える！',
          after2: 'お好みの場所の疲労回復！',
          after3: 'ツボ刺激でのダイエット効果！',
          after4: 'リラックス効果が期待できる！',
          after5: 'お好みの症状を改善できる！',
          after6: '痛みのない症状改善！',
          target1: 'ダイエット',
          target2: 'むくみが気になる',
          target3: '不眠症状のある方',
          target4: '体質改善',
          target5: 'ストレスがひどい',
          target6: '痛みに弱い',
          image: require('@/assets/images/menu/mimitsubo1.jpg'),
          price: '２０００円',
          note1:
            'もっと簡単でストレスを感じないダイエットをしたいという方には耳つぼダイエットがおすすめです！耳つぼ・耳つぼジュエリーオプションは整体・マッサージ・骨盤矯正・鍼灸治療など、どのコースにもお付けできます。',
          note2:
            '耳つぼ・耳つぼジュエリーオプションは通常60分コースの時間内に追加でお付けするものとなっております。施術前にスタッフにお申し付けください。電話予約・WEB予約の際にも受付しております。どちらでも構いません。お気軽にお申し付けくださいませ。'
        },
        {
          h2: '赤ちゃん鍼',
          after1: '夜泣きの改善に！',
          after2: 'おねしょの改善に！',
          after3: 'かんの虫の改善に！',
          after4: 'アレルギー・アトピーの改善に！',
          after5: '下痢・便秘の症状の改善に！',
          after6: '',
          target1: '夜泣き',
          target2: 'おねしょ',
          target3: 'かんの虫',
          target4: 'アレルギー症状',
          target5: 'アトピー体質',
          target6: '下痢・便秘',
          image: require('@/assets/images/menu/akachanhari1.jpg'),
          price: '１０００円',
          note1:
            '子供（赤ちゃん）の身体はとても敏感です。環境の変化・ストレスなどが身体に加わると外部に（時に内部）に症状が現れてきます。子供の感じているストレス・自律神経の乱れを整わせ免疫が高まり、風邪の引かない強い子に導いてくれます。',
          note2:
            '接触鍼と呼ばれるヘラやローラーのような物で、皮膚に接触させ、ツボを刺激するので痛みは全くありません！生後１ヶ月から小学生位までのお子様が対象です。風邪や病気の予防にも最適です。※単独での施術は実施しておりません、お母様の施術と一緒に受けて頂いております。'
        }
      ]
    }
  }
}
</script>
