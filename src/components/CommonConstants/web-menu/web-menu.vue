<template>
  <div class="menu-container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      router
    >
      <template v-for="item in menuList" :key="item.name">
        <el-sub-menu v-if="item.children" :index="item.url">
          <template #title>{{ item.name }}</template>
          <el-menu-item v-for="i in item.children" :key="i.name" :index="i.url">{{ i.name }}</el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :index="item.url">{{ item.name }}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'WebMenu',
  setup () {
    // 引入 route 实例
    const route = useRoute()
    const activeIndex = ref('/')

    // 菜单栏数据
    const menuList = reactive([
      {
        name: '首页',
        url: '/'
      },
      {
        name: '学院概况',
        url: '/xygk',
        children: [
          {
            name: '学院概况',
            url: '/xygk'
          },
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
        ]
      },
      {
        name: '组织机构',
        url: '/zzjg'
      },
      {
        name: '教育教学',
        url: '/jyjx',
        children: [
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
        ]
      },
      {
        name: '培训鉴定',
        url: '/pxjd',
        children: [
          {
            name: '培训工作',
            url: '/pxjd/pxgz1'
          },
          {
            name: '培训动态',
            url: '/pxjd/pxgz1'
          },
          {
            name: '鉴定动态',
            url: '/pxjd/jddt'
          }
        ]
      },
      {
        name: '科学研究',
        url: '/kxyj',
        children: [
          {
            name: '管理机构',
            url: '/kxyj/gljg'
          },
          {
            name: '科研机构',
            url: '/kxyj/kyjg'
          },
          {
            name: '科研动态',
            url: '/kxyj/kydt'
          },
          {
            name: '科研成果',
            url: '/kxyj/kycg'
          },
          {
            name: '政策专栏',
            url: '/kxyj/zczl'
          }
        ]
      },
      {
        name: '校园文化',
        url: '/xywh',
        children: [
          {
            name: '动态信息',
            url: '/xywh/dtxx'
          },
          {
            name: '素质教育',
            url: '/xywh/szjy'
          },
          {
            name: '团学活动',
            url: '/xywh/txhd'
          },
          {
            name: '心理健康',
            url: '/xywh/xljk'
          },
          {
            name: '志愿服务',
            url: '/xywh/zyfw'
          },
          {
            name: '助学服务',
            url: '/xywh/zxfw'
          },
          {
            name: '平安校园',
            url: '/xywh/paxy'
          },
          {
            name: '一校一品',
            url: '/xywh/yxyp'
          }
        ]
      },
      {
        name: '招生就业',
        url: '/zsjy',
        children: [
          {
            name: '招生信息网',
            url: '/zsjy/zsxxw'
          },
          {
            name: '就业信息网',
            url: '/zsjy/jyxxw'
          }
        ]
      },
      {
        name: '党建工作',
        url: '/djgz',
        children: [
          {
            name: '组织机构',
            url: '/djgz/zzjg'
          },
          {
            name: '党建动态',
            url: '/djgz/djdt'
          },
          {
            name: '理论学习',
            url: '/djgz/llxx'
          },
          {
            name: '学生党建',
            url: '/djgz/xsdj'
          }
        ]
      },
      {
        name: '信息公开',
        url: '/xxgk',
        children: [
          {
            name: '基本信息',
            url: '/xxgk/jbxx'
          },
          {
            name: '招生考试信息',
            url: '/xxgk/zsksxx'
          },
          {
            name: '财务资产及收费信息',
            url: '/xxgk/cwzcjsfxx'
          },
          {
            name: '人事师资信息',
            url: '/xxgk/rsszxx'
          },
          {
            name: '教学质量信息',
            url: '/xxgk/jxzlxx'
          },
          {
            name: '学生管理服务信息',
            url: '/xxgk/xsglfwxx'
          },
          {
            name: '学风党设信息',
            url: '/xxgk/xfdsxx'
          },
          {
            name: '学位学科信息',
            url: '/xxgk/xwxkxx'
          },
          {
            name: '对外交流与合作信息',
            url: '/xxgk/dwjlyhzxx'
          },
          {
            name: '其他',
            url: '/xxgk/qt'
          }
        ]
      }
    ])

    // picBtn() 方法给 activeIndex 赋值
    const picBtn = () => {
      activeIndex.value = route.path
    }

    // 监听route变化，发生变化立刻调用 picBtn() 方法
    watch(route, () => {
      picBtn()
    }, { deep: true, immediate: true })

    return {
      activeIndex,
      menuList
    }
  }
}
</script>

<style lang="less" scoped>
.menu-container {
  max-width: 1240px;
  margin: 0 auto;

  .el-sub-menu {
  }
  //.el-menu-item:hover{
  //  background-color: unset !important;
  //}
  //.el-menu-item:active{
  //  background-color: unset !important;
  //}
}
</style>
