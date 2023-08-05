<template>
  <div class="carousel-container">
    <el-carousel>
      <el-carousel-item v-for="item in carouselList" :key="item.name">
        <img class="img" :src="item.src" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'WebCarousel',
  setup () {
    // 轮播图数据
    const carouselList = reactive([
      {
        name: 'first',
        src: require('@/assets/images/autumn-7562289_960_720.jpg')
      },
      {
        name: 'second',
        src: require('@/assets/images/sunrise-7493833_1280.jpg')
      },
      {
        name: 'third',
        src: require('@/assets/images/sunset-7504891_960_720.jpg')
      },
      {
        name: 'forth',
        src: require('@/assets/images/5.jpg')
      }
    ])

    return {
      carouselList
    }
  }
}
</script>

<style lang="less" scoped>
.carousel-container {
  :deep(.el-carousel__container) {
    height: 500px;
    .el-carousel__item {
      .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  // 修改Element Plus轮播图横线指示器，变为圆点
  :deep(.el-carousel__indicator.is-active button) {
    width: 15px;
    height: 15px;
    background: transparent;
    border: 2px solid #fff;
    border-radius: 50%;
    opacity: 0.8;
  }
  :deep(.el-carousel__indicator--horizontal button) {
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    opacity: 1;
  }
}
</style>
