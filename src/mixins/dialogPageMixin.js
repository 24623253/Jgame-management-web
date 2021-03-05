/*
  模态框/抽屉 混入方法
  用于 页面 公共方法 与 数据 封装
*/
export default {
  data() {
    return {
      isSearching: false,
      dialogTitle: '',
      dialogVisible: false,
      editForm: {},
      submitLoading: false,
      isAdd: false,
      errorForm: {},
      submitApiKey: ''
    }
  },

  methods: {
    // 提交[form表单提交]
    $confirmData() {
      this.$refs.editForm.validate(valid => {
        if (valid) {
          this.$__handleConfirm()
        } else {
          this.$message('信息未填写完整')
          return false
        }
      })
    },

    // 提交[无表单提交]
    $confirmNoForm() {
      this.$__handleConfirm()
    },

    // tips: 公共部分代码
    $__handleConfirm() {
      const msg = this.$_submitVerify()
      if (msg) {
        this.$message.info(msg)
        return
      }
      this.submitLoading = true
      this.$api[this.pageKey][this.submitApiKey ? this.submitApiKey : (this.isAdd ? 'add' : 'edit')](this.editForm).then(() => {
        this.$notify({ title: '提示', message: '操作成功!', type: 'success' })
        this.dialogVisible = false
        this.$emit('submitOk')
      }).finally(() => this.submitLoading = false).catch(error => {
        if (error.data) this.errorForm = error.data
      })
    },

    // 表单验证
    $_submitVerify() {
      /*
        *  可执行一些表单提交前的操作
        *  返回 true 时继续提交操作
        *  返回 '错误提醒文本' 时中断提交操作
      */
    }
  }
}
