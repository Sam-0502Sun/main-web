<template>
  <div class="logo-page-components-container">
    <div v-if="fatherKey === A">
      <div v-for="item in imgList" :key="item.name" class="img-box">
        <img v-if="activeLogoTabs === item.name" :src="item.src"/>
      </div>
    </div>
    <div v-else>
      <div v-for="item in imgList" :key="item.name">
        <div v-if="activeLogoTabs === item.name && item.children" class="scenery">
          <div v-for="i in item.children" :key="i.name">
            <img class="lots-img" :src="i.src"/>
          </div>
        </div>
        <div class="img-box" v-else>
          <img class="single-img" v-if="activeLogoTabs === item.name" :src="item.src"/>
        </div>
      </div>
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
      console.log(activeLogoTabs.value)
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

    .single-img {
      display: block;
      width: 500px;
      height: 400px;
      margin: 0 auto;
    }
  }
  .scenery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 20px;
    .lots-img {
      width: 200px;
      height: 100px;
    }
  }
}

</style>
