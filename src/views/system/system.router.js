import Layout from '@/layout/index.vue'

export default {
  path: '/system',
  component: Layout,
  redirect: '/system/organization/list',
  name: 'System',
  meta: {
    title: '系统管理',
    icon: 'el-icon-setting'
  },
  children: [
    {
      path: 'organization/list',
      component: () => import('views/system/organization/index.vue'),
      name: 'SystemOrganizationList',
      meta: { title: '机构管理' }
    },
    {
      path: 'department/list',
      component: () => import('views/system/department/index.vue'),
      name: 'SystemDepartmentList',
      meta: { title: '部门管理' }
    },
    {
      path: 'staff/list',
      component: () => import('views/system/staff/index.vue'),
      name: 'SystemStaffList',
      meta: { title: '员工管理' }
    },
    {
      path: 'admin/list',
      component: () => import('views/system/admin/index.vue'),
      name: 'SystemAdminList',
      meta: { title: '用户管理' }
    },
    {
      path: 'role/list',
      component: () => import('views/system/role/index.vue'),
      name: 'SystemRoleList',
      meta: { title: '角色列表' }
    },
    {
      path: 'menu/list',
      component: () => import('views/system/menu/index.vue'),
      name: 'SystemMenuList',
      meta: { title: '菜单列表' }
    },
    {
      path: 'client/list',
      component: () => import('views/system/client/index.vue'),
      name: 'SystemClientList',
      meta: { title: '客户端列表' }
    }
  ]
}
