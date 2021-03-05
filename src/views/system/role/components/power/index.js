import DialogPageMixin from 'mixins/dialogPageMixin'

export default {
  mixins: [DialogPageMixin],

  data() {
    return {
      pageKey: 'systemPower',
      treeList: [],
      checkedList: [],
      submitApiKey: 'setPower'
    }
  },

  methods: {
    // 添加 / 修改
    handleDialogData(item) {
      if (this.isSearching) return
      this.isSearching = true
      this.editForm = { id: item.id }
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
        this.$api[this.pageKey].treeList().then(res => {
          this.treeList = res.data
          resolve()
        }).catch(() => reject())
      })
    },

    // 获取选中权限
    getCheckedList(id) {
      return new Promise((resolve, reject) => {
        this.$api[this.pageKey].checkedList(id).then(res => {
          this.checkedList = res.data
          resolve()
        }).catch(() => reject())
      })
    },

    // 提交校验
    $_submitVerify() {
      this.editForm.params = this.$refs.tree.getCheckedKeys()
    }
  }
}
