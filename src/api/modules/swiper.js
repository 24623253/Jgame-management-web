/*
*  系统设置-管理员列表  接口
*/
import request from 'utils/request'

// 分页
function list(params) {
  return request.get('/api/swiper/list', params, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 添加
function add(params) {
  return request.postJson('/api/swiper/add', params, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 修改
function edit(params) {
  return request.put('/api/swiper/update', params, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 详情
function detail(id) {
  return request.get(`/api/swiper/list?id=${ id }`, {}, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 删除
function _delete(id) {
  return request.delete(`/api/swiper/del?id=${ id }`, {}, {
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
