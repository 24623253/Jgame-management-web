<template>
  <div :class="classObj" class="app-wrapper">
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <sidebar class="sidebar-container" />
    <div :class="{hasTagsView: needTagsView }" class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <nav-bar />
        <tags-view v-if="needTagsView" />
      </div>

      <app-main />

      <right-panel>
        <settings />
      </right-panel>
    </div>
  </div>
</template>

<script>
import ResizeMixin from './mixins/ResizeHandler'
import { mapState } from 'vuex'
import { Sidebar, NavBar, TagsView, AppMain, Settings } from './components'
import RightPanel from 'components/RightPanel'

export default {
  name: 'Layout',

  components: { Sidebar, NavBar, TagsView, AppMain, Settings, RightPanel },

  mixins: [ResizeMixin],

  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
    }),

    classObj() {
      return {
        mobile: this.device === 'mobile',
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation
      }
    }
  },

  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSidebar', { withoutAnimation: false })
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/styles/mixin";
  @import "~@/styles/variables";

  .app-wrapper {
    @include clearfix;
    position: relative;
    width: 100%;
    height: 100%;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }

  .drawer-bg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.3;
    z-index: 1000;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .mobile .fixed-header {
    width: 100%;
  }

</style>
