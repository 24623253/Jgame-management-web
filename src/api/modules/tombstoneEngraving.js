/*
*  系统管理-部门管理 接口
*/
import request from 'utils/request'

// 列表
function list(params) {
  return request.get('/api/tombstone/engraving/page', params)
}

// 添加
function add(params) {
  return request.postJson('/api/tombstone/engraving/register', params)
}

// 修改
function edit(params) {
  return request.put('/api/tombstone/engraving', params)
}

// 详情
function detail(id) {
  return request.get(`/api/tombstone/engraving/${ id }`)
}

// 删除
function _delete(id) {
  return request.delete(`/api/tombstone/engraving/${ id }`)
}

// 查找所有墓碑样式
function allStoneStyle() {
  return request.get(`/api/tombstone/style/allStoneStyle`)
}

function info(params){
  return request.get('/api/burial/detail', params)
}
export default {
  list,
  add,
  edit,
  detail,
  _delete,
  allStoneStyle,
  info
}