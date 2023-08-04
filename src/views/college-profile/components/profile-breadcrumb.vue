<template>
  <div class="breadcrumb-container">
    <div class="breadcrumb-box">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item  v-for="item in breadcrumbList" :key="item.name" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'

export default {
  name: 'ProfileBreadcrumb',
  setup () {
    const route = useRoute()
    const breadcrumbList = ref([])
    breadcrumbList.value = route.matched

    // 更新面包屑导航的方法
    const renewBreadcrumb = () => {
      breadcrumbList.value = route.matched
    }

    // 监听route是否改变，有变化立即调用面包屑导航更新方法
    watch(route, () => {
      renewBreadcrumb()
    }, { deep: true, immediate: true })

    return {
      breadcrumbList,
      ArrowRight
    }
  }
}
</script>

<style lang="less" scoped>
.breadcrumb-container {
  height: 50px;
  width: 100%;
  .breadcrumb-box {
    float: right;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 20px;
    .el-breadcrumb {
      color: white;
      .el-breadcrumb__item {
        :deep(.el-breadcrumb__inner) {
          color: white;
        }
      }
    }
  }
}
</style>
