<template>
  <div>
    <pagetitle h1="新型コロナウイルスに関する対応について" />
    <div class="info">
      <v-breadcrumbs :items="itemsB" divider=">"></v-breadcrumbs>
    </div>
    <div>
      <v-container grid-list-md>
        <v-layout justify-center>
          <v-flex xs12 sm9 md9 lg7 xl5>
            <h2 class="mt-4 indigo--text text-center">
              新型コロナウイルスに関する対応について
            </h2>
            <p>
              日頃より女性専門の治療院オリーヴボディケアをご利用いただきまして、誠にありがとうございます。
            </p>
            <p>
              当院では、新型コロナウイルス・インフルエンザをはじめとする感染予防および拡散防止のため、当院スタッフ及び施設に、以下内容を実施しております。
            </p>
            <h3 class="mt-8 mb-2 text-center">
              営業時間のご案内
            </h3>
            <p>
              只今の期間営業時間を短縮して営業いたしております。<br />
              患者さまにはご不便をお掛けいたしますが、何卒ご理解賜りますようお願い申し上げます。
            </p>
            <p>
              営業時間&nbsp;9:00〜19:00（臨時休業等はございません、開院しております。）
            </p>
            <h3 class="mt-8 mb-2 text-center">
              施術回数券有効期限の緩和について
            </h3>
            <v-alert
              border="bottom"
              colored-border
              color="amber"
              elevation="2"
              class="text-center"
            >
              <div>【対象】</div>
              <P>2020年5月31日までに施術、オプション回数券を購入した患者様</P>
              <div>【対応】</div>
              <P>有効期限より2ヶ月延長</P>
            </v-alert>
          </v-flex>
        </v-layout>
        <v-layout justify-center>
          <v-flex xs12 sm9 md9 lg7 xl5>
            <p class="mt-4 indigo--text text-center display-1 font-weight-bold">
              安心・安全への取組
            </p>
            <h3 class="text-center mt-4 mb-2">
              <v-icon large class="accent--text">check</v-icon>
              <span>
                患者様は１治療院にお１人様だけでの施術を実施
              </span>
            </h3>
            <p>
              只今の期間、患者様の治療中院内には他の患者様がいないよう予約数の縮小・調整をして営業致しております。
            </p>
            <p>
              当院では完全予約制での営業となっており待合等、混雑する時間帯が発生する事はございません。
            </p>
            <h3 class="text-center mt-4 mb-2">
              <v-icon large class="accent--text">check</v-icon>
              <span>
                こまめな換気・空気入れ替え
              </span>
            </h3>
            <p>
              施術前後にこまめな換気・空気入れ替えを実施しております。
            </p>
            <p>
              当院は１つの部屋にベットは1~2台と、小規模な女性だけのプライベート空間となっております。多数の方が集まる事はありません。
            </p>
            <h3 class="text-center mt-8 mb-2">
              <v-icon large class="accent--text">check</v-icon>
              <span>
                院内除菌の実施
              </span>
            </h3>
            <p>
              院内各所のこまめな除菌清掃を実施しております。
            </p>
            <p>
              当院スタッフは当然のこと、患者様にも手洗い・除菌にご協力いただき、感染防止に努めております。
            </p>
            <h3 class="text-center mt-8 mb-2">
              <v-icon large class="accent--text">check</v-icon>
              <span>
                施術者のマスクの着用
              </span>
            </h3>
            <p>
              体調不良でない場合も、勤務時にはマスクを着用させていただきます。
            </p>
            <h3 class="text-center mt-8 mb-2">
              <v-icon large class="accent--text">check</v-icon>
              <span>
                こまめな手洗い・うがい
              </span>
            </h3>
            <p>
              スタッフは出勤時、外出後は都度丁寧に手洗い、うがい、手指の除菌の徹底。
            </p>
            <h3 class="text-center mt-8 mb-2">
              <v-icon large class="accent--text">check</v-icon>
              <span>
                体調不良の場合の出勤は控える
              </span>
            </h3>
            <p>
              発熱などの症状がある場合はスタッフの出勤は禁止しております。
            </p>
            <h3 class="text-center mt-8 mb-2">
              <v-icon large class="accent--text">check</v-icon>
              <span>
                お顔に触れる部分はディスポ（使い捨て）のフェイスペーパーを使用
              </span>
            </h3>
            <p>
              また治療中お顔まわりに使用するフェイスタオルは毎回洗濯しております。
            </p>
            <h3 class="text-center mt-8 mb-2">
              <v-icon large class="accent--text">check</v-icon>
              <span>
                全ての患者様にお着替えをしていただき施術を実施
              </span>
            </h3>
            <p>
              当院では施術の前に全ての患者様にお着替えをして頂いた後ベットでの施術を実施しております。
            </p>
            <h3 class="text-center mt-10 mb-2">
              患者様へのお願い
            </h3>
            <v-alert border="bottom" colored-border color="amber" elevation="2">
              <p>
                ・発熱（37.5度以上）や咳や痰、息苦しさ（呼吸困難）など胸部に不快感の症状がある場合は、施術をお控えいただけますようお願い申し上げます。
              </p>
              <p>
                ・ご来院時に手指の除菌を実施しております。ご協力をお願い致します。
              </p>
              <p>
                ・新型コロナウイルス感染症の感染者または感染の疑いのある方と接触機会があった（過去14日以内）施術をお控えいただけますようお願い申し上げます。
              </p>
            </v-alert>
            <p class="mt-8">
              今後も患者様に安心してお通いいただけますよう、感染症予防対策や衛生管理、スタッフの健康管理に十分留意してまいりますので引き続き、女性専門の治療院オリーヴボディケアをご愛顧いただきますようお願い申し上げます。
            </p>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import Pagetitle from '~/components/Pagetitle.vue'
import Meta from '~/assets/mixins/meta'
export default {
  components: {
    Pagetitle
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '新型コロナウイルスに関する対応について',
        description:
          '整体・骨盤矯正の女性専門の治療院オリーヴボディケア。国家資格取得の女性スタッフによる本格施術が受けれます。お子様連れ歓迎。マッサージ、不妊、鍼もお任せ下さい！',
        type: 'website',
        url: 'https://olivebodycare.healthcare/news/info200305',
        image: 'https://olivebodycare.healthcare/images/head_1.jpg'
      },
      itemsB: [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: 'News',
          disabled: true,
          href: '/news'
        },
        {
          text: '新型コロナウイルスに関する対応について',
          disabled: true,
          href: '/news/info200305'
        }
      ]
    }
  }
}
</script>
