/*
*  客户端  接口
*/
import request from 'utils/request'

// 全部列表
function allList() {
  return request.get('/auth/client-details/list', {}, { baseURL: 'VUE_APP_AUTH_API' })
}

// 列表
function list(params) {
  return request.get('/auth/client-details/pageList', params, { baseURL: 'VUE_APP_AUTH_API' })
}

// 添加
function add(params) {
  return request.postJson('/auth/client-details', params, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 修改
function edit(params) {
  return request.put('/auth/client-details', params, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 详情
function detail(id) {
  return request.get(`/auth/client-details/${ id }`, {}, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 删除
function _delete(id) {
  return request.delete(`/auth/client-details/${ id }`, {}, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 修改权限
function editClientRole(params) {
  return request.patch(`/auth/account/clients`, params, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

export default {
  allList,
  list,
  add,
  edit,
  detail,
  _delete,
  editClientRole
}
