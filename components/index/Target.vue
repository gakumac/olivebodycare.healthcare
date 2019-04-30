<template>
  <div class="info">
    <v-layout>
      <v-flex>
        <div class="mt-4 text-xs-center">
          <v-icon x-large class="accent--text">beenhere</v-icon>
        </div>
        <h2 class="mt-2 accent--text text-xs-center">
          こんな方は是非おこしください！
        </h2>
      </v-flex>
    </v-layout>
    <v-container grid-list-lg>
      <v-layout row wrap justify-center>
        <v-flex xs12 md8>
          <v-card color="red lighten-4" class="brown--text">
            <v-card-title>
              <div class="title font-weight-bold">
                首の痛み、腰痛、肩こりを治したい。
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 md8>
          <v-card color="red lighten-4" class="brown--text">
            <v-card-title>
              <div class="title font-weight-bold">
                最近むくみやすい、太りやすい。
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 md8>
          <v-card color="red lighten-4" class="brown--text">
            <v-card-title>
              <div class="title font-weight-bold">
                整体に通いたいけど男性の先生だと緊張する。
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 md8>
          <v-card color="red lighten-4" class="brown--text">
            <v-card-title>
              <div class="title font-weight-bold">
                痩せやすい体を手に入れたい。
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 md8>
          <v-card color="red lighten-4" class="brown--text">
            <v-card-title>
              <div class="title font-weight-bold">
                産後の骨盤が気になる。
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 md8>
          <v-card color="red lighten-4" class="brown--text">
            <v-card-title>
              <div class="title font-weight-bold">
                身体が辛くて整体に通いたいが子供が預けられない。
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 md8>
          <v-card color="red lighten-4" class="brown--text">
            <v-card-title>
              <div class="title font-weight-bold">
                女性の先生にデリケートな悩みを相談したい。
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 md8>
          <v-card color="red lighten-4" class="brown--text">
            <v-card-title>
              <div class="title font-weight-bold">
                心身ともリラックスして痛みを解消したい。
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 md8>
          <v-card color="red lighten-4" class="brown--text">
            <v-card-title>
              <div class="title font-weight-bold">
                子供（赤ちゃん）も連れて骨盤矯正に通いたい。
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 md8>
          <v-card color="red lighten-4" class="brown--text">
            <v-card-title>
              <div class="title font-weight-bold">
                駅から近くの整体を探している。
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-md>
      <v-layout justify-center>
        <v-flex xs6 md5>
          <v-img :src="require('@/assets/images/home/home16.jpg')"></v-img>
        </v-flex>
        <v-flex xs6 md5>
          <v-img :src="require('@/assets/images/home/home17.jpg')"></v-img>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
