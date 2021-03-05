/*
*  系统管理-机构管理 接口
*/
import request from 'utils/request'

// 获取城市列表
function list(params) {
  return request.get('/api/manage/organ/page', params)
}

// 添加
function add(params) {
  return request.postJson('/api/manage/organ', params)
}

// 修改
function edit(params) {
  return request.put('/api/manage/organ', params)
}

// 详情
function detail(id) {
  return request.get(`/api/manage/organ/${ id }`)
}

// 删除
function _delete(id) {
  return request.delete(`/api/manage/organ/${ id }`)
}

// 查询机构下部门列表
function organToSearchDept(organId) {
  return request.get('/api/manage/department/allbyOrgan', { organId })
}

// 查询机构下墓台列表
function organToSearchPlatform(id) {
  return request.get(`/api/cemetery/tomb-area/platform/${ id }`)
}

function organToSearchModel(id) {
  return request.get(`/api/cemetery/tomb-grave/type/${ id }`)
}

export default {
  list,
  add,
  edit,
  detail,
  _delete,
  organToSearchDept,
  organToSearchPlatform,
  organToSearchModel
}
