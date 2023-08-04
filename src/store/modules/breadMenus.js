// 面包屑模块
export default {
  namespaced: true,
  state () {
    return {
      // 用户信息
      profile: {}
    }
  },
  mutations: {
    // 修改用户信息，payload就是用户信息对象
    setBreadcrumb (state, payload) {
      state.profile = payload
    }
  }
}
