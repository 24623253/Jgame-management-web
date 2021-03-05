import DialogPageMixin from 'mixins/dialogPageMixin'

export default {
  mixins: [DialogPageMixin],

  data() {
    return {
      pageKey: 'appType',
      departmentList: []
    }
  },

  methods: {
    // 添加 / 修改
    handleDialogData(item) {
      if (this.isSearching) return
      this.isSearching = true
      this.errorForm = {}
      this.editForm = {
      }
      this.dialogTitle = !item ? '添加' : '修改'
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

    // 获取 部门列表
    // getDepartmentList() {
    //   this.departmentList = []
    //   this.$api[this.pageKey].getAllDepartment().then(res => {
    //     this.departmentList = res.data
    //   })
    // }
  }
}
