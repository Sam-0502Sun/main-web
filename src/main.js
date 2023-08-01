import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局样式
import '@/assets/styles/common.less'
// 引入ElementPlus组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
