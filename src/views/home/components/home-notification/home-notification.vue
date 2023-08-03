<template>
  <div>
    <el-row class="top-part">
      <el-col class="tabs-main-txt" :span="9">
        <span>— 通知公告</span>
      </el-col>
      <el-col :span="6"></el-col>
      <el-col :span="9">
        <div class="end-check-more">
          <span>| 查看更多 ></span>
        </div>
      </el-col>
    </el-row>
    <div class="notification-info" v-for="item in notificationList" :key="item.title">
      <div class="front-box">
        <div class="dateInfo">
          <span class="day">{{item.day}}</span>
          <span class="date">{{item.date}}</span>
        </div>
      </div>
      <div class="txt">
        <div>
          <span>{{item.title}}</span>
          <span>{{item.info}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'HomeNotification',
  setup () {
    const notificationList = reactive([
      {
        title: '北京社会管理职业学院（民政部培训中心）',
        info: '“布草洗涤服务项目”公告',
        day: '28',
        date: '2023-07'
      },
      {
        title: '北京社会管理职业学院（民政部培训中心）',
        info: '“布草洗涤服务项目”公告',
        day: '28',
        date: '2023-07'
      },
      {
        title: '北京社会管理职业学院（民政部培训中心）',
        info: '“布草洗涤服务项目”公告',
        day: '28',
        date: '2023-07'
      },
      {
        title: '北京社会管理职业学院（民政部培训中心）',
        info: '“布草洗涤服务项目”公告',
        day: '28',
        date: '2023-07'
      }
    ])

    return {
      notificationList
    }
  }
}
</script>

<style lang="less" scoped>
.top-part {
  margin: 10px 0;

  .tabs-main-txt {
    span {
      font-size: 25px;
    }
  }
  .end-check-more {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    line-height: 35px;

    span {
      color: #6a6f6f;
      font-size: 14px;
      cursor: pointer;
    }
  }
}
.notification-info {
  width: 100%;
  display: flex;
  margin-bottom: 15px;
  .front-box {
    position: relative;
    height: 80px;
    width: 70px;
    background-color: rgba(38, 123, 220, 0.2);
    .dateInfo {
      display: inline-grid;
      align-items: center;
      justify-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      span {
        display: block;
      }
      .day {
        font-size: 28px;
        color: #5b7ae3;
      }
      .date {
        font-size: 12px;
        color: #5b7ae3;
        width: 50px;
      }
    }
  }
  .txt {
    margin-left: 20px;
    display: flex;
    align-items: center;
    span {
      display: block;
    }
  }
}
</style>
