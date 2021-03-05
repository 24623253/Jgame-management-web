/*
*  系统管理-员工管理 接口
*/
import request from 'utils/request'

// 获取城市列表
function list(params) {
  return request.get('/api/manage/staff/page', params)
}

// 添加
function add(params) {
  return request.postJson('/api/manage/staff', params)
}

// 修改
function edit(params) {
  return request.put('/api/manage/staff', params)
}

// 详情
function detail(id) {
  return request.get(`/api/manage/staff/${ id }`)
}

// 删除
function _delete(id) {
  return request.delete(`/api/manage/staff/${ id }`)
}

export default {
  list,
  add,
  edit,
  detail,
  _delete
}
