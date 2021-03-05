import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * hidden: true                  如果设置为true，项目将不会显示在侧栏中(默认为false)
 * alwaysShow: true              如果设置为true，将始终显示根菜单，
 *                               如果不设置，当项目有多个子路由时，它将成为嵌套模式，否则不显示根菜单
 * redirect: noRedirect          如果设置noRedirect，则不会在  breadcrumb 中重定向(阻止面包屑导航跳转)
 * name:'router-name'            用于使用 <keep-alive>
 * meta : {
    title: 'title'               侧栏和面包屑的显示名称
    icon: 'svg-name'             侧边栏 icon
    noCache: true                如果设置为true，页面将不会被缓存(默认为false)
    affix: true                  如果设置为true，则标记将附加在 tags-view 中
    breadcrumb: false            如果设置为false，则该项将隐藏在breadcrumb中(默认为true)
    activeMenu: '/example/list'  如果设置路径，侧栏将高亮显示您设置的路径
  }
 */

/**
 * constantRoutes
 * 没有权限要求的基本页
 * 所有角色都可以访问
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('views/login/index.vue'),
    name: 'Login',
    meta: { title: '登录' },
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'el-icon-s-home', affix: true }
      }
    ]
  },
  {
    path: '/game-swiper',
    component: Layout,
    redirect: '/dashboard',
    alwaysShow: false,
    meta: { noCache: true, icon: 'el-icon-connection', title: '综合导航' },
    children: [
      // {
      //   component: () => import('views/service/tombStone/index.vue'),
      //   hidden: false,
      //   id: '3eb25f17b8f36719d4c5fa88df51b9af',
      //   isLeaf: true,
      //   meta: { noCache: true, title: '墓碑服务管理' },
      //   name: 'ServiceTombStone',
      //   nodeLevel: 1,
      //   parent: { $ref: '$.data[5]' },
      //   parentId: '5205e5899315274dccdff747689b3f38',
      //   path: 'tomb-stone',
      //   type: 2
      // },
      {
        component: () => import('views/game-swiper/index.vue'),
        hidden: false,
        // id: 'ee33551f34c6baa160e153e31ef31b8b',
        isLeaf: true,
        meta: { noCache: true, title: '轮播管理' },
        name: 'SwiperList',
        nodeLevel: 1,
        parent: { $ref: '$.data[1]' },
        // parentId: 'e578096f68f74bc2a993b07cf0e0b8eb',
        path: 'swiper',
        type: 2
      }
    ]
  },
  {
    path: '/game',
    component: Layout,
    redirect: '/dashboard',
    alwaysShow: false,
    meta: { noCache: true, icon: 'el-icon-connection', title: 'app游戏管理' },
    children: [
      {
        component: () => import('views/game/app-game/index.vue'),
        hidden: false,
        // id: 'ee33551f34c6baa160e153e31ef31b8b',
        isLeaf: true,
        meta: { noCache: true, title: 'App游戏列表' },
        name: 'app-game',
        nodeLevel: 1,
        parent: { $ref: '$.data[1]' },
        // parentId: 'e578096f68f74bc2a993b07cf0e0b8eb',
        path: 'app-game',
        type: 2
      },
      {
        component: () => import('views/game/app-title/index.vue'),
        hidden: false,
        // id: 'ee33551f34c6baa160e153e31ef31b8b',
        isLeaf: true,
        meta: { noCache: true, title: '游戏主题管理' },
        name: 'app-title',
        nodeLevel: 1,
        parent: { $ref: '$.data[1]' },
        // parentId: 'e578096f68f74bc2a993b07cf0e0b8eb',
        path: 'app-title',
        type: 2
      },
      {
        component: () => import('views/game/app-type/index.vue'),
        hidden: false,
        // id: 'ee33551f34c6baa160e153e31ef31b8b',
        isLeaf: true,
        meta: { noCache: true, title: '游戏类型管理' },
        name: 'app-type',
        nodeLevel: 1,
        parent: { $ref: '$.data[1]' },
        // parentId: 'e578096f68f74bc2a993b07cf0e0b8eb',
        path: 'app-type',
        type: 2
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/dashboard',
    alwaysShow: false,
    meta: { noCache: true, icon: 'el-icon-connection', title: '系统管理' },
    children: [
      {
        component: () => import('views/system/admin/index.vue'),
        hidden: false,
        id: 'ee33551f34c6baa160e153e31ef31b8b',
        isLeaf: true,
        meta: { noCache: true, title: '用户管理' },
        name: 'SystemAdminList',
        nodeLevel: 1,
        parent: { $ref: '$.data[6]' },
        parentId: 'e578096f68f74bc2a993b07cf0e0b8eb',
        path: 'admin/list',
        type: 2
      }
      // {
      //   component: () => import('views/system/role/index.vue'),
      //   hidden: false,
      //   id: 'e5daba69aed185b3cf9be674331d9e89',
      //   isLeaf: true,
      //   meta: { noCache: true, title: '角色列表' },
      //   name: 'SystemRoleList',
      //   nodeLevel: 1,
      //   parent: { $ref: '$.data[6]' },
      //   parentId: 'e578096f68f74bc2a993b07cf0e0b8eb',
      //   path: 'role/list',
      //   type: 2
      // },
      // {
      //   component: () => import('views/system/menu/index.vue'),
      //   hidden: false,
      //   id: '00c18fa5fa62bcdb42221d5806a8083c',
      //   isLeaf: true,
      //   meta: { noCache: true, title: '菜单列表' },
      //   name: 'SystemMenuList',
      //   nodeLevel: 1,
      //   parent: { $ref: '$.data[6]' },
      //   parentId: 'e578096f68f74bc2a993b07cf0e0b8eb',
      //   path: 'menu/list',
      //   type: 2
      // }
    ]
  },
  // {
  //   path: '/service',
  //   alwaysShow: false,
  //   component: 'layout/index',
  //   hidden: false,
  //   id: '5205e5899315274dccdff747689b3f38',
  //   meta: { noCache: true, icon: 'el-icon-connection', title: '服务管理' },
  //   name: '服务管理',
  //   nodeLevel: 0,
  //   redirect: '/service/tomb',
  //   rootId: '5205e5899315274dccdff747689b3f38',
  //   type: 1
  // },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/404',
    component: () => import('views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('views/error-page/401.vue'),
    hidden: true
  }
]

/**
 * asyncRoutes
 * 需要根据用户角色动态加载的路由（动态菜单）
 */

/* 系统管理 */
import System from 'views/system/system.router'

export const asyncRoutes = [
  System,
  // 404页面 必须放在最后! !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // 'history'模式 后端支持 打开
  scrollBehavior: () => ({ y: 0 }), // 页面切换，滚动条回顶部
  routes: constantRoutes
})

const router = createRouter()

// 刷新(重置)路由
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // 刷新路由
}

export default router
