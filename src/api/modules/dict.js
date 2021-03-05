/*
*  DictSelect 封装 接口
*/
import request from 'utils/request'

// 分页
function dictSelect(params, baseURL = 'VUE_APP_BASE_API') {
  return request.get('/dict/items', params, {
    baseURL
  })
}

function dictCascader(params, baseURL = 'VUE_APP_BASE_API') {
  return request.get('/dict/tree', params, {
    baseURL
  })
}

export default {
  dictSelect,
  dictCascader
}
