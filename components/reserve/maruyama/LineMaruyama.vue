<template>
  <div>
    <v-container>
      <v-layout justify-center>
        <v-flex xs12 sm9 md9 lg7 xl5>
          <v-card class="pa-2">
            <h2 class="text-center accent--text">
              LINEのお手続きはこちらから！
            </h2>
          </v-card>
          <h3 class="mt-3 text-center">
            <v-icon class="accent--text">check</v-icon>
            このボタンをタップまたはクリックすると、お客様のアカウントを友だち追加できます。
          </h3>
          <hr color="#ffcccc" />
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex text-center mt-4>
          <a href="https://lin.ee/nSIJpTm"
            ><img
              src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
              alt="友だち追加"
              height="36"
              border="0"
          /></a>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm9 md9 lg7 xl5>
          <h3 class="mt-8 text-center">
            <v-icon class="accent--text">check</v-icon>
            またはこちらのQRコードをスキャンすると、お客様のアカウントを友だち追加できます。
          </h3>
          <hr color="#ffcccc" />
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm8 md8 lg6 xl4>
          <div class="text-center">
            <img src="https://qr-official.line.me/sid/M/213mqjjn.png" />
          </div>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 sm8 md8 lg6 xl4>
          <div class="text-center mb-8">
            <p>
              友達追加後はLINEで直接メッセージをお願い致します。手順等の詳細は応答メッセージに記載してあります。
            </p>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
