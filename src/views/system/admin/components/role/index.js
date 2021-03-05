import DialogPageMixin from 'mixins/dialogPageMixin'

export default {
  mixins: [DialogPageMixin],

  data() {
    return {
      pageKey: 'systemRole',
      treeList: [],
      checkedList: [],
      submitApiKey: 'setRole'
    }
  },

  methods: {
    // 添加 / 修改
    handleDialogData(item) {
      if (this.isSearching) return
      this.isSearching = true
      this.editForm = { accountId: item.id }
      this.dialogTitle = '修改角色权限'
      Promise.all([
        this.getTreeList(),
        this.getCheckedList(item.id)
      ]).then(() => {
        this.dialogVisible = true
      }).finally(() => this.isSearching = false)
    },

    // 获取树状列表
    getTreeList() {
      return new Promise((resolve, reject) => {
        this.$api[this.pageKey].list().then(res => {
          this.treeList = res.data
          resolve()
        }).catch(() => reject())
      })
    },

    // 获取选中权限
    getCheckedList(accountId) {
      return new Promise((resolve, reject) => {
        this.$api[this.pageKey].checkedList({ accountId }).then(res => {
          this.checkedList = res.data
          resolve()
        }).catch(() => reject())
      })
    },

    // 提交校验
    $_submitVerify() {
      this.editForm.roleIds = this.$refs.tree.getCheckedKeys()
    }
  }
}
