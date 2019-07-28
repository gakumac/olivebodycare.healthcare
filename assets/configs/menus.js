export default {
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
  ]
}
