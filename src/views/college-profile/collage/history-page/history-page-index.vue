<template>
  <div class="timeline-container">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :hollow="activity.hollow"
        :timestamp="activity.timestamp"
      >
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>

  </div>
</template>

<script>

export default {
  name: 'HistoryPageIndex',
  setup () {
    const activities = [
      {
        content: '内务部干部学校成立。',
        timestamp: '2018-04-12 20:46',
        size: 'large',
        type: 'primary',
        hollow: true
      },
      {
        content: '经民政部批准，教育部备案正式成立民政部管理干部学院。',
        timestamp: '2018-04-03 20:46',
        size: 'large',
        type: 'primary',
        hollow: true
      },
      {
        content: '民政部成立民政部培训中心，与学院合署办公，一个机构，两个牌子。',
        timestamp: '2018-04-03 20:46',
        size: 'large',
        type: 'primary',
        hollow: true
      },
      {
        content: '中国假肢矫形技术中等专业学校并入学院。',
        timestamp: '2018-04-03 20:46',
        size: 'large',
        type: 'primary',
        hollow: true
      },
      {
        content: '民政部成立民政部社会工作研究中心，具体工作由学院负责',
        timestamp: '2018-04-03 20:46',
        size: 'large',
        type: 'primary',
        hollow: true
      },
      {
        content: '经北京市人民政府批准，在民政部管理干部学院的基础上组建北京社会管理理职业学院开展学历教育',
        timestamp: '2018-04-03 20:46',
        size: 'large',
        type: 'primary',
        hollow: true
      }
    ]

    return {
      activities
    }
  }
}
</script>

<style lang="less" scoped>
.timeline-container {
  margin-top: 50px;
  .el-timeline{
    width: 50%;
    float: right;
    // 修改原本组件时间位置
    .el-timeline-item {
      height: 50px;
      font-size: 16px;
      margin-bottom: 10px;
      :deep(.el-timeline-item__node--large) {
        top: 3px;
      }
      :deep(.el-timeline-item__tail) {
        top: 3px;
      }
      .el-timeline-item__node {
        font-size: 20px;
      }
      :deep(.el-timeline-item__wrapper) {
        height: 50px;
      }
    }
    :deep(.el-timeline-item__timestamp.is-bottom) {
      position: absolute;
      left: -200px;
      top: -3px;
      color: #333333;
      font-size: 20px;
    }
    :deep(.el-timeline) {
      padding-left: 150px;
    }
  }
}
</style>
