<template>
  <div class="profile-header-container">
    <el-row class="profile-header-menu">
      <el-col :span="4">
        <div class="txt">
          <span>学院概况</span>
          <div class="box-rotate"></div>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="breadcrumb">
          <ProfileBreadcrumb />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ProfileBreadcrumb from './profile-breadcrumb'

export default {
  name: 'ProfileHeader',
  components: {
    ProfileBreadcrumb
  }
}
</script>

<style lang="less" scoped>
.profile-header-container {
  max-width: 2000px;
  height: 350px;
  margin: 0 auto;
  background-image: url("@/assets/images/5.jpg");
  background-size: cover;
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
</style>
