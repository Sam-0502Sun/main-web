<template>
  <div class="education-layout-container">
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router
        >
          <template v-for="item in menuList" :key="item.name">
            <el-menu-item :index="item.url">{{item.name}}</el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'EducationMainIndex',
  setup () {
    const menuList = reactive([
      {
        name: '教务动态',
        url: '/jyjx/jwdt'
      },
      {
        name: '教学改革',
        url: '/jyjx/jxgg'
      },
      {
        name: '网络教学平台',
        url: '/jyjx/wljxpt'
      }
    ])

    return {
      menuList
    }
  }
}
</script>

<style lang="less" scoped>
.education-layout-container {
  .el-aside {
    border-right: 1px solid #dcdfe6;
    .el-menu-item {
      border-bottom: 1px solid rgba(227, 234, 234, 0.45);
    }
    .el-menu-item.is-active {
      background-color: #2652ef;
      color: white;
    }
  }
  .el-menu {
    border-right: unset;
    .el-menu-item {
      font-size: 16px;
    }
  }
  .el-main {
    min-height: 1300px;
  }
}
</style>
