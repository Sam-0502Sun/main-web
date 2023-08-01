<template>
  <div>
    <WebCarousel />
  </div>
  <div>
    <el-row>
      <el-col :span="3"></el-col>
      <el-col :span="12">
        <HomeCarouselIndex />
      </el-col>
      <el-col :span="6"></el-col>
      <el-col :span="3"></el-col>
    </el-row>
  </div>
</template>

<script>
import WebCarousel from '@/components/CommonConstants/web-carousel/web-carousel'
import HomeCarouselIndex from './components/home-carousel/home-carousel-index'

export default {
  name: 'HomeIndex',
  components: {
    WebCarousel,
    HomeCarouselIndex
  }
}
</script>

<style lang="less" scoped>

</style>
