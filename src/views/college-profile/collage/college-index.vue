<template>
  <div class="collage-layout-container">
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router
        >
          <template v-for="item in collageMenuList" :key="item.name">
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
import { reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'CollegeIndex',
  setup () {
    const route = useRoute()
    const activeIndex = ref(route.path)
    const collageMenuList = reactive([
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

    watch(route, () => {
      activeIndex.value = route.path
    }, { deep: true, immediate: true })

    return {
      activeIndex,
      collageMenuList
    }
  }
}
</script>

<style lang="less" scoped>
.collage-layout-container {
  .el-aside {
    border-right: 1px solid #dcdfe6;
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
