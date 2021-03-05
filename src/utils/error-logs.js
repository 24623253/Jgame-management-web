import Vue from 'vue'
import store from '@/store'
import settings from '@/settings'
import { isString, isArray } from 'utils/validate'

const { errorLog: needErrorLog } = settings

function checkNeed() {
  const env = process.env.NODE_ENV
  if (isString(needErrorLog)) return env === needErrorLog

  if (isArray(needErrorLog)) return needErrorLog.includes(env)
}

if (checkNeed()) {
  Vue.config.errorHandler = function(err, vm, info) {
    // detail see https://forum.vuejs.org/t/dispatch-in-vue-config-errorhandler-has-some-problem/23500
    store.dispatch('errorLog/addErrorLog', {
      err,
      vm,
      info,
      url: window.location.href
    })
    console.error(err, vm, info)
  }
}
