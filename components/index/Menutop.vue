<template>
  <div class="grey lighten-5 mb-4">
    <v-layout>
      <v-flex>
        <div class="mt-4 text-xs-center">
          <v-icon x-large class="primary--text">import_contacts</v-icon>
        </div>
        <h2 class="mt-2 primary--text text-xs-center">
          施術メニュー・料金
        </h2>
      </v-flex>
    </v-layout>
    <v-container grid-list-lg>
      <v-layout row wrap class="brown--text">
        <v-flex xs6 md6>
          <div class="subheading font-weight-bold text-xs-center">施術内容</div>
        </v-flex>
        <v-flex xs6 md6>
          <div class="subheading font-weight-bold text-xs-center">
            料金(税抜)
          </div>
        </v-flex>
      </v-layout>
      <hr />
      <div v-for="(item, i) in items" :key="i" class="mt-2">
        <v-layout row wrap class="brown--text">
          <v-flex xs6 md6>
            <div class="subheading text-xs-center">{{ item.menu }}</div>
          </v-flex>
          <v-flex xs6 md6>
            <div class="text-xs-center">
              <span class="headline accent--text font-weight-bold">{{
                item.price
              }}</span>
              <span>/{{ item.time }}</span>
            </div>
          </v-flex>
        </v-layout>
        <hr />
      </div>
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
          price: '１０００円',
          time: '60分'
        },
        {
          menu: '通常整体',
          price: '６０００円',
          time: '60分'
        },
        {
          menu: '骨盤矯正',
          price: '６０００円',
          time: '60分'
        },
        {
          menu: '産後の骨盤矯正',
          price: '６０００円',
          time: '60分'
        },
        {
          menu: 'マッサージ',
          price: '６０００円',
          time: '60分'
        },
        {
          menu: '鍼灸',
          price: '６０００円',
          time: '60分'
        }
      ]
    }
  }
}
</script>
