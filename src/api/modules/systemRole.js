/*
*  角色  接口
*/
import request from 'utils/request'

// 列表
function list(params) {
  return request.get('/sys/role/treeList', params, { baseURL: 'VUE_APP_AUTH_API' })
}

// 添加
function add(params) {
  return request.postJson('/sys/role', params, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 修改
function edit(params) {
  return request.put('/sys/role', params, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 详情
function detail(id) {
  return request.get(`/sys/role/${ id }`, {}, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 删除
function _delete(id) {
  return request.delete(`/sys/role/${ id }`, {}, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 选中权限
function checkedList(params) {
  return request.get('sys/role-account/checked', params, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 授权
function setRole(params) {
  return request.postJson('/sys/role-account/add', params, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

export default {
  list,
  add,
  edit,
  detail,
  _delete,
  checkedList,
  setRole
}
