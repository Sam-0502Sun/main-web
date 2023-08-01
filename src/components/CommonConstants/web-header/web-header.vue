<template>
  <div class="main-header-container">
    <el-row class="header-container">
      <el-col class="header-logo" :span="10"></el-col>
      <el-col class="header-search" :span="14">
        <div class="search-box">
          <el-input
            v-model="input3"
            placeholder="Please input"
            class="input-with-select"
          >
            <template #append>
              <el-button :icon="Search"/>
            </template>
          </el-input>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Search } from '@element-plus/icons-vue'

export default {
  name: 'WebHeader',
  setup () {
    return {
      Search
    }
  }
}
</script>

<style lang="less" scoped>
.main-header-container {
  width: 100%;
  background-color: #2652ef;
  .header-container {
    height: 130px;
    padding-right: 40px;
    max-width: 1240px;
    margin: 0 auto;

    .header-logo {
      background-image: url("@/assets/images/5.jpg");
      background-size: cover;
      overflow: hidden;
    }

    .header-search {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .search-box {
        border: 1px solid #333;
        border-radius: 20px;
        overflow: hidden;
        :deep(.el-input) {
          height: 40px;
          border: unset;
          .el-input__wrapper {
            background-color: white;
          }
        }
      }
    }
  }
}
</style>
