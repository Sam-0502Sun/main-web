<template>
  <div class="Layout-wrap">
    <WebNavbar/>
    <WebHeader/>
    <WebMenu />
    <div class="pages">
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

export default {
  name: 'LayoutPage',
  components: {
    WebNavbar,
    WebHeader,
    WebMenu,
    WebFooter
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
