<template>
  <div>
    <div class="article-form" v-for="item in articleList" :key="item.name">
      <el-row class="article-row">
        <el-col :span="21">
          <span>.</span>
          <span class="article-name" @click="articleLink">{{item.name}}</span>
        </el-col>
        <el-col :span="3">
          <span>{{item.date}}</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

import { reactive } from 'vue'

export default {
  name: 'HomeArticleList',
  setup () {
    const articleList = reactive([
      {
        name: '工会赴遂川县开展爱心结对帮扶活动',
        date: '2023-07-28'
      },
      {
        name: '工会赴遂川县开展爱心结对帮扶活动工会赴遂川县开展爱心结对帮扶活动',
        date: '2023-07-28'
      },
      {
        name: '工会赴遂川县开展爱心',
        date: '2023-07-28'
      }
    ])

    return {
      articleList
    }
  }
}
</script>

<style lang="less" scoped>
.article-form {
  width: 100%;
  .article-row {
    line-height: 35px;
    .article-name {
      cursor: pointer;
    }
    .article-name:hover {
      color: #2652ef;
    }
  }
}
</style>
