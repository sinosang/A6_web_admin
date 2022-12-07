import { createStore } from 'vuex'
import appStore from "./moduls/app";


// 调用createStore
export default createStore({
  state: {
    name: 'hello'
  },
  mutations: {
    // 定义mutations，用于修改状态(同步)
    updatename(state, payload) {
      state.name = payload
    }
  },
  actions: {
    // 定义actions，用于修改状态(异步)
    // 2秒后更新状态
    updatename(context, payload) {
      setTimeout(() => {
        context.commit('updatename', payload)
      }, 1000)
    }

  },
  getters: {
    // 定义一个getters
    formatInfo(state) {
      //getters的方法
      return state.name + ' Tom'
    }
  },
  modules: {
  }
})

