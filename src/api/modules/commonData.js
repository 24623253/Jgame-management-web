/*
*  公共数据 接口
*/
import request from 'utils/request'

// 获取城市列表
function cityList(parentId = 410000) {
  return request.get('/api/manage/region/son', { parentId })
}

// 获取省市区树状结构
function provinceTree() {
  return request.get('/api/manage/region/tree')
}

// 查询城市下机构列表
function cityToSearchOrgan(city) {
  return request.get('/api/manage/organ/allbycity', { city })
}

export default {
  cityList,
  provinceTree,
  cityToSearchOrgan
}
