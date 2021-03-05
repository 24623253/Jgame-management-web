import DialogPageMixin from 'mixins/dialogPageMixin'

export default {
  mixins: [DialogPageMixin],

  data() {
    return {
      pageKey: 'systemClient',
      isLoading: false,
      roleList: [],
      userForm: {},
      columns: [
        {
          label: '客户端名称',
          prop: 'clientName',
          align: 'center'
        },
        {
          label: '客户端编码',
          prop: 'clientId',
          align: 'center'
        }
      ],
      submitApiKey: 'editClientRole'
    }
  },

  methods: {
    // 添加 / 修改
    handleDialogData(item) {
      if (this.isSearching) return
      this.isSearching = true
      this.editForm = {}
      this.dialogTitle = '修改客户端权限'
      Promise.all([this.getRoleList(), this.getUserForm(item.id)]).then(() => {
        this.dialogVisible = true
        const { accessClients } = this.userForm
        if (!accessClients || !accessClients.length) return
        const choseList = this.roleList.filter(item => accessClients.indexOf(item.clientId) >= 0)
        this.$nextTick(() => {
          this.$refs.tableRoleList._toggleSelection(choseList)
        })
      }).finally(() => this.isSearching = false)
    },

    // 获取客户端列表
    getRoleList() {
      return new Promise((resolve, reject) => {
        this.$api[this.pageKey].allList().then(res => {
          this.roleList = res.data
          resolve()
        }).catch(() => reject())
      })
    },

    // 获取用户信息
    getUserForm(id) {
      return new Promise((resolve, reject) => {
        this.$api.systemAdmin.detail(id).then(res => {
          this.userForm = res.data
          resolve()
        }).catch(() => reject())
      })
    },

    // 提交
    $_submitVerify() {
      const accessClients = this.$refs.tableRoleList._getSelection().map(item => item.clientId)
      this.editForm = {
        id: this.userForm.id,
        accessClients
      }
    }
  }
}
