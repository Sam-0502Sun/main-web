<template>
  <div>学校标识</div>
  <div>
    <el-row class="top-part">
      <el-col :span="6">
        <span @mouseover="chooseTab('A')">校名</span>
      </el-col>
      <el-col :span="6">
        <span @mouseover="chooseTab('B')">校徽</span>
      </el-col>
      <el-col :span="6">
        <span @mouseover="chooseTab('C')">校训</span>
      </el-col>
      <el-col :span="6">
        <span @mouseover="chooseTab('D')">校歌</span>
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
  name: 'LogoPageIndex',
  components: {
    LogoPageComponentsIndex
  },
  setup () {
    const key = ref('A')
    const changeLogoTabs = ref('A')
    const imgData = ref([
      {
        name: 'A',
        src: require('@/assets/images/sunset-7504891_960_720.jpg')
      },
      {
        name: 'B',
        src: require('@/assets/images/1050-800x800.jpg')
      },
      {
        name: 'C',
        src: require('@/assets/images/sunrise-7493833_1280.jpg')
      },
      {
        name: 'D',
        src: require('@/assets/images/autumn-7562289_960_720.jpg')
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
