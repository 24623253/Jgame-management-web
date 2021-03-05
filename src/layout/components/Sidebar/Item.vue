<script>
export default {
  name: 'MenuItem',

  // https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6
  functional: true,

  props: {
    icon: {
      type: String,
      default: ''
    },

    title: {
      type: String,
      default: ''
    }
  },

  render(h, context) {
    const { icon, title } = context.props
    const vNodes = []

    if (icon) {
      if (icon.indexOf('el-icon') === 0) {
        vNodes.push(h('i', {
          class: {
            [icon]: true,
            'svg-icon': true
          }
        }))
      } else {
        vNodes.push(h('svg-icon', {
          attrs: {
            'icon-class': icon
          },
          class: {
            'svg-icon': true
          }
        }))
      }
    }

    if (title) {
      vNodes.push(h('span', {
        slot: 'title'
      }, title))
    }
    return vNodes
  }
}
</script>

