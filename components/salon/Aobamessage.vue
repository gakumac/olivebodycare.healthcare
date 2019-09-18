<template>
  <div class="info">
    <v-container grid-list-md>
      <v-layout>
        <v-flex>
          <div class="my-2 text-center">
            <v-icon x-large class="brown--text">face</v-icon>
          </div>
          <h2 class="my-2 brown--text text-center">
            店舗・スタッフより
          </h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 md10>
          <h3 class="my-3 accent--text text-center">
            {{ name }}
          </h3>
          <p class="title brown--text text-center">
            所有国家資格&nbsp;{{ qualification }}
          </p>
        </v-flex>
        <v-flex xs6 md4>
          <v-img :src="img1"></v-img>
        </v-flex>
        <v-flex xs6 md4>
          <v-img :src="img2"></v-img>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 md10>
          <v-card class="mt-2" color="yellow lighten-5">
            <v-card-title primary-title>
              <div>
                <div class="brown--text headline">{{ title }}</div>
                <div class="brown--text">{{ message }}</div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '青葉台店院長 田坂 百香合（たさか ゆかり）',
      qualification: '鍼灸師',
      title: '私たちにお任せください！',
      message:
        'こんにちは。この度は、女性専門の治療院オリーヴボディケアのホームページをご覧頂き、誠にありがとうございます。青葉台院院長の田坂百香合です。『女性を元気に！家庭を元気に！日本、そして世界を元気に！！』という思いを胸に、みなさまと全力で向き合っていきます！今現在の日本社会では女性への負担が大きくのしかかっていると考えております。家事、育児、仕事...。いずれか１つをこなすだけでもかなり大変です。ですが全てをこなしている方も近日では増えているのではと思います。家庭を支えているママ。日本社会を支えている女性。みなさまに少しでも元気になっていただけるよう精一杯治療をいたします！！身体の不調、痛み改善、お悩み全て受け入れます！みなさまを笑顔に！そして元気に！！そしてみなさまの笑顔を力にして日々精進してまいります。ぜひ女性専門の治療院オリーヴボディケア青葉台院までお越しください！！',
      img1: require('@/assets/images/salon/salon8.jpg'),
      img2: require('@/assets/images/home/home2.jpg')
    }
  }
}
</script>
