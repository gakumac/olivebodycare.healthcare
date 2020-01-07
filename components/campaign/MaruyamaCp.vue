<template>
  <div>
    <div class="info">
      <v-layout justify-center>
        <v-flex xs12 sm11 md9 lg8 xl7>
          <v-img
            :src="require('@/assets/images/campaign/maruyama-cp6.jpg')"
          ></v-img>
          <p class="caption">
            ※ご新規さま限定で通常施術の1時間分が無料になります。通常通りご予約お願いします。定員が過ぎてしまった場合は別途店舗より日時ご相談のご連絡を差し上げます。
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div class="info mt-3">
      <v-layout justify-center>
        <v-flex xs12 sm11 md9 lg8 xl7>
          <v-img
            :src="require('@/assets/images/campaign/maruyama-cp1.2.jpg')"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>
  </div>
  <!-- <div class="info">
    <v-layout justify-center>
      <v-flex xs12 sm11 md9 lg8 xl7>
        <v-carousel
          cycle
          interval="4000"
          hide-delimiters
          height="auto"
          width="auto"
        >
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require('@/assets/images/campaign/maruyama-cp3.jpg')
        },
        {
          src: require('@/assets/images/campaign/maruyama-cp5.jpg')
        }
      ]
    }
  }
}
</script>
