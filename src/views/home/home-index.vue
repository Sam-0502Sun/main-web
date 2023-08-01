<template>
  <div>
    <WebCarousel />
  </div>
  <div>
    <el-row>
      <el-col :span="3"></el-col>
      <el-col :span="12">
        <HomeTabs />
      </el-col>
      <el-col :span="6"></el-col>
      <el-col :span="3"></el-col>
    </el-row>
  </div>
</template>

<script>
import WebCarousel from '@/components/CommonConstants/web-carousel/web-carousel'
import HomeTabs from './components/home-tabs/home-tabs'

export default {
  name: 'HomeIndex',
  components: {
    WebCarousel,
    HomeTabs
  }
}
</script>

<style lang="less" scoped>

</style>
