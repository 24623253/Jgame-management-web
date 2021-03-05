<template>
  <div
    :class="{'show':show}"
    class="header-search"
  >
    <svg-icon
      icon-class="search"
      class-name="search-icon"
      @click.stop="click"
    />
    <el-select
      v-model="search"
      class="header-search-select"
      filterable
      default-first-option
      remote
      :remote-method="querySearch"
      placeholder="快捷搜索"
      @change="change"
    >
      <el-option
        v-for="item in options"
        :key="item.path"
        :label="item.title.join(' > ')"
        :value="item"
      />
    </el-select>
  </div>
</template>

<script>
// fuse是一个轻量级的模糊搜索模块
// 让搜索结果更符合预期
import path from 'path'
import Fuse from 'fuse.js'

export default {
  name: 'HeaderSearch',

  data() {
    return {
      search: '',
      options: [],
      searchPool: [],
      show: false,
      fuse: undefined
    }
  },

  computed: {
    routes() {
      return this.$store.getters.permission_routes
    }
  },

  watch: {
    $route() {
      this.searchPool = this.generateRoutes(this.routes)
    },

    searchPool(list) {
      this.initFuse(list)
    },

    show(value) {
      if (value) {
        document.body.addEventListener('click', this.close)
      } else {
        document.body.removeEventListener('click', this.close)
      }
    }
  },

  mounted() {
    this.searchPool = this.generateRoutes(this.routes)
  },

  methods: {
    querySearch(query) {
      if (query !== '') {
        this.options = this.fuse.search(query)
      } else {
        this.options = []
      }
    },

    // 让搜索结果更符合期望，过滤掉可以显示在侧边栏的路由
    // 并生成对应标题
    generateRoutes(routes, basePath = '/', prefixTitle = []) {
      let res = []

      for (const router of routes) {
        // 过滤隐藏路由
        if (routes.hidden) continue

        const data = {
          path: path.resolve(basePath, router.path),
          title: [...prefixTitle]
        }

        if (router.meta && router.meta.title) {
          data.title = [...data.title, router.meta.title]
          if (router.redirect !== 'noRedirect') {
            // 只推送带有标题的路由
            // 特殊情况:需要排除父路由没有重定向
            res.push(data)
          }
        }

        // 递归子路由
        if (router.children) {
          const tempRoutes = this.generateRoutes(router.children, data.path, data.title)
          if (tempRoutes.length >= 1) {
            res = [...res, ...tempRoutes]
          }
        }
      }
      return res
    },

    initFuse(list) {
      this.fuse = new Fuse(list, {
        shouldSort: true,
        threshold: 0.4,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [{
          name: 'title',
          weight: 0.7
        }, {
          name: 'path',
          weight: 0.3
        }]
      })
    },

    click() {
      this.show = !this.show
      if (this.show) {
        this.$refs.headerSearchSelect && this.$refs.headerSearchSelect.focus()
      }
    },

    close() {
      this.$refs.headerSearchSelect && this.$refs.headerSearchSelect.blur()
      this.options = []
      this.show = false
    },

    change(val) {
      this.$router.push(val.path)
      this.search = ''
      this.options = []
      this.$nextTick(() => {
        this.show = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-search {
    font-size: 0 !important;

    .search-icon {
      cursor: pointer;
      font-size: 18px;
      vertical-align: middle;
    }

    .header-search-select {
      font-size: 18px;
      transition: width 0.2s;
      width: 0;
      overflow: hidden;
      background: transparent;
      border-radius: 0;
      display: inline-block;
      vertical-align: middle;

      /deep/ .el-input__inner {
        border-radius: 0;
        border: 0;
        padding-left: 0;
        padding-right: 0;
        box-shadow: none !important;
        border-bottom: 1px solid #d9d9d9;
        vertical-align: middle;
      }
    }

    &.show {
      .header-search-select {
        width: 210px;
        margin-left: 10px;
      }
    }
  }
</style>
