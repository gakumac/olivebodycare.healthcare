<template>
  <div>
    <div class="yellow lighten-5">
      <v-container>
        <v-layout justify-center>
          <v-flex xs12 sm9 md9 lg7 xl5>
            <v-card class="pa-2">
              <h2 class="text-center accent--text">
                オンラインパーソナルトレーニングで選ばれる理由
              </h2>
            </v-card>
            <h3 class="mt-3 text-center">
              <span class="accent--text display-1 font-weight-bold">1</span>
              国家資格取得の女性治療家による女性専門のパーソナルトレーニングを受ける事ができます。
            </h3>
            <hr color="#ffcccc" />
            <p class="mt-4">
              当院では<strong>全員国家資格取得者</strong>の女性スタッフが女性の為のパーソナルトレーニングを行います。
            </p>
            <p>
              <strong>１９年以上の治療経験</strong>があります。おまかせ下さい！
            </p>
            <p>
              おかげさまで、開業して１２年目を向かえ、開業以来治療実績<strong>３７,０００人以上</strong>。<strong>３,０００人</strong>を超える患者様にご来院頂いております。
            </p>
          </v-flex>
        </v-layout>
        <v-layout justify-center>
          <v-flex xs12 sm8 md8 lg6 xl4>
            <v-img :src="require('@/assets/images/home/reason1.jpg')"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div>
      <v-container grid-list-md>
        <v-layout justify-center>
          <v-flex xs12 sm9 md9 lg7 xl5>
            <h3 class="mt-3 text-center">
              <span class="accent--text display-1 font-weight-bold">2</span>
              オンラインなので外出せずご自宅で運動・トレーニングを行う事ができます。
            </h3>
            <hr color="#ffcccc" />
            <p class="mt-4">
              当院ではオンラインでのパーソナルトレーニングを行います。
            </p>
            <p>
              トレーニング・運動で外出する必要はありません。
            </p>
            <p>
              細かな対応で<strong>女性特有の悩み</strong>も考慮しながらトレーニングを行っていきます。
            </p>
          </v-flex>
        </v-layout>
        <v-layout justify-center>
          <v-flex xs12 sm8 md8 lg6 xl4>
            <v-img
              :src="require('@/assets/images/menu/p-training/pt_mizutasa.jpg')"
            ></v-img>
          </v-flex>
        </v-layout>
        <v-layout justify-center>
          <v-flex xs12 sm9 md9 lg7 xl5 class="text-right">
            <nuxt-link to="/menu/personal-training/beginner">
              <v-btn small color="primary" dark>開始までの流れはこちら</v-btn>
            </nuxt-link>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div class="yellow lighten-5">
      <v-container>
        <v-layout justify-center>
          <v-flex xs12 sm9 md9 lg7 xl5>
            <h3 class="mt-3 text-center">
              <span class="accent--text display-1 font-weight-bold">3</span>
              ご家族も一緒にトレーニングを行う事ができます。
            </h3>
            <hr color="#ffcccc" />
            <p class="mt-4">
              お子様や旦那様もご一緒にトレーニングを受ける事ができます。
            </p>
            <p>
              ご家族みんなでお身体の相談やトレーニングを行ってみんなで一緒に元気になれます！
            </p>
            <p>
              ※ご一緒に受ける事が出来るのはご家族の方限定とさせて頂きます。お二人以上だとトレーナーの目が行き届かない為、上限お二人様が理想です。
            </p>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div>
      <v-container grid-list-md>
        <v-layout justify-center>
          <v-flex xs12 sm9 md9 lg7 xl5>
            <h3 class="mt-3 text-center">
              <span class="accent--text display-1 font-weight-bold">4</span>
              お身体の相談を交えながら、無理のない正しいフォームでトレーニングを行う事ができます。
            </h3>
            <hr color="#ffcccc" />
            <p class="mt-4">
              お身体の不調を感じても、外出してじっくりと診てもらう事が難しいのが今の社会の現状です。
            </p>
            <p>
              オンラインパーソナルトレーニングを通してじっくりと相談して頂き、無理のない体調管理・トレーニングを行って行きます。
            </p>
          </v-flex>
        </v-layout>
        <v-layout justify-center>
          <v-flex xs6 sm5 md5 lg4 xl3>
            <v-img
              :src="require('@/assets/images/menu/p-training/pt_akagawa.jpg')"
            ></v-img>
          </v-flex>
          <v-flex xs6 sm5 md5 lg4 xl3>
            <v-img
              :src="require('@/assets/images/menu/p-training/pt_akagawa2.jpg')"
            ></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div class="yellow lighten-5">
      <v-container grid-list-md>
        <v-layout justify-center>
          <v-flex xs12 sm9 md9 lg7 xl5>
            <h3 class="mt-3 text-center">
              <span class="accent--text display-1 font-weight-bold">5</span>
              年間1700人以上の女性の身体を専門に見ているスタッフが一緒にトレーニングを行います。
            </h3>
            <hr color="#ffcccc" />
            <p class="mt-4">
              女性専門の治療院が行うオンラインパーソナルトレーニングです。
            </p>
            <p>
              多くの女性が抱える悩みや相談を治療家として経験してきたスタッフが、１時間の間お客様の為だけに寄り添いトレーニングを行います。
            </p>
          </v-flex>
        </v-layout>
        <v-layout justify-center>
          <v-flex xs6 sm4 md4 lg3 xl2>
            <v-img :src="require('@/assets/images/home/home2.jpg')"></v-img>
          </v-flex>
          <v-flex xs6 sm4 md4 lg3 xl2>
            <v-img :src="require('@/assets/images/home/home3.jpg')"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div>
      <v-container grid-list-md>
        <v-layout justify-center>
          <v-flex xs12 sm9 md9 lg7 xl5>
            <h3 class="mt-3 text-center">
              <span class="accent--text display-1 font-weight-bold">6</span>
              基礎代謝・免疫力を上げるトレーニングを行います。
            </h3>
            <hr color="#ffcccc" />
            <p class="mt-4">
              健康の３大要素は、栄養、運動、休養です。
            </p>
            <p>
              運動不足により摂取カロリーがオーバーする事で生活習慣病をはじめその予備軍も増えて行きます。
            </p>
            <p>
              当院では、基礎代謝UP、心肺機能向上、持久力向上、体力向上、筋肉の正しい使い方を体に覚えさせる、などしっかりとた『運動』を行って行きます。
            </p>
          </v-flex>
        </v-layout>
        <v-layout justify-center>
          <v-flex xs6 sm5 md5 lg4 xl3>
            <v-img
              :src="require('@/assets/images/menu/p-training/pt_tasaka.jpg')"
            ></v-img>
          </v-flex>
          <v-flex xs6 sm5 md5 lg4 xl3>
            <v-img
              :src="require('@/assets/images/menu/p-training/pt_mizutani.jpg')"
            ></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div class="yellow lighten-5">
      <v-container grid-list-md>
        <v-layout justify-center>
          <v-flex xs12 sm9 md9 lg7 xl5>
            <h3 class="mt-3 text-center">
              <span class="accent--text display-1 font-weight-bold">7</span>
              待ち時間なしでトレーニングを受ける事ができます。
            </h3>
            <hr color="#ffcccc" />
            <p class="mt-4">
              お仕事、家事、育児、などなど日頃ご多忙の女性の患者様。
            </p>
            <p>
              完全予約制なのでお待ちいただく事なく<strong>ご自宅でお好きな時間に</strong>パーソナルトレーニングを受ける事が出来ます。
            </p>
            <p>
              ご予約は24時間Web予約、メール予約、お電話で受付しております。お気軽にお問い合わせ下さい。
            </p>
          </v-flex>
        </v-layout>
        <v-layout justify-center>
          <v-flex xs6 sm4 md4 lg3 xl2>
            <v-img
              :src="require('@/assets/images/menu/p-training/pt_akagawa3.jpg')"
            ></v-img>
          </v-flex>
          <v-flex xs6 sm4 md4 lg3 xl2>
            <v-img
              :src="require('@/assets/images/menu/p-training/pt_akamaki.jpg')"
            ></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div>
      <v-container>
        <v-layout justify-center>
          <v-flex xs12 sm9 md9 lg7 xl5>
            <h3 class="mt-3 text-center">
              <span class="accent--text display-1 font-weight-bold">8</span>
              24時間WEB上で可能な日時を確認しそのまま予約をお取りする事が出来ます。
            </h3>
            <hr color="#ffcccc" />
            <p class="mt-4">
              当院では24時間WEB予約に対応しております。
            </p>
            <p>
              残数カレンダーからご都合の良いお日にち・お時間のご予約が可能かどうか確認でき、予約をその場でお取りする事が出来ます。
            </p>
            <p>
              その他メール予約、お電話でも受付しております。お気軽にお問い合わせ下さいませ。
            </p>
            <p>
              当日から1~2ヶ月先まで対応しております。 今すぐご利用下さい！
            </p>
          </v-flex>
        </v-layout>
        <v-layout justify-center>
          <v-flex xs12 sm8 md6 lg5 xl4>
            <v-btn
              block
              large
              dark
              color="green darken-3"
              a
              href="https://olivebodycare.healthcare/reserve/"
            >
              <v-icon>date_range</v-icon>
              <span class="font-weight-bold"
                >２４時間WEB予約は今すぐこちら！</span
              >
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>
