<template>
  <div class="info mb-4">
    <v-layout>
      <v-flex>
        <div class="mt-4 text-center">
          <v-icon x-large class="primary--text">import_contacts</v-icon>
        </div>
        <h2 class="mt-2 primary--text text-center">
          施術メニュー・料金
        </h2>
      </v-flex>
    </v-layout>
    <v-container grid-list-lg>
      <v-layout justify-center>
        <v-flex xl8>
          <v-layout>
            <v-flex xs6 md6>
              <div class="subheading font-weight-bold text-center">
                施術内容
              </div>
            </v-flex>
            <v-flex xs6 md6>
              <div class="subheading font-weight-bold text-center">
                料金(税抜)
              </div>
            </v-flex>
          </v-layout>
          <hr />
          <div v-for="(item, i) in items" :key="i" class="mt-2">
            <v-layout>
              <v-flex xs6 md6>
                <div class="subheading text-center">{{ item.menu }}</div>
              </v-flex>
              <v-flex xs6 md6>
                <div class="text-center">
                  <span class="headline accent--text font-weight-bold">{{
                    item.price
                  }}</span>
                  <span>/{{ item.time }}</span>
                </div>
              </v-flex>
            </v-layout>
            <hr />
          </div>
          <v-layout justify-center text-center>
            <v-flex xs12 sm9 md9 lg7 xl5>
              <p class="mt-6">※当院共通の施術回数券がご利用頂けます。</p>
              <p>※オンラインでのお支払いはクレジットカードのみとなります。</p>
            </v-flex>
          </v-layout>
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
          menu: '初診・問診',
          price: '０円',
          time: '60分'
        },
        {
          menu: 'オンラインパーソナルトレーニング',
          price: '６０００円',
          time: '60分'
        }
      ]
    }
  }
}
</script>
