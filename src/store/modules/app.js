import Cookies from 'js-cookie'

const state = {
  sidebar: {
    opened: !!+Cookies.get('sidebarStatus'),
    withoutAnimation: false
  },
  device: 'desktop', // mobile / desktop
  size: Cookies.get('size') || 'medium'
}

const mutations = {
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 1)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },

  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    Cookies.set('sidebarStatus', state.sidebar.opened ? 1 : 0)
  },

  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },

  SET_SIZE: (state, size) => {
    state.size = size
    Cookies.set('size', size)
  }
}

const actions = {
  closeSidebar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },

  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },

  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },

  setSize({ commit }, size) {
    commit('SET_SIZE', size)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
