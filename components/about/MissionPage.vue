<template>
  <div>
    <v-layout>
      <v-flex>
        <h2 class="mt-4 accent--text text-center">
          私達の理念-ミッション-について
        </h2>
      </v-flex>
    </v-layout>
    <v-container grid-list-md>
      <v-layout justify-center>
        <v-flex xs12 sm8 md8 lg6 xl5>
          <v-img :src="require('@/assets/images/home/postscript1.jpg')"></v-img>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex class="mt-4 text-center" xs12 sm9 md9 lg7 xl5>
          <h3>私たちのお客様</h3>
          <div
            v-for="(customer, i) in customers"
            :key="i"
            class="my-4 font-weight-bold"
          >
            <v-icon class="red--text font-weight-bold">check</v-icon>
            <span>{{ customer.content }}</span>
          </div>
          <v-alert color="indigo" dark class="my-4 font-weight-bold">
            日本の社会にとってこういった世代の女性たちは一番大切にすべき存在であり、元気になってもらう事は本当に価値のある事だと信じ、私達は日々仕事に取り組んでいます。
          </v-alert>
        </v-flex>
      </v-layout>
    </v-container>
    <div class="info">
      <v-container grid-list-md>
        <v-layout justify-center>
          <v-flex class="mt-4 text-center" xs12 sm9 md9 lg7 xl5>
            <p class="my-4 red--text font-weight-bold display-2">
              女性を元気に！
            </p>
          </v-flex>
        </v-layout>
        <v-layout justify-center>
          <v-flex class="text-center" xs12 sm9 md9 lg7 xl5>
            <v-card color="yellow lighten-5" class="pa-4 mb-4">
              <h3>
                『女性を元気に！家庭を元気に！日本そして世界を元気に！』
              </h3>
              <p class="mt-4">
                この理念のもと<br />
                今働いているスタッフも、どうしたら来て頂いた時より元気になって帰って頂けるか、そして一人一人に寄りそい、健やかな生活を送れるように関わっていけるか、日々力を尽くし営業に取り組んでいます。
              </p>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center>
          <v-flex xs6 sm5 md6 lg5 xl4>
            <v-img :src="require('@/assets/images/voice/p_k.m.jpg')"></v-img>
          </v-flex>
          <v-flex xs6 sm5 md6 lg5 xl4>
            <v-img
              :src="require('@/assets/images/voice/aobadai/pa_nosaki.jpg')"
            ></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div>
      <v-container grid-list-md>
        <v-layout justify-center>
          <v-flex class="my-4 text-center">
            <h3 class="mb-4">現代の女性を取り巻く環境</h3>
            <p>
              総務省の統計では、15～64歳の労働力人口は2019年平均で5980万人と前年に比べ25万人の増加となった。<br />
              男女別にみると<br />
              <strong>男性</strong>は3286万人と<strong>8万人の減少</strong
              ><br />
              <strong>女性</strong>は2693万人と<strong>33万人の増加</strong
              ><br />
              となっています。
            </p>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center>
          <v-flex xs12 sm6 md6 lg5 xl4>
            <v-card>
              <v-img
                :src="require('@/assets/images/about/mission2.png')"
              ></v-img>
              <v-card-text>
                ※令和2年1月31日総務省統計局発表の資料
              </v-card-text>
              <p class="px-2">
                急激な女性の社会進出が行われている中、家事関連時間の男女割合は20年前とほとんど変わっていない状況。
              </p>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md6 lg5 xl4>
            <v-card>
              <v-img
                :src="require('@/assets/images/about/mission1.png')"
              ></v-img>
              <v-card-text>
                ※令和2年1月31日総務省統計局発表の資料
              </v-card-text>
              <p class="px-2">
                配偶者有り女性の家事関連時間は男性の4.5倍以上。
              </p>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div>
      <v-container grid-list-md>
        <v-layout justify-center>
          <v-flex class="mt-4 text-center" xs12 sm9 md9 lg7 xl5>
            <h3 class="my-4">
              日本社会の女性を取り巻く問題をたくさん抱えているこんな時代だからこそ
            </h3>
            <div v-for="(item, i) in items" :key="i" class="my-4">
              <v-icon class="red--text font-weight-bold">create</v-icon>
              <span>{{ item.comment }}</span>
            </div>
            <p class="my-6 red--text font-weight-bold display-2">
              女性を元気に！
            </p>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div class="info">
      <v-container grid-list-md>
        <v-layout justify-center>
          <v-flex class="mt-4 text-center" xs12 sm9 md9 lg7 xl5>
            <h3 class="mb-2">私たちのミッション</h3>
            <p class="my-4 indigo--text font-weight-bold">
              私たちが日本を代表する<br />
              女性専門の治療院だという高い意識を持ち
            </p>
            <v-card class="headline pa-4 mb-4 red--text">
              <p>働く女性も含めすべての関わる女性を元気に！</p>
              <p>明るい家庭の実現に貢献し</p>
              <p>心身ともに豊かな社会の実現に貢献する。</p>
            </v-card>
            <p class="mt-4 indigo--text font-weight-bold">
              私たちはこの理念のもと力を尽くし<br />
              皆さまと一緒により良い社会を実現していきます！
            </p>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center>
          <v-flex xs6 sm5 md6 lg5 xl4>
            <v-img :src="require('@/assets/images/voice/p_y.f.jpg')"></v-img>
          </v-flex>
          <v-flex xs6 sm5 md6 lg5 xl4>
            <v-img
              :src="require('@/assets/images/voice/aobadai/pa_hatakeyama.jpg')"
            ></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <v-container grid-list-md>
      <v-layout justify-center>
        <v-flex class="mt-4 text-center" xs12 sm9 md9 lg7 xl5>
          <h3 class="mb-4">私たちは地域の子供食堂を支援しています。</h3>
          <p>
            私たちはアトリエ＆カフェキズナを応援しています。
          </p>
          <h4>アトリエ＆カフェキズナ</h4>
          <p>
            閑静な佇まいの、誰もが笑顔になれるような憩いの施設です。「子どもからシニア、障がい者、あらゆる人々が集い交流するあたりまえの風景を」というコンセプトでスタート。<br />
            人と人、だけでなく、動物たちとのふれあいからも、ぬくもりのある人生を感じていただけたら、とアニマルカフェを併設。
          </p>
          <p>
            子ども食堂、親子食堂、見守り食堂の機能も果たす「だれでもカフェ」と、3つのアニマルカフェを併設した施設。
          </p>
          <p>
            とても素敵な空間で本当におすすめです。是非一度行ってみてください！
          </p>
          <a href="http://kizunacafe.jp/">
            ホームページ：アトリエ＆カフェ キズナ
          </a>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm5 md6 lg5 xl4>
          <v-img
            :src="require('@/assets/images/about/mission_kizuna1.png')"
          ></v-img>
        </v-flex>
        <v-flex xs12 sm5 md6 lg5 xl4>
          <v-img
            :src="require('@/assets/images/about/mission_kizuna2.png')"
          ></v-img>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      customers: [
        {
          content: 'これから新しい命を生む女性たち'
        },
        {
          content: '新しい命を育んでいる女性たち'
        },
        {
          content: '社会的にも働いて納税し、社会を支えている女性たち'
        },
        {
          content: '社会の縮図である家庭を守り、支えている女性たち'
        },
        {
          content: '介護や仕事、子育てや家事を同時にこなす女性たち'
        }
      ],
      items: [
        {
          comment: '女性の社会進出と共に出生率も低下'
        },
        {
          comment:
            '２０１８年に国内で生まれた日本人の子どもの数（出生数）は１８９９年以降で最も少ない９１万８３９７人。死亡数は１３６万２４８２人、自然減は４４万４０８５人。'
        },
        {
          comment:
            '厚労省の担当者は「少子化の理由には、子育てと仕事の両立の難しさや経済的事情などが考えられる。」'
        },
        {
          comment:
            'いくら家事や育児を頑張ってもお給料はゼロ、当たり前と言われる。'
        }
      ]
    }
  }
}
</script>
