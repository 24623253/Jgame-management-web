import DialogPageMixin from 'mixins/dialogPageMixin'

export default {
  mixins: [DialogPageMixin],

  data() {
    return {
      pageKey: 'userInfo',
      submitApiKey: 'changePassword',
      confirmPassword: (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.editForm.target) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
    }
  },

  methods: {
    // 添加 / 修改
    handleDialogData() {
      if (this.isSearching) return
      this.isSearching = true
      this.errorForm = {}
      this.dialogTitle = '修改密码'
      this.dialogVisible = true
      this.isSearching = false
    }
  }
}
