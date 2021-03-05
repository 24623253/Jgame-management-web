/*
 * 警告弹窗，用于表单页取消跳转页面
 * that 为使用组件页面的 this
 * isNoTips 是否有返回提示
 */
import { MessageBox } from 'element-ui'

export default (url, that, isNoTips) => {
  if (isNoTips) {
    that.$store.dispatch('tagsView/delView', that.$route).then(() => that.$router.push(url))
    return
  }
  MessageBox.confirm('所做操作将不被保存,确定要取消？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    that.$store.dispatch('tagsView/delView', that.$route).then(() => that.$router.push(url))
  })
}
