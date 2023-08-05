<template>
  <div class="default-page-container">
    <div
      class="card-container"
      v-for="item in cardList"
      :key="item.name"
      :style="{'background-image': `url(${require('../../../assets/images/' + item.name + '.jpg')})`}"
    >
      <RouterLink class="txt-box" :to="item.url">
        <div class="link-item">
          <span class="txt">{{item.name}}</span>
          <span class="icon-right">></span>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>

import { reactive } from 'vue'

export default {
  name: 'DefaultPageIndex',
  setup () {
    const cardList = reactive([
      {
        name: '学院介绍',
        url: '/xygk/xyjs'
      },
      {
        name: '校史沿革',
        url: '/xygk/xsyg'
      },
      {
        name: '现任领导',
        url: '/xygk/xrld'
      },
      {
        name: '学校标识',
        url: '/xygk/xxbs'
      },
      {
        name: '学院导图',
        url: '/xygk/xydt'
      }
    ])
    return {
      cardList
    }
  }
}
</script>

<style lang="less" scoped>
.default-page-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 10px;
  margin: 40px 0;
  .card-container {
    height: 200px;
    width: 400px;
    position: relative;
    .txt-box {
      .link-item {
        width: 300px;
        height: 50px;
        line-height: 50px;
        margin: 120px auto 0;
        background-color: rgba(14, 12, 12, 0.7);
        position: relative;
        span {
          color: white;
        }
        .txt {
          margin-left: 20px;
        }
        .icon-right {
          position: absolute;
          right: 30px;
        }
      }
    }
  }
}
</style>
