<template>
  <div class="grid-container">
    <div v-for="item in educationList" :key="item.name" class="grip-box">
      <div class="grid-items" v-if="activeTabs">
        <span class="date">{{item.date}}</span>
        <span class="desc">{{item.desc}}111</span>
      </div>
      <div class="grid-items" v-else>
        <span class="date">{{item.date}}</span>
        <span class="desc">{{item.desc}}555</span>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  name: 'BigTabsPages',
  props: {
    changeTabs: {
      type: Boolean,
      default: true
    }
  },
  setup (props) {
    const activeTabs = ref(props.changeTabs)
    const educationList = reactive([
      {
        name: 'one',
        date: '12-23',
        desc: '12-23喜报：我校获得2020年北京市社会科学基金一般项目立项'
      },
      {
        name: 'two',
        date: '12-23',
        desc: '12-23喜报：我校获得2020年北京市社会科学基金一般项目立项'
      },
      {
        name: 'three',
        date: '12-23',
        desc: '12-23喜报：我校获得2020年北京市社会科学基金一般项目立项'
      },
      {
        name: 'four',
        date: '12-23',
        desc: '12-23喜报：我校获得2020年北京市社会科学基金一般项目立项'
      },
      {
        name: 'five',
        date: '12-23',
        desc: '12-23喜报：我校获得2020年北京市社会科学基金一般项目立项'
      },
      {
        name: 'six',
        date: '12-23',
        desc: '12-23喜报：我校获得2020年北京市社会科学基金一般项目立项'
      }
    ])

    return {
      educationList,
      activeTabs
    }
  }
}
</script>

<style lang="less" scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  height: 240px;
  .grip-box {
    .grid-items {
      height: 100px;
      display: flex;
      border: 1px solid rgba(222, 222, 222, 0.2);
      overflow: hidden;
      border-radius: 20px;
      .date {
        width: 20%;
        background-color: #f4eded;
        text-align: center;
        line-height: 100px;
        cursor: pointer;
      }
      .date:hover {
        background-color: #0b46dc;
        color: white;
      }
      .desc {
        width: 80%;
        padding: 25px 10px;
        background-color: white;
      }
    }
  }
}
</style>
