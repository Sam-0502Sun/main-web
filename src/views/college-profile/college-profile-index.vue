<template>
  <div>
    <ProfileHeader />
  </div>
  <div class="pages" v-if="route.path === '/xygk'">
    <DefaultPage />
  </div>
  <div class="pages" v-else>
    <router-view></router-view>
  </div>
</template>

<script>
import ProfileHeader from './components/profile-header'
import DefaultPage from './default-page/default-page'
import { useRoute } from 'vue-router'

export default {
  name: 'CollegeProfile',
  components: {
    ProfileHeader,
    DefaultPage
  },
  setup () {
    const route = useRoute()

    return {
      route
    }
  }
}
</script>

<style lang="less" scoped>
.pages {
  max-width: 1240px;
  margin: 0 auto;
}
</style>
