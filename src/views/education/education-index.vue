<template>
  <div>
    <WebPagesHeader :Title="Title" :SrcImg="SrcImg" />
  </div>
  <div class="body">
    <EducationMainIndex />
  </div>
</template>

<script>
import WebPagesHeader from '@/components/CommonConstants/web-pages-header/web-pages-header'
import EducationMainIndex from './components/education-main-index'
import SrcImg from '@/assets/images/1043-800x800.jpg'
import { ref } from 'vue'

export default {
  name: 'EducationIndex',
  components: {
    WebPagesHeader,
    EducationMainIndex
  },
  setup () {
    const Title = ref('教育教学')

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
