<template>
  <div class="profile-header-container">
    <img :src="SrcImg"/>
    <div class="web-header-box">
      <el-row class="profile-header-menu">
        <el-col :span="4">
          <div class="txt">
            <span>{{ Title }}</span>
            <div class="box-rotate"></div>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="breadcrumb">
            <WebPagesBreadcrumb/>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import WebPagesBreadcrumb from './components/web-pages-breadcrumb'

export default {
  name: 'WebPagesHeader',
  components: {
    WebPagesBreadcrumb
  },
  props: {
    Title: {
      type: String
    },
    SrcImg: {
      type: Object
    }
  }
}
</script>

<style lang="less" scoped>
.profile-header-container {
  max-width: 2000px;
  height: 350px;
  margin: 0 auto;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    background-size: cover;
    position: absolute;
  }

  .web-header-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .profile-header-menu {
      bottom: 0;
      display: flex;
      height: 50px;
      width: 1240px;
      margin: auto auto 0;
      background-color: rgba(19, 19, 19, 0.6);
      overflow: hidden;

      .txt {
        display: flex;
        color: white;
        height: 100%;
        background-color: #0b46dc;
        position: relative;

        span {
          width: 80%;
          line-height: 50px;
          text-align: center;
        }

        .box-rotate {
          position: absolute;
          height: 100px;
          width: 100px;
          right: -30px;
          background-color: #0b46dc;
          transform: rotate(45deg);
        }
      }

      .breadcrumb {
        color: white;
      }
    }
  }
}
</style>
