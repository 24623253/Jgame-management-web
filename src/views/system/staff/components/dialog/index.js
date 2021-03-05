import DialogPageMixin from 'mixins/dialogPageMixin'

export default {
  mixins: [DialogPageMixin],

  props: {
    cityList: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      pageKey: 'systemStaff',
      organList: [],
      deptList: [],
      staffList: []
    }
  },

  methods: {
    // 添加 / 修改
    handleDialogData(item) {
      if (this.isSearching) return
      this.isSearching = true
      this.errorForm = {}
      this.editForm = {
        organId: '',
        deptId: ''
      }
      this.dialogTitle = !item ? '添加员工' : '修改员工信息'
      this.isAdd = !item
      if (!item) {
        this.dialogVisible = true
        this.isSearching = false
        return
      }
      this.$api[this.pageKey].detail(item.id).then(res => {
        this.editForm = res.data
        this._handleEditCity(res.data.city, true)
        this._handleEditOrgan(res.data.organId, true)
        this._handleEditDept(res.data.deptId, true)
        this.dialogVisible = true
      }).finally(() => this.isSearching = false)
    },

    // 修改所在城市
    _handleEditCity(value, isDetail) {
      this.organList = this.deptList = this.staffList = []
      if (this.editForm.organId && !isDetail) this.editForm.organId = ''
      if (this.editForm.deptId && !isDetail) this.editForm.deptId = ''
      if (this.editForm.reportDeptId && !isDetail) this.editForm.reportDeptId = ''
      if (this.editForm.reportPersonId && !isDetail) this.editForm.reportPersonId = ''
      this.$api.commonData.cityToSearchOrgan(value).then(res => {
        this.organList = res.data
      })
    },

    // 修改所属机构
    _handleEditOrgan(value, isDetail) {
      this.deptList = this.staffList = []
      if (this.editForm.deptId && !isDetail) this.editForm.deptId = ''
      if (this.editForm.reportDeptId && !isDetail) this.editForm.reportDeptId = ''
      if (this.editForm.reportPersonId && !isDetail) this.editForm.reportPersonId = ''
      this.$api.systemOrganization.organToSearchDept(value).then(res => {
        this.deptList = res.data
      })
    },

    // 修改所属部门 / 查询部门下员工列表
    _handleEditDept(value, isDetail) {
      this.staffList = []
      if (this.editForm.reportPersonId && !isDetail) this.editForm.reportPersonId = ''
      if (!value) return
      this.$api.systemDepartment.deptToSearchStaff(value).then(res => {
        this.staffList = res.data
      })
    }
  }
}
