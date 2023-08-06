<template>
  <div>教务动态</div>
  <div>
    <el-table
      :data="newData"
      style="width: 100%"
    >
      <el-table-column prop="name" label="Name" width="180"/>
      <el-table-column prop="desc" label="desc"/>
      <el-table-column prop="date" label="Date" width="180"/>
    </el-table>
  </div>
  <div class="example-pagination-block">
    <div class="example-demonstration">When you have few pages</div>
    <el-pagination
      layout="prev, pager, next"
      :total="changePage.total"
      :page-size="changePage.pageSize"
      @current-change="handleCurrentChange"
      v-model:current-page="changePage.currentPage"
    />
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'DynamicAcademicIndex',
  setup () {
    const tableData = reactive([
      {
        date: '2016-05-03',
        name: 'Tom',
        desc: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        desc: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        desc: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        desc: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        desc: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        desc: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-01',
        name: 'Sam',
        desc: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-01',
        name: 'JJJJJJJJJJJJ',
        desc: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-01',
        name: '哈哈哈哈哈',
        desc: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-01',
        name: 'OOOOOOO',
        desc: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-01',
        name: '你好',
        desc: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        desc: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        desc: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        desc: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        desc: 'No. 189, Grove St, Los Angeles'
      }
    ])
    const store = useStore()

    // 分页器基本数据
    const changePage = reactive({
      currentPage: store.state.education.profile.currentPage,
      total: tableData.length,
      pageSize: 5
    })

    // newData 定义一个新的数组用来装每页需要渲染的数据
    const newData = ref([])

    // 做判断，截取 tableData 中需要的页面数据
    if (tableData.length > changePage.pageSize) {
      const array = []
      let i = changePage.currentPage * changePage.pageSize - changePage.pageSize
      while (i < changePage.currentPage * changePage.pageSize) {
        if (tableData[i] != null) {
          array.push(tableData[i])
          i++
          continue
        }
        break
      }
      newData.value = array
    } else {
      newData.value = tableData
    }

    // 点击分页器，获取页码，对 tableData 进行数据截取
    const handleCurrentChange = (value) => {
      changePage.currentPage = value
      store.commit('education/setCurrentPage', value)
      const array = []
      let i = value * changePage.pageSize - changePage.pageSize
      while (i < value * changePage.pageSize && i < tableData.length) {
        if (tableData[i] !== null) {
          array.push(tableData[i])
          i++
          continue
        }
        break
      }
      newData.value = array
    }

    watch(tableData, () => {
      handleCurrentChange(changePage.currentPage)
    })

    return {
      newData,
      changePage,
      handleCurrentChange
    }
  }
}
</script>

<style lang="less" scoped>

</style>
