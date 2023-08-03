<template>
  <div>
    <WebCarousel/>
  </div>
  <div>
    <el-row>
      <el-col :span="3"></el-col>
      <el-col :span="11">
        <HomeTabs/>
      </el-col>
      <el-col :span="2"></el-col>
      <el-col :span="5">
        <HomeNotification/>
      </el-col>
      <el-col :span="3"></el-col>
    </el-row>
  </div>
  <div>
    <HomeBigTabs />
  </div>
</template>

<script>
import WebCarousel from '@/components/CommonConstants/web-carousel/web-carousel'
import HomeTabs from './components/home-tabs/home-tabs'
import HomeNotification from './components/home-notification/home-notification'
import HomeBigTabs from './components/home-big-tabs/home-big-tabs'

export default {
  name: 'HomeIndex',
  components: {
    WebCarousel,
    HomeTabs,
    HomeNotification,
    HomeBigTabs
  }
}
</script>

<style lang="less" scoped>

</style>
