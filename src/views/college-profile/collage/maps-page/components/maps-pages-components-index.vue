<template>
  <div class="maps-pages-container">
    <div v-for="item in imgList" :key="item.name">
      <template v-if="activeLogoTabs === item.name">
        <div v-if="item.children">
          <div class="lots-img-body">
            <div class="lots-img-box">
              <div v-for="i in newData" :key="i.name">
                <img class="lots-img" :src="i.src" />
                <span>{{i.name}}</span>
              </div>
            </div>
          </div>
          <div class="pagination-block">
            <div class="example-demonstration">请选择页码：</div>
            <el-pagination
              layout="prev, pager, next"
              :total="changePage.total"
              @current-change="handleCurrentChange"
              v-model:current-page="changePage.currentPage"
              :page-size="changePage.pageSize"
            />
          </div>
        </div>
        <div class="single-img-box" v-else>
          <img class="single-img" :src="item.src" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue'

export default {
  name: 'MapsPagesComponentsIndex',
  props: {
    changeLogoTabs: {
      type: String
    },
    imgData: {
      type: Object
    },
    key: {
      type: String
    }
  },
  setup (props) {
    const fatherKey = ref(props.key)
    const activeLogoTabs = ref(props.changeLogoTabs)
    const imgList = reactive(props.imgData)
    const newData = ref([])
    const totalDataList = reactive([])
    // 分页器基本数据
    const changePage = reactive({
      currentPage: 1,
      total: totalDataList.length,
      pageSize: 9
    })

    // 监听父组件传递 props 变化，有变化立即调用更新
    watch(props, () => {
      activeLogoTabs.value = props.changeLogoTabs
      for (const subItem of imgList) {
        if (subItem.children) {
          changePage.total = subItem.children.length
        }
      }
      handleCurrentChange(1)
    })

    // 点击分页器显示当前页码数据
    const handleCurrentChange = (value) => {
      changePage.currentPage = value
      for (const subItem of imgList) {
        if (subItem.children) {
          totalDataList.value = subItem.children
          let i = value * changePage.pageSize - changePage.pageSize
          const array = []
          while (i < changePage.currentPage * changePage.pageSize) {
            if (subItem.children[i] != null) {
              array.push(subItem.children[i])
              i++
              continue
            }
            break
          }
          newData.value = array
        } else {
          newData.value = subItem.children
        }
      }
    }

    return {
      activeLogoTabs,
      imgList,
      fatherKey,
      changePage,
      newData,
      handleCurrentChange
    }
  }
}
</script>

<style lang="less" scoped>
.maps-pages-container {
  .lots-img-body {
    width: 100%;
    min-height: 800px;
    .lots-img-box {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px 20px;
      margin-top: 80px;
      .lots-img {
        display: block;
        width: 300px;
        height: 200px;
      }
      span {
        display: block;
        width: 100%;
        text-align: center;
      }
    }
  }
  .pagination-block {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .single-img-box {
    max-width: 800px;
    margin: 80px auto;
    .single-img {
      display: block;
      width: 500px;
      height: 400px;
      margin: 0 auto;
    }
  }
}
</style>
