<template>
  <div class="info">
    <v-container grid-list-md>
      <v-layout>
        <v-flex>
          <div class="mt-2 text-xs-center">
            <v-icon x-large class="accent--text">mood</v-icon>
          </div>
          <h2 class="my-2 accent--text text-xs-center">
            当院の施術を受けるとどうなる？
          </h2>
        </v-flex>
      </v-layout>
      <div v-for="(item, i) in items" :key="i">
        <v-layout row wrap justify-center>
          <v-flex xs12 sm10 md6 lg5 xl4>
            <v-card class="pa-2">
              <h3>
                <v-icon left>chat_bubble_outline</v-icon>
                <span>{{ item.guest }}</span>
              </h3>
              <hr color="#ffcccc" />
              <p class="mt-3 font-weight-bold">
                {{ item.comment1a }}
              </p>
              <p class="font-weight-bold">
                {{ item.comment1b }}
              </p>
            </v-card>
          </v-flex>
          <v-flex xs12 sm10 md6 lg5 xl4>
            <v-card class="pa-2">
              <h3>
                <v-icon left>chat_bubble_outline</v-icon>
                <span>{{ item.guest2 }}</span>
              </h3>
              <hr color="#ffcccc" />
              <p class="mt-3 font-weight-bold">
                {{ item.comment2a }}
              </p>
              <p class="font-weight-bold">
                {{ item.comment2b }}
              </p>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
      <v-layout row wrap justify-center>
        <v-flex xs6 sm5 md6 lg5 xl4>
          <v-img :src="require('@/assets/images/home/home19.jpg')"></v-img>
        </v-flex>
        <v-flex xs6 sm5 md6 lg5 xl4>
          <v-img
            :src="require('@/assets/images/voice/aobadai/pa_nosaki.jpg')"
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
      items: [
        {
          guest: '横浜市青葉区在住　山崎 さおり様',
          comment1a: '『身体の可動域が広くなった、肩こりなどが軽減した。』',
          comment1b: '',
          guest2: '横浜市青葉区在住　森保 奈津子様',
          comment2a: '『骨盤の歪みがとれた！！顔がはっきりとした。』',
          comment2b: '『スタッフの方とお話することで心もスッキリします。』'
        },
        {
          guest: '町田市在住　K.T様',
          comment1a: '『コリや痛みが楽になり身体が軽くなりました。』',
          comment1b: '『不眠症気味でしたが、その日はよく眠る事ができました。』',
          guest2: '国立市在住　鹿股 利恵様',
          comment2a: '『痛みが和らぎ、生活の支障がなくなった。』'
        },
        {
          guest: '横浜市青葉区在住　畠山 美穂様',
          comment1a:
            '『治療以降、腰の痛みを感じることが少なくなりギックリ腰になっていません。』',
          guest2: '国立市在住　鹿股 萌様',
          comment2a: '『腰の痛みがなく仰臥位で寝れるようになった。』',
          comment2b: '『日常生活で体が軽くなった。』'
        },
        {
          guest: '横浜市青葉区在住　Y.M様',
          comment1a: '『身体が軽くなり楽になりました。』',
          comment1b:
            '『眠りが浅くなった時施術を受けると熟睡できるようになります。』',
          guest2: '川崎市宮前区在住　村田 修子様',
          comment2a:
            '『定期的に通院することで疲れにくい体になり、自分自身でも異変に、より気付けるようになり、ケアする意識が増えました。』'
        }
      ]
    }
  }
}
</script>
