<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in levelList"
        :key="item.path"
      >
        <span
          v-if="item.redirect === 'noRedirect'|| index === levelList.length - 1"
          class="no-redirect"
        >
          {{ item.meta.title }}
        </span>
        <a v-else @click.prevent="handleLink(item)">
          {{ item.meta.title }}
        </a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import pathToRegexp from 'path-to-regexp'

export default {
  name: 'Breadcrumb',

  data() {
    return {
      levelList: null
    }
  },

  watch: {
    // 通过watch 时间使路由重定向时，不需要更新 breadcrumbs
    $route(route) {
      if (route.path.startsWith('/redirect/')) return
      this.getBreadcrumb()
    }
  },

  created() {
    this.getBreadcrumb()
  },

  methods: {
    getBreadcrumb() {
      // 仅展示 route 的 meta.title 属性
      let matched = this.$route.matched.filter(
        item => item.meta && item.meta.title)
      const first = matched[0]

      if (!this.isDashboard(first)) {
        matched = [{
          path: '/dashboard',
          meta: { title: '首页' }
        }].concat(matched)
      }

      this.levelList = matched.filter(item =>
        item.meta && item.meta.title && item.meta.breadcrumb !== false)
    },

    isDashboard(route) {
      const name = route && route.name
      if (!name) return false
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
    },

    pathCompile(path) {
      // 解决这个问题 https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route
      const toPath = pathToRegexp.compile(path)
      return toPath(params)
    },

    handleLink(item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(this.pathCompile(path))
    }
  }
}
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: default;
    user-select: none;
  }
}
</style>
