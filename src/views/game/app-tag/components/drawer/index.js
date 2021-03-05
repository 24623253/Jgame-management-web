import DialogPageMixin from 'mixins/dialogPageMixin'

export default {
  mixins: [DialogPageMixin],

  data() {
    return {
      pageKey: 'appTag',
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
        deptId: ''
      }
      this.dialogTitle = !item ? '添加用户' : '修改用户信息'
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
