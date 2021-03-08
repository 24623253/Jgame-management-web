import * as auth from 'utils/auth'
import { resetRouter } from '@/router'
import $api from '@/api'

const state = {
  token: auth.getToken(),
  roles: [],
  name: '',
  avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },

  SET_ROLES: (state, roles) => {
    state.roles = roles
  },

  SET_NAME: (state, name) => {
    state.name = name
  }
}

const actions = {
  // 登录
  login({ commit }, loginForm) {
    const { username, password } = loginForm
    const params = {
      username: username.trim(), // 去除字符串头尾空格
      password,
      grant_type: 'password'
    }
    return new Promise((resolve, reject) => {
      $api.userInfo.token(params).then(res => {
        const { token } = res.data
        // const token = `Bearer ${ value }`
        commit('SET_TOKEN', token)
        auth.setToken(token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 获取用户信息
  getUserInfo({ commit }) {
    return new Promise((resolve, reject) => {
      $api.userInfo.getInfo().then(res => {
        if (!res.data) {
          reject('用户校验失败，请重新登录')
        }

        const { name, authorities } = res.data

        const roles = authorities.map(item => item.authority)

        // roles 必须是非空数组
        if (!roles || !roles.length) {
          reject('暂无权限,请联系管理员')
        }
        commit('SET_NAME', name)
        commit('SET_ROLES', roles)
        resolve({ roles })
      })
    })
  },

  // 清除 token 及 用户数据
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      auth.removeToken()
      resetRouter()
      resolve()
    })
  },

  // 退出
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      $api.userInfo.logout().then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        auth.removeToken()
        resetRouter()
        resolve()
      }).catch(() => reject())
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
