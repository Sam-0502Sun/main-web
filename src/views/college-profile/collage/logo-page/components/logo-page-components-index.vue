<template>
  <div class="logo-page-components-container">
    <div v-for="item in imgList" :key="item.name" class="img-box">
      <img v-if="activeLogoTabs === item.name" :src="item.src"/>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: 'LogoPageComponentsIndex',
  props: {
    changeLogoTabs: {
      type: String
    }
  },
  setup (props) {
    const activeLogoTabs = ref(props.changeLogoTabs)
    const imgList = ref([
      {
        name: 'A',
        src: require('@/assets/images/sunset-7504891_960_720.jpg')
      },
      {
        name: 'B',
        src: require('@/assets/images/1050-800x800.jpg')
      },
      {
        name: 'C',
        src: require('@/assets/images/sunrise-7493833_1280.jpg')
      },
      {
        name: 'D',
        src: require('@/assets/images/autumn-7562289_960_720.jpg')
      }
    ])
    watch(props, () => {
      activeLogoTabs.value = props.changeLogoTabs
      console.log(activeLogoTabs.value)
    })

    return {
      activeLogoTabs,
      imgList
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
