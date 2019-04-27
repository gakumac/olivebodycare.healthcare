<template>
  <div>
    <headerslider />
    <Noticeslide />
    <Reason />
  </div>
</template>

<script>
import Headerslider from '~/components/Headerslider.vue'
import Noticeslide from '~/components/Noticeslide.vue'
import Reason from '~/components/index/Reason.vue'
export default {
  layout: 'toppage',
  components: {
    Headerslider,
    Noticeslide,
    Reason
  }
}
</script>
