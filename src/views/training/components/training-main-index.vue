<template>
  <div class="training-layout-container">
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-training-demo"
          @open="handleOpen"
          @close="handleClose"
          router
          v-for="item in menuList" :key="item.name"
        >
          <template v-if="item.children">
            <el-sub-menu :index="item.url">
              <template #title>
                <span>{{ item.name }}</span>
              </template>
              <template v-for="i in item.children" :key="i.name">
                <el-menu-item :index="i.url">{{ i.name }}</el-menu-item>
              </template>
            </el-sub-menu>
          </template>
          <el-menu-item v-else :index="item.url">{{ item.name }}</el-menu-item>
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
  name: 'TrainingMainIndex',
  setup () {
    const menuList = reactive([
      {
        name: '培训工作',
        url: '/pxjd/pxgz1'
      },
      {
        name: '培训动态',
        url: '/'
      },
      {
        name: '鉴定动态',
        url: '/pxjd/jddt',
        children: [
          {
            name: '工作动态',
            url: '/pxjd/jddt/gzdt'
          },
          {
            name: '文件通知',
            url: '/pxjd/jddt/wjtz'
          },
          {
            name: '成绩公告',
            url: '/pxjd/jddt/cjgg'
          },
          {
            name: '证书信息',
            url: '/pxjd/jddt/zsxx'
          },
          {
            name: '学生鉴定',
            url: '/pxjd/jddt/xsjd'
          }
        ]
      }
    ])
    const route = useRoute()
    const activeIndex = ref(route.path)
    watch(route, () => {
      activeIndex.value = route.path
    })

    return {
      menuList,
      activeIndex
    }
  }
}
</script>

<style lang="less" scoped>
.training-layout-container {
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
