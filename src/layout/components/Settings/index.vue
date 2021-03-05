<template>
  <div class="drawer-container">
    <h3 class="drawer-title">
      系统布局配置
    </h3>

    <div class="drawer-item">
      <span>主题色</span>
      <theme-picker class="theme-picker" @change="themeChange" />
    </div>

    <div class="drawer-item">
      <span>开启标签栏</span>
      <el-switch v-model="tagsView" class="drawer-switch" />
    </div>

    <div class="drawer-item">
      <span>固定头部导航栏</span>
      <el-switch v-model="fixedHeader" class="drawer-switch" />
    </div>

    <div class="drawer-item">
      <span>侧边栏 Logo</span>
      <el-switch v-model="sidebarLogo" class="drawer-switch" />
    </div>
  </div>
</template>

<script>
import ThemePicker from 'components/ThemePicker'

export default {
  name: 'PanelSettings',

  components: { ThemePicker },

  computed: {
    tagsView: {
      get() {
        return this.$store.state.settings.tagsView
      },
      set(value) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'tagsView',
          value
        })
      }
    },

    fixedHeader: {
      get() {
        return this.$store.state.settings.fixedHeader
      },

      set(value) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'fixedHeader',
          value
        })
      }
    },

    sidebarLogo: {
      get() {
        return this.$store.state.settings.sidebarLogo
      },
      set(value) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'sidebarLogo',
          value
        })
      }
    }
  },

  methods: {
    themeChange(value) {
      this.$store.dispatch('settings/changeSetting', {
        key: 'theme',
        value
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .drawer-container {
    padding: 24px;
    font-size: 14px;
    line-height: 1.5;
    word-wrap: break-word;

    .drawer-title {
      margin-bottom: 12px;
      line-height: 22px;
      font-size: 14px;
      color: rgba(0, 0, 0, .85);
    }

    .drawer-item {
      color: rgba(0, 0, 0, .65);
      font-size: 14px;
      padding: 12px 0;

      .theme-picker {
        float: right;
        margin: -3px 8px 0 0;
        height: 26px;
      }

      .drawer-switch {
        float: right;
      }
    }
  }
</style>
