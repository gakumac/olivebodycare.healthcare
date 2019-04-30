<template>
  <div>
    <headerslide />
    <noticeslide />
    <hometitle />
    <reason />
    <media />
    <target />
    <problem />
  </div>
</template>

<script>
import Headerslide from '~/components/index/Headerslide.vue'
import Noticeslide from '~/components/Noticeslide.vue'
import Hometitle from '~/components/index/Hometitle.vue'
import Reason from '~/components/index/Reason.vue'
import Media from '~/components/index/Media.vue'
import Target from '~/components/index/Target.vue'
import Problem from '~/components/index/Problem.vue'
export default {
  layout: 'toppage',
  components: {
    Headerslide,
    Noticeslide,
    Hometitle,
    Reason,
    Media,
    Target,
    Problem
  }
}
</script>
