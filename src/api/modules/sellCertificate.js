/*
*  出售管理-墓证管理列表 接口
*/
import request from 'utils/request'

// 列表
function list(params) {
  return request.get('/api/busi/settlement-info/tombCertificatePage', params)
}

export default {
  list
}
