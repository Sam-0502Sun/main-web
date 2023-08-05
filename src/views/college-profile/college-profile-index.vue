<template>
  <div>
    <ProfileHeader />
  </div>
  <div class="pages" v-if="route.path === '/xygk'">
    <DefaultPageIndex />
  </div>
  <div class="pages" v-else>
    <CollegeIndex />
  </div>
</template>

<script>
import ProfileHeader from './components/profile-header'
import DefaultPageIndex from './default-page/default-page-index'
import CollegeIndex from './collage/college-index'
import { useRoute } from 'vue-router'

export default {
  name: 'CollegeProfile',
  components: {
    ProfileHeader,
    DefaultPageIndex,
    CollegeIndex
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
