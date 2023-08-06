<template>
  <div>
    <WebPagesHeader :Title="Title" :SrcImg="SrcImg" />
  </div>
  <div class="body" v-if="route.path === '/xygk'">
    <DefaultPageIndex />
  </div>
  <div class="body" v-else>
    <CollegeIndex />
  </div>
</template>

<script>
import WebPagesHeader from '../../components/CommonConstants/web-pages-header/web-pages-header'
import DefaultPageIndex from './default-page/default-page-index'
import CollegeIndex from './collage/college-index'
import SrcImg from '@/assets/images/1018-800x800.jpg'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

export default {
  name: 'CollegeProfile',
  components: {
    WebPagesHeader,
    DefaultPageIndex,
    CollegeIndex
  },
  setup () {
    const route = useRoute()
    const Title = ref('学院概况')

    return {
      SrcImg,
      route,
      Title
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
