import DialogPageMixin from 'mixins/dialogPageMixin'

export default {
  mixins: [DialogPageMixin],

  data() {
    return {
      pageKey: 'systemClient',
      errors: {}
    }
  },

  methods: {
    // 添加 / 修改
    handleDialogData(item) {
      if (this.isSearching) return
      this.isSearching = true
      this.errorForm = {}
      this.editForm = {
        clientSecret: '',
        scope: [],
        authorizedGrantTypes: [],
        autoapprove: 'true'
      }
      this.dialogTitle = !item ? '添加客户端' : '修改客户端信息'
      this.isAdd = !item
      if (!item) {
        this.dialogVisible = true
        this.isSearching = false
        return
      }
      this.$api[this.pageKey].detail(item.clientId).then(res => {
        this.editForm = res.data
        this.dialogVisible = true
      }).finally(() => this.isSearching = false)
    },

    // 生成密码
    generatePassword() {
      this.editForm.clientSecret = Math.random().toString(36).substr(2)
    }
  }
}
