import DialogPageMixin from 'mixins/dialogPageMixin'

export default {
  mixins: [DialogPageMixin],

  data() {
    return {
      pageKey: 'systemMenu'
    }
  },

  methods: {
    // 添加 / 修改
    handleDialogData(item) {
      if (this.isSearching) return
      this.isSearching = true
      this.errorForm = {}
      this.editForm = {
        authType: 0,
        type: 1,
        alwaysShow: false,
        hidden: false,
        noCache: true,
        affix: false,
        breadcrumb: true,
        sortNum: 0
      }
      this.dialogTitle = !item ? '添加菜单' : '修改菜单信息'
      this.isAdd = !item
      if (!item) {
        this.dialogVisible = true
        this.isSearching = false
        return
      }
      this.$api[this.pageKey].detail(item.id).then(res => {
        this.editForm = {
          ...res.data,
          redirect: res.data.redirect === 'noRedirect' ? '' : res.data.redirect
        }
        this.dialogVisible = true
      }).finally(() => this.isSearching = false)
    },

    // 表单验证
    $_submitVerify() {
      const { type, redirect } = this.editForm
      this.editForm.redirect = type === 1 && !redirect ? 'noRedirect' : this.editForm.redirect
    }
  }
}
