<template>
  <div>
    <svg-icon
      :icon-class="isFullscreen?'exit-fullscreen':'fullscreen'"
      @click="click"
    />
  </div>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: 'ScreenFull',

  data() {
    return {
      isFullscreen: false
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },

  methods: {
    click() {
      if (!screenfull.isEnabled) {
        this.$notify({
          message: '您的浏览器无法执行该操作，请更换浏览器',
          type: 'error',
          title: '提示'
        })
        return false
      }
      screenfull.toggle()
    },

    change() {
      this.isFullscreen = screenfull.isFullscreen
    },

    init() {
      if (screenfull.isEnabled) {
        screenfull.on('change', this.change)
      }
    },

    destroy() {
      if (screenfull.isEnabled) {
        screenfull.off('change', this.change)
      }
    }
  }
}
</script>

<style scoped>
  .screenfull-svg {
    display: inline-block;
    cursor: pointer;
    fill: #5a5e66;;
    width: 20px;
    height: 20px;
    vertical-align: 10px;
  }
</style>
