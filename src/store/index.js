import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

// 文档地址：https://webpack.js.org/guides/dependency-management/#requirecontext
/* 获取 modules 文件夹下，所有包含.js的文件 */
const modulesFiles = require.context('./modules', true, /\.js$/)

// 不需要 import 引入文件，他们将自动将 modules 目录下的文件引入到 VueX 模块中
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // './app.js' => 'app' 自动匹配后缀
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules,
  getters
})

export default store
