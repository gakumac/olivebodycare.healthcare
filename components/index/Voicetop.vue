<template>
  <div class="yellow lighten-5">
    <v-layout>
      <v-flex>
        <div class="mt-4 text-xs-center">
          <v-icon x-large class="accent--text">face</v-icon>
        </div>
        <h2 class="mt-2 accent--text text-xs-center">
          患者様から喜びの声が届きました！
        </h2>
      </v-flex>
    </v-layout>
    <v-container grid-list-md>
      <v-card color="yellow lighten-4" class="px-2">
        <v-layout row wrap justify-center>
          <v-flex xs12 md12>
            <h3 class="my-2 brown--text text-xs-center">
              川崎市在住&nbsp;&nbsp;山口&nbsp;絵美子さん
            </h3>
          </v-flex>
          <v-flex xs12 md6>
            <img src="@/assets/images/voice/q_e.y.jpg" width="100%" />
            <div class="caption brown--text">
              ※個人の感想であり、効果を保証するわけではありません。
            </div>
          </v-flex>
          <v-flex xs12 md6>
            <v-img :src="require('@/assets/images/voice/p_e.y.jpg')"></v-img>
          </v-flex>
          <v-flex xs12 md8>
            <div class="subheading font-weight-bold brown--text">
              <p>
                『いつもゆったりと施術していただけるので、痛みが解消するだけでなく、精神的にもリラックスできます』
              </p>
              <p>
                『子供をつれての来院ですが、ビデオやおもちゃもあるので、子供たちも家のようにくつろいでいます（笑）。』
              </p>
              <p>
                『先日、初めてはりをやっていただきましたが、痛みもなく体がとても楽になりました。』
              </p>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
      <v-card color="yellow lighten-4" class="px-2 mt-4">
        <v-layout row wrap justify-center>
          <v-flex xs12 md12>
            <h3 class="my-2 brown--text text-xs-center">
              東京都三鷹市在住&nbsp;&nbsp;溝井&nbsp;香織さん
            </h3>
          </v-flex>
          <v-flex xs12 md6>
            <v-img :src="require('@/assets/images/voice/q_k.m.jpg')"></v-img>
            <div class="caption brown--text">
              ※個人の感想であり、効果を保証するわけではありません。
            </div>
          </v-flex>
          <v-flex xs12 md6>
            <v-img :src="require('@/assets/images/voice/p_k.m.jpg')"></v-img>
          </v-flex>
          <v-flex xs12 md8>
            <div class="subheading font-weight-bold brown--text">
              <p>
                『女性しかいない空間で安心できますし、こ連れで行けるのも嬉しいです。』
              </p>
              <p>
                『また鍼治療は痛いイメージを抱きがちですが、全く痛くありません。』
              </p>
              <p>
                『治療はリラックスして受けれますし、先生たちは気さくな方ばかりでお話するのも楽しいです。』
              </p>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
      <v-card color="yellow lighten-4" class="px-2 mt-4">
        <v-layout row wrap justify-center>
          <v-flex xs12 md12>
            <h3 class="my-2 brown--text text-xs-center">
              横浜市青葉区&nbsp;&nbsp;K・Sさん
            </h3>
          </v-flex>
          <v-flex xs12 md6>
            <v-img :src="require('@/assets/images/voice/q_k.s.jpg')"></v-img>
            <div class="caption brown--text">
              ※個人の感想であり、効果を保証するわけではありません。
            </div>
          </v-flex>
          <v-flex xs12 md6>
            <div class="subheading font-weight-bold brown--text">
              <p>
                『だいぶ楽になりました。速こう性？があって施術してもらった後はすぐにスッキリして、しばらく楽です。』
              </p>
              <p>
                『『ムリせずためこまず、しんどくなったら先生におまかせしたら一発で治りますので是非！！！』
              </p>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
      <v-card color="yellow lighten-4" class="px-2 mt-4">
        <v-layout row wrap justify-center>
          <v-flex xs12 md12>
            <h3 class="my-2 brown--text text-xs-center">
              東京都中野区在住&nbsp;&nbsp;M・Tさん
            </h3>
          </v-flex>
          <v-flex xs12 md6>
            <v-img :src="require('@/assets/images/voice/q_m.t.jpg')"></v-img>
            <div class="caption brown--text">
              ※個人の感想であり、効果を保証するわけではありません。
            </div>
          </v-flex>
          <v-flex xs12 md6>
            <div class="subheading font-weight-bold brown--text">
              <p>
                『整体も鍼も、先生にお任せして大丈夫、安心して受けられます。』
              </p>
              <p>
                『診ていただいた直後はもちろんですが、だんだん体調がキープできるようになるのを実感できます。』
              </p>
              <p>
                『引っこしして遠くなってしまいましたが、こんなぴったりのクリニックをみつけられず、ずっとお世話になっています。』
              </p>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
      <v-card color="yellow lighten-4" class="px-2 mt-4">
        <v-layout row wrap justify-center>
          <v-flex xs12 md12>
            <h3 class="my-2 brown--text text-xs-center">
              東京都港区在住&nbsp;&nbsp;S・Oさん
            </h3>
          </v-flex>
          <v-flex xs12 md6>
            <v-img :src="require('@/assets/images/voice/q_s.o.jpg')"></v-img>
            <div class="caption brown--text">
              ※個人の感想であり、効果を保証するわけではありません。
            </div>
          </v-flex>
          <v-flex xs12 md6>
            <v-img :src="require('@/assets/images/voice/p_s.o.jpg')"></v-img>
          </v-flex>
          <v-flex xs12 md8>
            <div class="subheading font-weight-bold brown--text">
              <p>
                『腰の痛みは１週間程ですっかり良くなり、本当に嬉しいです。』
              </p>
              <p>
                『生理痛は、バファリンが手放せませんでしたが、今ではバファリンを飲まずに過ごせています！！』
              </p>
              <p>
                『ゆがみを整えると、こんなにも体の不調が良くなるなんてびっくりです。一度体験してみて下さい』
              </p>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>
