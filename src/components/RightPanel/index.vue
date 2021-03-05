<template>
  <div
    ref="rightPanel"
    :class="{'show':show}"
    class="rightPanel-container"
  >
    <div class="rightPanel-background" @click="show = !show" />
    <div class="rightPanel">
      <div
        class="handle-button"
        :style="{top: buttonTop + 'px',
                 background: theme}"
        @click="show = !show"
      >
        <i :class="show?'el-icon-close':'el-icon-setting'" />
      </div>
      <div class="rightPanel-items">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { addClass, removeClass } from 'utils'

export default {
  name: 'RightPanel',

  props: {
    buttonTop: {
      default: 250,
      type: Number
    },

    clickNotClose: {
      default: false,
      type: Boolean
    }
  },

  data() {
    return {
      show: false
    }
  },

  computed: {
    theme() {
      return this.$store.state.settings.theme
    }
  },

  watch: {
    show(value) {
      if (value && !this.clickNotClose) {
        this.addEventClick()
      }
      if (value) {
        addClass(document.body, 'showRightPanel')
      } else {
        removeClass(document.body, 'showRightPanel')
      }
    }
  },

  mounted() {
    this.insertToBody()
  },

  beforeDestroy() {
    const elx = this.$refs.rightPanel
    elx.remove()
  },

  methods: {
    insertToBody() {
      const elx = this.$refs.rightPanel
      const body = document.querySelector('body')
      body.insertBefore(elx, body.firstChild) // insertBefore() 方法可在已有的子节点前插入一个新的子节点
    },

    // 增加点击监听事件
    addEventClick() {
      window.addEventListener('click', this.closeSidebar)
    },

    closeSidebar(event) {
      const parent = event.target.closest('.rightPanel')
      if (!parent) {
        this.isShow = false
        window.removeEventListener('click', this.closeSidebar)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .rightPanel-background {
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity .3s cubic-bezier(.7, .3, .1, 1);
    background: rgba(0, 0, 0, .2);
    z-index: -1;
  }

  .rightPanel {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    max-width: 260px;
    height: 100vh;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, .05);
    transition: all .25s cubic-bezier(.7, .3, .1, 1);
    transform: translate(100%);
    background: #fff;
    z-index: 10000;

    .handle-button {
      position: absolute;
      left: -48px;
      width: 48px;
      height: 48px;
      line-height: 48px;
      text-align: center;
      font-size: 24px;
      border-radius: 6px 0 0 6px;
      z-index: 0;
      pointer-events: auto;
      cursor: pointer;
      color: #fff;
    }
  }

  .show {
    transition: all .3s cubic-bezier(.7, .3, .1, 1);

    .rightPanel-background {
      z-index: 10000;
      opacity: 1;
      width: 100%;
      height: 100%;
    }

    .rightPanel {
      transform: translate(0);
    }
  }
</style>

<style>
  .showRightPanel {
    position: relative;
    overflow: hidden;
    width: calc(100% - 15px);
  }
</style>
