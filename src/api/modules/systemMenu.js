/*
*  菜单 接口
*/
import request from 'utils/request'

// 列表
function list(params) {
  return request.get('/sys/display/list', params, { baseURL: 'VUE_APP_AUTH_API' })
}

// 详情
function detail(id) {
  return request.get(`/sys/display/${ id }`, {}, { baseURL: 'VUE_APP_AUTH_API' })
}

// 添加
function add(params) {
  return request.postJson('/sys/display', params, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 修改
function edit(params) {
  return request.put('/sys/display', params, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 删除
function _delete(id) {
  return request.delete(`/sys/display/${ id }`, {}, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

export default {
  list,
  detail,
  add,
  edit,
  _delete
}
