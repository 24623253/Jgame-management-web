/*
  列表表格 混入方法
  用于 页面 公共方法 与 数据 封装
*/
import { MessageBox, Message, Notification } from 'element-ui'

export default {
  data() {
    return {
      isLoading: false,
      isNoPage: false, // 是否是无分页接口
      listApiKey: '', // list ApiKey (tips:用于处理请求ApiKey不为 list 情况)
      pageData: {
        page: 1,
        total: 0,
        size: 10,
        start: 1
      },
      paramsForm: {},
      tableData: []
    }
  },

  methods: {
    // 分页
    $changePage(pageData) {
      this.pageData = pageData
      this.$getData()
    },

    // 获取页面分页数据
    /* tips: 特殊情况，特殊情况重新定义 */
    $getData(search) {
      if (this.isLoading) return
      this.isLoading = true
      if (search) this.pageData.page = 1
      const params = { ...this.pageData, ...this.paramsForm }
      return new Promise((resolve, reject) => {
        this.$api[this.pageKey][this.listApiKey ? this.listApiKey : 'list'](params).then(res => {
          if (this.isNoPage) {
            this.tableData = res.data
            resolve()
            return
          }
          this.tableData = res.data.records
          this.pageData = {
            page: res.data.current,
            total: res.data.total,
            size: this.pageData.size,
            start: (this.pageData.page - 1) * this.pageData.size + 1
          }
          resolve()
          // eslint-disable-next-line no-return-assign
        }).catch((e) => reject(e)).finally(() => this.isLoading = false)
      })
    },

    // 添加 / 修改
    $handleData(item, type = 'modalDialog') {
      this.$refs[type].handleDialogData(item)
    },

    // 删除 / 确认操作
    $handleConfirm(id, msg, apiKey = '_delete') {
      MessageBox.confirm(msg || "正在执行'删除'操作, 是否继续?", '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$api[this.pageKey][apiKey](id).then(() => {
          Notification({ title: '提示', type: 'success', message: '操作成功' })
          this.$getData()
        })
      }).catch(() => {
        Message('已取消操作')
      })
    },

    // 锁定 / 解锁 状态
    $handleStatus(id, status, msg = '用户') {
      MessageBox.confirm(`该操作将${ status ? '解锁' : '锁定' }该${ msg }, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$api[this.pageKey].status(id,
          1 - status).then(() => {
          Notification({ title: '提示', type: 'success', message: '操作成功' })
          this.$getData()
        })
      }).catch(() => {
        Message('已取消操作')
      })
    },

    // 重置
    $searchReset() {
      this.paramsForm = {}
      this.$getData()
    }
  }
}
