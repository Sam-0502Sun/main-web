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
      <LogoPageComponentsIndex :changeLogoTabs="changeLogoTabs" :imgData="imgData" :key="key" />
    </div>
  </div>
</template>

<script>
import LogoPageComponentsIndex from '../../components/img-index'
import { ref } from 'vue'

export default {
  name: 'MapsPagesIndex',
  components: {
    LogoPageComponentsIndex
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
            name: 'H1',
            src: require('@/assets/images/autumn-7562289_960_720.jpg')
          },
          {
            name: 'H2',
            src: require('@/assets/images/autumn-7562289_960_720.jpg')
          },
          {
            name: 'H3',
            src: require('@/assets/images/autumn-7562289_960_720.jpg')
          },
          {
            name: 'H4',
            src: require('@/assets/images/autumn-7562289_960_720.jpg')
          },
          {
            name: 'H5',
            src: require('@/assets/images/autumn-7562289_960_720.jpg')
          },
          {
            name: 'H6',
            src: require('@/assets/images/autumn-7562289_960_720.jpg')
          },
          {
            name: 'H7',
            src: require('@/assets/images/autumn-7562289_960_720.jpg')
          },
          {
            name: 'H8',
            src: require('@/assets/images/autumn-7562289_960_720.jpg')
          },
          {
            name: 'H9',
            src: require('@/assets/images/autumn-7562289_960_720.jpg')
          },
          {
            name: 'H10',
            src: require('@/assets/images/autumn-7562289_960_720.jpg')
          },
          {
            name: 'H11',
            src: require('@/assets/images/autumn-7562289_960_720.jpg')
          },
          {
            name: 'H12',
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
