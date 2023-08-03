<template>
  <div class="big-tabs-container">
    <el-row>
      <el-col :span="3"></el-col>
      <el-col :span="18">
        <el-row class="top-part">
          <el-col class="tabs-main-txt" :span="9">
            <span>— 教学&科研</span>
          </el-col>
          <el-col :span="6">
            <div class="two-tabs">
              <span @mouseover="changeTab('true')">教育教学</span>
              <span @mouseover="changeTab('false')">科研动态</span>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="end-check-more">
              <span>| 查看更多 ></span>
            </div>
          </el-col>
        </el-row>
        <div class="pages">
          <BigTabsPages :changeTabs="changeTabs" :key="key" />
        </div>
      </el-col>
      <el-col :span="3"></el-col>
    </el-row>
  </div>
</template>

<script>
import BigTabsPages from './big-tabs-pages/big-tabs-pages'
import { ref } from 'vue'

export default {
  name: 'HomeBigTabs',
  components: {
    BigTabsPages
  },
  setup () {
    const key = ref(1)
    const changeTabs = ref(true)
    const changeTab = (i) => {
      if (i === 'true') {
        changeTabs.value = true
        key.value += 1
      } else {
        changeTabs.value = false
        key.value += 1
      }
    }

    return {
      key,
      changeTabs,
      changeTab
    }
  }
}
</script>

<style lang="less" scoped>
.big-tabs-container {
  background: linear-gradient(rgba(210, 226, 243, 0.81), rgba(209, 225, 241, 0.68)), url('@/assets/images/5.jpg');
  background-size: cover;
  padding: 20px 0;
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
  .pages {
    margin-top: 20px;
  }
}
</style>
