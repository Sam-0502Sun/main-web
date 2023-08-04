<template>
  <div>
    <ProfileHeader />
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import ProfileHeader from './components/profile-header'

export default {
  name: 'CollegeProfile',
  components: {
    ProfileHeader
  }
}
</script>

<style lang="less" scoped>

</style>
