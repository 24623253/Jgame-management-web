import defaultSettings from '@/settings'
import variables from '@/styles/element-variables.scss'

const { showSettings, tagsView, fixedHeader, sidebarLogo } = defaultSettings

const state = {
  theme: variables.theme,
  showSettings,
  tagsView,
  fixedHeader,
  sidebarLogo
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // state.hasOwnProperty(key)
    // 判断对象是否包含特定的自身（非继承）属性。=>布尔值
    // eslint 报错，但不影响运行，完成写法如下：
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
