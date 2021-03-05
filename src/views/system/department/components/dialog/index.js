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
      pageKey: 'systemDepartment',
      organList: []
    }
  },

  methods: {
    // 添加 / 修改
    handleDialogData(item) {
      if (this.isSearching) return
      this.isSearching = true
      this.errorForm = {}
      this.editForm = { organId: '' }
      this.dialogTitle = !item ? '添加部门' : '修改部门信息'
      this.isAdd = !item
      if (!item) {
        this.dialogVisible = true
        this.isSearching = false
        return
      }
      this.$api[this.pageKey].detail(item.id).then(res => {
        this.editForm = res.data
        this._handleEditCity(res.data.city, true)
        this.dialogVisible = true
      }).finally(() => this.isSearching = false)
    },

    // 修改所在城市
    _handleEditCity(value, isDetail) {
      this.organList = []
      if (this.editForm.organId && !isDetail) this.editForm.organId = ''
      this.$api.commonData.cityToSearchOrgan(value).then(res => {
        this.organList = res.data
      })
    }
  }
}
