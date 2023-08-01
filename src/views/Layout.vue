<template>
  <div>
    <WebNavbar />
  </div>
  <div>
    <router-view />
  </div>
</template>

<script>
import WebNavbar from '@/components/web-navbar/web-navbar'

export default {
  name: 'LayoutPage',
  components: {
    WebNavbar
  }
}
</script>

<style lang="less" scoped>

</style>
