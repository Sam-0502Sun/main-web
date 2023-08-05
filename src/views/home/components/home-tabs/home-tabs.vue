<template>
  <div>
    <el-row class="top-part">
      <el-col class="tabs-main-txt" :span="9">
        <span>— 新闻中心</span>
      </el-col>
      <el-col :span="6">
        <div class="two-tabs">
          <span @mouseover="chooseTab('true')">学院要闻</span>
          <span @mouseover="chooseTab('false')">校园快讯</span>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="end-check-more">
          <span>| 查看更多 ></span>
        </div>
      </el-col>
    </el-row>
    <div>
      <HomeCarouselIndex :changeTabs="changeTabs" :key="key" />
    </div>
    <div class="article">
      <HomeArticleList />
    </div>
  </div>
</template>

<script>
import HomeCarouselIndex from './components/home-carousel/home-carousel-index'
import HomeArticleList from './components/home-article-list/home-article-list'
import { ref } from 'vue'

export default {
  name: 'HomeTabs',
  components: {
    HomeCarouselIndex,
    HomeArticleList
  },
  setup () {
    const key = ref(1)
    const changeTabs = ref(true)

    // 两个 Tab 标签，触发 chooseTab() 方法，修改 changeTabs 值！传递给子组件
    const chooseTab = (i) => {
      if (i === 'true') {
        changeTabs.value = true
        key.value += 1
      } else {
        changeTabs.value = false
        key.value += 1
      }
    }

    return {
      chooseTab,
      changeTabs,
      key
    }
  }
}
</script>

<style lang="less" scoped>
.top-part {
  display: flex;
  width: 100%;
  margin: 10px 0;
  .tabs-main-txt {
    span {
      font-size: 25px;
    }
  }
  .two-tabs {
    line-height: 35px;
    span {
      display: inline-block;
      margin-right: 10px;
      cursor: pointer;
    }
  }
  .end-check-more {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    line-height: 35px;
    span {
      color: #6a6f6f;
      font-size: 14px;
      cursor: pointer;
    }
  }
}
.article {
  margin-top: 20px;
}
</style>
