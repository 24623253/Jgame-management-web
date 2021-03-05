/*
*  app游戏管理-app主题  接口
*/
import request from 'utils/request'

// 分页
function list(params) {
  return request.get('/api/app-title/list', params, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 主题下拉
function allList(params) {
  return request.get('/api/app-title/all-list', params, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 添加
function add(params) {
  return request.postJson('/api/app-title/add', params, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 修改
function edit(params) {
  return request.put('/api/app-title/update', params, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 详情
function detail(id) {
  return request.get(`/api/app-title/list?id=${ id }`, {}, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 删除
function _delete(id) {
  return request.delete(`/api/app-title/delete?id=${ id }`, {}, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

export default {
  list,
  allList,
  add,
  edit,
  detail,
  _delete
}
