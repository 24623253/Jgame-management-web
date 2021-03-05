import $api from '@/api'

const state = {
  areas: []
}

const mutations = {
  SET_PROVINCES: (state, list) => {
    state.areas = list
  }
}

const actions = {
  // 获取全部地区
  getProvincesTreeList({ commit }) {
    return new Promise(resolve => {
      $api.commonData.provinceTree().then(res => {
        commit('SET_PROVINCES', res.data)
        resolve(res)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
