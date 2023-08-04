<template>
  <div class="Layout-wrap">
    <WebNavbar/>
    <WebHeader/>
    <WebMenu />
    <div class="pages" v-if="route.path === '/'">
      <HomeIndex />
    </div>
    <div class="pages" v-else>
      <router-view></router-view>
    </div>
    <div class="footer">
      <WebFooter />
    </div>
  </div>
</template>

<script>
import WebNavbar from '@/components/CommonConstants/web-navbar/web-navbar'
import WebHeader from '@/components/CommonConstants/web-header/web-header'
import WebMenu from '@/components/CommonConstants/web-menu/web-menu'
import WebFooter from '@/components/CommonConstants/web-footer/web-footer'
import HomeIndex from '@/views/home/home-index'
import { useRoute } from 'vue-router'

export default {
  name: 'LayoutPage',
  components: {
    WebNavbar,
    WebHeader,
    WebMenu,
    WebFooter,
    HomeIndex
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
  max-width: 2000px;
  margin: 0 auto;
}
.footer {
}
</style>
