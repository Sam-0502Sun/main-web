<template>
  <div>学院导图</div>
  <div>
    <el-row class="top-part">
      <el-col :span="6">
        <span @mouseover="chooseTab('E')">学院方位</span>
      </el-col>
      <el-col :span="6">
        <span @mouseover="chooseTab('F')">乘车路线</span>
      </el-col>
      <el-col :span="6">
        <span @mouseover="chooseTab('G')">校园地图</span>
      </el-col>
      <el-col :span="6">
        <span @mouseover="chooseTab('H')">学院风景</span>
      </el-col>
    </el-row>
    <div>
      <MapsPagesComponentsIndex :changeLogoTabs="changeLogoTabs" :imgData="imgData" :key="key" />
    </div>
  </div>
</template>

<script>
import MapsPagesComponentsIndex from './components/maps-pages-components-index'
import { ref } from 'vue'

export default {
  name: 'MapsPagesIndex',
  components: {
    MapsPagesComponentsIndex
  },
  setup () {
    const key = ref('B')
    const changeLogoTabs = ref('E')
    const imgData = ref([
      {
        name: 'E',
        src: require('@/assets/images/christmas-tree-6870755_1280.jpg')
      },
      {
        name: 'F',
        src: require('@/assets/images/1050-800x800.jpg')
      },
      {
        name: 'G',
        src: require('@/assets/images/sunrise-7493833_1280.jpg')
      },
      {
        name: 'H',
        children: [
          {
            name: '学院正门',
            src: require('@/assets/images/autumn-7562289_960_720.jpg')
          },
          {
            name: '校训石',
            src: require('@/assets/images/autumn-7562289_960_720.jpg')
          },
          {
            name: '综合楼',
            src: require('@/assets/images/autumn-7562289_960_720.jpg')
          },
          {
            name: '教学楼',
            src: require('@/assets/images/autumn-7562289_960_720.jpg')
          },
          {
            name: '图书馆',
            src: require('@/assets/images/autumn-7562289_960_720.jpg')
          },
          {
            name: '培训楼',
            src: require('@/assets/images/autumn-7562289_960_720.jpg')
          },
          {
            name: '学生餐厅',
            src: require('@/assets/images/autumn-7562289_960_720.jpg')
          },
          {
            name: '运动场',
            src: require('@/assets/images/autumn-7562289_960_720.jpg')
          },
          {
            name: '体育馆',
            src: require('@/assets/images/autumn-7562289_960_720.jpg')
          },
          {
            name: '学生公寓',
            src: require('@/assets/images/autumn-7562289_960_720.jpg')
          },
          {
            name: '仁爱广场',
            src: require('@/assets/images/autumn-7562289_960_720.jpg')
          },
          {
            name: '校园风光',
            src: require('@/assets/images/autumn-7562289_960_720.jpg')
          }
        ]
      }
    ])

    // 两个 Tab 标签，触发 chooseTab() 方法，修改 changeTabs 值！传递给子组件
    const chooseTab = (i) => {
      if (i !== undefined) {
        changeLogoTabs.value = i
      }
    }

    return {
      key,
      changeLogoTabs,
      chooseTab,
      imgData
    }
  }
}
</script>

<style lang="less" scoped>

</style>
