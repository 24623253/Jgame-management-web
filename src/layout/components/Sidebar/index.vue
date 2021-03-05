<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        mode="vertical"
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
      >
        <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import variables from '@/styles/variables.scss'
import SidebarItem from './SidebarItem'

export default {
  components: { Logo, SidebarItem },

  computed: {
    ...mapGetters([
      'sidebar',
      'permission_routes'
    ]),

    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },

    isCollapse() {
      return !this.sidebar.opened
    },

    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // 如果设置路径，侧边栏将突出显示您设置的路径
      if (meta.activeMenu) return meta.activeMenu
      return path
    },

    variables() {
      return variables
    }
  }
}
</script>
