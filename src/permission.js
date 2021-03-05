import router from './router'
import store from './store'
import NProgress from 'nprogress' // 进度条
import { Notification } from 'element-ui'

import getPageTitle from 'utils/get-page-title'
import { getToken } from 'utils/auth'

import 'nprogress/nprogress.css' // 进度条样式

NProgress.configure({ showSpinner: false })

// 白名单路由（不需要验证）
const whiteList = ['/login']

router.beforeEach(async(to, from, next) => {
  NProgress.start()

  // 设置 页面title
  document.title = getPageTitle(to.meta.title)

  // 判断用户是否拥有Token
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      // 如果用户 Token 存在，并跳转登录页，重定向路由
      next({ path: '/' })
      NProgress.done()
      return
    }
    // 判断用户是否拥有权限菜单
    const hasRoles = store.getters.roles && store.getters.roles.length > 0
    if (hasRoles) {
      next()
      return
    }
    try {
      // 全部菜单
      // const { roles } = await store.dispatch('user/getUserInfo')
      // const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

      // 服务器获取权限菜单
      await store.dispatch('user/getUserInfo')
      const accessRoutes = await store.dispatch('permission/remoteRoutes')
      accessRoutes.push({ path: '*', redirect: '/404', hidden: true })

      // 动态添加路由
      router.addRoutes(accessRoutes)

      // hack 方法，以便确保路由菜单完整性
      // 设置replace: true，这样导航就不会留下历史记录
      next({ ...to, replace: true })
    } catch (error) {
      // 删除Token,并转到登录页重新登录
      await store.dispatch('user/resetToken')
      Notification({
        message: error || '身份信息验证有误，请重新登录',
        type: 'error',
        title: '提示'
      })
      next(`/login?redirect=${ to.path }`)
      NProgress.done()
    }
    return
  }

  // 没有 Token 处理=>

  // 跳转页是白名单
  if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    next(`/login?redirect=${ to.path }`)
  }
  NProgress.done()
})

router.afterEach(() => {
  NProgress.done()
})
