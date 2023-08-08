<template>
  <div class="table-container">
    <div class="table-box">
      <el-table
        :data="newData"
        style="width: 100%"
      >
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="desc" label="desc" />
        <el-table-column prop="date" label="Date" width="180" />
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
      pageSize: 10
    })

    // newData 定义一个新的数组用来装每页需要渲染的数据
    const newData = ref([])

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

    // 直接调用 handleCurrentChange（）方法，获取相应数据！ 注意：store中页码数据已经做了持久化处理，刷新不会影响当前页码信息展示！
    handleCurrentChange(store.state.education.profile.currentPage)

    // 监听到 tableData 数据发生改动，立即调用 handleCurrentChange（）方法动态刷新数据
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
.table-container {
  padding: 20px;
  .table-box {
    :deep(.el-table) {
      min-height: 500px;
      .el-table__row:hover {
        border: 2px solid black;
        td {
          background-color: rgba(92, 167, 158, 0.5);
          transform: translate3d(2px, 2px, 5px);
          transition: all 1s ease;
        }
      }
      .el-table__row {
        cursor: pointer;
      }
      .el-table__inner-wrapper::before {
        background-color: unset;
      }
    }
  }
}
</style>
