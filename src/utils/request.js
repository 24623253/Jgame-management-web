import axios from 'axios'
import { Notification, MessageBox } from 'element-ui'
import store from '@/store'
import { getToken } from 'utils/auth'
import qs from 'qs'

const service = axios.create({
  timeout: 20000 // 请求时长
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['Authorization'] = getToken()
    }
    return config
  },
  error => {
    // 连接失败操作
    console.log(error)
    return Promise.reject(error)
  }
)

// 返回拦截器
service.interceptors.response.use(
  res => {
    if (res.data.code === '0' || res.data.tokenType) {
      return res.data
    } else {
      console.dir(res)
      Notification({
        message: res.data.message || '返回数据错误',
        type: 'error',
        title: '提示'
      })
      return Promise.reject(res.data)
    }
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误,错误类型:400'
          break
        case 401:
          MessageBox.confirm('您的用户信息已失效，您可以取消以停留在此页面，或再次登录', '提示', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            store.dispatch('user/resetToken').then(() => {
              window.location.reload()
            })
          })
          return
        case 403:
          error.message = '拒绝访问,错误类型:403'
          break
        case 404:
          error.message = '请求出错,错误类型:404'
          break
        case 408:
          error.message = '请求超时,错误类型:408'
          break
        case 500:
          error.message = '服务器错误,错误类型:500'
          break
        case 501:
          error.message = '服务未实现,错误类型:501;'
          break
        case 502:
          error.message = '网络错误,错误类型:502'
          break
        case 503:
          error.message = '服务不可用,错误类型:503'
          break
        case 504:
          error.message = '网络超时,错误类型:504'
          MessageBox.confirm('您的用户信息已失效，您可以取消以停留在此页面，或再次登录', '提示', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            store.dispatch('user/resetToken').then(() => {
              window.location.reload()
            })
          })
          break
        case 505:
          error.message = 'HTTP版本不受支持,错误类型:505'
          break
        default:
          error.message = `连接出错(${ error.response.status })!`
          break
      }
      if (error.message) Notification({ title: '提示', type: 'error', message: error.message })
    } else {
      let msg = '服务器请求出错'
      if (error.message.indexOf('timeout') !== -1) {
        msg = '请求超时'
      } else if (error.message.indexOf('Network Error') !== -1) {
        msg = '网络出错'
      }
      Notification({ title: '提示', type: 'error', message: msg })
    }
    return Promise.reject(error)
  }
)

service.get = (path, params, {
  baseURL = 'VUE_APP_BASE_API',
  auth,
  headers
} = {}) => service({
  baseURL: process.env[baseURL],
  url: path,
  method: 'get',
  params,
  transformRequest: obj => qs.stringify(obj),
  auth,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    ...headers
  }
})

service.post = (path, params, {
  baseURL = 'VUE_APP_BASE_API',
  auth,
  headers
} = {}) => service({
  baseURL: process.env[baseURL],
  url: path,
  method: 'post',
  data: params,
  transformRequest: obj => qs.stringify(obj),
  auth,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    ...headers
  }
})

service.postJson = (path, params, {
  baseURL = 'VUE_APP_BASE_API',
  auth,
  headers
} = {}) => service({
  baseURL: process.env[baseURL],
  url: path,
  method: 'post',
  data: params,
  transformRequest: obj => JSON.stringify(obj),
  auth,
  headers: {
    'Content-Type': 'application/json',
    ...headers
  }
})

service.put = (path, params, {
  baseURL = 'VUE_APP_BASE_API',
  auth,
  headers
} = {}) => service({
  baseURL: process.env[baseURL],
  url: path,
  method: 'put',
  data: params,
  transformRequest: obj => JSON.stringify(obj),
  auth,
  headers: {
    'Content-Type': 'application/json',
    ...headers
  }
})

service.patch = (path, params, {
  baseURL = 'VUE_APP_BASE_API',
  auth,
  headers
} = {}) => service({
  baseURL: process.env[baseURL],
  url: path,
  method: 'patch',
  data: params,
  transformRequest: obj => JSON.stringify(obj),
  auth,
  headers: {
    'Content-Type': 'application/json',
    ...headers
  }
})

service.delete = (path, params, {
  baseURL = 'VUE_APP_BASE_API',
  auth,
  headers
} = {}) => service({
  baseURL: process.env[baseURL],
  url: path,
  method: 'delete',
  params,
  transformRequest: obj => qs.stringify(obj),
  auth,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    ...headers
  }
})

export default service
