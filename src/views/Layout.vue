<template>
  <div class="Layout-wrap">
    <WebNavbar/>
    <WebHeader/>
    <WebMenu />
    <div class="pages">
      <router-view/>
    </div>
  </div>
</template>

<script>
import WebNavbar from '@/components/CommonConstants/web-navbar/web-navbar'
import WebHeader from '@/components/CommonConstants/web-header/web-header'
import WebMenu from '@/components/CommonConstants/web-menu/web-menu'

export default {
  name: 'LayoutPage',
  components: {
    WebNavbar,
    WebHeader,
    WebMenu
  }
}
</script>

<style lang="less" scoped>
.pages {
  max-width: 2000px;
  margin: 0 auto;
}
</style>
