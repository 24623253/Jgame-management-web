const state = {
  logs: []
}

const mutations = {
  CLEAR_ERROR_LOG: state => {
    state.logs.splice(0)
  },

  ADD_ERROR_LOG: (state, log) => {
    state.logs.push(log)
  }
}

const actions = {
  clearErrorLog({ commit }) {
    commit('CLEAR_ERROR_LOG')
  },

  addErrorLog({ commit }, log) {
    commit('ADD_ERROR_LOG', log)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
