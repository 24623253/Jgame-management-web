<!--todo 后续拓展文件，不起作用，预留-->
<script>
export default {
  name: 'TableListItem',

  functional: true,

  props: {
    typeForm: {
      type: Object,
      required: true
    }
  },

  render(h, context) {
    // const { data, props, parent } = context
    // const { typeForm } = props

    // if (context.props.typeForm.scopedSlots) {
    // console.log(context);
    // }

    // console.log(data.key);
    // console.log(parent.data);
    //
    return (h('el-table-column', {
      attrs: {
        // ...typeForm
      },
      scopedSlots: (scope) => {
        console.log(scope)
      }
    }))
  }
}

// context.scopedSlots.default
// context.scopedSlots.default({
//   title: '111'
// })

</script>
