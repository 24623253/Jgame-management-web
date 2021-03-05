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
      pageKey: 'systemOrganization'
    }
  },

  methods: {
    // 添加 / 修改
    handleDialogData(item) {
      if (this.isSearching) return
      this.isSearching = true
      this.errorForm = {}
      this.editForm = {}
      this.dialogTitle = !item ? '添加机构' : '修改机构信息'
      this.isAdd = !item
      if (!item) {
        this.dialogVisible = true
        this.isSearching = false
        return
      }
      this.$api[this.pageKey].detail(item.id).then(res => {
        const { addrProvice, addrCity, addrArea, ...data } = res.data
        this.editForm = {
          ...data,
          areaArr: [addrProvice, addrCity, addrArea]
        }
        this.dialogVisible = true
      }).finally(() => this.isSearching = false)
    },

    // 改变地址
    _handleEditAddress(value) {
      this.editForm = {
        ...this.editForm,
        addrProvice: value[0],
        addrCity: value[1],
        addrArea: value[2]
      }
    }
  }
}
