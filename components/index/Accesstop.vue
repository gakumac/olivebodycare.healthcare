<template>
  <div class="grey lighten-5 mb-4">
    <v-layout>
      <v-flex>
        <div class="mt-4 text-xs-center">
          <v-icon x-large class="brown--text">place</v-icon>
        </div>
        <h2 class="mt-4 brown--text text-xs-center">
          店舗情報
        </h2>
      </v-flex>
    </v-layout>
    <v-container>
      <v-card flat color="info" class="pa-2">
        <v-layout row wrap justify-center>
          <v-flex xs12 md12>
            <h3 class="my-3 accent--text text-xs-center">
              たまプラーザ本店
            </h3>
          </v-flex>
          <v-flex xs12 md6>
            <div class="ml-2">
              <div class="accent--text font-weight-bold">住所</div>
              <divd>
                〒225-0003
              </divd>
              <p>
                横浜市青葉区新石川3-15-16メディカルモールたまプラーザ301
              </p>
            </div>
            <div class="ml-2">
              <div class="accent--text font-weight-bold">アクセス</div>
              <p>
                東急田園都市線たまプラーザ駅より徒歩2分
              </p>
            </div>
            <div class="ml-2">
              <div class="accent--text font-weight-bold">営業時間</div>
              <p>
                10 : 00〜20 : 00、休診：不定休
              </p>
            </div>
            <div class="ml-2">
              <div class="accent--text font-weight-bold">電話：完全予約制</div>
              <div>
                <v-btn
                  a
                  href="tel:0455301688"
                  class="white--text"
                  color="light-green darken-2"
                >
                  <v-icon left>local_phone</v-icon>
                  <span class="font-weight-bold title">045-530-1688</span>
                </v-btn>
              </div>
            </div>
          </v-flex>
          <v-flex xs12 md6>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1495.6946074700454!2d139.55859857898!3d35.57573905724052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f71ab6b44f25%3A0xd8617b3b315c81fc!2z5aWz5oCn5bCC6ZaA44Gu5rK755mC6Zmi44Kq44Oq44O844O044Oc44OH44Kj44Kx44Ki!5e0!3m2!1sja!2sjp!4v1557065211029!5m2!1sja!2sjp"
              width="100%"
              height="300px"
              frameborder="0"
              style="border:0"
              allowfullscreen
            ></iframe>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>
