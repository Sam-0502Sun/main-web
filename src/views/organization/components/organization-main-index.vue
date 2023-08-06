<template>
  <div class="organization-layout-container">
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <template v-for="item in menuList" :key="item.name">
            <el-menu-item :index="item.name" @click="getId(item)">{{item.name}}</el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <div id="box1" class="grid-container">
          <span class="left-span">|</span>
          <span class="right-span"> 教研机构</span>
          <div class="grid-box">
            <div class="sub-btn" v-for="item in educationList" :key="item.name">{{item.name}}</div>
          </div>
        </div>
        <div id="box2" class="grid-container">
          <span class="left-span">|</span>
          <span class="right-span"> 管理机构</span>
          <div class="grid-box">
            <div class="sub-btn" v-for="item in managementList" :key="item.name">{{item.name}}</div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  name: 'OrganizationMainIndex',
  setup () {
    const activeIndex = ref('')
    const menuList = reactive([
      {
        name: '教育机构',
        id: 'box1'
      },
      {
        name: '管理机构',
        id: 'box2'
      }
    ])
    const educationList = reactive([
      {
        name: '老年福祉学院',
        url: '/zzjg'
      },
      {
        name: '社会工作学院',
        url: '/zzjg'
      },
      {
        name: '康复工程学院',
        url: '/zzjg'
      },
      {
        name: '儿童教育与发展学院',
        url: '/zzjg'
      },
      {
        name: '生命文化学院',
        url: '/zzjg'
      },
      {
        name: '婚礼文化与传媒艺术学院',
        url: '/zzjg'
      },
      {
        name: '思想政治理论教研部（通识教育中心）',
        url: '/zzjg'
      },
      {
        name: '社会工作研究所',
        url: '/zzjg'
      },
      {
        name: '《社会福利》编辑部',
        url: '/zzjg'
      }
    ])
    const managementList = reactive([
      {
        name: '党政办公室（发展规划办公室）',
        url: '/zzjg'
      },
      {
        name: '组织部（人事处，老干部办公室）',
        url: '/zzjg'
      },
      {
        name: '宣传部（公会）',
        url: '/zzjg'
      },
      {
        name: '纪委办公室',
        url: '/zzjg'
      },
      {
        name: '财务与资产管理处',
        url: '/zzjg'
      },
      {
        name: '教务处（教学督导室）',
        url: '/zzjg'
      },
      {
        name: '科研管理处（民政理论研究所，高职教）',
        url: '/zzjg'
      },
      {
        name: '学生处（团委，招生与就业指导服务中心）',
        url: '/zzjg'
      },
      {
        name: '团委',
        url: '/zzjg'
      },
      {
        name: '招生与就业指导中心',
        url: '/zzjg'
      },
      {
        name: '总务处',
        url: '/zzjg'
      },
      {
        name: '保卫部',
        url: '/zzjg'
      },
      {
        name: '基建处',
        url: '/zzjg'
      },
      {
        name: '信息与教育技术中心（图书馆）',
        url: '/zzjg'
      },
      {
        name: '培训部（继续教育学院）',
        url: '/zzjg'
      },
      {
        name: '职业能力建设处',
        url: '/zzjg'
      },
      {
        name: '燕郊校区综合管理办公室',
        url: '/zzjg'
      }
    ])
    // 锚点移动方法（根据获取dom定位移动）
    const goDomFun = (dom) => {
      dom.scrollIntoView({
        behavior: 'smooth',
        // 定义动画过渡效果， "auto"或 "smooth" 之一。默认为 "auto"
        block: 'center',
        // 定义垂直方向的对齐， "start", "center", "end", 或 "nearest"之一。默认为 "start"
        inline: 'nearest'
        // 定义水平方向的对齐， "start", "center", "end", 或 "nearest"之一。默认为 "nearest"
      })
    }
    // menu 按钮点击触发，获取dom节点id, 调用锚点移动方法进行定位
    const getId = (item) => {
      const dom = document.getElementById(item.id)
      goDomFun(dom)
      activeIndex.value = item.name
    }

    return {
      activeIndex,
      menuList,
      getId,
      educationList,
      managementList
    }
  }
}
</script>

<style lang="less" scoped>
.organization-layout-container {
  .el-aside {
    border-right: 1px solid #dcdfe6;
    .el-menu-item {
      border-bottom: 1px solid rgba(227, 234, 234, 0.45);
    }
    .el-menu-item.is-active {
      background-color: #2652ef;
      color: white;
    }
  }
  .el-menu {
    border-right: unset;
    .el-menu-item {
      font-size: 16px;
    }
  }
  .el-main {
    min-height: 1300px;
  }
}
.grid-container {
  padding: 30px;
  span {
    color: #2652ef;
    font-weight: bold;
  }
  .left-span {
    font-size: 30px;
  }
  .right-span {
    font-size: 24px;
  }
  .grid-box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px 20px;
    margin-top: 50px;
    .sub-btn {
      text-align: center;
      font-size: 12px;
      height: 50px;
      line-height: 50px;
      background-color: #dbdde3;
      cursor: pointer;
    }
    .sub-btn:hover {
      background-color: #2652ef;
      color: white;
    }
  }
}
</style>
