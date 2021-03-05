/*
*  权限 接口
*/
import request from 'utils/request'

// 树状列表
function treeList() {
  return request.get('/sys/display/treeList', {}, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 选中权限
function checkedList(id) {
  return request.get(`/sys/role-authority/${ id }`, {}, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

// 授权
function setPower({ id, params }) {
  return request.postJson(`/sys/role-authority/${ id }`, params, {
    baseURL: 'VUE_APP_AUTH_API'
  })
}

export default {
  treeList,
  checkedList,
  setPower
}
