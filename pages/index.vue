<template>
  <div>
    <header1 />
    <reason />
    <media />
    <target />
    <problem />
    <voicetop />
    <after />
    <menutop />
    <symptoms />
    <qatop />
    <postscript />
    <accesstop />
  </div>
</template>

<script>
import Header1 from '~/components/index/Header1.vue'
import Reason from '~/components/index/Reason.vue'
import Media from '~/components/index/Media.vue'
import Target from '~/components/index/Target.vue'
import Problem from '~/components/index/Problem.vue'
import Voicetop from '~/components/index/Voicetop.vue'
import After from '~/components/index/After.vue'
import Menutop from '~/components/index/Menutop.vue'
import Symptoms from '~/components/index/Symptoms.vue'
import Qatop from '~/components/index/Qatop.vue'
import Postscript from '~/components/index/Postscript.vue'
import Accesstop from '~/components/index/Accesstop.vue'
export default {
  head() {
    return {
      titleTemplate: null,
      title: '整体・骨盤矯正の女性専門の治療院オリーヴボディケア'
    }
  },
  layout: 'toppage',
  components: {
    Header1,
    Reason,
    Media,
    Target,
    Problem,
    Voicetop,
    After,
    Menutop,
    Symptoms,
    Qatop,
    Postscript,
    Accesstop
  }
}
</script>
