/*
*  app-游戏  接口
*/
import request from 'utils/request'

// 分页
function list(params) {
  return request.get('/api/app-game/list', params, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 详情
function detail(id) {
  return request.get(`/api/app-game/list?id=${ id }`, {}, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 添加
function add(params) {
  return request.postJson('/api/app-game/add', params, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 修改
function edit(params) {
  return request.put('/api/app-game/update', params, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 删除
function _delete(id) {
  return request.delete(`/api/app-game/delete?id=${ id }`, {}, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

export default {
  list,
  add,
  edit,
  detail,
  _delete
}
