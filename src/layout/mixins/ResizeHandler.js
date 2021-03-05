/*
* 根据视窗大小判断登陆平台是 mobile / desktop
* */

import store from '@/store'

const { body } = document
const WIDTH = 992 // 参考 Bootstrap 的响应式布局

export default {
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.$_resizeHandler)
  },

  mounted() {
    const isMobile = this.$_isMobile()
    if (isMobile) {
      store.dispatch('app/toggleDevice', 'mobile')
      store.dispatch('app/closeSideBar', { withoutAnimation: true })
    }
  },

  methods: {
    $_resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.$_isMobile()
        store.dispatch('app/toggleDevice', isMobile ? 'mobile' : 'desktop')

        if (isMobile) {
          store.dispatch('app/closeSideBar', { withoutAnimation: true })
        }
      }
    },

    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    $_isMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < WIDTH
    }
  },

  watch: {
    $route() {
      if (this.device === 'mobile' && this.sidebar.opened) {
        store.dispath('app/closeSideBar', {
          withoutAnimation: false
        })
      }
    }
  }
}
