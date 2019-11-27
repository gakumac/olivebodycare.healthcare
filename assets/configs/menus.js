export default {
  itemsHome: [
    {
      action: 'home',
      title: 'Home',
      to: '/'
    },
    {
      action: 'face',
      title: '患者様の声',
      to: '/voice'
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
          to: '/menu'
        },
        {
          title: '整体について',
          to: '/menu/seitai'
        },
        {
          title: '骨盤矯正について',
          to: '/menu/pelvis-correction'
        },
        {
          title: 'マッサージについて',
          to: '/menu/massage'
        },
        {
          title: '鍼灸について',
          to: '/menu/shinkyu'
        },
        {
          title: '不妊治療',
          to: '/menu/fertility-treatment'
        },
        {
          title: '交通事故治療',
          to: '/menu/traffic-accident'
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
          to: '/about'
        },
        {
          title: '総院長からの挨拶',
          to: '/about/greeting'
        },
        {
          title: 'スタッフについて',
          to: '/about/staff'
        },
        {
          title: 'Q&A-良くある質問-',
          to: '/about/qa'
        },
        {
          title: '入店から施術までの流れ',
          to: '/about/beginner'
        },
        {
          title: 'お問合せ・メール予約',
          to: '/about/contact'
        }
      ]
    },
    {
      action: 'place',
      title: '治療院の紹介',
      active: true,
      items: [
        {
          title: '治療院一覧',
          to: '/salon'
        },
        {
          title: 'たまプラーザ本店',
          to: '/salon/tamaplaza'
        },
        {
          title: '横浜青葉台店',
          to: '/salon/aobadai'
        },
        {
          title: '札幌円山店',
          to: '/salon/maruyama'
        }
      ]
    }
  ]
}
