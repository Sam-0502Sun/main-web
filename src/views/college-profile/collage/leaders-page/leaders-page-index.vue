<template>
  <div class="collage-leaders-container">
    <div class="leaders-card" v-for="item in leadersList" :key="item.name">
      <img :src="item.src" class="leaders-photo" />
      <div class="leaders-info">
        <span class="leaders-name">{{item.name}}</span>
        <span class="leaders-post">{{item.post}}</span>
        <span class="leaders-desc">{{item.desc}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'LeadersPageIndex',
  setup () {
    const leadersList = reactive([
      {
        name: 'Sam',
        post: '党委书记',
        desc: '北京社会管理职业学院（民政部培训中心）党委书记',
        src: require('@/assets/images/5.jpg')
      },
      {
        name: 'Sam',
        post: '党委书记',
        desc: '北京社会管理职业学院（民政部培训中心）党委书记',
        src: require('@/assets/images/sunset-7504891_960_720.jpg')
      },
      {
        name: 'Sam',
        post: '党委书记',
        desc: '北京社会管理职业学院（民政部培训中心）党委书记',
        src: require('@/assets/images/sunrise-7493833_1280.jpg')
      },
      {
        name: 'Sam',
        post: '党委书记',
        desc: '北京社会管理职业学院（民政部培训中心）党委书记',
        src: require('@/assets/images/sunset-7504891_960_720.jpg')
      },
      {
        name: 'Sam',
        post: '党委书记',
        desc: '北京社会管理职业学院（民政部培训中心）党委书记',
        src: require('@/assets/images/1018-800x800.jpg')
      },
      {
        name: 'Sam',
        post: '党委书记',
        desc: '北京社会管理职业学院（民政部培训中心）党委书记',
        src: require('@/assets/images/1043-800x800.jpg')
      },
      {
        name: 'Sam',
        post: '党委书记',
        desc: '北京社会管理职业学院（民政部培训中心）党委书记',
        src: require('@/assets/images/1050-800x800.jpg')
      }
    ])

    return {
      leadersList
    }
  }
}
</script>

<style lang="less" scoped>
.collage-leaders-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 20px;
  padding-top: 50px;
  padding-left: 50px;
  .leaders-card {
    display: flex;
    .leaders-photo {
      width: 150px;
      height: 200px;
      background-size: cover;
    }
    .leaders-info {
      background-color: #edebeb;
      span {
        display: block;
        margin: 20px auto 0;
        width: 80%;
      }
      .leaders-name {
        font-size: 20px;
        color: #5d5d5d;
      }
      .leaders-post {
        color: #9ea0a0;
      }
      .leaders-desc {
        color: #9ea0a0;
      }
    }
  }
}
</style>
