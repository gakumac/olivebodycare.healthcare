<template>
  <v-navigation-drawer
    v-model="drawer"
    class="yellow lighten-5"
    temporary
    fixed
    app
  >
    <div class="mt-2 ml-2">
      <v-btn
        dark
        color="light-green darken-2"
        class="font-weight-bold"
        a
        href="https://reserve.olivebodycare.healthcare/mypage/"
      >
        マイページ
      </v-btn>
      <v-btn
        dark
        color="light-green darken-2"
        a
        href="https://olivebodycare.healthcare/reserve/"
      >
        24時間Web予約
      </v-btn>
    </div>
    <v-list class="brown--text">
      <v-list-tile
        v-for="(item, houseIndex) in itemsHome"
        :key="houseIndex"
        :to="item.to"
      >
        <v-list-tile-action>
          <v-icon>{{ item.action }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="font-weight-bold" v-text="item.title" />
        </v-list-tile-content>
      </v-list-tile>
      <v-list-group
        v-for="(item, index) in items"
        :key="index"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template slot="activator">
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
        <v-list-tile
          v-for="(subItem, subIndex) in item.items"
          :key="subIndex"
          :to="subItem.to"
        >
          <v-list-tile-content>
            <v-list-tile-title class="font-weight-bold">
              {{ subItem.title }}
            </v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon>{{ subItem.action }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>
      <v-list-tile
        v-for="(item, voiceIndex) in itemsVoice"
        :key="voiceIndex"
        :to="item.to"
      >
        <v-list-tile-action>
          <v-icon>{{ item.action }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="font-weight-bold" v-text="item.title" />
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile
        v-for="(item, salonIndex) in itemsSalon"
        :key="salonIndex"
        :to="item.to"
      >
        <v-list-tile-action>
          <v-icon>{{ item.action }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="font-weight-bold" v-text="item.title" />
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      itemsHome: [
        {
          action: 'home',
          title: 'Home',
          to: '/'
        }
      ],
      items: [
        {
          action: 'import_contacts',
          title: 'メニュー・料金',
          active: true,
          items: [
            {
              title: '施術メニュー・料金',
              to: '/menu',
              action: ''
            },
            {
              title: '整体について',
              to: '/menu/seitai',
              action: ''
            },
            {
              title: '骨盤矯正について',
              to: '/menu/pelvis-correction',
              action: ''
            },
            {
              title: 'マッサージについて',
              to: '/menu/massage',
              action: ''
            },
            {
              title: '鍼灸について',
              to: '/menu/shinkyu',
              action: ''
            },
            {
              title: '不妊治療',
              to: '/menu/fertility-treatment',
              action: ''
            },
            {
              title: '交通事故治療',
              to: '/menu/traffic-accident',
              action: ''
            }
          ]
        },
        {
          action: 'business',
          title: '当院について',
          active: true,
          items: [
            {
              title: '当院について',
              to: '/about',
              action: ''
            },
            {
              title: '総院長からの挨拶',
              to: '/about/greeting',
              action: ''
            },
            {
              title: 'スタッフについて',
              to: '/about/staff',
              action: ''
            },
            {
              title: 'Q&A-良くある質問-',
              to: '/about/qa',
              action: ''
            },
            {
              title: '入店から施術までの流れ',
              to: '/about/beginner',
              action: ''
            },
            {
              title: 'お問合せ・メール予約',
              to: '/about/contact',
              action: ''
            }
          ]
        }
      ],
      itemsVoice: [
        {
          action: 'face',
          title: '患者様の声',
          to: '/voice'
        }
      ],
      itemsSalon: [
        {
          action: 'place',
          title: '治療院一覧',
          to: '/salon'
        }
      ],
      Drawer: false
    }
  }
}
</script>
