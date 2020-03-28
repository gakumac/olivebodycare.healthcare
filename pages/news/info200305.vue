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
              営業時間短縮・変更のお知らせ
            </h3>
            <p>
              厚生労働省から発表された【新型コロナウイルス感染症対策の基本方針】を踏まえ、患者さま及び従業員の健康と安全確保のため下記のように営業時間を短縮いたします。<br />
              患者さまにはご不便をお掛けいたしますが、何卒ご理解賜りますようお願い申し上げます。
            </p>
            <v-alert border="bottom" colored-border color="amber" elevation="2">
              <div class="text-center">たまプラーザ店・横浜青葉台店</div>
              営業時間&nbsp;9:00〜18:00（臨時休業等はございません、開院しております。）<br />
              2019年5月1日（金）より実施&nbsp;※4月以降順次営業時間が短縮・変更になる場合がございますので、ご了承ください。
            </v-alert>
          </v-flex>
        </v-layout>
        <v-layout justify-center>
          <v-flex xs12 sm9 md9 lg7 xl5>
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
                次亜塩素酸水による空間除菌・院内除菌
              </span>
            </h3>
            <p>
              赤ちゃん・お子様にも安心な次亜塩素酸水にて院内・空間除菌を実施しております。
            </p>
            <p>
              サロンスタッフは当然のこと、患者様にも手洗い・消毒にご協力いただき、感染防止に努めております。
            </p>
            <p>
              ※次亜塩素酸水は水と塩（食塩水）を電気分解した、安心安全なものでインフルエンザやノロウイルス等の対策に使われています。
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
              出勤時、外出後は都度丁寧に手洗い・うがいの実施。
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
            <h4 class="text-center mt-10 mb-2">
              患者様へのお願い
            </h4>
            <v-alert
              border="bottom"
              colored-border
              type="warning"
              elevation="2"
            >
              発熱等の症状がある場合は、施術をお控えいただけますようお願い申し上げます。
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
