import DialogPageMixin from 'mixins/dialogPageMixin'

export default {
  mixins: [DialogPageMixin],

  data() {
    return {
      pageKey: 'systemRole'
    }
  },

  methods: {
    // 添加 / 修改
    handleDialogData(item) {
      if (this.isSearching) return
      this.isSearching = true
      this.errorForm = {}
      this.editForm = {}
      this.dialogTitle = !item ? '添加角色' : '修改角色信息'
      this.isAdd = !item
      if (!item) {
        this.dialogVisible = true
        this.isSearching = false
        return
      }
      this.$api[this.pageKey].detail(item.id).then(res => {
        this.editForm = res.data
        this.dialogVisible = true
      }).finally(() => this.isSearching = false)
    }
  }
}
