<template>
  <div class="logo-page-components-container">
    <div v-for="item in imgList" :key="item.name" class="img-box">
      <img v-if="activeLogoTabs === item.name" :src="item.src" />
    </div>
  </div>
</template>

<script>
/*
学校标识(collage->logoPage->logoPageIndex)，学院导图(collage->mapsPage->mapsPagesIndex)页面导入此组件
* */
import { reactive, ref, watch } from 'vue'

export default {
  name: 'LogoPageComponentsIndex',
  props: {
    changeLogoTabs: {
      type: String
    },
    imgData: {
      type: Object
    },
    key: {
      type: String
    }
  },
  setup (props) {
    const fatherKey = ref(props.key)
    const activeLogoTabs = ref(props.changeLogoTabs)
    const imgList = reactive(props.imgData)
    watch(props, () => {
      activeLogoTabs.value = props.changeLogoTabs
    })

    return {
      activeLogoTabs,
      imgList,
      fatherKey
    }
  }
}
</script>

<style lang="less" scoped>
.logo-page-components-container {
  width: 100%;
  height: 100%;

  .img-box {
    max-width: 800px;
    margin: 80px auto;

    img {
      display: block;
      width: 500px;
      height: 400px;
      margin: 0 auto;
    }
  }
}

</style>
