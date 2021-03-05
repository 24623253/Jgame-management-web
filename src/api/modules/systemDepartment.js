/*
*  系统管理-部门管理 接口
*/
import request from 'utils/request'

// 获取城市列表
function list(params) {
  return request.get('/api/manage/department/page', params)
}

// 添加
function add(params) {
  return request.postJson('/api/manage/department', params)
}

// 修改
function edit(params) {
  return request.put('/api/manage/department', params)
}

// 详情
function detail(id) {
  return request.get(`/api/manage/department/${ id }`)
}

// 删除
function _delete(id) {
  return request.delete(`/api/manage/department/${ id }`)
}

// 查询部门下员工列表
function deptToSearchStaff(deptId) {
  return request.get('/api/manage/staff/allbyDept', { deptId })
}

export default {
  list,
  add,
  edit,
  detail,
  _delete,
  deptToSearchStaff
}
