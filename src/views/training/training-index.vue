<template>
  <div>
    <WebPagesHeader :Title="Title" :SrcImg="SrcImg" />
  </div>
  <div class="body">
    <TrainingMainIndex />
  </div>
</template>

<script>
import WebPagesHeader from '@/components/CommonConstants/web-pages-header/web-pages-header'
import TrainingMainIndex from './components/training-main-index'
import SrcImg from '@/assets/images/sunrise-7493833_1280.jpg'
import { ref } from 'vue'

export default {
  name: 'TrainingIndex',
  components: {
    TrainingMainIndex,
    WebPagesHeader
  },
  setup () {
    const Title = ref('培训工作')

    return {
      Title,
      SrcImg
    }
  }
}
</script>

<style lang="less" scoped>
.body {
  max-width: 1240px;
  margin: 0 auto;
}
</style>
