<template>
  <div>
    <v-container grid-list-md>
      <v-layout row wrap justify-center>
        <h2 class="text-xs-center brown--text mb-2">
          当院の鍼灸についてご紹介です。
        </h2>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 md8>
          <p>
            原因不明の不調は、自覚症状がありながら検査上の数値に問題はないと診断されることが多くあります。<br />
            鍼灸施術病気にはなっていないが健康ともいえない、未病という状態に悩む方が増えています。<br />
            東洋医学では、この未病の段階で気づき、病気になる前に治していく未病治という考えが基本にあります。<br />
            当院の鍼灸は局所のこりや痛みを取りのぞくだけではなく、血液の流れをよくし、全身をリラックスさせます。
          </p>
        </v-flex>
        <v-flex xs12 md10>
          <v-img :src="require('@/assets/images/menu/shinkyu2.jpg')"></v-img>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 md8>
          <h3 class="mb-3 title red--text font-weight-bold">
            <v-icon large class="red--text">check</v-icon>
            <span>
              当院の施術を受けると！
            </span>
          </h3>
          <div class="subheading brown--text font-weight-bold">
            <p>交感神経と副交感神経のバランスが整い</p>
            <p>血液中の白血球を増加させることで免疫力が高まり</p>
            <p>病気になりにくいエネルギッシュな身体を手に入れることができる</p>
          </div>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 md8>
          <p>
            東洋医学では、自覚症状を重視した上で、独自の診察法である脈診、腹診、舌診などを中心に用い、身体全体を細かく診ていきます。<br />
            それによって得られる全ての情報に基づき治療法が決まります。<br />
            不調の症状が同じでも、身体の状態や体質はひとりひとり違います。<br />
            当院ではその時の症状や身体の状態に最も効果的な施術を行います。<br />
            自分の身体がどのような状態にあるのかを知ることは、これまでの生活を見直すきっかけになり、根本から改善することにつながります。<br />
            身体を調整して、健康で快適な生活を取りもどしませんか？<br />
            寝違え、ぎっくり腰、肩こりや首・背中のこりなどの筋肉性の痛みや、イライラ、不眠、めまいなどの自律神経系の疾患、胃もたれ、便秘、下痢などの内臓系の疾患に効果が期待できます。<br />
            また当院では、生理不順、不妊症、更年期障害などの婦人科系疾患や小児科系疾患にも力を入れており効果を上げています。<br />
          </p>
        </v-flex>
        <v-flex xs12 md10>
          <v-img :src="require('@/assets/images/menu/shinkyu3.jpg')"></v-img>
        </v-flex>
        <v-flex xs12 md12>
          <h3 class="text-xs-center brown--text mt-4 mb-2">
            当院で使用している鍼について
          </h3>
        </v-flex>
        <v-flex xs12 md8>
          <p>
            『鍼＝痛い・怖い』<br />
            こんな風に思われている方は多いのではないでしょうか？<br />
            実際の鍼治療は、痛みはほとんどありませんし、安全性に関しても、当院では使い捨ての鍼を使用しているので感染症の心配はいっさいありません。<br />
            鍼は髪の毛程度の太さで痛みはほとんどありません。<br />
            特に鍼の先端は20μm（1/200mm)です。<br />
            予防接種や採血などの注射針の太さ（外径）は鍼灸施術用鍼の直径に比べ3倍以上であり、鍼灸施術用の鍼は注射針に比べて刺鍼時の痛みが少ないと言えます。<br />
            当院ではひとりひとりの身体の状態に合わせて治療を調整します。<br />
            その他当院で使用する器具類は、毎回使用ごとに医療用滅菌機で滅菌・消毒しています。<br />
            エイズや肝炎などの感染症についての心配はいっさいありません。
          </p>
        </v-flex>
        <v-flex xs12 md12>
          <h3 class="text-xs-center brown--text mt-4">
            鍼灸治療の効果
          </h3>
        </v-flex>
        <v-flex xs12 md8>
          <p>
            『東洋医学・鍼灸はいまや、世界各国へ広がっています。2006年にWHO（世界保健機関）により、経穴部位（ツボの位置）が標準化され、東洋医学は国際化へむけて第一歩をふみだしました。アジアから世界へ。新しい時代をむかえようとしています。WHO（世界保健機関）で鍼灸治療の有効性を認めた症状です！
          </p>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 md9>
          <v-card v-for="(item, i) in items" :key="i" class="mt-2 info">
            <v-flex xs12 md12>
              <h4 class="brown--text text-xs-center">
                {{ item.h4 }}
              </h4>
              <p>
                {{ item.disease }}
              </p>
            </v-flex>
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
          h4: '神経系疾患',
          disease:
            '神経痛・神経麻痺・痙攣・脳卒中後遺症・自律神経失調症・頭痛・めまい・不眠・神経症・ノイローゼ・ヒステリー'
        },
        {
          h4: '運動器系疾患',
          disease:
            '関節痛・リウマチ・頸肩腕症候群・頸椎捻挫後遺症・五十肩・腱鞘炎・腰痛・外傷の後遺症（骨折・打撲・むちうち・捻挫）'
        },
        {
          h4: '循環器系疾患',
          disease: '心臓神経症・高血圧・低血圧・動脈硬化症・動悸・息切れ'
        },
        {
          h4: '呼吸器系疾患',
          disease: '気管支炎・喘息・風邪および予防'
        },
        {
          h4: '消化器系疾患',
          disease:
            '胃腸炎（胃炎・消化不良・胃下垂・胃酸過多・下痢・便秘）・胆嚢炎・肝機能障害・肝炎・胃十二指腸潰瘍・痔疾'
        },
        {
          h4: '代謝内分泌系疾患',
          disease: 'バセドウ氏病・糖尿病・痛風・脚気・貧血'
        },
        {
          h4: '生殖、泌尿器系疾患',
          disease: '膀胱炎・尿道炎・性機能障害・尿閉・腎炎・前立腺肥大・陰萎'
        },
        {
          h4: '婦人科系疾患',
          disease:
            '更年期障害・乳腺炎・白帯下・生理痛・月経不順・冷え性・血の道・不妊'
        },
        {
          h4: '耳鼻咽頭科系疾患',
          disease:
            '中耳炎・耳鳴り・難聴・メニエル病・鼻出血・ちくのう・咽喉頭炎・へんとう炎'
        },
        {
          h4: '眼科系疾患',
          disease: '眼精疲労・仮性近視・結膜炎・疲れ目・かすみ目・ものもらい'
        },
        {
          h4: '小児科疾患',
          disease:
            '小児神経症（夜泣き・かんむし・夜驚・消化不良・偏食・食欲不振・不眠）・小児喘息・アレルギー性湿疹・耳下腺炎・夜尿症・虚弱体質の改善'
        }
      ]
    }
  }
}
</script>
