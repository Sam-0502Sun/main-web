import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import breadcrumb from './modules/breadMenus'
import education from './modules/education/education'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    breadcrumb,
    education
  },
  // 配置插件
  plugins: [
    // 默认存储在localStorage
    createPersistedState({
      // 本地存储名字
      key: 'main-web',
      // 指定需要存储的模块
      paths: ['education']
    })
  ]
})
