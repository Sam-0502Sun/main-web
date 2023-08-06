<template>
  <div>
    <WebPagesHeader :Title="Title" :SrcImg="SrcImg" />
  </div>
  <div class="body">
    <OrganizationMainIndex />
  </div>
</template>

<script>
import WebPagesHeader from '@/components/CommonConstants/web-pages-header/web-pages-header'
import OrganizationMainIndex from './components/organization-main-index'
import SrcImg from '@/assets/images/5.jpg'
import { ref } from 'vue'

export default {
  name: 'organization-index',
  components: {
    WebPagesHeader,
    OrganizationMainIndex
  },
  setup () {
    const Title = ref('组织机构')

    return {
      Title,
      SrcImg
    }
  }
}
</script>

<style lang="less" scoped>
.body {
  max-width: 1240px;
  margin: 0 auto;
}
</style>
