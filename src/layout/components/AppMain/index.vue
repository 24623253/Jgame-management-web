<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>

    <footer>
      <div>当前版本：v{{ version }}</div>
      <div>更新时间：{{ startTime | formatTime }}</div>
    </footer>
  </section>
</template>

<script>
import Version from '@/../package'

export default {
  name: 'AppMain',

  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },

    key() {
      return this.$route.path
    },

    version() {
      return Version.version
    },

    startTime() {
      return process.env.STARTTIME
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-main {
    position: relative;
    width: 100%;
    /* navBar = 50px */
    min-height: calc(100vh - 50px);
    overflow: hidden;
  }

  .fixed-header + .app-main {
    padding-top: 50px;
  }

  .hasTagsView {
    .app-main {
      /* 84 = navbar + tags-view = 50 + 34 */
      min-height: calc(100vh - 84px);
    }

    .fixed-header + .app-main {
      padding-top: 84px;
    }
  }

  footer {
    position: fixed;
    bottom: 10px;
    right: 10px;
    font-size: 12px;
    color: #666;

    div {
      &:first-child{
        margin-bottom: 5px;
      }
    }
  }
</style>

<style lang="scss">
  // fix css style bug in open el-dialog
  .el-popup-parent--hidden {
    .fixed-header {
      padding-right: 15px;
    }
  }
</style>
