import Vue from 'vue'
import App from './App.vue'

import Cookies from 'js-cookie'
import Element from 'element-ui'

import router from './router'
import store from './store'
import api from './api'
import * as filters from './filters' // 全局过滤器
import globalComponents from './components' // 全局组件

import './permission' // 权限控制
import './icons' // icon
import './utils/error-logs' // 错误日志

import 'normalize.css/normalize.css' // css reset
import './styles/element-variables.scss'
import './styles/index.scss' // 全局样式调整

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // 读取 / 设置 Element-UI 默认尺寸
})

Vue.use(globalComponents)
Vue.prototype.$store = store
Vue.prototype.$api = api

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
